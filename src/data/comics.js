// Comic library data. Swap `pdf` paths to point at real comic files
// dropped into `public/comics/`. Covers are generated from the
// `palette` + `icon` fields, so no image files are required.

const comics = [
  {
    id: 'dragon-series-1',
    title: 'The Dragon Series',
    issue: '#1',
    blurb: 'Deep in a forgotten cavern, a kid finds a dragon egg \u2014 and accidentally becomes its first friend.',
    icon: '🥚',
    palette: { bg: '#E8192C', accent: '#FFE135' },
    image: '/comics/dragon-series-1.png',
    synopsis: [
      'Deep in a forgotten cavern, our hero stumbles on something nobody has seen in a very long time: a real dragon egg. He can\u2019t just leave it there.',
      'He carries it home, and against all odds the egg hatches. The little dragon is fussy at first \u2014 "it haches" \u2014 but a steady supply of snacks turns him into a friend.',
      'The dragon grows. And grows. And grows. Eventually he\u2019s too big for the backyard, and the kid does the hardest thing: lets him go. "Go. Be free." What happens next sets up the whole series \u2014 will the dragon stay friendly, or rebel?',
    ],
    characters: [
      { name: 'The Kid', desc: 'Cave explorer. Accidental dragon parent. Big heart.' },
      { name: 'The Little Dragon', desc: 'Hatched hungry. Grows fast. Currently unsure about freedom.' },
    ],
    creatorsNote: 'This is the origin story for the whole Dragon Series. Then check out #2 and #3! \u2014 Henry',
  },
  {
    id: 'dragon-series-2',
    title: 'The Dragon Series',
    issue: '#2',
    blurb: 'The hero takes his first shot at the dragon \u2014 and quickly realizes he needs backup. A whole army of it.',
    icon: '🐉',
    palette: { bg: '#00C853', accent: '#FFE135' },
    image: '/comics/dragon-series-2.png',
    synopsis: [
      'Our hero spots the dragon perched on a tree and lets an arrow fly. Bad idea. The dragon answers with a wall of flame and the hero only barely escapes \u2014 "utt uooh" indeed.',
      'One hour later, after a little cooling down (literally), he\u2019s feeling brave again. The dragon roars back from the next hill: "yan." Translation: bring it on.',
      'The hero comes to a serious conclusion: he can\u2019t do this alone. Time to raise an army. The final panel hints at what\u2019s coming next \u2014 will the army actually be enough to beat the dragon?',
    ],
    characters: [
      { name: 'The Hero', desc: 'Brave. Slightly singed. Excellent at recruiting friends.' },
      { name: 'The Green Dragon', desc: 'Winged, fire-breathing, deeply uninterested in arrows.' },
      { name: 'The Army', desc: 'Recently formed. Pointy sticks. Lots of enthusiasm.' },
    ],
    creatorsNote: 'This is the second comic in The Dragon Series. Don\u2019t miss issue #3! \u2014 Henry',
  },
  {
    id: 'dragon-series-3',
    title: 'The Dragon Series',
    issue: '#3',
    blurb: 'The army arrives ready to fight \u2014 but a moment of mercy uncovers a much bigger problem flying in from the sky.',
    icon: '🐲',
    palette: { bg: '#7B2FBE', accent: '#FFE135' },
    image: '/comics/dragon-series-3.png',
    synopsis: [
      '"We are ready!!" The army shows up swords-up, ready to take down the captured dragon. But the hero hesitates: do they really need to fight?',
      'In a surprising twist, the hero sets the dragon free instead. "Go, be free!" The dragon flies off, confused but grateful. A win for kindness, right?',
      'Not quite. The dragon was guarding an egg \u2014 and a much, much bigger dragon has noticed it\u2019s gone. The final panel sets up issue #4 with a roaring question: will the dragon attack the humans?',
    ],
    characters: [
      { name: 'The Hero', desc: 'Now leading an army. Still figuring out the right call.' },
      { name: 'The Green Dragon', desc: 'Tied up at first, then freed. Very confused.' },
      { name: 'The Big Black Dragon', desc: 'Egg parent. Furious. Recently arrived.' },
    ],
    creatorsNote: 'I wanted this one to have a twist! Issue #4 is coming soon. \u2014 Henry',
  },
  {
    id: 'dude-and-the-nudle-bole-1',
    title: 'Dude and the Nudle Bole',
    issue: 'Book 1',
    blurb: 'Alex, Coby, and Cory step up to the Competadder \u2014 and whoever gets this book is officially the best.',
    icon: '🏆',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/dude-and-the-nudle-bole-1.png',
    pages: [
      '/comics/dude-and-the-nudle-bole-1-page-1.png',
      '/comics/dude-and-the-nudle-bole-1-page-2.png',
      '/comics/dude-and-the-nudle-bole-1-page-3.png',
    ],
    synopsis: [
      'Book 1 opens on the cover itself: three friends \u2014 Alex, Coby, and Cory \u2014 lined up and ready to take on the Competadder, the toothy trophy that decides who is truly the best.',
      'P.S. Whoever gets this is the best. P.S.S. It is a very good book.',
    ],
    characters: [
      { name: 'Alex', desc: 'Backwards cap, big grin, always game.' },
      { name: 'Coby', desc: 'Spiky hair, shades on, ready for anything.' },
      { name: 'Cory', desc: 'Cool, calm, and also wearing sunglasses.' },
    ],
    creatorsNote: 'This is the very first book in the Dude and the Nudle Bole series. \u2014 Henry',
  },
  {
    id: 'rocket-rex',
    title: 'Rocket Rex vs. The Moon Pirates',
    issue: '#1',
    blurb: 'A jet-powered T-Rex defends the lunar colony from a crew of cheese-stealing space buccaneers.',
    icon: '🦖',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'When Rocket Rex bolted twin ion engines onto his tail, he never expected to be the lunar colony\u2019s last line of defense. But after the Moon Pirates start siphoning cheese reserves from Crater Town, somebody has to roar.',
      'This first issue introduces the colony, the Pirates\u2019 cheese-fueled mothership, and a heist gone delightfully wrong inside a low-gravity dairy.',
      'Expect huge explosions, bigger punchlines, and at least one cliffhanger involving a runaway wheel of cheddar.',
    ],
    characters: [
      { name: 'Rocket Rex', desc: 'A T-Rex with strap-on jet engines and a strong sense of justice.' },
      { name: 'Captain Brie', desc: 'Leader of the Moon Pirates. Wields a cutlass made of frozen mozzarella.' },
      { name: 'Mayor Wedge', desc: 'Crater Town\u2019s very nervous, very round mayor.' },
    ],
    creatorsNote: 'I drew this one after my dad let me watch a dinosaur documentary AND a pirate movie in the same day. \u2014 Henry',
  },
  {
    id: 'mighty-marshmallow',
    title: 'The Mighty Marshmallow',
    issue: '#1',
    blurb: 'A camp-fire treat gains super strength after being toasted by lightning. Crime is now... toasted.',
    icon: '⚡',
    palette: { bg: '#FF6B35', accent: '#1A1A2E' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'It was just supposed to be s\u2019mores night. But when lightning strikes a marshmallow mid-toast, an unlikely hero rises from the embers \u2014 squishy, slightly burnt, and absolutely furious about littering.',
      'Issue #1 covers the origin story, the first showdown with the Sticky Bandit, and a touching scene where Mighty Marshmallow learns he can\u2019t hug people too hard.',
    ],
    characters: [
      { name: 'Mighty Marshmallow', desc: 'Squishy. Strong. Slightly toasted. All hero.' },
      { name: 'The Sticky Bandit', desc: 'A villain made of leftover caramel. Hates napkins.' },
    ],
    creatorsNote: 'I came up with this character at a camp out. \u2014 Henry',
  },
  {
    id: 'cat-detective',
    title: 'Whiskers, P.I.',
    issue: '#3',
    blurb: 'The city\u2019s sharpest tabby cracks the case of the missing tuna sandwich.',
    icon: '🐱',
    palette: { bg: '#7B2FBE', accent: '#FFE135' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'Whiskers has solved cases involving disappearing yarn balls, suspiciously moved couches, and one very rude vacuum. But this time, the stakes are personal: somebody ate his tuna sandwich.',
      'Follow Whiskers through the alleys of Meow City as he interviews witnesses, chases a suspect across three rooftops, and uncovers a conspiracy that goes all the way to the top shelf.',
    ],
    characters: [
      { name: 'Whiskers', desc: 'Trench-coated tabby cat. Eats clues for breakfast.' },
      { name: 'Detective Pug', desc: 'Whiskers\u2019 reluctant partner. Always sneezing.' },
      { name: 'Lady Salmon', desc: 'A glamorous fish who knows more than she lets on.' },
    ],
    creatorsNote: 'My cat Mochi inspired this one. He really does interrogate the fridge. \u2014 Henry',
  },
  {
    id: 'turbo-turtle',
    title: 'Turbo Turtle',
    issue: '#1',
    blurb: 'He\u2019s slow. He\u2019s steady. He\u2019s also somehow the fastest racer in the galaxy.',
    icon: '🐢',
    palette: { bg: '#00C853', accent: '#1A1A2E' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'Nobody expected Turbo to win the Galactic Grand Prix. He didn\u2019t even expect it. But when his shell turns out to be the most aerodynamic object in three star systems, history is made.',
      'This origin issue follows Turbo from his quiet life in Pond Town to the chaotic finish line of the most dangerous race in the universe.',
    ],
    characters: [
      { name: 'Turbo', desc: 'A turtle with a need for moderate speed.' },
      { name: 'Zippy the Hare', desc: 'The reigning champion. Very smug. Very stretchy.' },
    ],
    creatorsNote: 'Sometimes slow and steady really does win. \u2014 Henry',
  },
  {
    id: 'pizza-planet',
    title: 'Pizza Planet Patrol',
    issue: '#2',
    blurb: 'Three astronauts deliver hot pies across a hostile solar system. Toppings cost extra.',
    icon: '🍕',
    palette: { bg: '#E8192C', accent: '#FFE135' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'The Patrol\u2019s next delivery is a 12-cheese mega-pie to a customer on the rings of Saturn. Easy enough \u2014 unless the asteroid belt is hungry, which it absolutely is.',
      'Issue #2 features a high-speed chase through a meteor storm, a guest appearance by the legendary Calzone Captain, and the introduction of pineapple as a weapon.',
    ],
    characters: [
      { name: 'Pepper', desc: 'The captain. Always on time. Always out of napkins.' },
      { name: 'Olive', desc: 'Pilot. Can land a ship in any gravity except Earth.' },
      { name: 'Crust', desc: 'Cook. Could put cheese on the moon if asked.' },
    ],
    creatorsNote: 'This is a sequel to issue #1 which I lost. Sorry! \u2014 Henry',
  },
  {
    id: 'shadow-squirrel',
    title: 'Shadow Squirrel',
    issue: '#1',
    blurb: 'By day a normal park squirrel. By night, the acorn-flinging vigilante the city deserves.',
    icon: '🌰',
    palette: { bg: '#1A1A2E', accent: '#FF6B35' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'Park Town has a problem: somebody has been stealing the good acorns. By day, our hero is just a regular bushy-tailed squirrel. By night, he is the masked menace criminals fear most.',
      'This debut issue establishes the city, the secret oak-tree HQ, and a final-page reveal that the Acorn Thief is closer than anyone thinks.',
    ],
    characters: [
      { name: 'Shadow Squirrel', desc: 'Vigilante. Acrobat. Hoarder.' },
      { name: 'Park Ranger Joe', desc: 'A friend or a foe? The mustache makes it hard to tell.' },
    ],
    creatorsNote: 'My favorite character to draw because of the mask. \u2014 Henry',
  },
  {
    id: 'robo-grandma',
    title: 'Robo-Grandma',
    issue: '#4',
    blurb: 'Sweet old lady. Titanium hip. Built-in cookie cannon. You do the math.',
    icon: '🤖',
    palette: { bg: '#FFE135', accent: '#E8192C' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'After her bionic upgrades go a little too well, Grandma is now defending the neighborhood from porch pirates, lawn invaders, and one very rude door-to-door vacuum salesman.',
      'In issue #4, Grandma faces her toughest foe yet: a knock-off Robo-Grandpa who insists his cookies are better. (They are not.)',
    ],
    characters: [
      { name: 'Robo-Grandma', desc: 'Loving, lethal, currently knitting a mech suit.' },
      { name: 'Robo-Grandpa', desc: 'Imposter. Bakes only oatmeal raisin. Cannot be trusted.' },
    ],
    creatorsNote: 'Dedicated to all the grandmas. \u2014 Henry',
  },
  {
    id: 'shark-tank-club',
    title: 'The After-School Shark Club',
    issue: '#1',
    blurb: 'Four kids, one talking hammerhead, and a science fair entry that may end the world.',
    icon: '🦈',
    palette: { bg: '#0057A8', accent: '#00C853' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'When four classmates accidentally teach a hammerhead shark to talk, they form the most exclusive club at school. The problem: their science fair project is starting to grow legs. Literally.',
      'Part friendship story, part disaster movie, all jokes about cafeteria food.',
    ],
    characters: [
      { name: 'Maya', desc: 'Club president. Excellent at notes.' },
      { name: 'Jules', desc: 'Engineer. Already published in the school newsletter.' },
      { name: 'Theo', desc: 'Lookout. Strong opinions about lunch.' },
      { name: 'Sammi the Shark', desc: 'Hammerhead. Surprisingly polite.' },
    ],
    creatorsNote: 'My longest comic so far! \u2014 Henry',
  },
  {
    id: 'haunted-skateboard',
    title: 'The Haunted Skateboard',
    issue: '#2',
    blurb: 'It does sick kickflips. It also screams. Owner: still undecided.',
    icon: '👻',
    palette: { bg: '#7B2FBE', accent: '#FFFEF0' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'In issue #2, our young hero learns that the ghost in the skateboard has a name, a tragic backstory, and very strong feelings about goofy stance.',
      'Together, they take on the local skate park\u2019s most stubborn ramp \u2014 and a rival who definitely cheats.',
    ],
    characters: [
      { name: 'Ash', desc: 'Eleven. Skater. Slightly terrified of own deck.' },
      { name: 'Phantom Phil', desc: 'The ghost. Skated in the 80s. Still has opinions.' },
    ],
    creatorsNote: 'My friend Ben helped with the skateboard tricks. \u2014 Henry',
  },
  {
    id: 'dragon-bus',
    title: 'Dragon Bus Route 9',
    issue: '#1',
    blurb: 'The morning commute is on time, on fire, and occasionally airborne.',
    icon: '🐲',
    palette: { bg: '#FF6B35', accent: '#FFE135' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'Route 9 used to be just another school bus run. Then the city budget got weird and they replaced the bus with a dragon. Ridership has tripled.',
      'In this first issue, meet the driver, the dragon, and the very calm kids who treat all this like it\u2019s normal.',
    ],
    characters: [
      { name: 'Ms. Vela', desc: 'Driver. Tamed the dragon with one very stern look.' },
      { name: 'Smolder', desc: 'The bus. Loud. Hot. Surprisingly polite at stop signs.' },
    ],
    creatorsNote: 'I would 100% ride this bus. \u2014 Henry',
  },
  {
    id: 'space-lunch',
    title: 'Space Lunch Wars',
    issue: '#3',
    blurb: 'In zero gravity, nobody can hear you steal the pudding cup.',
    icon: '🚀',
    palette: { bg: '#1A1A2E', accent: '#FFE135' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'The space station cafeteria has rules. Issue #3 is about what happens when everyone breaks them at the same time.',
      'Floating food fights, a missing fork investigation, and a very dramatic apology pizza.',
    ],
    characters: [
      { name: 'Cadet Mo', desc: 'Just wanted lunch.' },
      { name: 'Commander Vex', desc: 'Definitely took the last juice box.' },
    ],
    creatorsNote: 'Drawn during a lunch break, of course. \u2014 Henry',
  },
  {
    id: 'wizard-recess',
    title: 'Wizard Recess',
    issue: '#1',
    blurb: 'Magic school dismissed early. The playground will never be the same.',
    icon: '🪄',
    palette: { bg: '#00C853', accent: '#1A1A2E' },
    pdf: '/sample-comic.pdf',
    synopsis: [
      'It\u2019s the first day of recess at the Academy of Definitely Real Magic. The teachers are inside. The kids are outside. The swings are now sentient.',
      'A chaotic, friendly first issue full of spell mishaps, an enchanted four-square ball, and the introduction of the school\u2019s strongest student: a quiet kid named Greg.',
    ],
    characters: [
      { name: 'Lila', desc: 'Top of her class. Cannot stop levitating.' },
      { name: 'Bram', desc: 'Class clown. Knows exactly two spells.' },
      { name: 'Greg', desc: 'Quiet. Powerful. Possibly a wizard king.' },
    ],
    creatorsNote: 'There will be a Greg spin-off someday. \u2014 Henry',
  },
];

export default comics;

export function getComicById(id) {
  return comics.find((c) => c.id === id);
}

export function getRelatedComics(id, count = 3) {
  return comics.filter((c) => c.id !== id).slice(0, count);
}

export function parseIssueNumber(issue) {
  const n = parseInt(String(issue).replace(/[^0-9]/g, ''), 10);
  return Number.isFinite(n) ? n : 0;
}

// Returns comics grouped by series (title) with issues sorted ascending.
// Series themselves keep the order they first appear in `comics`,
// so authoring order in this file controls the "featured" order.
export function getSortedComics() {
  const seriesOrder = [];
  const groups = new Map();
  for (const comic of comics) {
    if (!groups.has(comic.title)) {
      groups.set(comic.title, []);
      seriesOrder.push(comic.title);
    }
    groups.get(comic.title).push(comic);
  }
  const out = [];
  for (const title of seriesOrder) {
    const issues = groups.get(title).slice().sort(
      (a, b) => parseIssueNumber(a.issue) - parseIssueNumber(b.issue)
    );
    out.push(...issues);
  }
  return out;
}

export function getSeriesList() {
  const seen = new Set();
  const list = [];
  for (const comic of comics) {
    if (!seen.has(comic.title)) {
      seen.add(comic.title);
      list.push(comic.title);
    }
  }
  return list;
}
