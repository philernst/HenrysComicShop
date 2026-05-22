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
    image: '/comics/dude-and-the-nudle-bole-1-page-1.png',
    pages: [
      '/comics/dude-and-the-nudle-bole-1-page-1.png',
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
    id: 'dude-and-the-nudle-bole-2',
    title: 'Dude and the Nudle Bole',
    issue: 'Book 2',
    blurb: 'The crew is back \u2014 Alex, Coby, and Cory return for round two against the Competadder.',
    icon: '🏆',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/dude-and-the-nudle-bole-1-page-2.png',
    pages: [
      '/comics/dude-and-the-nudle-bole-1-page-2.png',
    ],
    synopsis: [
      'Book 2 picks up where Book 1 left off, with the three friends taking on the next challenge.',
    ],
    characters: [
      { name: 'Alex', desc: 'Backwards cap, big grin, always game.' },
      { name: 'Coby', desc: 'Spiky hair, shades on, ready for anything.' },
      { name: 'Cory', desc: 'Cool, calm, and also wearing sunglasses.' },
    ],
    creatorsNote: 'Book 2 of the Dude and the Nudle Bole series. \u2014 Henry',
  },
  {
    id: 'dude-and-the-nudle-bole-3',
    title: 'Dude and the Nudle Bole',
    issue: 'Book 3',
    blurb: 'Book 3! Alex, Coby, and Cory close out the trilogy in true Nudle Bole fashion.',
    icon: '🏆',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/dude-and-the-nudle-bole-1-page-3.png',
    pages: [
      '/comics/dude-and-the-nudle-bole-1-page-3.png',
    ],
    synopsis: [
      'Book 3 wraps up the saga of the Competadder with one last showdown.',
    ],
    characters: [
      { name: 'Alex', desc: 'Backwards cap, big grin, always game.' },
      { name: 'Coby', desc: 'Spiky hair, shades on, ready for anything.' },
      { name: 'Cory', desc: 'Cool, calm, and also wearing sunglasses.' },
    ],
    creatorsNote: 'Book 3 of the Dude and the Nudle Bole series. \u2014 Henry',
  },
  {
    id: 'robotic-wars-1',
    title: 'Robotic Wars',
    issue: '#1',
    blurb: 'The Rebels strike, a Lava Monster rises, and the Death Star suddenly goes BOOM.',
    icon: '🤖',
    palette: { bg: '#1A1A2E', accent: '#FFE135' },
    image: '/comics/robotic-wars-1.png',
    synopsis: [
      'Issue #1 opens with the Rebels on the move \u2014 ships in the stars, eyes wide open, and a Lava Monster crashing the rebel base.',
      'Then, with no warning at all, the Death Star just goes BOOM.',
      'Why did the Death Star suddenly go BOOM? You will have to read issue #2 to find out!',
    ],
    characters: [
      { name: 'The Rebels', desc: 'A brave crew flying into danger to save the galaxy.' },
      { name: 'Lava Monster', desc: 'A fiery beast that turns up at the rebel base uninvited.' },
      { name: 'The Death Star', desc: 'A giant space weapon \u2014 until it isn\u2019t.' },
    ],
    creatorsNote: 'This is the very first Robotic Wars comic. There are three! \u2014 Henry',
  },
  {
    id: 'robotic-wars-2',
    title: 'Robotic Wars',
    issue: '#2',
    blurb: 'A mysterious Master appears, turbo lazors lock on, and the battle gets bigger.',
    icon: '🤖',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/robotic-wars-2.png',
    synopsis: [
      'Issue #2 picks up with a huge cloaked figure rising over the battle: \u201cOur Master!\u201d cry the bots. He fights for the \u2018N\u2019universe.',
      'The Rebels call back \u201cWe\u2019re coming in!\u201d and ready the turbo lazors. What a loss \u2014 but the fight is far from over.',
      'Out in the dark, a new TIE lurks. Out in the light, a mystery pirks. What does that mean? Go to #3!',
    ],
    characters: [
      { name: 'The Master', desc: 'A giant cloaked figure who fights for the \u2018N\u2019universe.' },
      { name: 'Bot Soldiers', desc: 'Loyal robots who answer the Master\u2019s call.' },
      { name: 'The Rebels', desc: 'Back again with turbo lazors ready.' },
    ],
    creatorsNote: 'I like writing the little rhyme at the end of this one. \u2014 Henry',
  },
  {
    id: 'robotic-wars-3',
    title: 'Robotic Wars',
    issue: '#3',
    blurb: 'X-Wings fire, planets explode, and the bots make their final move.',
    icon: '🤖',
    palette: { bg: '#FF6B35', accent: '#1A1A2E' },
    image: '/comics/robotic-wars-3.png',
    synopsis: [
      'The grand finale! X-Wings swoop in: \u201cFire!\u201d Uh-oh \u2014 BOOM!',
      'Out in space, whole planets explode as the war reaches its peak.',
      'In the end, the bots destroy the human base. The bots WIN!',
    ],
    characters: [
      { name: 'X-Wing Pilots', desc: 'Brave Rebel fliers giving it everything they\u2019ve got.' },
      { name: 'The Bots', desc: 'They came, they fought, they won.' },
    ],
    creatorsNote: 'I wanted the bots to win this time. Sometimes the bad guys get to win! \u2014 Henry',
  },
  {
    id: 'who-knows-1',
    title: 'Who Knows?',
    issue: '#1',
    blurb: 'TIE fighters attack, Vader does something nobody heard, and a Rancor and Ink Monster show up to ruin everyone\u2019s day.',
    icon: '❓',
    palette: { bg: '#1A1A2E', accent: '#FFE135' },
    image: '/comics/who-knows-1.png',
    synopsis: [
      'Attack! TIE fighters swarm in. Someone yells \u201cVader!\u201d \u2014 but what did he say? Who knows?',
      'Meanwhile, Red Five splits up to investigate King Skeletin while a Rancor ROARS, rats scatter, and the Ink Monster lurches into frame.',
      'Will they die? Who knows? Maybe, maybe not. Be sure to read #2 in the siries!',
    ],
    characters: [
      { name: 'Vader', desc: 'Says something important. Nobody can quite make it out.' },
      { name: 'Red Five', desc: 'A Rebel pilot peeling off to scout King Skeletin.' },
      { name: 'King Skeletin', desc: 'Exactly what he sounds like.' },
      { name: 'The Rancor', desc: 'ROAR.' },
      { name: 'Ink Monster', desc: 'A tentacled shadow that turns up at the worst moments.' },
    ],
    creatorsNote: 'The whole point of \u201cWho Knows?\u201d is that nobody knows what\u2019s going to happen next. Including me. \u2014 Henry',
  },
  {
    id: 'who-knows-2',
    title: 'Who Knows?',
    issue: '#2',
    blurb: 'Down on Downtowneen, lightsabers cross, TIE Fighters appear, and Venom becomes the black Ink Monster.',
    icon: '❓',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/who-knows-2.png',
    synopsis: [
      'A Rancor flexes, the Master cackles \u201cHa!\u201d, and out in space the call goes up: \u201cTIE Fighters!\u201d',
      'Down on Downtowneen, lightsabers clash \u2014 \u201cRghh!\u201d, \u201cOw!\u201d, \u201cLet me go!\u201d \u2014 and somebody screams \u201cAhh!\u201d',
      'Venom has become the black Ink Monster! Can the force users stop him? Go to the last Who Knows.',
    ],
    characters: [
      { name: 'The Master', desc: 'Still laughing. Always laughing.' },
      { name: 'Force Users', desc: 'Doing their best with lightsabers in Downtowneen.' },
      { name: 'Venom / Ink Monster', desc: 'Symbiote plus shadow equals trouble.' },
    ],
    creatorsNote: 'I love Venom AND Star Wars so I put them in the same comic. \u2014 Henry',
  },
  {
    id: 'who-knows-2-5',
    title: 'Who Knows?',
    issue: '#2½',
    blurb: 'The in-between book. The Death Star goes BOOM, an X-wing comes in hot, and the Lava Monster almost kills Kylo Ren.',
    icon: '❓',
    palette: { bg: '#FF6B35', accent: '#1A1A2E' },
    image: '/comics/who-knows-2-5.png',
    synopsis: [
      'The Death Star explodes in a storm of TIE fighters. Kylo Ren mutters \u201cNot myself!\u201d before snapping out of it: \u201cGot out of it!\u201d',
      '\u201cIncoming X-wing!\u201d A pilot yells \u201cStop, you!\u201d The lightsaber fight rages: \u201cHa!\u201d, \u201cMissed!\u201d, \u201cGot it!\u201d',
      'The Lava Monster has almost killed Kylo Ren! Who cares?',
    ],
    characters: [
      { name: 'Kylo Ren', desc: 'Has a moment, gets it together, then gets steamrolled by lava.' },
      { name: 'Lava Monster', desc: 'Glowing, grumpy, dangerous to Sith.' },
      { name: 'X-wing Pilots', desc: 'Showing up unannounced as always.' },
    ],
    creatorsNote: 'This is the \u201cmiddle\u201d book \u2014 you read it AFTER #3 to find out what happened in between. \u2014 Henry',
  },
  {
    id: 'who-knows-3',
    title: 'Who Knows?',
    issue: '#3',
    blurb: 'Gotcha! Missed! Uh-oh! Ouch! Everyone fights, everyone falls, and it\u2019s The End.',
    icon: '❓',
    palette: { bg: '#0057A8', accent: '#FF6B35' },
    image: '/comics/who-knows-3.png',
    synopsis: [
      '\u201cHa ha!\u201d \u201cGacha!\u201d The Master taunts a hero who promptly hits the Ink Monster with a tentacle-y \u201cMeanwhile\u2026\u201d twist.',
      'Skywalker calls out. Lightsabers swing. Someone yells \u201cMissed!\u201d, someone else \u201cUh-oh!\u201d, and people start tumbling into fire pits: \u201cOuch!\u201d \u201cOoh!\u201d \u201cOw.\u201d',
      'The End. The \u201cWho Knows\u201d siries are done. Go to middle Book to find out what happened in beetween. Bye!',
    ],
    characters: [
      { name: 'Skywalker', desc: 'Showing up just in time.' },
      { name: 'The Master', desc: '\u201cGacha!\u201d (still laughing).' },
      { name: 'Ink Monster', desc: 'Tangled, tentacled, in over its head.' },
    ],
    creatorsNote: 'I ended the series on #3, but then I drew the middle book (#2½) AND a bonus #5. \u2014 Henry',
  },
  {
    id: 'who-knows-5',
    title: 'Who Knows?',
    issue: '#5',
    blurb: 'A bonus mega-issue: Luke, Vader, ships, a black hole, and Lacy in a 30-panel grand finale.',
    icon: '❓',
    palette: { bg: '#1A1A2E', accent: '#FFE135' },
    image: '/comics/who-knows-5.png',
    synopsis: [
      'Ships dogfight, somebody calls \u201cLuke!\u201d, Vader shows up, and the gang asks \u201cWell, well, well, what happened?\u201d \u2014 \u201cYup.\u201d',
      'Meanwhile, Lacy appears, there\u2019s a UFO \u201cGocha!\u201d moment, a \u201cBlack hole!\u201d, and a giant boom shaped like a flower.',
      'It ends with \u201cYes!\u201d and a mysterious skeleton-king figure in the dark. Who knows what it means? You guessed it: Who knows?',
    ],
    characters: [
      { name: 'Luke', desc: 'Gets shouted at across multiple panels.' },
      { name: 'Vader', desc: 'Doing Vader things.' },
      { name: 'Lacy', desc: 'A new character who just walks in like she\u2019s always been here.' },
      { name: 'King Skeletin', desc: 'Back, and bonier than ever.' },
    ],
    creatorsNote: 'There is no #4. I just jumped straight to #5 because I felt like it. \u2014 Henry',
  },
  {
    id: 'the-bones-1',
    title: 'The Bones',
    issue: '#1',
    blurb: 'A volcano blows, jets attack, and a lone hero realizes the Bones are coming.',
    icon: '💀',
    palette: { bg: '#1A1A2E', accent: '#FF6B35' },
    image: '/comics/the-bones-1.png',
    synopsis: [
      'A hero stands by a smoking volcano: \u201cI must make the pd.\u201d Overhead, jets scream in \u2014 \u201cAttak!\u201d \u2014 and bunkers go BOOM.',
      'Down in the lava field he realizes the truth: \u201cThe Bones are\u2026!\u201d He grabs a shield. The ground rumbles. RUMBLE!',
      'The volcano roars \u201cNO!\u201d, another rumbles back, and a Bone laughs \u201cLa! Chchchch.\u201d The siege has begun.',
    ],
    characters: [
      { name: 'The Hero', desc: 'Has a shield. Has determination. Probably needs more than that.' },
      { name: 'Jet Pilots', desc: 'Attak! Boom! Done.' },
      { name: 'A Bone', desc: 'A skeletal little guy with a creepy laugh.' },
    ],
    creatorsNote: 'I drew the title \u201cThe Bones\u201d with a skull for the O. \u2014 Henry',
  },
  {
    id: 'the-bones-2',
    title: 'The Bones',
    issue: '#2',
    blurb: 'The human meets the Bones. He\u2019s growing bigger. It\u2019s time to enter the bones.',
    icon: '💀',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/the-bones-2.png',
    synopsis: [
      'The volcano erupts, a skull-faced human appears, and somebody screams \u201cWatch that!\u201d Ahh!',
      '\u201cNo gun, my gun!\u201d Hes growin\u2019 bigger! A helicopter buzzes overhead: \u201cTime to enter the bones.\u201d Meanwile\u2026',
      'Cliffs, a robed figure, more volcanoes \u2014 \u201cAah!\u201d \u2014 and a giant skull yelling \u201coof!\u201d as bones go flying. \u201cThe bones\u2026\u201d',
    ],
    characters: [
      { name: 'The Human', desc: 'Now skull-faced, possibly growing, definitely in trouble.' },
      { name: 'The Bones', desc: 'Bigger than ever. Maybe TOO big.' },
      { name: 'Helicopter Crew', desc: 'Calls the play: time to enter the bones.' },
    ],
    creatorsNote: 'This one has the most panels yet \u2014 fifteen! \u2014 Henry',
  },
  {
    id: 'the-bones-3',
    title: 'The Bones',
    issue: '#3',
    blurb: 'A day at the volcano turns into the final showdown. \u201cI must return the bones.\u201d The End.',
    icon: '💀',
    palette: { bg: '#FF6B35', accent: '#1A1A2E' },
    image: '/comics/the-bones-3.png',
    synopsis: [
      'A day at the volcano \u2014 \u201cWhat\u2019s happening?\u201d BOOM! Ahhh! A skeleton breaks free: \u201cI\u2019m free! I must get back to bay.\u201d At his base\u2026 \u201cThis is not good.\u201d',
      'Inside the base: \u201cI love looking at my kingdom.\u201d \u201cIt will be\u2026\u201d \u201cIt\u2019s not yours!\u201d They start fighting. \u201cI\u2019ll get you!\u201d They fought and faught.',
      'Then\u2026 \u201cSurrender or els!\u201d \u201cNO!\u201d A tank rolls in: \u201cI must return the bones.\u201d The hero rises from the lava with a bone in hand. The End.',
    ],
    characters: [
      { name: 'The Bone King', desc: 'Loves looking at his kingdom. Maybe a bit too much.' },
      { name: 'The Hero', desc: 'Driving a tank with one goal: return the bones.' },
      { name: 'The Skeleton', desc: '\u201cI\u2019m free!\u201d (briefly).' },
    ],
    creatorsNote: 'This is the FINAL Bones comic. The end is the end is the end. \u2014 Henry',
  },
  {
    id: 'dudes-in-persute-1',
    title: 'Dudes in Persute',
    issue: '#1',
    blurb: 'Dude 1, Dude 2, and Dude 3 chase down aliens through asteroids, motherships, and a tiny-fighter swarm \u2014 then return home for a HyFive!',
    icon: '🚀',
    palette: { bg: '#0057A8', accent: '#FFE135' },
    image: '/comics/dudes-in-persute-1.png',
    synopsis: [
      'Dude 1, Dude 2, and Dude 3 fly out in formation. \u201cAshtroid!\u201d Split up! They dodge rocks, attack the mothership, and meet Alien 1, Alien 2, and Alien 3.',
      'Dogfights everywhere \u2014 \u201caproaching\u201d, \u201cMiny fighters!\u201d, \u201c2 for 1\u201d, \u201cYess!\u201d, \u201cLet\u2019s go!\u201d \u2014 and the dudes blow through the swarm.',
      'Return to home planet: each Dude lands on his own pad, ignites a lightsaber (orange, purple), and they meet up for a giant HyFive! ',
    ],
    characters: [
      { name: 'Dude 1', desc: 'Lead pilot. Orange lightsaber. First to land.' },
      { name: 'Dude 2', desc: 'Wingman. Always ready for a 2-for-1.' },
      { name: 'Dude 3', desc: 'Purple lightsaber. Best high-fiver in the squadron.' },
      { name: 'Alien 1, 2 & 3', desc: 'The unlucky targets of the persute.' },
    ],
    creatorsNote: 'I love drawing the little ship banners with each Dude\u2019s name. \u2014 Henry',
  },
  {
    id: 'dudes-in-persute-2',
    title: 'Dudes in Persute',
    issue: '#2',
    blurb: '\u201c\u2026and the Gurdyans of the astroid belt / black hole demenchen.\u201d Maps, bomb lonchers, and a lightsaber showdown inside a black hole.',
    icon: '🚀',
    palette: { bg: '#1A1A2E', accent: '#FF6B35' },
    image: '/comics/dudes-in-persute-2.png',
    synopsis: [
      'The dudes plot a course through the asteroid belt past Jupiter and Mars. \u201cTime to dive out my seelie!\u201d Split up!',
      'Bomb loncher! Dude 1 fires through the rocks while Dude 3 sneaks around the back \u2014 straight into the black hole.',
      'Inside the black hole, lightsabers ignite: \u201cYour worst night\u201d, \u201cWho are you?\u201d \u201cI\u2019m a Gurdyan!\u201d \u201cTold you.\u201d \u201cNow we find the rest!\u201d \u2014 The King appears. \u201cLet\u2019s go!\u201d',
    ],
    characters: [
      { name: 'The Dudes', desc: 'Back in formation, deeper in space, bigger trouble.' },
      { name: 'Gurdyans of the Astroid Belt', desc: 'Lightsaber-wielding guardians who live inside a black hole. Obviously.' },
      { name: 'The King', desc: 'Shows up at the end, because every issue needs a King.' },
    ],
    creatorsNote: 'I spelled \u201cpursuit\u201d as \u201cpersute\u201d on purpose. It\u2019s cooler that way. \u2014 Henry',
  },
  {
    id: 'the-extra-special-comic',
    title: 'The Extra Special Comic',
    issue: '#1',
    blurb: 'A two-sided mega-issue: car chases, dream sequences, lightsaber duels on the front \u2014 and a full-on naval battle on the back side.',
    icon: '⭐',
    palette: { bg: '#FFE135', accent: '#FF6B35' },
    image: '/comics/the-extra-special-comic.png',
    pages: [
      '/comics/the-extra-special-comic-page-1.png',
      '/comics/the-extra-special-comic-page-2.png',
    ],
    synopsis: [
      'Front side: \u201cI\u2019ll get you back!\u201d A red car chases a blue car through stop signs. Meanwhile, lightsaber duels rage in the grass \u2014 \u201cArgggg!\u201d \u201cThat was close, oh no!\u201d \u2014 and a hero wakes up: \u201cAh, that was just a dream.\u201d Then prison cells, \u201cgot ya!\u201d, \u201cha!\u201d, a reunion (\u201cI have been looking for you!\u201d \u201cI did not no!\u201d), a ship setting sail (\u201cLet\u2019s go!\u201d), a landing (\u201cWe\u2019re here!\u201d \u201cWe made it!\u201d clap clap), and one last dungeon escape (\u201cOh!\u201d \u201cAyyy!\u201d \u201cI lost my weapon!\u201d \u201cToo late!\u201d).',
      'BACK SIDE: \u201cWater!\u201d The ships clash in the open sea \u2014 boom, boom \u2014 cannons, sails on fire, \u201chelp!\u201d someone yells from a sinking deck. \u201cYou take it!\u201d \u201cDuck!\u201d \u201cOh no!\u201d \u201cChomp!\u201d a sea monster shows up. Below the waves: \u201cgloop\u201d, \u201cglurp\u201d, \u201cggrrr!\u201d. Then prisoners in cells, a happy family portrait, and the headline: \u201cDaily News \u2014 We won!\u201d Final word: \u201che left the door open!\u201d',
    ],
    characters: [
      { name: 'The Red Car Driver', desc: '\u201cI\u2019ll get you back!\u201d Has unfinished business.' },
      { name: 'The Dreamer', desc: 'Wakes up relieved. It was just a dream. (Probably.)' },
      { name: 'Ship Captains', desc: 'Both sides shouting orders as the cannons fly.' },
      { name: 'Sea Monster', desc: 'Chomp.' },
      { name: 'The Reunited Friends', desc: '\u201cI have been looking for you!\u201d / \u201cI did not no!\u201d' },
      { name: 'The Daily News Team', desc: 'Reports the win. Notes that someone left the door open.' },
    ],
    creatorsNote: 'This one is the EXTRA special comic because it has a back side. Make sure you read both! \u2014 Henry',
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

// Returns the issues that share a title with the given comic, sorted by issue number.
export function getSeriesIssues(comic) {
  if (!comic) return [];
  return comics
    .filter((c) => c.title === comic.title)
    .slice()
    .sort((a, b) => parseIssueNumber(a.issue) - parseIssueNumber(b.issue));
}

// Returns { prev, next, index, total } for navigating within a series.
export function getSeriesNeighbors(comic) {
  const issues = getSeriesIssues(comic);
  if (issues.length <= 1) return { prev: null, next: null, index: 0, total: issues.length };
  const index = issues.findIndex((c) => c.id === comic.id);
  return {
    prev: index > 0 ? issues[index - 1] : null,
    next: index >= 0 && index < issues.length - 1 ? issues[index + 1] : null,
    index,
    total: issues.length,
  };
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
