// Show tap legend on mobile
if (window.innerWidth < 768) {
  const mobLegend = document.getElementById('mob-legend');
  if (mobLegend) mobLegend.style.display = 'flex';
}

// Toggle card expand on click (mobile)
document.addEventListener('click', function (e) {
  const card = e.target.closest('.card.has-desc');
  if (!card) return;
  card.classList.toggle('expanded');
});

function app() {
  return {
    activeDay: 0,
    clock: '--:--:--',
    dateStr: '',
    linePos: -1,
    showMics: false,
    days: [],

    init() {
      const p = new URLSearchParams(window.location.search);
      this.showMics = p.get('mics') === '1' || p.get('mics') === 'true';

      // Load schedule data from schedule.js (global SCHEDULE_DAYS)
      if (Array.isArray(window.SCHEDULE_DAYS)) {
        this.days = window.SCHEDULE_DAYS;
      } else {
        console.error('SCHEDULE_DAYS is not defined or not an array');
        this.days = [];
      }

      const now = new Date();
      if (
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 11
      )
        this.activeDay = 0;
      else if (
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 12
      )
        this.activeDay = 1;
      else if (
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 13
      )
        this.activeDay = 2;
      else if (
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 14
      )
        this.activeDay = 3;

      this.tick();
      setInterval(() => this.tick(), 1000);
    },

    tick() {
      const now = new Date();
      const p = (n) => String(n).padStart(2, '0');
      this.clock = `${p(now.getHours())}:${p(now.getMinutes())}:${p(now.getSeconds())}`;
      this.dateStr = now.toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
      this.updateLine();
    },

    updateLine() {
      const day = this.days[this.activeDay];
      if (!day || !this.isToday(day)) {
        this.linePos = -1;
        return;
      }

      const now = new Date();
      const nowMins = now.getHours() * 60 + now.getMinutes();

      const timelines = document.querySelectorAll('.timeline');
      const timeline = timelines[this.activeDay];
      if (!timeline || !timeline.offsetHeight) {
        this.linePos = -1;
        return;
      }

      const timelineTop = timeline.getBoundingClientRect().top + window.scrollY;
      const timelineH = timeline.offsetHeight;
      if (!timelineH) {
        this.linePos = -1;
        return;
      }

      const rows = timeline.querySelectorAll('.srow');
      const sessions = day.sessions || [];
      if (!rows.length) {
        this.linePos = -1;
        return;
      }

      const toMins = (str) => {
        const [h, m] = str.trim().split(':').map(Number);
        return h * 60 + m;
      };

      let prevRowBottom = timelineTop;
      let nextRowTop = timelineTop + timelineH;
      let prevMins = toMins('09:00');
      let nextMins = toMins('18:00');

      for (let i = 0; i < rows.length; i++) {
        const sess = sessions[i];
        if (!sess || !sess.time) continue;
        const [startStr, endStr] = sess.time.split(' - ');
        const sessStart = startStr ? toMins(startStr) : prevMins;
        const sessEnd = endStr ? toMins(endStr) : sessStart;
        const rowRect = rows[i].getBoundingClientRect();
        const rowTop = rowRect.top + window.scrollY - timelineTop;
        const rowBottom = rowTop + rowRect.height;

        if (nowMins >= sessStart && nowMins < sessEnd) {
          const fraction = (nowMins - sessStart) / (sessEnd - sessStart || 1);
          const posY = rowTop + fraction * rowRect.height;
          this.linePos = (posY / timelineH) * 100;
          return;
        }

        if (sessEnd <= nowMins) {
          prevRowBottom = rowTop + rowRect.height;
          prevMins = sessEnd;
        }
        if (sessStart > nowMins && nextMins > sessStart) {
          nextRowTop = rowTop;
          nextMins = sessStart;
        }
      }

      if (nextMins > prevMins) {
        const fraction = (nowMins - prevMins) / (nextMins - prevMins || 1);
        const posY = prevRowBottom + fraction * (nextRowTop - prevRowBottom);
        this.linePos = (posY / timelineH) * 100;
      } else {
        this.linePos = -1;
      }
    },

    isToday(day) {
      const now = new Date();
      if (
        day.day === 'Wednesday' &&
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 11
      )
        return true;
      if (
        day.day === 'Thursday' &&
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 12
      )
        return true;
      if (
        day.day === 'Friday' &&
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 13
      )
        return true;
      if (
        day.day === 'Saturday' &&
        now.getFullYear() === 2026 &&
        now.getMonth() === 2 &&
        now.getDate() === 14
      )
        return true;
      return false;
    },

    activeRooms(day) {
      const s = new Set();
      (day.sessions || []).forEach((sess) => {
        if (sess.rooms) {
          Object.keys(sess.rooms).forEach((r) => {
            if (!sess.rooms[r]._skip) s.add(r);
          });
        }
        if (sess._span_all && sess.data && sess.data.rooms_combined) {
          sess.data.rooms_combined.forEach((r) => s.add(r));
        }
      });
      // Wed–Fri always show Room 1–4
      if (['Wednesday', 'Thursday', 'Friday'].includes(day.day)) {
        ['room_1', 'room_2', 'room_3', 'room_4'].forEach((r) => s.add(r));
      }
      return [...s].sort();
    },

    roomNum(r) {
      return r.replace('room_', '').replace('col_', '');
    },

    fmtRoom(r) {
      const labels = {
        room_1: 'Room 1',
        room_2: 'Room 2',
        room_3: 'Room 3',
        room_4: 'Room 4',
        col_inside: 'Inside – Apollo Hotel',
        col_outside: 'Outside – Apollo Hotel',
        col_park: 'Outside – Popley Community Park',
        col_gala: 'Gala Show – Haymarket Theatre',
      };
      return labels[r] || r.replace(/_/g, ' ').toUpperCase();
    },

    roomAccent(r) {
      return (
        {
          room_1: 'card-r1',
          room_2: 'card-r2',
          room_3: 'card-r3',
          room_4: 'card-r4',
          col_inside: 'card-r1',
          col_outside: 'card-r2',
          col_park: 'card-r3',
          col_gala: 'card-r4',
        }[r] || ''
      );
    },

    getCellsStyle(sess, day) {
      const cols = this.activeRooms(day).length;
      return `grid-template-columns:repeat(${cols},minmax(var(--room-min, 160px),1fr))`;
    },

    spannedColStyle(sess, day) {
      let spanCount;
      if (sess._span_all && sess.data?.rooms_combined) {
        spanCount = sess.data.rooms_combined.length;
      } else if (sess.rooms) {
        const roomWithSpan = Object.values(sess.rooms).find(
          (r) => r && r.rooms_combined && r.rooms_combined.length > 0,
        );
        spanCount = roomWithSpan ? roomWithSpan.rooms_combined.length : 3;
      } else {
        spanCount = 3;
      }
      return `grid-column: 1 / span ${spanCount}`;
    },

    isSpanned(sess) {
      if (sess._span_all) return true;
      if (!sess.rooms) return false;
      return Object.values(sess.rooms).some(
        (d) => d && d.rooms_combined && d.rooms_combined.length > 0,
      );
    },

    micHtml(data) {
      if (!this.showMics || !data.microphones) return '';
      const dots = Array(data.microphones)
        .fill('<span class="mic-dot"></span>')
        .join('');
      return `<div class="mic-badge">${dots}<span class="mic-badge-text">${data.microphones} mic${data.microphones > 1 ? 's' : ''}</span></div>`;
    },

    buildCard(data, roomClass, spanTag) {
      const hasDesc = data.description && data.description.length > 0;
      const descHtml = hasDesc
        ? `<div class="card-desc">${data.description}</div>
           <div class="card-desc-toggle"><span class="toggle-icon">▾</span>&nbsp;tap for details</div>`
        : '';
      return `
        <div class="card ${roomClass}${hasDesc ? ' has-desc' : ''}" onclick="">
          ${spanTag ? `<div class="card-span-tag">↔ ${spanTag}</div>` : ''}
          ${data.type ? `<div class="card-type">${data.type}</div>` : ''}
          <div class="card-title">${data.title}</div>
          ${data.presenter ? `<div class="card-presenter">${data.presenter}</div>` : ''}
          ${descHtml}
          ${this.micHtml(data)}
        </div>`;
    },

    renderSpannedCard(sess) {
      if (sess._span_all) {
        const d = sess.data;
        const roomLabel = d.rooms_combined
          ? d.rooms_combined.map((r) => this.fmtRoom(r)).join(' + ')
          : '';
        return this.buildCard(d, 'card-r1', roomLabel);
      }
      let data = null;
      let primaryRoom = null;
      for (const [r, d] of Object.entries(sess.rooms || {})) {
        if (d && d.title && d.rooms_combined) {
          data = d;
          primaryRoom = r;
          break;
        }
      }
      if (!data) return '';
      const roomLabel = data.rooms_combined
        .map((r) => this.fmtRoom(r))
        .join(' + ');
      return this.buildCard(data, this.roomAccent(primaryRoom), roomLabel);
    },

    renderRoomCell(sess, room) {
      if (!sess.rooms) return `<div class="card-empty"></div>`;
      const data = sess.rooms[room];
      if (!data || data._skip) return `<div class="card-empty"></div>`;
      if (!data.title) return `<div class="card-empty"></div>`;
      return this.buildCard(data, this.roomAccent(room), '');
    },
  };
}
