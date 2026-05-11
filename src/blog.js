// Blog data - imported into App.jsx and passed down as props
const blog = {
  name: "The Curious Mind",
  image: "https://picsum.photos/seed/bloglogo/200/200",
  about:
    "A personal blog exploring technology, creativity, and the ideas that shape our world. Written by a developer who believes great code and great stories have more in common than you'd think.",
  posts: [
    {
      id: 1,
      title: "Why I Fell in Love with React",
      date: "April 25, 2026",
      preview:
        "It started with a simple component. One function, one return statement, and suddenly the whole idea of building UIs clicked for me. Here's the story of how React changed the way I think about the web.",
    },
    {
      id: 2,
      title: "The Art of Debugging: A Developer's Meditation",
      date: "March 28, 2026",
      preview:
        "Debugging isn't just a skill — it's a mindset. Over the time I've learned that the best debuggers aren't the ones who know the most syntax, but the ones who ask the best questions.",
    },
    {
      id: 3,
      title: "Building in Public: Lessons from My First Open Source Project",
      date: "March 5, 2026",
      preview:
        "I published my first open source project sometime ago. Here's what happened — the good, the embarrassing, and the surprisingly heartwarming parts nobody warns you about.",
    },
    {
      id: 4,
      title: "CSS Is Not Broken, You Just Need to Listen to It",
      date: "February 28, 2026",
      preview:
        "Every developer I know has cursed at CSS at some point. But after years of fighting it, I've come to believe that CSS is actually brilliant — and most of our frustrations are really misunderstandings.",
    },
  ],
};

export default blog;