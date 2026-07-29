// Single source of truth for all page copy.
// Edit text here — the sections read from this file, so JSX rarely needs touching.

export const site = {
  name: 'Newumal Weerasinghe',
  shortName: 'Newumal',
  role: 'Associate Tech Lead & Team Lead',
  email: 'newumaalweerasinghe@gmail.com',
  location: 'Colombo, Sri Lanka',
  phone: '+94 71 7349697',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/in/newumal/',
  github: 'https://github.com/newumal',
  youtube: 'https://youtube.com/@buildwithnewumal',
  youtubeHandle: '@buildwithnewumal',
  email: 'mailto:newumaalweerasinghe@gmail.com',
};

export const nav = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Approach', to: 'philosophy' },
  { name: 'Journey', to: 'journey' },
  { name: 'Skills', to: 'skills' },
  { name: 'Work', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

export const hero = {
  kicker: 'Associate Tech Lead · Full-Stack Engineer',
  headline: 'I build products and lead teams with AI.',
  subheadline:
    'Full-stack engineer and team lead. I ship outcomes, not just code — scalable, cost-aware systems that create real value for users and the business, accelerated by AI.',
  primaryCta: { label: 'View my work', to: 'projects' },
  secondaryCta: { label: 'Read my story', to: 'about' },
  // Right-hand sidebar cards, echoing the reference layout
  sidebar: {
    now: {
      label: 'Now',
      title: 'Leading engineering at Velaris',
      body: 'Driving team-wide AI adoption and a root-cause delivery process on a B2B SaaS platform built with React, Node, and AWS.',
    },
    focus: {
      label: 'What I focus on',
      body: 'Outcomes over output — turning business goals into scalable, cost-aware systems that create real value for users and the business.',
    },
  },
};

export const about = {
  kicker: 'About me',
  heading: 'Engineer turned engineering leader.',
  paragraphs: [
    "I'm an Associate Tech Lead and Team Lead at Velaris, where I lead a cross-functional team building a B2B SaaS platform on React, Node, and AWS. Over the last few years I've grown from senior engineer into a leadership role — owning major integrations, driving performance and stability, and changing how my team prioritizes and delivers work.",
    "I think like an owner, not just an engineer — I care about the outcome for the user and the customer, not just closing a ticket. When I design a system I'm weighing scalability, cost, market fit, and which emerging technologies are genuinely worth adopting.",
    'My edge is AI. I adopted it early, used it to ship features faster and with fewer bugs, and then brought my team up to the same level with a shared framework and custom agents grounded in our product and domain. I believe in AI-assisted, human-owned engineering: use AI to move faster, but keep the decisions with the people.',
  ],
  stats: [
    { value: '7+ yrs', label: 'Building & leading SaaS products' },
    { value: '2+ yrs', label: 'Hands-on across the AI lifecycle' },
    { value: '5 / 3', label: 'Salesforce components shipped vs. planned' },
    { value: '0', label: 'Post-release bugs on key launches' },
  ],
};

export const philosophy = {
  kicker: 'How I work',
  heading: 'Engineering & leadership philosophy.',
  intro:
    'Five principles shape how I think, build, and lead — the difference between a list of features and a track record of real outcomes.',
  cards: [
    {
      no: '01',
      title: 'Outcomes over output.',
      body: 'I optimize for value delivered to users and customers — real outcomes, not tickets closed. Every piece of work should move a metric that matters, not just clear a backlog.',
    },
    {
      no: '02',
      title: 'Design for scale, cost, and the market.',
      body: 'I architect with scalability and cost-efficiency in mind, and choose technologies for the problem and the market — adopting new and emerging tech deliberately, where it creates a real edge.',
    },
    {
      no: '03',
      title: 'AI-assisted, human-owned.',
      body: "I use AI across the whole engineering lifecycle — design, brainstorming, trade-off discussions, and delivery — not just coding. But every decision stays human-owned. I built custom agents grounded in our product patterns and business domain so the output is high-quality, not hallucinated.",
    },
    {
      no: '04',
      title: 'Fix the root cause, not the symptom.',
      body: 'I led a shift from constant firefighting to permanent fixes — analyzing recurring issues, writing root-cause reports with real effort and timelines, and aligning product and engineering to fix the right things. It gave the team its capacity back, and other teams adopted the approach.',
    },
    {
      no: '05',
      title: 'Lead by lifting others.',
      body: 'Leadership is making the team faster, not just myself. I mentor engineers, run enablement sessions, step up under pressure, and care about a healthy, high-standards engineering culture.',
    },
  ],
};

export const journey = {
  kicker: 'Journey',
  heading: 'Growth, ownership, and impact.',
  items: [
    {
      period: '2026 — Present',
      role: 'Associate Tech Lead & Team Lead',
      org: 'Velaris',
      summary:
        'Lead a cross-functional team; drove team-wide AI adoption and a root-cause delivery process; own technical direction and mentoring.',
      tags: ['Leadership', 'AI adoption', 'System design'],
    },
    {
      period: '2022 — 2026',
      role: 'Senior Software Engineer',
      org: 'Velaris',
      summary:
        'AI features (Copilot, meeting-intelligence integrations), Salesforce and Google/Azure OAuth integrations, email re-architecture, and cost & performance work.',
      tags: ['React', 'Node/NestJS', 'AWS', 'LLMs / RAG'],
    },
    {
      period: '2021 — 2022',
      role: 'Software Engineer',
      org: 'Sezenta',
      summary: 'React/Node web and mobile apps, REST APIs, and AWS.',
      tags: ['React Native', 'Node', 'MongoDB'],
    },
    {
      period: '2019 — 2021',
      role: 'Development Engineer & Co-Founder',
      org: 'STEM Labs',
      summary:
        'Built software and a patented IoT hardware product; taught robotics and electronics.',
      tags: ['IoT', 'Product', 'Teaching'],
    },
    {
      period: '2017 — 2019',
      role: 'Associate Software Engineer',
      org: 'Effective Solutions',
      summary: 'Symfony platforms, e-commerce, and IoT (Arduino / MQTT / Node-RED).',
      tags: ['Symfony', 'E-commerce', 'IoT'],
    },
  ],
};

export const skills = {
  kicker: 'Skills',
  heading: 'A full-stack toolkit, sharpened by AI.',
  groups: [
    {
      title: 'Frontend',
      items: ['React.js', 'Redux', 'React Native', 'JavaScript', 'TypeScript (learning)', 'Tailwind'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'NestJS', 'Express', 'REST APIs'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'DynamoDB', 'TypeORM'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS (Lambda, EC2, S3, SQS)', 'Step Functions', 'CloudWatch', 'CloudFormation', 'Google Cloud', 'Azure', 'CI/CD', 'Docker'],
    },
    {
      title: 'Identity & Auth',
      items: ['OAuth 2.0', 'Google & Azure app verification', 'SSO', 'Token management'],
    },
    {
      title: 'AI Engineering',
      items: ['LLMs', 'RAG', 'Context graphs', 'Custom agents', 'Prompt engineering', 'LLM cost management', 'Copilot · Cursor · Claude Code'],
    },
    {
      title: 'Leadership',
      items: ['Team leadership', 'Mentoring', 'System design', 'Agile delivery', 'Product thinking'],
    },
  ],
};

export const projects = {
  kicker: 'Selected work',
  heading: 'Impact, not just repositories.',
  intro: 'A few things I owned end to end — what it was, what I did, and the outcome.',
  items: [
    {
      title: 'AI Copilot & Canvas',
      what: 'Natural-language dashboard widgets — ask in plain English, get live charts on an interactive Canvas.',
      did: 'Led a fast R&D spike that turns a single prompt — e.g. "top 5 accounts by MRR, a health-status pie, total MRR as a KPI, and a 6-month MRR trend" — into a full dashboard of bar, pie, KPI and line widgets on an interactive Canvas; improved Copilot context so users can ask richer questions.',
      outcome: 'Idea to a working demo in about a day — recognized by company leadership as a step-change in AI-driven delivery speed.',
      tags: ['LLMs', 'RAG', 'Canvas', 'React'],
    },
    {
      title: 'AI meeting intelligence',
      what: 'Bringing meeting transcripts and insights into the platform.',
      did: 'Delivered Glyphic AI and Microsoft Teams transcript integrations via new microservice pipelines and frontend work.',
      outcome: 'Teams integration shipped with zero post-release issues under a tight deadline.',
      tags: ['Integrations', 'Microservices', 'AWS'],
    },
    {
      title: 'Salesforce integration suite',
      what: 'Two-way sync between Salesforce and the platform.',
      did: 'Architected Notes, Opportunity and Risk sync and pushback — with a streaming-data design for large datasets.',
      outcome: '5 components delivered against 3 planned, with minimal defects.',
      tags: ['Salesforce', 'Streaming', 'System design'],
    },
    {
      title: 'Cross-cloud OAuth',
      what: 'Gmail / Outlook / Calendar access across Google and Azure.',
      did: 'Owned OAuth apps end to end — registration, consent screens, the full Google/Microsoft verification review, and token flows — plus a token health monitoring system.',
      outcome: 'Reliable cross-cloud integrations with early revocation detection and proactive alerting.',
      tags: ['OAuth 2.0', 'Google', 'Azure'],
    },
    {
      title: 'Email re-architecture',
      what: 'Core email processing at scale.',
      did: 'Re-architected email processing (including a global event-handler fix to drop unwanted events during initial sync) for performance and cost.',
      outcome: 'Major performance and cost gains — with zero post-release bugs.',
      tags: ['Performance', 'Cost', 'AWS'],
    },
  ],
};

export const spotlight = {
  quote:
    'This is huge — how fast he was able to move really shows the true power of AI once utilised best.',
  attribution: 'Company leadership, Velaris',
  context:
    'On a rapid R&D spike that turned the Copilot into natural-language dashboard widgets — from idea to a working demo in a day.',
};

export const recommendations = {
  kicker: 'In their words',
  heading: 'What people I worked with say.',
  items: [
    {
      quote:
        'I hired Newumal as a full-stack engineer, and he quickly proved to be one of the finest professionals I’ve ever worked with. I had the pleasure of mentoring him from Software Engineer to Senior in just two short years. His continuous drive for self-improvement, exceptional problem-solving, and receptiveness to feedback have all contributed to his growth.',
      name: 'Shayne Weerakoon',
      title: 'Lead Software Engineer, Velaris',
    },
    {
      quote:
        'As a full-stack engineer, Newumal consistently demonstrated a strong command of React, Node.js, and SQL/DynamoDB. His ability to tackle complex technical challenges and deliver high-quality solutions is truly impressive — and he excels in communication and collaboration.',
      name: 'Supun Induwara',
      title: 'Co-founder, Sezenta',
    },
    {
      quote:
        'What sets Newumal apart is not just his technical expertise, but his ability to understand business requirements and translate them into elegant technical solutions. His foresight in designing our database structure has let us scale efficiently.',
      name: 'Michael Robertson',
      title: 'Project Manager (Client)',
    },
  ],
};

export const qualification = {
  kicker: 'Credentials',
  heading: 'Education & recognition.',
  education: [
    {
      title: 'BSc in Electronics & IT',
      org: 'University of Colombo',
      period: 'Sri Lanka',
    },
    {
      title: 'Generative AI Fundamentals',
      org: 'Coursera — DeepLearning.AI',
      period: '2025',
    },
    {
      title: 'AWS Certified Solutions Architect — Associate',
      org: 'Amazon Web Services',
      period: 'In progress',
    },
  ],
  achievements: [
    'Co-designed and shipped a patented IoT hardware product as co-founder of STEM Labs.',
    'Publish engineering and technical-leadership content on YouTube (@buildwithnewumal).',
    'Kotiyak Watina Adahasak — Season 2, Final 24 (2018), a national innovative-ideas competition on Sirasa TV.',
  ],
};

export const contact = {
  kicker: 'Contact',
  heading: "Let's talk.",
  blurb:
    'Open to Associate Tech Lead / Team Lead roles and interesting engineering conversations.',
};
