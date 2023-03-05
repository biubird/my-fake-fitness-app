const courses = [
  {
    id: 1,
    title: "Beginning Barre",
    slug: "beginning-barre",
    teacherId: 1,
    category: "Barre",
  },
  {
    id: 2,
    title: "Intermediate Barre",
    slug: "intermediate-barre",
    teacherId: 1,
    category: "Barre",
  },
  {
    id: 3,
    title: "Advanced Barre",
    slug: "advanced-barre",
    teacherId: 1,
    category: "Barre",
  },
  {
    id: 4,
    title: "Pilates Foundations",
    slug: "pilates-foundation",
    teacherId: 2,
    category: "Pilates",
  },
  {
    id: 5,
    title: "Pilates Matwork",
    slug: "pilates-matwork",
    teacherId: 2,
    category: "Pilates",
  },
  {
    id: 6,
    title: "Pilates Reformer",
    slug: "pilates-reformer",
    teacherId: 2,
    category: "Pilates",
  },
  {
    id: 7,
    title: "Beginning Hatha Yoga",
    slug: "beginning-hatha-yoga",
    teacherId: 3,
    category: "Yoga",
  },
  {
    id: 8,
    title: "Intermediate Hatha Yoga",
    slug: "intermediate-hatha-yoga",
    teacherId: 3,
    category: "Yoga",
  },
  {
    id: 9,
    title: "Principles of Meditation",
    slug: "meditation-principles",
    teacherId: 4,
    category: "Meditation",
  },
  {
    id: 10,
    title: "Guided Meditation",
    slug: "meditation-guided",
    teacherId: 4,
    category: "Meditation",
  },
];

const teachers = [
  { id: 1, name: "Carol Burnett" },
  { id: 2, name: "Dolly Parton" },
  { id: 3, name: "Hank Williams" },
  { id: 4, name: "Cheech Marin" },
];

const newCourse = {
  id: null,
  title: "",
  teacherId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  teachers,
};
