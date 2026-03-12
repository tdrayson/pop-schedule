const SCHEDULE_DAYS = [
  {
    day: 'Wednesday',
    date: '11th March 2026',
    sessions: [
      // Registration spans all rooms
      {
        time: '09:00 - 09:45',
        _span_all: true,
        data: {
          title: 'POP! – Convention Registration & Info',
          type: 'Registration',
          description:
            'Collect your badge, programme, and information pack from the Hotel Foyer. The team will be on hand to welcome you and answer any questions.',
          presenter: '',
          rooms_combined: ['room_1', 'room_2', 'room_3'],
          microphones: 0,
        },
      },
      {
        time: '10:00 - 10:15',
        rooms: {
          room_1: {
            title: 'Welcome to POP! – The International Bubble Convention',
            type: 'Short Talk',
            description:
              'Join us as we open POP! and welcome you into a space of creativity, connection, and shared discovery.',
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 3,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
      {
        time: '10:15 - 10:45',
        rooms: {
          room_1: {
            title: 'Alexander Kross – UV Bubble Demonstration',
            presenter: 'Alexander Kross',
            type: 'Performance / Demonstration',
            description:
              'A short performance and demonstration exploring the visual magic of UV bubbles, with insights into working and performing with ultraviolet bubble effects.',
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
      {
        time: '11:00 - 11:45',
        rooms: {
          room_1: {
            title: 'Bubble Magic from 1971 till Now',
            presenter: 'Tom Noddy',
            type: 'Lecture / Talk with discussion',
            description:
              'A potted history of the legendary Tom Noddy along with some other fascinating insights into the world of soap bubbles.',
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 2,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
      {
        time: '12:15 - 13:00',
        rooms: {
          room_1: {
            title: 'Costume Capers (Costume Design)',
            presenter: 'Cj The Bubble Girl',
            type: 'Lecture / Talk',
            description: 'Tips, Tricks & Hacks for great, affordable costumes.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Bubble Chemistry Lab: R.A.D.',
            presenter: 'Antoni Szczeniowski & Karen Gould Stark',
            type: 'Demonstration / Discussion',
            description:
              "A science-focused session exploring R.A.D., Rick's Alternative Detergent — a simple, DIY, and safer alternative to commercial detergents created by Rick Findley.",
            microphones: 2,
          },
        },
      },
      { time: '13:00 - 14:15', _lunch: true, label: 'Lunch Break' },
      {
        time: '14:15 - 15:00',
        rooms: {
          room_1: {
            title: "Bubble Shows for Children's Parties",
            presenter: 'Richard Corcoran',
            type: 'Lecture / Talk',
            description:
              "Practical guidance on creating engaging bubble shows for children's parties, including simple setups, interaction, and why parents choose bubbles over other entertainment types.",
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Outdoor Bubbling Equipment',
            presenter: 'Ian Russell & Tony Gardner',
            type: 'Talk with Discussion',
            description:
              'A practical demonstration of some of the most useful gear that can be loaded into a small road vehicle for a typical outdoor bubbling event.',
            microphones: 2,
          },
        },
      },
      {
        time: '15:15 - 16:00',
        rooms: {
          room_1: {
            title: 'Software for Entertainers',
            presenter: 'Gordon Drayson',
            type: 'Lecture / Talk',
            description:
              'Discover powerful software tools that streamline bookings, reviews, and client management, helping you market smarter, respond faster, and simplify your business systems.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Working with the Bubble Wall – Visual Impact Masterclass',
            presenter: 'Meadow Perry',
            type: 'Masterclass / Workshop',
            description:
              'Discover striking bubble wall effects in this hands-on session, with demonstrations, guided practice, and tips to build your own visual moments.',
            microphones: 1,
          },
        },
      },
      {
        time: '16:15 - 17:00',
        rooms: {
          room_1: {
            title: 'BUBBLE E MOTION',
            presenter: 'Marco Bellomo',
            type: 'Workshop',
            description:
              "In this workshop we'll discover how a story needs an active body to be told. Soap bubbles become a pretext — an analogy for storytelling. Imagination, body, and voice become rhythm and music to create soap stories.",
            microphones: 2,
          },
          room_2: { _skip: true },
          room_3: {
            title: "Bubbles & Magic – Adding 'Illusion' to Bubble Performance",
            presenter: 'River Barry & Eran KB',
            type: 'Lecture',
            description:
              'Learn how using magic tricks, along with the principles of magic and illusion, can be woven into bubble work to elevate routines and create moments of mystery, meaning, and wonder.',
            microphones: 2,
          },
        },
      },
      {
        time: '17:15 - 18:00',
        rooms: {
          room_1: {
            title: 'Helium Bubbles – Lifting Bubble Performance',
            presenter: 'Martin Cattani Dorelo',
            type: 'Masterclass / Workshop',
            description:
              'A hands-on masterclass exploring how helium can be used to create visually striking bubble effects that truly wow audiences.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Bubble Chemistry Lab: HEC, PEO & Guar Powders',
            presenter: 'Antoni Szczeniowski & Karen Gould Stark',
            type: 'Demonstration / Discussion',
            description:
              'A science-focused session exploring how HEC, PEO & Guar powders affect bubble mix — learning their properties, strengths, limitations, and how to mix them effectively.',
            microphones: 2,
          },
          room_4: {
            title: 'Magic of Bubbles – History & Physics',
            presenter: 'Dr. Bob King',
            type: 'Lecture / Talk',
            description:
              'Learn how the history and physics of bubbles can be used creatively to enrich bubble cabaret acts and magical performances.',
            microphones: 1,
          },
        },
      },
    ],
  },
  {
    day: 'Thursday',
    date: '12th March 2026',
    sessions: [
      {
        time: '09:00 - 09:45',
        _status: true,
        label: 'Set Up & Tech for Lecturers',
      },
      {
        time: '10:00 - 10:45',
        rooms: {
          room_1: {
            title: 'Bubble Props Review – The Good, The Bad & The Brilliant',
            presenter: 'Eran KB',
            type: 'Talk / Demonstration',
            description:
              'Fast-paced, hands-on reviews of bubble props and equipment. Discover what truly works, what to avoid, and what could expand your creative options.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title:
              'How to Leverage Instagram (and other social media) for Your Business',
            presenter: 'Meadow Perry',
            type: 'Lecture / Discussion',
            description:
              'Learn practical ways to use social media strategically to grow your audience, strengthen your brand, and turn online visibility into real-world opportunities.',
            microphones: 1,
          },
          room_4: {
            title: 'Performing Outside the Bubble',
            presenter: 'Dan Thorn',
            type: 'Workshop',
            description:
              'Discover ways to prepare yourself for performance, build confidence, and deepen the performer–audience relationship that is at the heart of every bubble performance.',
            microphones: 1,
          },
        },
      },
      {
        time: '11:00 - 11:45',
        rooms: {
          room_1: {
            title: 'How to Sell Your Bubble Show?',
            presenter: 'Chloe Brinchault',
            type: 'Lecture / Talk',
            description:
              'Learn how to structure offers, build confidence, set pricing, and define technical requirements. Use marketing tools — website, email, print, social — and communicate professionally to convert enquiries into bookings.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Outdoor Bubbling Skills',
            presenter: 'Ian Russell & Tony Gardner',
            type: 'Lecture / Discussion',
            description:
              'How to engage different audiences using different equipment at different kinds of events in completely different weather conditions.',
            microphones: 1,
          },
          room_4: {
            title: 'Crocheting Your Tools',
            presenter: 'Bubbles LaFae & Sarah Campbell',
            type: 'Masterclass',
            description:
              'Discover how to crochet around rings to make custom bubble tools, exploring a creative alternative to traditional net-making.',
            microphones: 2,
          },
        },
      },
      {
        time: '12:15 - 13:00',
        rooms: {
          room_1: {
            title: 'Dry Ice Bubbles - AOIBA Members Only',
            presenter: 'Cj The Bubble Girl',
            type: 'Workshop',
            description:
              'Discover how to create dramatic dry ice bubbles, exploring misty effects, visual impact, and safe hands-on techniques.',
            availability: 'AOIBA Members only',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: "Bubblers' Skill Share – Guided Workshop Session",
            presenter: 'Tom Noddy, Steve Langley, Tony Gardner & others',
            type: 'Workshop / Demonstrations',
            description:
              'A supported, hands-on session where experienced bubblers help others develop skills, from foundational techniques to advanced bubble sculptures.',
            microphones: 0,
          },
          room_4: {
            title: 'Bubbly Science and Maths Workshop',
            presenter: 'Caroline Ainslie',
            type: 'Workshop & Performance Demo',
            description:
              'A workshop for bubble artists exploring how bubbles can teach science and maths through playful, hands-on activities for ages 3 to 12.',
            microphones: 1,
          },
        },
      },
      { time: '13:00 - 14:15', _lunch: true, label: 'Lunch Break' },
      {
        time: '14:15 - 15:00',
        rooms: {
          room_1: {
            title: 'SEND Bubble Sessions – Part 1',
            presenter: 'Lisa Davies',
            type: 'Lecture',
            description:
              'Using bubbles as a therapeutic intervention with people with different abilities and SEND.',
            rooms_combined: ['room_1', 'room_2'],
            microphones: 1,
          },
          room_3: { _skip: true },
          room_4: {
            title: "The 'Low Status' Science Show Presenter",
            presenter: 'Ian Russell',
            type: 'Lecture',
            description:
              'Ian Russell has been a professional science communicator for 55 years. He is going to teach you the single most powerful technique he has learned.',
            microphones: 1,
          },
        },
      },
      {
        time: '15:15 - 16:00',
        rooms: {
          room_1: {
            title: 'SEND Bubble Sessions – Part 2',
            presenter: 'Lisa Davies',
            type: 'Workshop',
            description:
              'This second session is a physical upskill class where you can improve your skills for working with people with SEND.',
            rooms_combined: ['room_1', 'room_2'],
            microphones: 1,
          },
          room_3: { _skip: true },
          room_4: { _skip: true },
        },
      },
      {
        time: '16:15 - 17:00',
        rooms: {
          room_1: {
            title: 'The Accidental Entertainer',
            presenter: 'Glowby the Bubbler',
            type: 'Lecture',
            description:
              'How I stumbled into the world of bubble entertainment and created 2 jobs in the process.',
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: {
            title: "Bubbler's Corner LIVE!: Bubble Foamers A to Zed",
            presenter: 'Chris Catanese (BubbleDad) & Frédéric Garrec',
            type: 'Discussion / Workshop',
            description:
              'A foamy discussion and dynamic, hands-on workshop exploring foamer types, practical performance integration for indoor and outdoor settings, making your own foamer, and culminating in a group foam finale.',
            microphones: 1,
          },
          room_4: { _skip: true },
        },
      },
      {
        time: '17:15 - 18:00',
        rooms: {
          room_1: {
            title: "Bubblers' Skill Share – Guided Workshop Session",
            presenter: 'Tom Noddy, Steve Langley, Tony Gardner & others',
            type: 'Workshop / Demonstrations',
            description:
              'A supported, hands-on session where experienced bubblers help others develop skills, from foundational techniques to advanced bubble sculptures.',
            microphones: 0,
          },
          room_2: { _skip: true },
          room_3: {
            title: 'Working with the Light Table – Illuminated Bubble Effects',
            presenter: 'Bubbles LaFae',
            type: 'Masterclass / Workshop',
            description:
              'A hands-on workshop exploring stunning light-table bubble effects, with guided practice, tips, and techniques to recreate and develop them yourself.',
            microphones: 1,
          },
        },
      },
    ],
  },
  {
    day: 'Friday',
    date: '13th March 2026',
    sessions: [
      { time: '09:00 - 10:00', _status: true, label: 'Set Up Dealer Stands' },
      {
        time: '10:00 - 10:30',
        rooms: {
          room_1: { _skip: true },
          room_2: { _skip: true },
          room_3: {
            title: 'Session',
            presenter: 'Ian Russell',
            type: 'Talk',
            description: 'Ian Russell presents a session in Room 3.',
            microphones: 1,
          },
          room_4: {
            title: 'Bookable Rehearsal Space',
            type: 'Rehearsal',
            description:
              'This space is available to book for rehearsal. To reserve your slot please message Damian Jay via the POP! WhatsApp or Facebook groups.',
            microphones: 0,
          },
        },
      },
      {
        time: '11:45 - 12:30',
        rooms: {
          room_1: { _skip: true },
          room_2: { _skip: true },
          room_3: {
            title: 'Bubble Therapy and the Zen of Relaxed Performance',
            presenter: 'Lee Shallom',
            type: 'Masterclass & Workshop',
            description:
              'Explore bubble therapy, sensory play, and relaxed performance techniques in this interactive session focused on calmness, connection, and presence.',
            microphones: 1,
          },
          room_4: {
            title:
              'The Show Behind the Bubbles – Creating a Bubble Performance',
            presenter: 'Meadow Perry & Eran KB',
            type: 'Lecture / Talk',
            description:
              'Explore how character, design, and storytelling shape bubble performances, transforming tricks into cohesive, engaging shows that truly connect with audiences.',
            microphones: 2,
          },
        },
      },
      {
        time: '12:30 - 13:30',
        rooms: {
          room_1: {
            title: 'Hand Bubbling Masterclass',
            presenter: 'Sterling Johnson',
            type: 'Workshop & Masterclass',
            description:
              'Blow bigger bubbles with your hands and have better control.',
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 1,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
      { time: '13:30 - 14:30', _lunch: true, label: 'Lunch Break' },
      {
        time: '14:30 - 15:30',
        rooms: {
          room_1: {
            title: "Bubblers' Panel – Questions, Ideas, and Insight",
            type: 'Discussion',
            description:
              'A panel of experienced bubble artists respond to delegate questions, sharing insight, ideas, real-world experience, and perspectives on performance and professional practice.',
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 2,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
      {
        time: '16:15 - 17:00',
        rooms: {
          room_1: {
            title: 'The AOIBA Raffle & Awards Celebration',
            type: 'Presentation',
            description:
              "A joyful community celebration of generosity and recognition, featuring the AOIBA raffle, POP!'s playful awards, and the presentation of the very first prestigious Rick Findley Award.",
            rooms_combined: ['room_1', 'room_2', 'room_3'],
            microphones: 4,
          },
          room_2: { _skip: true },
          room_3: { _skip: true },
        },
      },
    ],
  },
  {
    day: 'Saturday',
    date: '14th March 2026',
    _saturday: true,
    sessions: [
      {
        time: '10:15 - 11:30',
        rooms: {
          col_outside: {
            title: 'Bubble Juice Testing',
            type: 'Activity – Outside Hotel',
            description:
              'Test of various bubble juices. Meet in the hotel reception at 10:15. Bring your own bubble mix and be prepared to share your recipe. Hopefully many of you will have your costumes — dressed to bubble and bringing joy to the locals.',
            microphones: 0,
          },
        },
      },
      {
        time: '11:00',
        rooms: {
          col_park: {
            title: 'Bubblers Assemble – Public Bubbling in the Park',
            type: 'Community Event – Popley Community Park',
            description:
              "Grab your bubbling kits and meet in the hotel reception. We will make our way into Popley Community Park (right behind the hotel) for a few hours of bubbling for the locals. Feel free to be in costume and entertain the masses. It's a celebration.",
            microphones: 0,
          },
        },
      },
      {
        time: '15:45',
        rooms: {
          col_park: {
            title: 'Head Back & Get Glammed Up',
            type: '',
            description:
              'Time to get back to the hotel, grab some dinner, shower, change and get glammed up for a night at the Gala Show. Dress to impress.',
            microphones: 0,
          },
          col_gala: {
            title: 'Break 17:00–19:00 · Be Backstage by 19:00',
            type: 'Gala Show – Haymarket Theatre',
            description:
              'Break from 17:00–19:00. All performers please be backstage by 19:00.',
            microphones: 0,
          },
        },
      },
      {
        time: '18:00',
        rooms: {
          col_inside: {
            title: 'Coach to the Theatre',
            type: 'Logistics – Inside Apollo Hotel',
            description:
              'Please be in the hotel foyer ready to board the coach to the theatre. There will be two groups — make sure you know which group you are in. Please be on time as the coach will not wait for you.',
            microphones: 0,
          },
        },
      },
      {
        time: '19:30 - 22:00',
        rooms: {
          col_gala: {
            title: 'SHOWTIME – POP! The Bubble Show',
            type: 'Gala Show – Haymarket Theatre',
            description: 'Enjoy the show!',
            microphones: 0,
          },
        },
      },
      {
        time: '22:30 onwards',
        rooms: {
          col_inside: {
            title: 'Aftershow Party at the Hotel',
            type: 'Social – Inside Apollo Hotel',
            description: 'The celebration continues back at the hotel.',
            microphones: 0,
          },
        },
      },
    ],
  },
];

// Expose schedule on the global window so script.js can consume it
if (typeof window !== 'undefined') {
  window.SCHEDULE_DAYS = SCHEDULE_DAYS;
}
