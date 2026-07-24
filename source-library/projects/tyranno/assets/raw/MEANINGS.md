01
[A_awww]
/cute

02
[B_my bad]
/sorry

03
[C_coming]
/chill

04
[D_delicious]
/appreciate

05
[E_eww]
/exo me?

06
[F_feelin'it]
/really liking sth.

07
[G_going]
/done talking

08
[H_homie]
/friendly

09
[I_me myself]
/represent T.rex

10
[J_jk]
/just kidding

11
[K_krazy]
/intense or wild

12
[L_left]
/direction 
    ←
13
[M_mhm]
/mood

14
[N_no clue]
/dunno

15
[O_omg]
/shock

16
[P_props]
/respect or credit

17
[Q_question]
/curious

18
[R_right]
/direction 
    →

19
[S_stop!]

20
[T_true]
/agree

22
[V_vegen]
/vegetables only

23
[W_whoa]
/what do you mean

24
[X_xoxo]
/kisses & hugs

25
[Y_see ya!]

21
[U_undestand]
/got it

26
[Z_z's]
/sleep time


KIT_NOSE

KIT_EYE_TEEN

KIT_EYE_ADULT

KIT_FEET

KIT_CLAW

GRAPH_TOWARD LEFT

GRAPH_HUMAN

GRAPH_DINO

GRAPH_TOWARD RIGHT

GRAPH_ROAR

GRAPH_HOME
/HUMAN & DINO

GRAPH_FOOD

GRAPH_WATER


import type { TyrannoChar, CharCategory, PoseConfig } from '@/types';

// Default neutral pose — anatomically balanced T.rex stance
const defaultPose: PoseConfig = {
  headRotateX: 0.1,
  headRotateY: 0,
  neckRotateX: 0.15,
  bodyRotateX: 0,
  bodyRotateY: 0,
  jawOpen: 0.05,
  tailRotateX: -0.15,
  tailRotateY: 0,
  leftArmRotateX: 0.3,
  rightArmRotateX: 0.3,
  leftLegRotateX: 0,
  rightLegRotateX: 0,
  spineBend: 0,
  overallRotateY: 0,
};

const pose = (overrides: Partial<PoseConfig>): PoseConfig => ({ ...defaultPose, ...overrides });

// ═══════════════════════════════════════════
// ALPHABET A–Z
// ═══════════════════════════════════════════
export const alphabetChars: TyrannoChar[] = [
  {
    id: 'a', char: 'A', category: 'alphabet', glyph: 'A',
    pronunciation: '/A_awww/',
    meaning: 'cute',
    description: 'Awww — Head tilts down with a gentle lean, eyes soften. The T.rex encounters something irresistibly adorable.',
    highlightedParts: ['head', 'eyes'],
    color: '#ff88cc',
    pose: pose({ headRotateX: 0.45, headRotateY: -0.15, neckRotateX: 0.25, jawOpen: 0.1, tailRotateX: -0.25 }),
  },
  {
    id: 'b', char: 'B', category: 'alphabet', glyph: 'B',
    pronunciation: '/B_my bad/',
    meaning: 'sorry',
    description: 'My Bad — Head bows low in apology, body dips slightly. Even the king of dinosaurs knows when to show remorse.',
    highlightedParts: ['head', 'body'],
    color: '#66aaff',
    pose: pose({ headRotateX: 0.7, headRotateY: 0.1, bodyRotateX: 0.15, neckRotateX: 0.2, jawOpen: 0, tailRotateX: -0.1, leftArmRotateX: -0.2, rightArmRotateX: -0.2 }),
  },
  {
    id: 'c', char: 'C', category: 'alphabet', glyph: 'C',
    pronunciation: '/C_coming/',
    meaning: 'chill',
    description: 'Coming — Body leans forward with confident stride posture. The T.rex is on the move but keeping it casual.',
    highlightedParts: ['body', 'feet'],
    color: '#44dd88',
    pose: pose({ headRotateX: -0.15, bodyRotateX: -0.1, leftLegRotateX: -0.2, rightLegRotateX: 0.05, tailRotateX: -0.25, tailRotateY: -0.15 }),
  },
  {
    id: 'd', char: 'D', category: 'alphabet', glyph: 'D',
    pronunciation: '/D_delicious/',
    meaning: 'appreciate',
    description: 'Delicious — Jaws open wide, head tilted back as if savoring an incredible taste. Pure gastronomic joy.',
    highlightedParts: ['jaw', 'head'],
    color: '#ff9944',
    pose: pose({ headRotateX: -0.5, jawOpen: 0.9, neckRotateX: -0.1, bodyRotateX: -0.15, tailRotateX: -0.2 }),
  },
  {
    id: 'e', char: 'E', category: 'alphabet', glyph: 'E',
    pronunciation: '/E_eww/',
    meaning: 'exo me?',
    description: 'Eww/Excuse me? — Head recoils backward in disgust, a visceral rejection of something unpleasant.',
    highlightedParts: ['head', 'eyes'],
    color: '#aa66ff',
    pose: pose({ headRotateX: 0.35, headRotateY: 0.2, neckRotateX: 0.1, jawOpen: 0.15, bodyRotateX: 0.1, tailRotateX: 0.1 }),
  },
  {
    id: 'f', char: 'F', category: 'alphabet', glyph: 'F',
    pronunciation: "/F_feelin' it/",
    meaning: 'really liking sth.',
    description: "Feelin' It — Head bobs with rhythm, body sways. The T.rex is vibing, completely absorbed in the moment.",
    highlightedParts: ['head', 'body', 'spine'],
    color: '#ffcc33',
    pose: pose({ headRotateX: -0.2, headRotateY: 0.3, bodyRotateY: 0.1, neckRotateX: -0.1, tailRotateY: 0.2, jawOpen: 0.1 }),
  },
  {
    id: 'g', char: 'G', category: 'alphabet', glyph: 'G',
    pronunciation: '/G_going/',
    meaning: 'done talking',
    description: 'Going — Body turns to depart, tail swinging. Conversation over, the T.rex walks away without looking back.',
    highlightedParts: ['body', 'tail', 'feet'],
    color: '#44aaff',
    pose: pose({ bodyRotateY: 0.3, tailRotateY: -0.3, headRotateY: -0.2, leftLegRotateX: -0.15, rightLegRotateX: 0.1 }),
  },
  {
    id: 'h', char: 'H', category: 'alphabet', glyph: 'H',
    pronunciation: '/H_homie/',
    meaning: 'friendly',
    description: 'Homie — Arms raised in greeting, head nodding warmly. The T.rex acknowledges its crew with casual respect.',
    highlightedParts: ['limbs', 'head', 'body'],
    color: '#66cc88',
    pose: pose({ leftArmRotateX: 1.6, rightArmRotateX: 1.6, headRotateX: -0.25, headRotateY: -0.1, bodyRotateX: -0.05, jawOpen: 0.1 }),
  },
  {
    id: 'i', char: 'I', category: 'alphabet', glyph: 'I',
    pronunciation: '/I_me myself/',
    meaning: 'represent T.rex',
    description: 'Me Myself — Head tilts with confident self-awareness. The T.rex stands proud, representing its kind.',
    highlightedParts: ['head', 'eyes', 'body', 'feet'],
    color: '#ff6644',
    pose: pose({ headRotateX: -0.15, headRotateY: 0.4, neckRotateX: 0.1, bodyRotateY: 0.05, leftArmRotateX: 0.5, rightArmRotateX: 0.5, tailRotateX: -0.15 }),
  },
  {
    id: 'j', char: 'J', category: 'alphabet', glyph: 'J',
    pronunciation: '/J_jk/',
    meaning: 'just kidding',
    description: 'Just Kidding — Head tilts playfully, a mischievous posture. The T.rex is messing around, nothing serious.',
    highlightedParts: ['head', 'jaw'],
    color: '#ffaa44',
    pose: pose({ headRotateY: -0.5, headRotateX: -0.2, jawOpen: 0.4, neckRotateX: 0.1, bodyRotateX: 0.05, tailRotateY: 0.15 }),
  },
  {
    id: 'k', char: 'K', category: 'alphabet', glyph: 'K',
    pronunciation: '/K_krazy/',
    meaning: 'intense or wild',
    description: 'Krazy — Body lunges forward with wild energy, head thrown back. Unpredictable, chaotic, completely unhinged.',
    highlightedParts: ['eyes', 'head', 'body', 'feet'],
    color: '#ff3366',
    pose: pose({ headRotateX: -0.6, headRotateY: 0.25, bodyRotateX: -0.25, jawOpen: 0.6, leftArmRotateX: 1.0, rightArmRotateX: 1.0, leftLegRotateX: -0.25, tailRotateX: -0.35, tailRotateY: 0.3 }),
  },
  {
    id: 'l', char: 'L', category: 'alphabet', glyph: 'L',
    pronunciation: '/L_left/',
    meaning: 'direction ←',
    description: 'Left — Head and body turn sharply to the left. Directional signal pointing toward the western horizon.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44ccff',
    pose: pose({ headRotateY: 0.7, bodyRotateY: 0.35, tailRotateY: -0.4, neckRotateX: 0.1 }),
  },
  {
    id: 'm', char: 'M', category: 'alphabet', glyph: 'M',
    pronunciation: '/M_mhm/',
    meaning: 'mood',
    description: 'Mhm — Head dips in acknowledgment, eyes half-closed. The T.rex is feeling it, completely in the zone.',
    highlightedParts: ['head', 'eyes'],
    color: '#cc88ff',
    pose: pose({ headRotateX: 0.2, headRotateY: -0.1, neckRotateX: 0.1, jawOpen: 0, bodyRotateX: 0.05, leftArmRotateX: 0.2, rightArmRotateX: 0.2 }),
  },
  {
    id: 'n', char: 'N', category: 'alphabet', glyph: 'N',
    pronunciation: '/N_no clue/',
    meaning: 'dunno',
    description: 'No Clue — Head tilts in confusion, a blank expression. The T.rex has no idea what is going on.',
    highlightedParts: ['head', 'eyes'],
    color: '#8899aa',
    pose: pose({ headRotateY: 0.35, headRotateX: -0.1, jawOpen: 0.1, neckRotateX: 0.15, bodyRotateY: 0.05 }),
  },
  {
    id: 'o', char: 'O', category: 'alphabet', glyph: 'O',
    pronunciation: '/O_omg/',
    meaning: 'shock',
    description: 'OMG — Jaw drops wide open, head snaps up in disbelief. Maximum shock and disbelief mode activated.',
    highlightedParts: ['jaw', 'head', 'eyes', 'body'],
    color: '#ff6633',
    pose: pose({ headRotateX: -0.75, jawOpen: 1.0, neckRotateX: -0.15, bodyRotateX: -0.15, leftArmRotateX: 0.6, rightArmRotateX: 0.6, tailRotateX: -0.2 }),
  },
  {
    id: 'p', char: 'P', category: 'alphabet', glyph: 'P',
    pronunciation: '/P_props/',
    meaning: 'respect or credit',
    description: 'Props — Head dips forward in respect, a nod of acknowledgment. Giving credit where credit is due.',
    highlightedParts: ['head', 'body'],
    color: '#ffcc44',
    pose: pose({ headRotateX: 0.35, bodyRotateX: 0.08, neckRotateX: 0.15, jawOpen: 0, leftArmRotateX: 0.4, rightArmRotateX: 0.4, tailRotateX: -0.1 }),
  },
  {
    id: 'q', char: 'Q', category: 'alphabet', glyph: 'Q',
    pronunciation: '/Q_question/',
    meaning: 'curious',
    description: 'Question — Head cocks to the side, intensely curious. The T.rex is investigating something suspicious.',
    highlightedParts: ['head', 'eyes'],
    color: '#66ddaa',
    pose: pose({ headRotateY: -0.45, headRotateX: -0.25, neckRotateX: 0.2, jawOpen: 0.1, leftArmRotateX: 0.3 }),
  },
  {
    id: 'r', char: 'R', category: 'alphabet', glyph: 'R',
    pronunciation: '/R_right/',
    meaning: 'direction →',
    description: 'Right — Head and body pivot sharply to the right. Directional signal toward the eastern hunting grounds.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44ccff',
    pose: pose({ headRotateY: -0.7, bodyRotateY: -0.35, tailRotateY: 0.4, neckRotateX: 0.1 }),
  },
  {
    id: 's', char: 'S', category: 'alphabet', glyph: 'S',
    pronunciation: '/S_stop!/',
    meaning: 'halt',
    description: 'Stop! — Body tenses, head raised in alarm. A commanding freeze signal to halt all movement immediately.',
    highlightedParts: ['body', 'head', 'tail'],
    color: '#ff4444',
    pose: pose({ bodyRotateX: 0.05, headRotateX: -0.3, headRotateY: 0.1, jawOpen: 0.4, tailRotateX: 0.2, leftLegRotateX: -0.05, rightLegRotateX: -0.05, leftArmRotateX: 0.5, rightArmRotateX: 0.5 }),
  },
  {
    id: 't', char: 'T', category: 'alphabet', glyph: 'T',
    pronunciation: '/T_true/',
    meaning: 'agree',
    description: 'True — Head nods firmly in agreement, body steady. A solid confirmation of truth and acceptance.',
    highlightedParts: ['head', 'body', 'spine'],
    color: '#44ff88',
    pose: pose({ headRotateX: -0.15, neckRotateX: -0.1, bodyRotateX: -0.05, tailRotateX: -0.15, jawOpen: 0 }),
  },
  {
    id: 'u', char: 'U', category: 'alphabet', glyph: 'U',
    pronunciation: '/U_understand/',
    meaning: 'got it',
    description: 'Understand — Head lowers slightly, eyes focused in comprehension. The message has been received and processed.',
    highlightedParts: ['head', 'eyes', 'body'],
    color: '#44aaff',
    pose: pose({ headRotateX: 0.15, headRotateY: 0.15, neckRotateX: 0.1, jawOpen: 0.05, bodyRotateX: 0.05, leftArmRotateX: 0.2 }),
  },
  {
    id: 'v', char: 'V', category: 'alphabet', glyph: 'V',
    pronunciation: '/V_vegen/',
    meaning: 'vegetables only',
    description: 'Vegen — Head dips low to the ground, foraging posture. The T.rex opts for a plant-based meal surprisingly.',
    highlightedParts: ['head', 'feet', 'body'],
    color: '#66cc44',
    pose: pose({ headRotateX: 0.65, headRotateY: 0.1, neckRotateX: 0.35, bodyRotateX: 0.2, jawOpen: 0.2, leftArmRotateX: -0.2, rightArmRotateX: -0.2, leftLegRotateX: 0.1 }),
  },
  {
    id: 'w', char: 'W', category: 'alphabet', glyph: 'W',
    pronunciation: '/W_whoa/',
    meaning: 'what do you mean',
    description: 'Whoa — Head snaps back in disbelief, jaw slightly open. A reaction of utter shock and confusion combined.',
    highlightedParts: ['head', 'eyes', 'jaw'],
    color: '#ff8844',
    pose: pose({ headRotateX: 0.5, headRotateY: -0.2, jawOpen: 0.5, neckRotateX: 0.1, bodyRotateX: 0.1, leftArmRotateX: 0.3, rightArmRotateX: 0.3 }),
  },
  {
    id: 'x', char: 'X', category: 'alphabet', glyph: 'X',
    pronunciation: '/X_xoxo/',
    meaning: 'kisses & hugs',
    description: 'XOXO — The iconic T.rex pose, tiny arms spread wide as if attempting a hug. Awkward but heartfelt affection.',
    highlightedParts: ['limbs', 'body', 'head'],
    color: '#ff6699',
    pose: pose({ headRotateX: -0.3, headRotateY: 0.1, leftArmRotateX: 1.4, rightArmRotateX: 1.4, jawOpen: 0.2, bodyRotateX: -0.05, tailRotateX: -0.15 }),
  },
  {
    id: 'y', char: 'Y', category: 'alphabet', glyph: 'Y',
    pronunciation: '/Y_see ya!/',
    meaning: 'farewell',
    description: 'See Ya! — Head turns away dismissively, body pivoting to leave. A casual goodbye, no drama.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44ddcc',
    pose: pose({ headRotateY: -0.6, bodyRotateY: -0.3, tailRotateY: 0.35, headRotateX: -0.1, leftLegRotateX: -0.1 }),
  },
  {
    id: 'z', char: 'Z', category: 'alphabet', glyph: 'Z',
    pronunciation: "/Z_z's/",
    meaning: 'sleep time',
    description: "Z's — Body curls low, head rests down. The T.rex settles in for a well-deserved nap, tail wrapped close.",
    highlightedParts: ['body', 'head', 'feet', 'tail'],
    color: '#6688cc',
    pose: pose({ headRotateX: 0.85, bodyRotateX: 0.3, neckRotateX: 0.3, leftArmRotateX: -0.3, rightArmRotateX: -0.3, leftLegRotateX: 0.2, rightLegRotateX: 0.2, tailRotateX: -0.4, jawOpen: 0 }),
  },
];

// ═══════════════════════════════════════════
// KIT: Body-Part Modifiers
// ═══════════════════════════════════════════
export const kitChars: TyrannoChar[] = [
  {
    id: 'kit_nose', char: 'NOSE', category: 'kit', glyph: '◈',
    pronunciation: '/NOSE_sniff/',
    meaning: 'detect scent',
    description: 'Nose — The olfactory sense engaged. Head thrust forward, nostrils flared, reading the chemical landscape.',
    highlightedParts: ['head'],
    color: '#00ddaa',
    pose: pose({ headRotateX: -0.55, headRotateY: 0.1, neckRotateX: 0.3, bodyRotateX: -0.1, jawOpen: 0.05, tailRotateX: -0.2 }),
  },
  {
    id: 'kit_eye_teen', char: 'EYE_TEEN', category: 'kit', glyph: '◉',
    pronunciation: '/EYE_young/',
    meaning: 'juvenile gaze',
    description: 'Eye (Teen) — Wide, curious eyes of a young T.rex. The world is new and every stimulus demands attention.',
    highlightedParts: ['eyes', 'head'],
    color: '#66ccff',
    pose: pose({ headRotateX: -0.25, headRotateY: -0.3, bodyRotateX: -0.05, leftArmRotateX: 0.4, tailRotateX: 0.15 }),
  },
  {
    id: 'kit_eye_adult', char: 'EYE_ADULT', category: 'kit', glyph: '◎',
    pronunciation: '/EYE_adult/',
    meaning: 'calculating stare',
    description: 'Eye (Adult) — Narrowed, calculating eyes of a mature hunter. Every movement is analyzed for threat or opportunity.',
    highlightedParts: ['eyes', 'head', 'body'],
    color: '#ff8844',
    pose: pose({ headRotateX: -0.15, headRotateY: 0.25, jawOpen: 0.15, bodyRotateY: 0.1, leftArmRotateX: 0.5, tailRotateY: 0.1 }),
  },
  {
    id: 'kit_feet', char: 'FEET', category: 'kit', glyph: '⬟',
    pronunciation: '/FEET_stomp/',
    meaning: 'ground pound',
    description: 'Feet — Stance and locomotion modifiers. Connection to earth, readiness to sprint, or the warning stomp of authority.',
    highlightedParts: ['feet', 'tail'],
    color: '#ffcc44',
    pose: pose({ leftLegRotateX: -0.25, rightLegRotateX: 0.1, tailRotateX: -0.35, bodyRotateX: 0.05, leftArmRotateX: 0.25, rightArmRotateX: 0.25 }),
  },
  {
    id: 'kit_claw', char: 'CLAW', category: 'kit', glyph: '✦',
    pronunciation: '/CLAW_slash/',
    meaning: 'weapon extend',
    description: 'Claw — Forelimb weapons fully extended. Though small, these 8-inch claws are lethally precise instruments.',
    highlightedParts: ['claw', 'limbs'],
    color: '#ff3366',
    pose: pose({ leftArmRotateX: 1.3, rightArmRotateX: 1.3, headRotateX: -0.35, jawOpen: 0.5, bodyRotateX: -0.15, tailRotateY: 0.25 }),
  },
];

// ═══════════════════════════════════════════
// GRAPH: Pictographic Logograms
// ═══════════════════════════════════════════
export const graphChars: TyrannoChar[] = [
  {
    id: 'graph_body', char: 'BODY', category: 'graph', glyph: '◯',
    pronunciation: '/BODY_self/',
    meaning: 'physical form',
    description: 'Body — The physical self. A logogram representing the corporeal existence and anatomical presence.',
    highlightedParts: ['body', 'spine'],
    color: '#44aaff',
    pose: pose({ headRotateX: -0.1, bodyRotateX: -0.05, leftArmRotateX: 0.4, rightArmRotateX: 0.4, tailRotateX: -0.1 }),
  },
  {
    id: 'graph_human', char: 'HUMAN', category: 'graph', glyph: '☺',
    pronunciation: '/HUMAN_small/',
    meaning: 'two-legs',
    description: 'Human — The small two-legged creature. A curious being, sometimes prey, sometimes inexplicable ally.',
    highlightedParts: ['eyes', 'head'],
    color: '#ffcc66',
    pose: pose({ headRotateX: -0.4, headRotateY: -0.25, bodyRotateX: -0.08, leftArmRotateX: 0.35, tailRotateY: 0.1 }),
  },
  {
    id: 'graph_dino', char: 'DINO', category: 'graph', glyph: '🦖',
    pronunciation: '/DINO_kin/',
    meaning: 'saurian kin',
    description: 'Dino — Fellow saurian recognition. A bond transcending species, united by scales and ancient lineage.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44dd88',
    pose: pose({ headRotateX: -0.2, bodyRotateY: 0.15, tailRotateY: 0.3, leftArmRotateX: 0.35, rightArmRotateX: 0.35, neckRotateX: 0.1 }),
  },
  {
    id: 'graph_roar', char: 'ROAR', category: 'graph', glyph: '☄',
    pronunciation: '/ROAR_blast/',
    meaning: 'sonic command',
    description: 'Roar — The full-throated declaration. Sound waves that command territory, summon allies, and warn enemies.',
    highlightedParts: ['jaw', 'head', 'body', 'spine'],
    color: '#ff4444',
    pose: pose({ headRotateX: -0.8, jawOpen: 1.0, bodyRotateX: -0.2, leftArmRotateX: 0.5, rightArmRotateX: 0.5, tailRotateX: 0.3, spineBend: -0.15 }),
  },
  {
    id: 'graph_home', char: 'HOME', category: 'graph', glyph: '⌂',
    pronunciation: '/HOME_den/',
    meaning: 'territory',
    description: 'Home — The den, the territory, the sacred space. Where the T.rex rests and reigns supreme.',
    highlightedParts: ['body', 'feet', 'tail'],
    color: '#ffcc44',
    pose: pose({ bodyRotateX: 0.08, headRotateX: 0.15, leftArmRotateX: -0.15, rightArmRotateX: -0.15, tailRotateX: 0.15, leftLegRotateX: 0.05, spineBend: 0.08 }),
  },
  {
    id: 'graph_food', char: 'FOOD', category: 'graph', glyph: '♨',
    pronunciation: '/FOOD_prey/',
    meaning: 'sustenance',
    description: 'Food — The sustenance signal. Recognition of prey, carrion, or surprisingly, an appetizing plant.',
    highlightedParts: ['jaw', 'head', 'body'],
    color: '#ff8844',
    pose: pose({ headRotateX: -0.5, jawOpen: 0.65, neckRotateX: 0.2, bodyRotateX: -0.12, leftArmRotateX: 0.4, tailRotateX: -0.1 }),
  },
  {
    id: 'graph_water', char: 'WATER', category: 'graph', glyph: '≋',
    pronunciation: '/WATER_life/',
    meaning: 'aqua source',
    description: 'Water — The life source. Cool relief found in rivers and lakes, essential for survival in any epoch.',
    highlightedParts: ['head', 'jaw', 'body'],
    color: '#00ccff',
    pose: pose({ headRotateX: 0.4, jawOpen: 0.25, bodyRotateX: 0.15, leftArmRotateX: -0.1, rightArmRotateX: -0.1, neckRotateX: 0.2 }),
  },
  {
    id: 'graph_left', char: 'TOWARD LEFT', category: 'graph', glyph: '←',
    pronunciation: '/LEFT_west/',
    meaning: 'direction west',
    description: 'Toward Left — Movement indicator pointing west. Toward the setting sun and unknown territories.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44ccff',
    pose: pose({ headRotateY: 0.65, bodyRotateY: 0.3, tailRotateY: -0.35, neckRotateX: 0.1 }),
  },
  {
    id: 'graph_right', char: 'TOWARD RIGHT', category: 'graph', glyph: '→',
    pronunciation: '/RIGHT_east/',
    meaning: 'direction east',
    description: 'Toward Right — Movement indicator pointing east. Toward the rising sun and familiar hunting grounds.',
    highlightedParts: ['head', 'body', 'tail'],
    color: '#44ccff',
    pose: pose({ headRotateY: -0.65, bodyRotateY: -0.3, tailRotateY: 0.35, neckRotateX: 0.1 }),
  },
];

// ═══════════════════════════════════════════
// NUMBERS: 0–10
// ═══════════════════════════════════════════
export const numberChars: TyrannoChar[] = [
  {
    id: 'num_0', char: '0', category: 'numbers', glyph: '0',
    pronunciation: '/ZERO_void/',
    meaning: 'nothing',
    description: 'Zero — The void state. Absence of quantity, the blank slate before counting begins.',
    highlightedParts: ['body'],
    color: '#8866ff',
    pose: defaultPose,
  },
  {
    id: 'num_1', char: '1', category: 'numbers', glyph: '1',
    pronunciation: '/ONE_solo/',
    meaning: 'individual',
    description: 'One — The singular entity. Self-sufficiency and solitary dominance of a lone predator.',
    highlightedParts: ['head', 'body'],
    color: '#44aaff',
    pose: pose({ headRotateX: -0.15, bodyRotateY: 0.08, leftArmRotateX: 0.25, tailRotateY: 0.08 }),
  },
  {
    id: 'num_2', char: '2', category: 'numbers', glyph: '2',
    pronunciation: '/TWO_pair/',
    meaning: 'duo bond',
    description: 'Two — The pair bond. The minimum unit of cooperation, whether hunting mates or rivals in truce.',
    highlightedParts: ['head', 'body', 'eyes'],
    color: '#66ccff',
    pose: pose({ headRotateY: 0.25, bodyRotateY: 0.1, leftArmRotateX: 0.35, rightArmRotateX: 0.35, tailRotateY: 0.15 }),
  },
  {
    id: 'num_3', char: '3', category: 'numbers', glyph: '3',
    pronunciation: '/THREE_trio/',
    meaning: 'small pack',
    description: 'Three — A hunting party. Coordinated movement, shared purpose, the beginnings of social structure.',
    highlightedParts: ['body', 'head', 'tail'],
    color: '#44ddaa',
    pose: pose({ bodyRotateY: 0.15, headRotateY: -0.15, tailRotateY: -0.15, leftArmRotateX: 0.3, leftLegRotateX: -0.08 }),
  },
  {
    id: 'num_4', char: '4', category: 'numbers', glyph: '4',
    pronunciation: '/FOUR_squad/',
    meaning: 'team unit',
    description: 'Four — The squad. A coordinated sub-unit moving as one, dominating territory through numbers.',
    highlightedParts: ['body', 'limbs', 'head'],
    color: '#44ff88',
    pose: pose({ bodyRotateX: -0.08, headRotateX: -0.15, leftArmRotateX: 0.4, rightArmRotateX: 0.4, leftLegRotateX: -0.08, rightLegRotateX: -0.08, tailRotateX: -0.08 }),
  },
  {
    id: 'num_5', char: '5', category: 'numbers', glyph: '5',
    pronunciation: '/FIVE_many/',
    meaning: 'hand count',
    description: 'Five — Many. The upper limit of casual counting, marking a significant gathering.',
    highlightedParts: ['head', 'body', 'limbs', 'tail'],
    color: '#ffcc44',
    pose: pose({ headRotateX: -0.25, bodyRotateX: -0.1, leftArmRotateX: 0.45, rightArmRotateX: 0.45, tailRotateX: 0.15, leftLegRotateX: -0.08, spineBend: -0.08 }),
  },
  {
    id: 'num_6', char: '6', category: 'numbers', glyph: '6',
    pronunciation: '/SIX_half/',
    meaning: 'half dozen',
    description: 'Six — Half a dozen. A moderate gathering, more than a few but not yet overwhelming numbers.',
    highlightedParts: ['head', 'body', 'feet'],
    color: '#ff8844',
    pose: pose({ headRotateY: 0.25, bodyRotateY: 0.15, leftArmRotateX: 0.3, rightArmRotateX: 0.3, leftLegRotateX: -0.15, tailRotateY: 0.25 }),
  },
  {
    id: 'num_7', char: '7', category: 'numbers', glyph: '7',
    pronunciation: '/SEVEN_luck/',
    meaning: 'sacred number',
    description: 'Seven — The sacred number. Imbued with mystical significance, the luckiest count in any world.',
    highlightedParts: ['head', 'eyes', 'body'],
    color: '#cc66ff',
    pose: pose({ headRotateX: -0.35, headRotateY: -0.15, bodyRotateX: -0.08, leftArmRotateX: 0.4, rightArmRotateX: 0.4, neckRotateX: 0.1, tailRotateX: 0.15 }),
  },
  {
    id: 'num_8', char: '8', category: 'numbers', glyph: '8',
    pronunciation: '/EIGHT_loop/',
    meaning: 'infinity',
    description: 'Eight — The infinite loop. Cycles within cycles, the eternal return of natural patterns.',
    highlightedParts: ['body', 'spine', 'tail'],
    color: '#8866ff',
    pose: pose({ bodyRotateY: 0.2, headRotateY: -0.25, tailRotateY: 0.3, leftArmRotateX: 0.3, rightArmRotateX: 0.3, spineBend: 0.1 }),
  },
  {
    id: 'num_9', char: '9', category: 'numbers', glyph: '9',
    pronunciation: '/NINE_peak/',
    meaning: 'maximum',
    description: 'Nine — Near completion. The peak before the return to zero, maximum expression and intensity.',
    highlightedParts: ['head', 'body', 'limbs', 'spine'],
    color: '#ff3366',
    pose: pose({ headRotateX: -0.45, bodyRotateX: -0.15, leftArmRotateX: 0.55, rightArmRotateX: 0.55, tailRotateX: 0.25, leftLegRotateX: -0.15, spineBend: -0.12 }),
  },
  {
    id: 'num_10', char: '10', category: 'numbers', glyph: '10',
    pronunciation: '/TEN_complete/',
    meaning: 'wholeness',
    description: 'Ten — Completion and wholeness. The full cycle from nothing to everything and back to potential.',
    highlightedParts: ['head', 'body', 'spine', 'tail', 'limbs', 'feet'],
    color: '#ffcc44',
    pose: pose({ headRotateX: -0.35, bodyRotateX: -0.12, neckRotateX: 0.15, leftArmRotateX: 0.45, rightArmRotateX: 0.45, tailRotateX: 0.25, leftLegRotateX: -0.12, rightLegRotateX: -0.12, spineBend: -0.08 }),
  },
];

// ═══════════════════════════════════════════
// Exports
// ═══════════════════════════════════════════
export const allChars: TyrannoChar[] = [
  ...alphabetChars,
  ...kitChars,
  ...graphChars,
  ...numberChars,
];

export const categoryLabels: Record<CharCategory, string> = {
  alphabet: 'Alphabet (A–Z)',
  kit: 'KIT',
  graph: 'GRAPH',
  numbers: 'NUMBERS',
};

export const getCharsByCategory = (category: CharCategory): TyrannoChar[] => {
  return allChars.filter(c => c.category === category);
};

export const getCharById = (id: string): TyrannoChar | undefined => {
  return allChars.find(c => c.id === id);
};

