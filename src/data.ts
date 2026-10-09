/**
 * YOUR CONTENT LIVES HERE
 * Update this file to change the portfolio without touching component markup.
 * The projects below are explicitly labeled examples, not claims of completed work.
 * Replace them with your projects, set `isExample: false`, and supply source URLs.
 * Keep stable, unique `id` values so React can identify entries when reordered.
 */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  artwork: "network" | "language" | "vision";
  sourceUrl: string | null;
  isExample: boolean;
}

export interface Experience {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  current?: boolean;
}

export const profile = {
  name: "Benedict Cabral",
  initials: "BC",
  label: "Computer Science @ Georgia Tech",
  introduction: "Hi, I'm",
  headline: "I build models that encompass the field of AI.",
  summary:
    "Exploring the space between data, intelligence, and the things we can build with them.",
  heroNote: "Always learning. Always building.",
  // This GitHub profile is based on the repository owner. Edit if preferred.
  githubUrl: "https://github.com/Benedict-Cabral",
  // Replace null with your real URL/address. Missing links open an honest notice,
  // rather than sending visitors to a fabricated profile or email address.
  linkedinUrl: "https://www.linkedin.com/in/benedictcabral" as string | null,
  email: "benedictemmanuel.cabral@gmail.com" as string | null,
  // Put resume.pdf in public/ and set this to '/resume.pdf', or use an HTTPS URL.
  resumeUrl: null as string | null,
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const projectsSection = {
  eyebrow: "01 / Selected projects",
  title: "Curiosity, made tangible.",
  description:
    "An evolving collection of ideas, experiments, and things built along the way.",
  exampleNote: "Illustrative projects · Real work coming soon",
};

export const projects: Project[] = [
  {
    id: "neural-networks",
    title: "Learning from the ground up",
    category: "Machine learning",
    description:
      "An example space for a neural network project: turning mathematical foundations into models that learn.",
    tags: ["Python", "NumPy", "Neural networks"],
    artwork: "network",
    sourceUrl: null,
    isExample: true,
  },
  {
    id: "language-retrieval",
    title: "Making sense of language",
    category: "Natural language processing",
    description:
      "An example space for exploring language models, semantic search, and more useful ways to work with information.",
    tags: ["Python", "LLMs", "Embeddings"],
    artwork: "language",
    sourceUrl: null,
    isExample: true,
  },
  {
    id: "computer-vision",
    title: "A different way of seeing",
    category: "Computer vision",
    description:
      "An example space for teaching machines to recognize patterns and find structure in the visual world.",
    tags: ["PyTorch", "OpenCV", "Classification"],
    artwork: "vision",
    sourceUrl: null,
    isExample: true,
  },
];

export const about = {
  eyebrow: "02 / A little about me",
  title: "A student of how things work.",
  paragraphs: [
    "I'm Benedict, a Computer Science student at Georgia Tech with an interest in artificial intelligence and the models that make it possible.",
    "I'm drawn to the process: asking a good question, understanding the fundamentals, and building something to see where the idea leads.",
  ],
  interests: [
    "Artificial intelligence",
    "Machine learning",
    "Thoughtful engineering",
  ],
  timelineTitle: "The journey so far",
};

// Add internships, research, personal milestones, or other education here.
// Dates and additional experience are intentionally not invented.
export const experience: Experience[] = [
  {
    id: "georgia-tech",
    period: "Present",
    title: "Computer Science",
    organization: "Georgia Institute of Technology",
    description:
      "Building a foundation in computing and exploring the field of artificial intelligence.",
    current: true,
  },
];

export const resume = {
  title: "The details, all in one place.",
  description: "Education, experience, and the work in between.",
  unavailableText: "Résumé coming soon",
};

export const contact = {
  eyebrow: "03 / Get in touch",
  title: "Good things start with a conversation.",
  description:
    "Have an interesting idea, a question, or just want to talk about AI? I’d love to connect.",
  buttonLabel: "Say hello",
  footerNote: "Built with curiosity & a little caffeine.",
};

export const unavailableLinks = {
  linkedin: {
    title: "LinkedIn, coming soon.",
    description:
      "My LinkedIn profile isn’t linked here yet. In the meantime, you can find me on GitHub.",
  },
  contact: {
    title: "Let’s stay connected.",
    description:
      "Direct contact details are coming soon. For now, you can find my work and profile on GitHub.",
  },
};
