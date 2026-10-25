// Single source of truth for all page copy.
// Edit text here — the sections read from this file, so JSX rarely needs touching.

export const site = {
  name: 'Newumal Weerasinghe',
  shortName: 'Newumal',
  role: 'Team Lead & Associate Technical Lead',
  email: 'newumaalweerasinghe@gmail.com',
  location: 'Homagama, Colombo, Sri Lanka',
  phone: '+94 71 734 9697',
};

export const socials = {
  linkedin: 'https://www.linkedin.com/in/newumal/',
  github: 'https://github.com/newumal',
  youtube: 'https://youtube.com/@buildwithnewumal',
  youtubeHandle: '@buildwithnewumal',
  medium: 'https://medium.com/@newumaalweerasinghe',
  email: 'mailto:newumaalweerasinghe@gmail.com',
};

export const nav = [
  { name: 'Work', to: 'projects' },
  { name: 'Sessions', to: 'sessions' },
  { name: 'Experience', to: 'experience' },
  { name: 'About', to: 'about' },
  {
    name: 'Resume',
    href: '/resume.pdf',
    download: 'Newumal-Weerasinghe-Resume.pdf',
    highlight: true,
  },
];

export const hero = {
  kicker: 'Team Lead · Associate Technical Lead',
  headline: 'I lead teams and ship production AI.',
  primaryCta: { label: 'View my work', to: 'projects' },
  resumeCta: {
    label: 'Resume',
    href: '/resume.pdf',
    download: 'Newumal-Weerasinghe-Resume.pdf',
  },
  now: {
    label: 'Now',
    title: 'Velaris · team of 5',
    body: 'Production onboarding agent. Scale, reliability, and AWS cost.',
  },
};

export const about = {
  kicker: 'About',
  heading: 'Engineer turned engineering leader.',
  paragraphs: [
    "Associate Technical Lead and Team Lead at Velaris. I lead a team of 5 on a B2B SaaS platform — direction, reviews, releases, hiring — and I still write the hard systems.",
    'I use AI across the lifecycle and keep the decisions human. The work that matters ships: accurate agents, lower cloud spend, and a team that gets faster without lowering the bar.',
  ],
  principles: [
    'Outcomes over output.',
    'Design for scale and cost.',
    'Fix the root cause, not the symptom.',
  ],
};

export const journey = {
  kicker: 'Experience',
  heading: 'Roles.',
  items: [
    {
      period: '2026 – Present',
      role: 'Associate Technical Lead & Team Lead',
      org: 'Velaris',
      href: 'https://velaris.io',
      summary: 'Team of 5. Onboarding agent, 60% faster critical path, 20% lower AWS cost.',
      tags: ['Leadership', 'Pydantic AI', 'MCP', 'AWS'],
    },
    {
      period: '2023 – 2026',
      role: 'Senior Software Engineer',
      org: 'Velaris',
      summary: 'Copilot + Canvas. RAG / agentic features. 30% lower LLM cost. Acting lead.',
      tags: ['React', 'Node.js', 'LLMs', 'RAG'],
    },
    {
      period: '2022 – 2023',
      role: 'Software Engineer',
      org: 'Velaris',
      summary: 'Google / Azure OAuth, Gmail, Outlook, Teams transcripts. Salesforce 5 vs 3.',
      tags: ['OAuth', 'Salesforce', 'Integrations'],
    },
    {
      period: '2021 – 2022',
      role: 'Software Engineer',
      org: 'Sezenta',
      summary: 'React, React Native, Node, MongoDB, AWS.',
      tags: ['React Native', 'Node', 'MongoDB'],
    },
    {
      period: '2019 – 2021',
      role: 'Development Engineer & Co-Founder',
      org: 'STEM Labs',
      summary: 'STEM programmes and an IoT product; patent application filed.',
      tags: ['IoT', 'Product'],
    },
    {
      period: '2017 – 2019',
      role: 'Associate Software Engineer',
      org: 'Effective Solutions',
      summary: 'Symfony platforms, e-commerce, Arduino / MQTT / Node-RED.',
      tags: ['Symfony', 'PHP', 'IoT'],
    },
  ],
  education: [
    {
      title: 'BSc in Electronics & IT',
      org: 'University of Colombo',
      period: 'Sri Lanka',
    },
    {
      title: 'Generative AI Fundamentals',
      org: 'Coursera / DeepLearning.AI',
      period: '2025',
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      org: 'Amazon Web Services',
      period: 'In progress',
    },
  ],
  recognition: [
    'Kotiyak Watina Adahasak, Season 2, Final 24 (2018), Sirasa TV.',
    'IoT hardware product as co-founder of STEM Labs; patent application filed.',
  ],
};

export const projects = {
  kicker: 'Selected work',
  heading: 'Impact, not just repositories.',
  lead: {
    title: 'Onboarding AI agent',
    what: 'Cost-efficient agent that fast-tracks client onboarding and cuts setup time.',
    did: 'Designed and shipped it with Pydantic AI, MCP tools, LLM routing and multi-step workflows. PoC to production with CEO, Head of AI and product backing; later reused for sales and product.',
    outcome:
      'Faster, lower-touch onboarding became a differentiator and an upsell angle.',
    tags: ['Pydantic AI', 'MCP', 'LLM routing'],
  },
  items: [
    {
      title: 'Customer 360 & v4 scale',
      outcome: '60% faster critical path. 20% lower AWS cost. Millions of records.',
      tags: ['Performance', 'AWS'],
    },
    {
      title: 'AI Copilot & Canvas',
      outcome: 'Natural-language charts and dashboards. 30% lower LLM cost. Idea to demo in a day.',
      tags: ['LLMs', 'RAG', 'React'],
    },
    {
      title: 'Integrations at scale',
      outcome:
        'Teams transcripts on a tight deadline, no post-release issues. Salesforce 5 vs 3. Email rework, no bugs after ship.',
      tags: ['OAuth', 'Salesforce', 'Email'],
    },
  ],
  kiln: {
    kicker: 'Also shipping',
    title: 'Kiln',
    what: 'Free, no-ads browser toolbox. Image, text, and developer tools that run locally.',
    href: 'https://kiln.tools',
    hrefLabel: 'kiln.tools',
    tags: ['Next.js', 'Product'],
  },
};

export const spotlight = {
  quote:
    'This is huge. How fast he was able to move really shows the true power of AI once utilised best.',
  attribution: 'Company leadership, Velaris',
};

export const recommendations = {
  items: [
    {
      quote:
        'One of the finest professionals I’ve ever worked with. Software Engineer to Senior in two years.',
      name: 'Shayne Weerakoon',
      title: 'Lead Software Engineer, Velaris',
    },
    {
      quote:
        'Strong command of React, Node.js, and SQL/DynamoDB. He excels in communication and collaboration.',
      name: 'Supun Induwara',
      title: 'Co-founder, Sezenta',
    },
    {
      quote:
        'He translates business requirements into elegant technical solutions. His database design let us scale.',
      name: 'Yasintha Jayarathne',
      title: 'Senior Product Owner, Velaris',
    },
  ],
};

export const youtube = {
  kicker: 'On YouTube',
  heading: 'Sessions.',
  intro: 'Latest first. Opens on YouTube.',
  channelLabel: 'Channel',
  channelUrl: socials.youtube,
  items: [
    {
      id: '1HpGch3jL-I',
      title: 'I rebuilt my free tools website',
      blurb:
        'Rebuilding Kiln as a free, no-ads tools site: the product call, the stack, and shipping it in public.',
      duration: '23:47',
      topic: 'Product',
    },
    {
      id: 'jRc-pHvsE_Y',
      title: 'Generative AI vs AI Agents vs Agentic AI',
      blurb:
        'Same product can sit in all three buckets. The split that matters is who decides the next step.',
      duration: '21:37',
      topic: 'AI systems',
    },
    {
      id: 'el8j9jQJJA0',
      title: 'Never hit AI credit limits again',
      blurb:
        'Why credits burn down so fast, and a practical way to keep shipping without slamming into usage walls.',
      duration: '22:54',
      topic: 'AI workflow',
    },
    {
      id: 'qOAwyCzruEA',
      title: 'Why most AI prompts fail',
      blurb:
        'The failure is usually the ask, not the model. How I rewrite prompts so the output is actually usable.',
      duration: '13:09',
      topic: 'Prompting',
    },
  ],
};

export const resume = {
  file: '/resume.pdf',
  fileName: 'Newumal-Weerasinghe-Resume.pdf',
};

export const contact = {
  blurb: 'Open to Team Lead and Associate Technical Lead conversations.',
};
