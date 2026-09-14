/**
 * Single source of truth for Atlantic City Billiard Club business facts.
 *
 * Every value here is sourced from the club's own Facebook page
 * (facebook.com/p/Atlantic-City-Billiard-Club-100063635376707) or public
 * directory listings. Do not add specs, prices, or menu items that the club
 * has not published — this site represents a real business.
 */

export const CLUB = {
  name: 'Atlantic City Billiard Club',
  shortName: 'AC Billiard Club',
  locality: 'Egg Harbor Township, NJ',

  /** Verbatim from the Facebook page Intro. */
  intro:
    'A local Pool & Billiards Club with reasonable rates and a friendly environment.',

  address: {
    street: '6701 Black Horse Pike, Ste A8',
    city: 'Egg Harbor Township',
    state: 'NJ',
    zip: '08234',
    full: '6701 Black Horse Pike, Ste A8, Egg Harbor Township, NJ 08234',
  },

  phone: {
    display: '(609) 645-7576',
    href: 'tel:+16096457576',
  },

  email: 'AtlanticBilliard@aol.com',

  facebook: 'https://www.facebook.com/p/Atlantic-City-Billiard-Club-100063635376707/',

  /** Facebook "Price Range" rating. */
  priceRange: '$',

  followers: '2.7K',

  /** Verbatim rate line from the Facebook page Intro. */
  rate: {
    display: '$9 – $9.50',
    unit: 'per hour, per person',
    note: 'Rates as published by the club. Specialty tables may vary — call to confirm.',
  },

  /**
   * Hours per public directory listings. The club posts schedule changes to
   * Facebook (a recent post announced Sunday hours returning), so these are
   * presented alongside a call-to-confirm.
   */
  hours: [
    { day: 'Monday', open: '12:00 PM', close: '12:00 AM' },
    { day: 'Tuesday', open: '6:00 PM', close: '12:00 AM' },
    { day: 'Wednesday', open: '12:00 PM', close: '12:00 AM' },
    { day: 'Thursday', open: '6:00 PM', close: '12:00 AM' },
    { day: 'Friday', open: '6:00 PM', close: '12:00 AM' },
    { day: 'Saturday', open: '12:00 PM', close: '12:00 AM' },
    { day: 'Sunday', open: null, close: null, note: 'See Facebook for Sunday events' },
  ] as const,

  hoursNote:
    'Hours can change for tournaments and holidays. Call ahead or check Facebook before you drive out.',

  /** Specialty tables named on the Facebook page. */
  tables: [
    {
      id: 'snooker',
      name: 'Snooker',
      blurb:
        'Full-size snooker, the longest table on the floor. Tight cushions and small pockets — the game that makes every other table feel generous.',
    },
    {
      id: 'carom',
      name: 'Three-Cushion',
      blurb:
        'Pocketless carom billiards. Three rails before the second contact, nowhere to hide, and no pockets to bail you out.',
    },
    {
      id: 'tight',
      name: 'Tight-Pocket',
      blurb:
        'Pro-cut pockets for players who want their practice to punish them. Shots that drop elsewhere rattle here.',
    },
  ],

  mapQuery: '6701+Black+Horse+Pike+Ste+A8+Egg+Harbor+Township+NJ+08234',
} as const;

export type ClubHours = (typeof CLUB.hours)[number];
