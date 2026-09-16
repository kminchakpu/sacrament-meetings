import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-08-30",
    meetingType: "regular",
    presiding: "Bishop Agidi",
    conducting: "Brother Aminu",
    announcements: [
      "Ward temple night is scheduled for September 6.",
      "Youth activity will be held Wednesday evening.",
    ],
    openingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    openingPrayer: "Sister Yabal",
    wardBusiness: [
      {
        description: "Sustaining of the new Primary presidency",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Eluwa",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "Musical Number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past",
    },
    closingPrayer: "Brother Musa",
  },

  {
    id: 2,
    date: "2026-08-23",
    meetingType: "stake",
    presiding: "Stake President Ibe",
    conducting: "Brother Clement",
    announcements: [
      "Fast Sunday donations can be submitted to the bishopric.",
    ],
    openingHymn: {
      number: 4,
      title: "I Need Thee Every Hour",
    },
    openingPrayer: "Brother Makinde",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 181,
      title: "Jesus of Nazareth",
    },
    speakers: [
      {
        name: "President Ibe",
        topic: "Building Zion",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    closingPrayer: "Sister Minchakpu",
  },

  {
    id: 3,
    date: "2026-08-16",
    meetingType: "regular",
    presiding: "Bishop Agidi",
    conducting: "Brother Nwanfor",
    announcements: [
      "Relief Society service project this Saturday.",
    ],
    openingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    openingPrayer: "Sister Aminu",
    wardBusiness: [
      {
        description: "Sustaining of ward officers",
      },
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father",
    },
    speakers: [
      {
        name: "Brother Anozie",
        topic: "Following the Savior",
        type: "speaker",
      },
      {
        name: "Sister Arikpo",
        topic: "Serving Others",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 219,
      title: "Because I Have Been Given Much",
    },
    closingPrayer: "Brother JohnBull",
  },

  {
    id: 4,
    date: "2026-08-09",
    meetingType: "regular",
    presiding: "Bishop Agidi",
    conducting: "Brother Aminu",
    announcements: [
      "Primary activity day will be held Thursday.",
    ],
    openingHymn: {
      number: 66,
      title: "Rejoice, the Lord Is King!",
    },
    openingPrayer: "Brother Ogunedo",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 190,
      title: "In Memory of the Crucified",
    },
    speakers: [
      {
        name: "Brother Butro",
        topic: "Prayer and Revelation",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 227,
      title: "There Is Sunshine in My Soul Today",
    },
    closingPrayer: "Sister Eze",
  },

  {
    id: 5,
    date: "2026-08-02",
    meetingType: "testimony",
    presiding: "Stake President Ibe",
    conducting: "Bishop Agidi",
    announcements: [],
    openingHymn: {
      number: 3,
      title: "Now We Sing",
    },
    openingPrayer: "Sister Fatima",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 193,
      title: "I Stand All Amazed",
    },
    speakers: [
      {
        name: "President Ibe",
        topic: "Strengthening Testimony",
        type: "speaker",
      },
      {
        name: "Stake Choir",
        topic: "Musical Number",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 100,
      title: "Nearer, Dearer, Is My God",
    },
    closingPrayer: "Brother Agada",
  },
];

export function getMeetings(
  date?: string | null
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}