type Question = {
  title: string,
  answers: {
    a : string,
    b: string,
    c?: string,
    d?: string
  },
  correctAnswer: string
}

const questions: Question[] = [
  {
    title: "Hur mycket väger en ishockeypuck?",
    answers: {
      a: "156-170 g",
      b: "171-185 g",
      c: "186-200 g"
    },
    correctAnswer: "a"
  },
  {
    title: "Hur många spelare får maximalt vara på isen från ett lag?",
    answers: {
      a: "5",
      b: "6",
      c: "7"
    },
    correctAnswer: "b"
  },
  {
    title: "Hur många SM-Guld har Frölunda vunnit?",
    answers: {
      a: "3",
      b: "5",
      c: "7"
    },
    correctAnswer: "b"
  },
  {
    title: "Vilken svensk har gjort mest poäng i NHL genom tiderna?",
    answers: {
      a: "Mats Sundin",
      b: "Börje Salming",
      c: "Peter Forsberg"
    },
    correctAnswer: "a"
  },
  {
    title: "Vad kallas Sveriges herrlandslag?",
    answers: {
      a: "Kronorna",
      b: "Två Kronor",
      c: "Tre Kronor"
    },
    correctAnswer: "c"
  },
  {
    title: "Hur många OS-Guld har Tre Kronor vunnit?",
    answers: {
      a: "2",
      b: "4",
      c: "6"
    },
    correctAnswer: "a"
  },
  {
    title: "Hur många VM-Guld har Tre Kronor vunnit?",
    answers: {
      a: "5",
      b: "8",
      c: "11"
    },
    correctAnswer: "c"
  },
  {
    title: "Vad heter Sveriges högsta liga för herrar?",
    answers: {
      a: "Allsvenskan",
      b: "SHL",
      c: "Elitserien"
    },
    correctAnswer: "b"
  },
  {
    title: "Har Adam spelat ishockey?",
    answers: {
      a: "Nej!",
      b: "Nej, han kan inte åka skridskor!",
      c: "Nej, han hatar hockey!"
    },
    correctAnswer: "b"
  }
];
