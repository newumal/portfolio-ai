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
  { name: 'Architecture', to: 'architecture' },
  { name: 'Sessions', to: 'sessions' },
  { name: 'Experience', to: 'experience' },
  { name: 'Skills', to: 'skills' },
  { name: 'About', to: 'about' },
  { name: 'Contact', to: 'contact' },
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
  headlineAccent: 'production AI', // underlined span within the headline
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
    {
      title: 'Outcomes over output.',
      body: 'I optimize for value delivered to users and customers — work that moves a metric that matters, not tickets closed.',
    },
    {
      title: 'Design for scale and cost.',
      body: 'I architect for scalability and cost-efficiency, and adopt new technology deliberately, only where it earns a real edge.',
    },
    {
      title: 'Fix the root cause, not the symptom.',
      body: 'I moved my team from firefighting to permanent fixes: root-cause analysis, durable solutions, and aligning product and engineering on what to fix.',
    },
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

// ⚠️ PLACEHOLDER METRICS — illustrative figures sized to a ~$2M ARR, multi-tenant
// B2B SaaS on AWS (~12M records). Baselines, $ amounts and latencies below are
// NOT yet verified. Replace with real numbers before merging to main. Search "~"
// to find them.
export const projects = {
  kicker: 'Selected work',
  heading: 'Impact, not just repositories.',
  lead: {
    title: 'Onboarding AI agent',
    what: 'Cost-efficient agent that fast-tracks client onboarding and cuts setup time.',
    did: 'Designed and shipped it with Pydantic AI, MCP tools, LLM routing and multi-step workflows. PoC to production with CEO, Head of AI and product backing; later reused for sales and product.',
    outcome:
      'Hands-on onboarding setup dropped from ~2 weeks to ~3 days — lower-touch onboarding became a differentiator and an upsell angle.',
    tags: ['Pydantic AI', 'MCP', 'LLM routing'],
    // Third-party proof: Velaris publicly launched this work as "Nexus".
    proof: {
      note: 'Launched publicly by Velaris as “Nexus”',
      href: 'https://www.linkedin.com/posts/introducing-nexus-velaris-expert-onboarding-ugcPost-7516114839648407553-JRU6/',
      label: 'See the announcement',
    },
  },
  items: [
    {
      title: 'Customer 360 & v4 scale',
      metric: '60%',
      metricLabel: 'faster critical path',
      desc: 'Took the Customer-360 load from ~4.2s to ~1.6s (p95) across ~12M records, and cut ~20% (~$5k/mo) off AWS — by replacing N+1 reads with a materialized entity cache and moving heavy aggregation to async workers.',
      tags: ['Performance', 'AWS'],
    },
    {
      title: 'AI Copilot & Canvas',
      metric: '30%',
      metricLabel: 'lower LLM cost',
      desc: 'Natural-language charts and dashboards — idea to working demo in a day. Cut LLM spend ~30% (~$3.1k → ~$2.2k/mo) with model-tier routing (cheap model to classify, frontier only to synthesise) plus prompt and result caching.',
      tags: ['LLMs', 'RAG', 'React'],
    },
    {
      title: 'Integrations at scale',
      metric: '0',
      metricLabel: 'post-release issues',
      desc: 'Teams transcripts on a tight deadline, Salesforce (5 objects vs 3), and an email-sync rework — 0 post-release incidents across ~20 releases in 6 months, backed by contract tests and staged rollout.',
      tags: ['OAuth', 'Salesforce', 'Email'],
    },
  ],
  kiln: {
    kicker: 'Also shipping',
    title: 'Kiln',
    what: 'Free, no-ads browser toolbox. Image, text, and developer tools that run locally.',
    href: 'https://kiln-dun.vercel.app/',
    hrefLabel: 'kiln-dun.vercel.app',
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
  kicker: 'Contact',
  heading: "Let's talk.",
  blurb:
    'Open to Team Lead and Associate Technical Lead roles, and to interesting engineering conversations.',
  availability: 'Open to remote, relocation, or on-site — worldwide.',
  ctaLabel: 'Email me',
};

// Public, generalized write-up of the onboarding agent ("Nexus").
// Deliberately omits internal service, repo, event, queue, table and schema names.
export const architecture = {
  kicker: 'Architecture',
  heading: 'Inside the onboarding agent.',
  intro:
    'A look under the hood of Nexus — the agent I designed and shipped. The model only ever proposes; a separate runtime executes every write behind a policy gate and an idempotent ledger. Work is serialised per account, so the same message can be retried safely, and a human CSM always signs off the result — the agent prepares, the person owns the outcome.',
  flow: [
    { label: 'Trigger', sub: 'A new account, or a wake' },
    { label: 'Agent runtime', sub: 'Claims the run — serialised per account' },
    { label: 'Model router', sub: 'Reasoning model plans · lightweight model chats' },
    { label: 'Read-only tools', sub: 'Calls, email, notes, meetings, surveys, tickets' },
    { label: 'Policy gate + ledger', sub: 'auto / ask / off · idempotent, capped writes' },
    { label: 'Onboarding plan', sub: 'Drafted automatically, tailored per account' },
    { label: 'CSM review & commit', sub: 'Human signs off — the only “done”' },
  ],
  notes: [
    {
      title: 'Propose vs. execute',
      body: 'The model has only read tools and no “complete” action. A separate runtime performs every write, so a prompt can never mutate data directly.',
    },
    {
      title: 'Model routing',
      body: 'A reasoning-grade model plans each turn and scores readiness; a lightweight model handles configuration and account chat. Caching keeps repeated turns cheap.',
    },
    {
      title: 'Idempotent by design',
      body: 'Work is serialised per account on a FIFO queue, and every run and write takes a claim — so retries and redeliveries never double-apply.',
    },
    {
      title: 'Multi-tenant isolation',
      body: 'Every message carries a verified token; queries run inside that tenant’s own schema, and the queue ordering is keyed to tenant and account.',
    },
    {
      title: 'Durable state',
      body: 'Engagement, plan, and the run and action ledgers live in Postgres per tenant. A wake is a unit of work, not a chat transcript.',
    },
    {
      title: 'Human handover',
      body: 'Completion only happens when a CSM commits the plan. There is no model-driven “done”.',
    },
  ],
  stack: ['Pydantic AI', 'Amazon Bedrock', 'MCP tools', 'LLM routing', 'Postgres', 'SQS FIFO', 'AWS ECS'],
};

export const skills = {
  kicker: 'Skills',
  heading: 'A full-stack toolkit, sharpened by AI.',
  // Two tiers so the page reads senior: depth I'd be grilled on vs supporting breadth.
  groups: [
    {
      title: 'Leadership & Architecture',
      tier: 'core',
      items: [
        'Technical leadership',
        'Team management',
        'System design',
        'Microservices',
        'Caching',
        'Queues / background processing',
        'Performance',
        'Scalability',
        'Code review',
        'Mentoring',
        'Agile / Scrum',
      ],
    },
    {
      title: 'AI Engineering',
      tier: 'core',
      items: [
        'LLMs',
        'RAG',
        'Context graphs',
        'Custom agents',
        'Prompt engineering',
        'Evals',
        'LLM cost management',
        'Pydantic AI',
        'MCP',
        'Tool calling',
        'LLM routing',
        'Copilot · Cursor · Claude Code',
      ],
    },
    {
      title: 'Backend',
      tier: 'core',
      items: ['Node.js', 'NestJS', 'Express', 'REST APIs', 'Python', 'PHP'],
    },
    {
      title: 'Frontend',
      tier: 'core',
      items: [
        'React.js',
        'Next.js',
        'Redux',
        'React Native',
        'JavaScript (ES6+)',
        'TypeScript',
        'Tailwind',
        'SSR / SSG (basic)',
      ],
    },
    {
      title: 'Cloud & DevOps',
      tier: 'working',
      items: [
        'AWS (Lambda, EC2, S3, SQS)',
        'Step Functions',
        'CloudWatch',
        'CloudFormation',
        'Google Cloud',
        'Azure',
        'Docker',
        'CI/CD',
      ],
    },
    {
      title: 'Databases',
      tier: 'working',
      items: ['PostgreSQL', 'MongoDB', 'DynamoDB', 'MySQL', 'TypeORM'],
    },
    {
      title: 'Identity & Security',
      tier: 'working',
      items: [
        'OAuth 2.0',
        'JWT',
        'SSO',
        'API security',
        'Authorization / RBAC',
        'Token management',
      ],
    },
    {
      title: 'Testing & Tools',
      tier: 'working',
      items: ['Automated testing', 'Jest', 'ESLint', 'Git', 'JIRA'],
    },
  ],
};
