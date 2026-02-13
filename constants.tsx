
import { SectionType, AppData, Section, Question } from './types';

export const ADMIN_PASSWORD = "123";

// روابط التواصل والدليل
export const LOGO_URL = "https://i.ibb.co/VvW3K9k/logo.png";
export const DOC_LINK = "https://sg.docworkspace.com/d/sbCaitrMqAwyK7iP_daj8tinopebk5qvgta?sa=601.1245";
export const WHATSAPP_LINK = "https://wa.me/qr/FXURTSKXPGJAP1";
export const TELEGRAM_DEV_LINK = "https://t.me/Hudyf1";
export const TELEGRAM_CHANNEL_LINK = "https://t.me/tafaoqe";

export const MOTIVATIONS = [
  "﴿وَقُل رَبِّ زِدْنِي عِلْمًا﴾",
  "﴿إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا﴾",
  "«مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ»",
  "النجاح هو مجموع محاولات صغيرة تتكرر كل يوم.",
  "ثق بنفسك، فأنت قادر على تحقيق المستحيل بعون الله."
];

const getSpellingQuestions = (unitId: number): Question[] => {
  if (unitId === 1) {
    return [
      { id: 's1-1', text: 'pleasant, unpleasant: efficient, ', correctAnswer: 'inefficient' },
      { id: 's1-2', text: 'happy, unhappy: legal, ', correctAnswer: 'illegal' },
      { id: 's1-3', text: 'polite, impolite: popular, ', correctAnswer: 'unpopular' },
      { id: 's1-4', text: 'dependent, independent: patient, ', correctAnswer: 'impatient' },
      { id: 's1-5', text: 'happy, unhappy: correct, ', correctAnswer: 'incorrect' },
      { id: 's1-6', text: 'approve, disapprove: fortunate, ', correctAnswer: 'unfortunate' },
      { id: 's1-7', text: 'direct, Indirect: polite, ', correctAnswer: 'impolite' },
      { id: 's1-8', text: 'legal, illegal: moral, ', correctAnswer: 'immoral' },
      { id: 's1-9', text: 'polite, impolite: conscious, ', correctAnswer: 'unconscious' },
      { id: 's1-10', text: 'correct, incorrect: happy, ', correctAnswer: 'unhappy' },
      { id: 's1-11', text: 'polite, impolite: usual, ', correctAnswer: 'unusual' },
      { id: 's1-12', text: 'fair, unfair: convenient, ', correctAnswer: 'inconvenient' },
      { id: 's1-13', text: 'fair, unfair: pleasant, ', correctAnswer: 'unpleasant' },
      { id: 's1-14', text: 'usual, unusual: dependent, ', correctAnswer: 'independent' },
      { id: 's1-15', text: 'usual, unusual: healthy, ', correctAnswer: 'unhealthy' },
      { id: 's1-16', text: 'happy, unhappy: possible, ', correctAnswer: 'impossible' },
      { id: 's1-17', text: 'popular, unpopular: fortunate, ', correctAnswer: 'unfortunate' },
      { id: 's1-18', text: 'fair, unfair: intelligent, ', correctAnswer: 'unintelligent' },
      { id: 's1-19', text: 'moral, immoral: fair, ', correctAnswer: 'unfair' },
      { id: 's1-20', text: 'Joint in the arm: .........', correctAnswer: 'shoulder', acceptedAnswers: ['wrist', 'elbow', 'shoulder'] },
      { id: 's1-21', text: 'Joint in the arm: w', correctAnswer: 'wrist' },
      { id: 's1-22', text: 'Joint in the arm: e', correctAnswer: 'elbow' },
      { id: 's1-23', text: 'joint in the leg: ', correctAnswer: 'ankle', acceptedAnswers: ['knee', 'ankle'] },
      { id: 's1-24', text: 'covering a cut: ', correctAnswer: 'plaster', acceptedAnswers: ['bandage', 'plaster'] },
      { id: 's1-25', text: ':joint: ankle ,treatment: ', correctAnswer: 'cream', acceptedAnswers: ['plaster', 'bandage', 'cream'] },
      { id: 's1-26', text: 'Inside the body: ', correctAnswer: 'heart', acceptedAnswers: ['stomach', 'blood', 'bones', 'skin', 'heart'] },
      { id: 's1-27', text: 'joint in the arm: ', correctAnswer: 'elbow', acceptedAnswers: ['shoulder', 'wrist', 'elbow'] },
      { id: 's1-28', text: 'elbow, joint: medicine: ', correctAnswer: 'treatment' },
      { id: 's1-29', text: 'joint in the leg: ', correctAnswer: 'ankle', acceptedAnswers: ['knee', 'ankle'] },
      { id: 's1-30', text: 'joint in the leg: a', correctAnswer: 'ankle' }
    ];
  }
  if (unitId === 2) {
    return [
      { id: 's2-1', text: 'appt, appointment; co', correctAnswer: 'company' },
      { id: 's2-2', text: 'freq, frequent; lic', correctAnswer: 'license' },
      { id: 's2-3', text: 'exp, experience; yrs', correctAnswer: 'years' },
      { id: 's2-4', text: 'appt, appointment; exp', correctAnswer: 'experience' },
      { id: 's2-5', text: 'computer, comp.; appointment', correctAnswer: 'appt.' },
      { id: 's2-6', text: 'available, avail; computer', correctAnswer: 'comp.' },
      { id: 's2-7', text: 'frequent, freq; company', correctAnswer: 'co.' },
      { id: 's2-8', text: 'experience, exp.; driving licence', correctAnswer: 'driving lic.' },
      { id: 's2-9', text: '18yrs, 18 years; office bldgs', correctAnswer: 'office buildings' },
      { id: 's2-10', text: 'The abbreviation of computer is', correctAnswer: 'comp.' },
      { id: 's2-11', text: 'appointment, can abbreviated into:', correctAnswer: 'appt.' },
      { id: 's2-12', text: '(comp.) The abbreviation of', correctAnswer: 'computer' },
      { id: 's2-13', text: 'happened, occurred; alerted', correctAnswer: 'called' },
      { id: 's2-14', text: 'alerted, called; Investigate', correctAnswer: 'find out' },
      { id: 's2-15', text: 'injured, hurt: occurred', correctAnswer: 'happened' },
      { id: 's2-16', text: 'alerted, called; injured,', correctAnswer: 'hurt' },
      { id: 's2-17', text: 'The informal word of (property) is', correctAnswer: 'stuff', acceptedAnswers: ['things', 'stuff/things'] },
      { id: 's2-18', text: 'mtl dtctr, metal detector; cstms ffers', correctAnswer: 'customs officers' },
      { id: 's2-19', text: 'radar speed gun: rdr spd gn; security experts: ', correctAnswer: 'scrty xprts' },
      { id: 's2-20', text: 'ftprnts, fingerprints; wtnss ntrvws', correctAnswer: 'witness interviews' }
    ];
  }
  if (unitId === 3) {
    return [
      { id: 's3-1', text: 'Qualification, qualified: comfort, ', correctAnswer: 'comfortable' },
      { id: 's3-2', text: 'residence, residential: friend, ', correctAnswer: 'friendly' },
      { id: 's3-3', text: 'Comfort, comfortable: Qualification, ', correctAnswer: 'qualified' },
      { id: 's3-4', text: 'experience, experienced: residence, ', correctAnswer: 'residential' },
      { id: 's3-5', text: 'tailor, tailored: experience, ', correctAnswer: 'experienced' },
      { id: 's3-6', text: 'Friend, friendly: tailor, ', correctAnswer: 'tailored' }
    ];
  }
  return [];
};

const createDefaultSections = (unitId: number): Section[] => {
  const sections: Section[] = [
    {
      id: `u${unitId}-g1`,
      unitId: unitId,
      type: SectionType.GRAMMAR_TRANSFORM,
      title: 'القواعد',
      motivation: MOTIVATIONS[0],
      questions: unitId === 1 ? [
        { id: 'q1', text: 'He read a book. (Present Simple)', correctAnswer: 'He reads a book.', acceptedAnswers: ['He reads a book'] },
        { id: 'q2', text: 'She is playing now. (Past Simple)', correctAnswer: 'She played now.', acceptedAnswers: ['She played'] }
      ] : []
    },
    {
      id: `u${unitId}-g2`,
      unitId: unitId,
      type: SectionType.GRAMMAR_MCQ,
      title: 'القواعد - اختيارات',
      motivation: MOTIVATIONS[1],
      questions: unitId === 1 ? [
        { id: 'q3', text: "I'm calling (about / because) your advert in yesterday's paper.", options: ['about', 'because'], correctAnswer: "about" },
        { id: 'q4', text: "(___) Mr. Hazem?", options: ['Could I speak to', 'I want to talk to'], correctAnswer: 'Could I speak to' },
        { id: 'q5', text: "You must be 18 years old to (___) the military.", options: ['belong', 'join'], correctAnswer: 'join' },
        { id: 'q6', text: "Good morning. (___) Mr. Hazem?", options: ['Is that', 'Are you'], correctAnswer: 'Is that' },
        { id: 'q7', text: "The military needs people to (___) its equipment and vehicles.", options: ['care for', 'maintain'], correctAnswer: 'maintain' },
        { id: 'q8', text: "(___) is Samir Essam?", options: ['This', 'That'], correctAnswer: 'This' }
      ] : []
    },
    {
      id: `u${unitId}-r1`,
      unitId: unitId,
      type: SectionType.READING,
      title: 'القطع الاستيعابية',
      motivation: "التركيز هو مفتاح فهم النص واستخراج الأجوبة.",
      questions: unitId === 1 ? [
        {
          id: 'r1-najla-1',
          readingPassage: "Najla Imad is an Iraqi table tennis player. She has faced great challenges with bravery and determination.",
          text: 'What did Najla like to do as a little girl?',
          correctAnswer: 'She liked to wait patiently at her doorstep for her father, Mr Imad Lafta, to come home from work.',
          acceptedAnswers: ['wait patiently at her doorstep for her father']
        },
        {
          id: 'r1-najla-2',
          readingPassage: "Najla lost much of her right arm and both legs as a result of a bomb attack when she was three.",
          text: 'What happened to Najla as a result of the bomb attack?',
          correctAnswer: 'She lost much of her right arm and both legs.',
          acceptedAnswers: ['lost much of her right arm and both legs']
        },
        {
          id: 'r1-najla-3',
          readingPassage: "The Iraqi healthcare system provided the necessary treatments and medication to help Najla.",
          text: 'How did the Iraqi healthcare system help Najla?',
          correctAnswer: 'The Iraqi healthcare system provided the necessary treatments and medication to help her.',
          acceptedAnswers: ['provided the necessary treatments and medication']
        },
        {
          id: 'r1-najla-4',
          readingPassage: "At the age of ten, Najla discovered table tennis, which changed her life again.",
          text: 'How did Najla’s life change a second time?',
          correctAnswer: 'At the age of ten, her life would change a second time: she discovered table tennis.',
          acceptedAnswers: ['she discovered table tennis']
        },
        {
          id: 'r1-najla-5',
          readingPassage: "Prostheses allowed Najla to play standing, which improved her game.",
          text: 'Why did the prostheses help Najla play better?',
          correctAnswer: 'She was able to play standing, which made a big difference to her game.',
          acceptedAnswers: ['She was able to play standing']
        },
        {
          id: 'r1-najla-6',
          readingPassage: "Najla won the gold medal in Paris 2024 through skill and hard work.",
          text: 'How did Najla win the Paralympic gold medal?',
          correctAnswer: 'She played skillfully, defeated top players, and won the final match in Paris 2024 by three sets to one.',
          acceptedAnswers: ['won the final match in Paris 2024 by three sets to one']
        },
        {
          id: 'r1-najla-7',
          readingPassage: "Before the Paralympics, Najla shared an inspiring message about determination.",
          text: 'What did Najla say in an interview before the Paralympics?',
          correctAnswer: 'Najla said ‘Never stop, nothing is impossible. With our determination and resolve, we can achieve what we want and make our dreams a reality.’',
          acceptedAnswers: ['Never stop nothing is impossible']
        },
        {
          id: 'r1-najla-mcq-1',
          text: 'What did Najla want to do but couldn\'t anymore?',
          options: ['go to school', 'run around', 'use a wheelchair'],
          correctAnswer: 'run around'
        },
        {
          id: 'r1-najla-mcq-2',
          text: 'How old was Najla when she started playing table tennis?',
          options: ['10', '18', '19'],
          correctAnswer: '10'
        },
        {
          id: 'r1-najla-mcq-3',
          text: 'When Najla earned a place in the Iraqi Paralympic team, she started receiving...',
          options: ['financial support', 'emotional support', 'support from the Paralympic Games'],
          correctAnswer: 'financial support'
        },
        {
          id: 'r1-najla-mcq-4',
          text: 'The prostheses allowed Najla to...',
          options: ['play in a different position', 'hold the racket with her other hand', 'take part in competitions'],
          correctAnswer: 'play in a different position'
        },
        {
          id: 'r1-najla-mcq-5',
          text: 'Najla won the Paris Paralympic gold medal in...',
          options: ['2020', '2022', '2024'],
          correctAnswer: '2024'
        },
        {
          id: 'r1-najla-comp-1',
          text: 'Najla was only ......................... years old when a bomb changed her life forever.',
          correctAnswer: 'three'
        },
        {
          id: 'r1-najla-comp-2',
          text: 'Najla had to learn to live in a ......................... .',
          correctAnswer: 'wheelchair'
        },
        {
          id: 'r1-najla-comp-3',
          text: 'When Najla start playing table tennis, she had to learn how to hold the racket in her ......................... hand.',
          correctAnswer: 'left'
        },
        {
          id: 'r1-najla-comp-4',
          text: 'Najla joined the Iraqi Paralympic team when she was ......................... .',
          correctAnswer: '12'
        },
        {
          id: 'r1-najla-comp-5',
          text: 'At 16, she won the ......................... in the 2022 Asian Para Games.',
          correctAnswer: 'gold medal'
        },
        {
          id: 'r1-najla-comp-6',
          text: 'Her opponent in the final match of the Paris Paralympics had won first place in the Games in ......................... .',
          correctAnswer: 'Tokyo 2020 champion'
        }
      ] : (unitId === 2 ? [
        {
          id: 'u2-r-police-1',
          text: 'Where do police officers go when a crime has been committed?',
          correctAnswer: 'Police officers are sent to the place where it happened.',
          acceptedAnswers: ['They go to the place where it happened', 'to the place where it happened']
        },
        {
          id: 'u2-r-police-2',
          text: 'Who helps police officers identify fingerprints?',
          correctAnswer: 'Fingerprint experts do that.',
          acceptedAnswers: ['Fingerprint experts']
        },
        {
          id: 'u2-r-police-3',
          text: 'Where do pickpockets often commit crimes?',
          correctAnswer: 'They often commit crimes in crowded areas.',
          acceptedAnswers: ['in crowded areas']
        },
        {
          id: 'u2-r-police-4',
          text: 'How can witnesses help the police?',
          correctAnswer: 'They can help the police by telling them what a criminal looks like or what time a crime was committed.',
          acceptedAnswers: ['By telling them what a criminal looks like', 'By telling them what time a crime was committed']
        },
        {
          id: 'u2-r-police-5',
          text: 'What should you do if you are lost and need help?',
          correctAnswer: 'You can just ask a police officer for directions.',
          acceptedAnswers: ['ask a police officer for directions']
        },
        {
          id: 'u2-r-police-d1',
          text: 'When is being a police officer dangerous?',
          correctAnswer: 'It can be dangerous when they have to arrest somebody or stop a fight.',
          acceptedAnswers: ['when they have to arrest somebody', 'when they stop a fight']
        },
        {
          id: 'u2-r-police-d2',
          text: 'When is the police station open?',
          correctAnswer: 'It is open all the time.',
          acceptedAnswers: ['all the time']
        },
        {
          id: 'u2-r-police-d3',
          text: 'Why does the police officer like his job? (Give two reasons)',
          correctAnswer: 'He likes solving crimes and helping people.',
          acceptedAnswers: ['solving crimes', 'helping people', 'making his city a better place']
        },
        {
          id: 'u2-r-radar-1',
          text: 'When did police officers start using radar speed guns?',
          correctAnswer: 'over 70 years ago.',
          acceptedAnswers: ['More than 70 years ago']
        },
        {
          id: 'u2-r-radar-2',
          text: 'What happens when radio waves from a radar speed gun hit a car that’s stopped?',
          correctAnswer: 'They are the same when they bounce back to the gun.',
          acceptedAnswers: ['The waves bounce back the same']
        },
        {
          id: 'u2-r-radar-3',
          text: 'Can radar guns take pictures?',
          correctAnswer: 'Yes, some radar guns can take pictures.',
          acceptedAnswers: ['Yes some can']
        },
        {
          id: 'u2-r-radar-4',
          text: 'What is a radar detector?',
          correctAnswer: 'A radar detector is a machine that makes a beeping sound when they detect a radar gun.',
          acceptedAnswers: ['A machine that makes a beeping sound']
        },
        {
          id: 'u2-r-radar-5',
          text: 'What other way can drivers find out if a radar speed gun is being used ahead?',
          correctAnswer: 'They can use apps that use information reported by other drivers.',
          acceptedAnswers: ['using apps']
        },
        {
          id: 'u2-r-radar-6',
          text: 'How can mistakes with radar speed guns be avoided?',
          correctAnswer: 'police officers are trained to use them properly, and the guns are checked and fixed regularly.',
          acceptedAnswers: ['training and regular maintenance']
        },
        { id: 'u2-r-tf-1', text: 'Police departments don’t use radar guns anymore.', options: ['T', 'F'], correctAnswer: 'F' },
        { id: 'u2-r-tf-2', text: 'Radar guns can only calculate the speed of a car moving towards them.', options: ['T', 'F'], correctAnswer: 'F' },
        { id: 'u2-r-tf-3', text: 'Some radar guns are shaped a bit like guns.', options: ['T', 'F'], correctAnswer: 'T' },
        { id: 'u2-r-tf-4', text: 'A radar detector makes a beeping noise if it senses a radar being used in the area.', options: ['T', 'F'], correctAnswer: 'T' },
        { id: 'u2-r-tf-5', text: 'There are two main problems with radar detectors.', options: ['T', 'F'], correctAnswer: 'T' },
        { id: 'u2-r-tf-6', text: 'Some people think radar guns don’t work well.', options: ['T', 'F'], correctAnswer: 'T' },
        { id: 'u2-r-tf-7', text: 'Police must be trained to use the radar gun correctly.', options: ['T', 'F'], correctAnswer: 'T' },
        { id: 'u2-r-tf-8', text: 'Radar guns don’t need any maintenance.', options: ['T', 'F'], correctAnswer: 'F' }
      ] : [])
    },
    {
      id: `u${unitId}-m1`,
      unitId: unitId,
      type: SectionType.MATCHING,
      title: 'التوصيلات',
      motivation: MOTIVATIONS[2],
      questions: unitId === 1 ? [
        {
          id: 'q-match-compound',
          text: 'Match words from List A with List B to make compound nouns:',
          correctAnswer: '',
          matchingPairs: [
            { left: 'metal', right: 'detector' },
            { left: 'speed', right: 'limit' },
            { left: 'web', right: 'design' },
            { left: 'crime', right: 'scene' },
            { left: 'course', right: 'fees' },
            { left: 'packed', right: 'lunch' }
          ]
        },
        {
          id: 'q-match-definitions',
          text: 'Match the words with their correct definitions:',
          correctAnswer: '',
          matchingPairs: [
            { left: 'Diet', right: 'what you eat' },
            { left: 'Overweight', right: 'weighing more than you should' },
            { left: 'Regular', right: 'when you do something often' },
            { left: 'Lungs', right: 'part of body for breathing' },
            { left: 'Nonsmokers', right: "people who don't smoke" },
            { left: 'Bring up', right: 'to raise (children)' }
          ]
        }
      ] : (unitId === 2 ? [
        {
          id: 'u2-match-32',
          text: 'Match the definitions with the correct words (Exercise A, Page 32):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'without someone looking after it', right: 'Unattended' },
            { left: 'bags and suitcases that carry your possessions on a journey', right: 'baggage' },
            { left: 'there is nothing in it', right: 'Empty' },
            { left: 'throw away / get rid of', right: 'dispose of' },
            { left: 'say you are carrying something you need to pay duty on', right: 'Declare' },
            { left: 'when passengers or bags are inspected', right: 'Screening' },
            { left: 'the amount of liquid are allowed to carry in their bags', right: 'liquids rule' },
            { left: 'they are responsible for regulation international trade', right: 'Customs' }
          ]
        },
        {
          id: 'u2-match-36',
          text: 'Match verbs with their definitions (Exercise A, Page 36):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'branches', right: 'parts' },
            { left: 'Join', right: 'become a member of' },
            { left: 'install', right: 'put in' },
            { left: 'Maintain', right: 'make sure it keeps working' },
            { left: 'Officer', right: 'someone in higher position' },
            { left: 'Supervise', right: 'be in charge of' },
            { left: 'Civilian', right: 'outside the military' }
          ]
        },
        {
          id: 'u2-match-48',
          text: 'Match words from List A with List B to make compound nouns (Exercise B, Page 48):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'security', right: 'camera' },
            { left: 'metal', right: 'detector' },
            { left: 'x-ray', right: 'machine' },
            { left: 'speed', right: 'limit' },
            { left: 'speeding', right: 'ticket' },
            { left: 'radar speed', right: 'gun' },
            { left: 'conveyor', right: 'belt' },
            { left: 'seat', right: 'belt' },
            { left: 'crime', right: 'scene' }
          ]
        },
        {
          id: 'u2-match-49',
          text: 'Match the parts of the sentences (Exercise D, Page 49):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'I must get up early tomorrow', right: 'because I don\'t want to be late again' },
            { left: 'You needn\'t take so much baggage', right: 'on a weekend trip' },
            { left: 'We mustn\'t forget', right: 'to take our passports' },
            { left: 'You need to get a special licence', right: 'to drive a lorry' },
            { left: 'She has to', right: 'wear a uniform at her new job' },
            { left: 'I don\'t have to', right: 'leave so soon' }
          ]
        },
        {
          id: 'u2-match-35',
          text: 'Match the sentences about expectations (Exercise E, Page 35):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'You shouldn\'t have any trouble doing the work.', right: 'because it\'s very easy' },
            { left: 'It shouldn\'t take me more than 15 minutes to drive there', right: 'because there isn\'t much traffic' },
            { left: 'They should be very comfortable', right: 'because it\'s a very nice hotel' },
            { left: 'I can speak English and Arabic', right: 'so I should be able to talk to most of the visitors' },
            { left: 'If he\'s used computers before', right: 'he should know how to use this software' },
            { left: 'If you send the letter today', right: 'She should get it by Monday' }
          ]
        },
        {
          id: 'u2-match-40',
          text: 'Match the definitions (Exercise B, Page 40):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'expensive items like gold rings and necklaces', right: 'Jewellery' },
            { left: 'how you feel about an object', right: 'sentimental value' },
            { left: 'things you do for a specific reason', right: 'Measures' },
            { left: 'thieves who break into homes', right: 'Burglars' },
            { left: 'extremely, so much that you can\'t believe it', right: 'unbelievable' },
            { left: 'very important', right: 'Essential' }
          ]
        },
        {
          id: 'u2-match-45',
          text: 'Match the words with their meanings (Exercise D, Page 45):',
          correctAnswer: '',
          matchingPairs: [
            { left: 'not friendly', right: 'Enemy' },
            { left: 'people who break the speed limit', right: 'Speeders' },
            { left: 'to measure using math\'s', right: 'Calculate' },
            { left: 'Considers', right: 'take into account' },
            { left: 'a fine you receive for going over the speed limit', right: 'speeding ticket' },
            { left: 'not allowed by law', right: 'Illegal' },
            { left: 'to say something is true', right: 'Claim' },
            { left: 'actions taken to keep something in good condition', right: 'Maintenance' }
          ]
        }
      ] : [])
    },
    {
      id: `u${unitId}-s-all`,
      unitId: unitId,
      type: SectionType.SPELLING,
      title: 'الإملاء',
      motivation: MOTIVATIONS[3],
      questions: getSpellingQuestions(unitId)
    },
    {
      id: `u${unitId}-fill-gaps`,
      unitId: unitId,
      type: SectionType.FILL_GAPS,
      title: 'الاسقاطات - تمارين',
      motivation: MOTIVATIONS[4],
      questions: unitId === 1 ? [
        { id: 'c5-1', group: 'تمرين C ص 5', text: '1. Have you got to a cold? No, I always ......................... when I put pepper on my food.', correctAnswer: 'sneeze' },
        { id: 'c5-2', group: 'تمرين C ص 5', text: '2. He was ......................... three times in the night. I think the food at the restaurant where he ate wasn`t very fresh.', correctAnswer: 'sick' },
        { id: 'c5-3', group: 'تمرين C ص 5', text: '3. She cut her hand while she was chopping vegetables. It was a very deep cut and it was ......................... a lot, so she had to go to hospital and have it stitched.', correctAnswer: 'bleeding' },
        { id: 'c5-4', group: 'تمرين C ص 5', text: '4. My back ......................... all the time. It only feels O.K, when I am lying down.', correctAnswer: 'hurts' },
        { id: 'c5-5', group: 'تمرين C ص 5', text: '5. She can`t play tennis. She has ......................... her right arm.', correctAnswer: 'broken' },
        { id: 'c5-6', group: 'تمرين C ص 5', text: '6. I went swimming yesterday and now my eyes are ......................... from the chemicals in the pool.', correctAnswer: 'sore' },
        { id: 'c5-7', group: 'تمرين C ص 5', text: '7. Where exactly is the ......................... and how long have you had it.', correctAnswer: 'pain' },
        { id: 'c5-8', group: 'تمرين C ص 5', text: '8. It was a very hot day and she hadn`t eaten or drunk anything all day. That`s why the suddenly went pale and felt ......................... during the lesson.', correctAnswer: 'dizzy' }
      ] : (unitId === 2 ? [
        { id: 'u2-b46-1', group: 'تمرين B ص 46', text: '1. Drivers must ......................... the speed limit.', correctAnswer: 'obey' },
        { id: 'u2-b46-2', group: 'تمرين B ص 46', text: '2. You mustn\'t ......................... without your seat belt on.', correctAnswer: 'drive' },
        { id: 'u2-b46-3', group: 'تمرين B ص 46', text: '3. Your car mustn\'t ......................... broken lights.', correctAnswer: 'have' },
        { id: 'u2-b46-4', group: 'تمرين B ص 46', text: '4. You can take the bus, so you don\'t have to ......................... your car.', correctAnswer: 'take' },
        { id: 'u2-b46-5', group: 'تمرين B ص 46', text: '5. When you ride a motorcycle, you must ......................... a helmet.', correctAnswer: 'wear' },
        { id: 'u2-b46-6', group: 'تمرين B ص 46', text: '6. You must ......................... a fine when you get a ticket.', correctAnswer: 'pay' },
        { id: 'u2-b46-7', group: 'تمرين B ص 46', text: '7. You must slow down at a roundabout, but you don\'t have to ......................... .', correctAnswer: 'stop' },
        { id: 'u2-b46-8', group: 'تمرين B ص 46', text: '8. You must ......................... let cross the street at a pedestrian crossing.', correctAnswer: 'let' },
        { id: 'u2-b46-9', group: 'تمرين B ص 46', text: '9. If you ......................... a crime, the police will arrest you.', correctAnswer: 'commit' },
        { id: 'u2-b30-1', group: 'تمرين B ص 30', text: '1. Police officers can also ......................... traffic so that drivers stay safe.', correctAnswer: 'direct' },
        { id: 'u2-b30-2', group: 'تمرين B ص 30', text: '2. Police officers use ......................... to make sure people are not driving too fast.', correctAnswer: 'radar speed gun' },
        { id: 'u2-b30-3', group: 'تمرين B ص 30', text: '3. In a crime scene, they try to find ......................... like fingerprints and footprints.', correctAnswer: 'evidence' },
        { id: 'u2-b30-4', group: 'تمرين B ص 30', text: '4. They also ......................... witnesses who might have some information related to the crime.', correctAnswer: 'interview' },
        { id: 'u2-b30-5', group: 'تمرين B ص 30', text: '5. Police officers not only solve crimes but also ......................... them.', correctAnswer: 'prevent' },
        { id: 'u2-b30-6', group: 'تمرين B ص 30', text: '6. For example, they watch crowded places where ......................... might act.', correctAnswer: 'pickpockets' },
        { id: 'u2-c44-1', group: 'تمرين C ص 44', text: '1. the first use of radar was to find airplanes and ......................... in a war.', correctAnswer: 'ships' },
        { id: 'u2-c44-2', group: 'تمرين C ص 44', text: '2. A radar speed gun sends radio waves, which hit the car and ......................... back.', correctAnswer: 'bounce' },
        { id: 'u2-c44-3', group: 'تمرين C ص 44', text: '3. Radar speed guns work in both directions, so you can get a ......................... even after you\'ve passed the police officer.', correctAnswer: 'ticket' },
        { id: 'u2-c44-4', group: 'تمرين C ص 44', text: '4. Radar speed guns can be ......................... or fitted in police cars.', correctAnswer: 'hand-held' },
        { id: 'u2-c44-5', group: 'تمرين C ص 44', text: '5. the police know who broke the law by checking the ......................... of the car in photos.', correctAnswer: 'number plate' },
        { id: 'u2-c44-6', group: 'تمرين C ص 44', text: '6. Apps that tell you about speed cameras and radar speed guns aren\'t ......................... .', correctAnswer: 'reliable' },
        { id: 'u2-c44-7', group: 'تمرين C ص 44', text: '7. Radar detectors are not permitted in many places, so you can receive a ......................... for having one.', correctAnswer: 'fine' },
        { id: 'u2-c44-8', group: 'تمرين C ص 44', text: '8. If used properly and checked regularly, radar speed guns rarely make ......................... .', correctAnswer: 'mistakes' },
        { 
            id: 'u2-c48-para', 
            group: 'تمرين C ص 48', 
            text: 'The police got a call about a robbery last night. When they got to the ......................... , they found footprints and ......................... , they think were left by the criminal. They are still ......................... the crime, but they think they will ......................... someone soon. Police caught a ......................... , who had stolen several wallets and mobile phones at the airport. The same man also stole some baggage that a passenger had left ......................... , in the waiting room while he bought a magazine. The thief had ......................... the stolen property when the police found him, but they spoke to a ......................... , who said she had seen him steal the items.', 
            correctAnswer: '', 
            correctAnswers: ['crime scene', 'fingerprints', 'investigating', 'arrest', 'pickpocket', 'unattended', 'disposed of', 'witness']
        },
        { id: 'u2-mod5-1', group: 'النموذج الخامس', text: '1. The police got a call about a ......................... last night.', correctAnswer: 'robbery' },
        { id: 'u2-mod5-2', group: 'النموذج الخامس', text: '2. The police officer ......................... the criminal and put him in prison.', correctAnswer: 'investigated' },
        { id: 'u2-mod5-3', group: 'النموذج الخامس', text: '3. A robbery ......................... yesterday and a valuable thing were stolen.', correctAnswer: 'occurred' },
        { id: 'u2-mod5-4', group: 'النموذج الخامس', text: '4. The security guard saw the thieves because he was watching the ......................... .', correctAnswer: 'screen' },
        { id: 'u2-mod5-5', group: 'النموذج الخامس', text: '5. If you lost. you can ask a police officer for ......................... .', correctAnswer: 'direction' }
      ] : [])
    }
  ];

  return sections;
};

const generateUnits = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `الوحدة ${i + 1}`,
    sections: createDefaultSections(i + 1)
  }));
};

export const INITIAL_DATA: AppData = {
  units: generateUnits(8)
};
