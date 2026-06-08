// One short blurb per comic series, surfaced on ComicPage and on the home page.
// Each bio is written specifically for that series so search engines don't
// see the same boilerplate on every comic page.
export const seriesInfo = {
  'The Dragon Series': {
    blurb:
      'A four-issue saga that starts with a hatching egg in a cave and ends with a peace treaty in the sky. Equal parts adventure and "what if kindness is the right answer?"',
    issueCount: 4,
    vibe: 'epic + heart',
  },
  'Dude and the Nudle Bole': {
    blurb:
      'Three friends (Alex, Coby, Cory) square off against the toothy Competadder trophy. Three issues of cheerful trash-talk and high-five energy.',
    issueCount: 3,
    vibe: 'goofy + competitive',
  },
  'Robotic Wars': {
    blurb:
      'Rebels, lava monsters, X-wings, and a Death Star that just decides to go BOOM. Three issues of escalating space battles where, for once, the bots actually win.',
    issueCount: 3,
    vibe: 'sci-fi + chaos',
  },
  'Who Knows?': {
    blurb:
      'The Star-Wars-meets-Venom-meets-skeleton-king mash-up. The title says it all \u2014 nobody knows what happens next, including Henry. Read #1, #2, #3, then the bonus middle book (#2\u00bd), then #5. Yes, in that order.',
    issueCount: 4,
    vibe: 'mash-up + mystery',
  },
  'The Bones': {
    blurb:
      'A volcano-side siege story. The Bones rise, the hero grabs a shield, and the only way out is to "return the bones." Three issues, dark palette, lots of rumble.',
    issueCount: 3,
    vibe: 'dark + epic',
  },
  'Dudes in Persute': {
    blurb:
      'Space pursuit comics with intentionally creative spelling. Three dudes, three lightsabers, asteroids, motherships, and a HyFive landing. Two issues so far.',
    issueCount: 2,
    vibe: 'space + comedy',
  },
  'The Extra Special Comic': {
    blurb:
      'A one-off mega-issue with a front side AND a back side. Car chases, dream sequences, prison breaks on one side; a full naval battle and a sea-monster cameo on the other. Read both.',
    issueCount: 1,
    vibe: 'special edition',
  },
};

export function getSeriesInfo(title) {
  return seriesInfo[title] || null;
}

export default seriesInfo;
