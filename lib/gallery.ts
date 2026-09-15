/**
 * Images taken from the club's own Facebook page and served from this site.
 *
 * Facebook's CDN URLs are signed and expire, so hotlinking them would leave
 * broken tiles within days — the files live in `public/gallery` instead.
 *
 * Captions describe what each image actually shows. Where a flyer advertises a
 * dated event, the caption says so rather than presenting it as a standing
 * offer, and stale notices (a past holiday closure) are not published at all.
 */

export interface Shot {
  slug: string;
  alt: string;
  caption: string;
  /** Dated promotions are labelled so nobody reads one as this week's schedule. */
  dated?: string;
  /** Portrait flyers and the landscape photo need different grid spans. */
  feature?: boolean;
}

export const GALLERY: Shot[] = [
  {
    slug: 'neon-sign',
    alt: 'The club\u2019s neon sign reading Billiards, Atlantic City, inside a neon rack triangle',
    caption:
      'The neon sign on the wall — the rack triangle, the gold bar, and the script the club\u2019s logo is drawn from.',
  },
  {
    slug: 'tournament-finishers',
    alt: 'Four players standing at a pool table holding the 1, 2 and 3 balls, with prize money laid out on the cloth',
    caption:
      'Players at the end of a tournament, holding their finishing order. The plaques on the back wall are the club’s own.',
    feature: true,
  },
  {
    slug: 'sunday-games',
    alt: 'Flyer advertising the club open on Sunday for Eagles and Phillies games',
    caption:
      'The club opens Sundays for the games — football and baseball on the screens.',
    dated: 'Posted for Sunday 13 September',
    feature: true,
  },
  {
    slug: 'wednesday-specials',
    alt: 'Flyer for Wednesday nights advertising midweek table specials from 6 PM',
    caption:
      'Wednesdays start at 6 PM, with midweek table specials advertised alongside food and music.',
  },
  {
    slug: 'thirsty-thursday',
    alt: 'Flyer for Thirsty Thursday listing APA 9-ball league and specialty tables',
    caption:
      'Thirsty Thursday: APA 9-ball league, specialty tables, and, in the club’s words, plenty of tables for all.',
  },
  {
    slug: 'nine-ball-chip',
    alt: 'Flyer for a 9-ball chip tournament on 3 October with a $40 entry',
    caption: '9-ball chip tournament, $40 entry, practice from 6:30 PM.',
    dated: 'Posted for Saturday 3 October',
  },
  {
    slug: 'nine-ball-rules',
    alt: 'Flyer listing the house rules for the straight 9-ball tournament',
    caption:
      'Straight 9-ball, call your pockets, $40 per person. The 9 can go early, push outs are allowed, cue ball fouls only.',
    dated: 'Posted for Saturday 3 October',
  },
];
