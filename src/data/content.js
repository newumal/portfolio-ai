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
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Approach', to: 'philosophy' },
  { name: 'Journey', to: 'journey' },
  { name: 'Skills', to: 'skills' },
  { name: 'Work', to: 'projects' },
  { name: 'Resume', to: 'resume', highlight: true },
  { name: 'Contact', to: 'contact' },
];

export const hero = {
  kicker: 'Team Lead · Associate Technical Lead',
  headline: 'I lead teams and ship production AI. Judgment stays human.',
  subheadline:
    'Hands-on engineering leader with 7+ years scaling production SaaS. Full-stack delivery, team leadership, and cost-efficient AI/LLM systems, with human ownership of the decisions.',
  primaryCta: { label: 'View my work', to: 'projects' },
  secondaryCta: { label: 'Read my story', to: 'about' },
  sidebar: {
    now: {
      label: 'Now',
      title: 'Leading engineering at Velaris',
      body: 'Leading a team of 5. Shipping a production onboarding AI agent and driving scale, reliability, and AWS cost work on a B2B SaaS platform.',
    },
    focus: {
      label: 'What I focus on',
      body: 'Production AI and cost-aware systems: MCP tools, LLM routing, and custom agents that cut setup time and cloud spend, without handing judgment to the model.',
    },
  },
};

export const about = {
  kicker: 'About me',
  heading: 'Engineer turned engineering leader.',
  paragraphs: [
    "I'm Associate Technical Lead and Team Lead at Velaris, leading a cross-functional team of 5 engineers on a B2B SaaS platform built with React, Node, and AWS. I own sprint planning, technical direction, code reviews, mentoring, release delivery, and hiring interviews, and I still contribute to system design.",
    'The work I care about is production AI that actually ships. I designed and built a cost-efficient onboarding agent with Pydantic AI, MCP tools, LLM routing and multi-step workflows, then turned faster, lower-touch onboarding into a product-expansion and upsell angle. The same approach later got reused across sales and product workflows.',
    'I think like an owner, not just an engineer. Stability, scale and cost matter as much as features: we took the customer 360 view and a major v4 rollout to millions of records, improved critical-path performance by 60%, and cut AWS operational cost by 20%. AI-assisted, human-owned: move faster, keep judgment with the people.',
  ],
  stats: [
    { value: '7+ yrs', label: 'Building & leading production SaaS' },
    { value: 'Team of 5', label: 'Engineers I lead end to end' },
    { value: '60%', label: 'Faster critical-path performance' },
    { value: '20%', label: 'Lower AWS operational cost' },
  ],
};

export const philosophy = {
  kicker: 'How I work',
  heading: 'Engineering & leadership philosophy.',
  intro:
    'Five principles shape how I think, build, and lead. That is the difference between a list of features and a track record of real outcomes.',
  cards: [
    {
      no: '01',
      title: 'Outcomes over output.',
      body: 'I optimize for value delivered to users and customers: real outcomes, not tickets closed. Every piece of work should move a metric that matters, not just clear a backlog.',
    },
    {
      no: '02',
      title: 'Design for scale, cost, and the market.',
      body: 'I architect with scalability and cost-efficiency in mind, and choose technologies for the problem and the market, adopting new and emerging tech deliberately where it creates a real edge.',
    },
    {
      no: '03',
      title: 'AI-assisted, human-owned.',
      body: 'I ship production AI (RAG, context graphs, tool-using agents, Copilot) and use AI across the engineering lifecycle. Every decision stays human-owned. Custom agents and MCP tools are grounded in our product and domain so output stays accurate, not hallucinated.',
    },
    {
      no: '04',
      title: 'Fix the root cause, not the symptom.',
      body: 'I introduced a data-driven approach to churn and reliability: documenting root causes, durable fixes, and the engineering and QA effort involved. It aligned Product and Engineering, freed capacity for new features, and was later adopted by other teams.',
    },
    {
      no: '05',
      title: 'Lead by lifting others.',
      body: 'Leadership is making the team faster, not just myself. I mentor engineers across teams, run enablement sessions, step up under pressure, and care about a healthy, high-standards engineering culture.',
    },
  ],
};

export const journey = {
  kicker: 'Journey',
  heading: 'Growth, ownership, and impact.',
  items: [
    {
      period: 'Jan 2026 – Present',
      role: 'Associate Technical Lead & Team Lead',
      org: 'Velaris',
      summary:
        'Lead a team of 5: sprint planning, technical direction, reviews, mentoring, releases and interviews. Built a production onboarding AI agent (Pydantic AI, MCP, LLM routing) and turned faster onboarding into an upsell angle. 60% faster critical path, 20% lower AWS cost; root-cause delivery adopted by other teams.',
      tags: ['Leadership', 'Onboarding agent', 'System design'],
    },
    {
      period: 'Jul 2023 – Jan 2026',
      role: 'Senior Software Engineer',
      org: 'Velaris',
      summary:
        'Shipped AI Copilot and Canvas dashboards, plus RAG / context-graph / agentic features that cut LLM cost by 30%. Reworked email processing, led AWS cost work and token-health monitoring, and served as acting team lead.',
      tags: ['React', 'Node.js', 'AWS', 'LLMs / RAG'],
    },
    {
      period: 'Jul 2022 – Jun 2023',
      role: 'Software Engineer',
      org: 'Velaris',
      summary:
        'Owned Google Cloud and Azure user integrations end to end: OAuth apps, Gmail, Outlook, calendars and Teams transcripts. Shipped a Salesforce suite of 5 components against 3 planned, including streaming for large datasets.',
      tags: ['OAuth', 'Integrations', 'Salesforce'],
    },
    {
      period: 'Mar 2021 – Jul 2022',
      role: 'Software Engineer',
      org: 'Sezenta',
      summary:
        'Built web and cross-platform mobile apps with React, React Native, Node, MongoDB and AWS, including REST APIs on Express and NestJS.',
      tags: ['React Native', 'Node', 'MongoDB'],
    },
    {
      period: 'Feb 2019 – Mar 2021',
      role: 'Development Engineer & Co-Founder',
      org: 'STEM Labs',
      summary:
        'Delivered STEM education programmes and web projects; built software and an IoT hardware product for which a patent application was filed.',
      tags: ['IoT', 'Product', 'Teaching'],
    },
    {
      period: 'Feb 2017 – Feb 2019',
      role: 'Associate Software Engineer',
      org: 'Effective Solutions',
      summary:
        'Built Symfony/PHP platforms including loyalty and student enrollment systems, e-commerce for Softlogic and TyreOnline, and IoT (Arduino / MQTT / Node-RED).',
      tags: ['Symfony', 'E-commerce', 'IoT'],
    },
  ],
};

export const skills = {
  kicker: 'Skills',
  heading: 'A full-stack toolkit, sharpened by production AI.',
  groups: [
    {
      title: 'Leadership & architecture',
      items: [
        'Technical leadership',
        'Team management',
        'System design',
        'Microservices',
        'Caching',
        'Queues / background processing',
        'Performance optimization',
        'Scalability',
        'Code review',
        'Mentoring',
        'Agile / Scrum',
        'Technical interviews',
      ],
    },
    {
      title: 'Backend & frontend',
      items: [
        'JavaScript (ES6+)',
        'TypeScript',
        'Node.js',
        'Express.js',
        'NestJS',
        'React.js',
        'Next.js',
        'Redux',
        'React Native',
        'SSR / SSG',
        'PHP',
        'Python',
      ],
    },
    {
      title: 'Cloud & DevOps',
      items: [
        'AWS (Lambda, EC2, S3, SQS)',
        'Step Functions',
        'CloudWatch',
        'CloudFormation',
        'Docker',
        'CI/CD',
        'Google Cloud',
        'Microsoft Azure',
      ],
    },
    {
      title: 'Data, identity & integrations',
      items: [
        'PostgreSQL',
        'MongoDB',
        'DynamoDB',
        'MySQL',
        'TypeORM',
        'REST APIs',
        'OAuth 2.0',
        'JWT',
        'SSO',
        'API security',
        'Authorization / RBAC',
        'Google / Microsoft / Salesforce',
      ],
    },
    {
      title: 'AI Engineering',
      items: [
        'LLM integration',
        'RAG',
        'Context graphs',
        'Custom AI agents',
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
      title: 'Testing & tools',
      items: ['Automated testing', 'Jest', 'ESLint', 'Git', 'JIRA'],
    },
  ],
};

export const projects = {
  kicker: 'Selected work',
  heading: 'Impact, not just repositories.',
  intro: 'A few things I owned end to end: what it was, what I did, and the outcome.',
  items: [
    {
      title: 'Onboarding AI agent',
      what: 'A cost-efficient, scalable agent that fast-tracks client onboarding and cuts the time users spend getting set up.',
      did: 'Designed, planned and built it with Pydantic AI, MCP-based tools, LLM routing and multi-step agent workflows. Took it from proof-of-concept to production with backing from the CEO, Head of AI and product owners; partnered with the AI team so the approach could be reused for sales and product workflows.',
      outcome:
        'Faster, lower-touch onboarding became a platform differentiator and an upsell / revenue-growth angle, not just an internal efficiency win.',
      tags: ['Pydantic AI', 'MCP', 'LLM routing', 'Agents'],
    },
    {
      title: 'Customer 360 & v4 scale',
      what: 'Stability, scalability and cost work across the customer 360-degree view and a major v4 platform rollout.',
      did: 'Led the initiative to scale workloads to millions of records and tighten the critical path, while cutting AWS operational spend.',
      outcome: '60% faster critical-path performance and 20% lower AWS operational cost.',
      tags: ['Performance', 'AWS', 'Scale'],
    },
    {
      title: 'AI Copilot & Canvas',
      what: 'Natural-language dashboard widgets. Ask in plain English, get live charts on an interactive Canvas.',
      did: 'Built a Copilot that turns a single prompt into line, pie, bar and KPI charts plus interactive Canvas dashboards, and extended Copilot context so users can ask richer questions. Shipped user-facing AI across multiple LLMs with RAG, context graphs and agentic systems.',
      outcome:
        'Idea to a working demo in about a day. 30% lower LLM cost in production. Recognized by company leadership as a step-change in AI-driven delivery speed.',
      tags: ['LLMs', 'RAG', 'Canvas', 'React'],
    },
    {
      title: 'AI meeting intelligence',
      what: 'Bringing meeting transcripts and insights into the platform.',
      did: 'Designed and shipped microservice pipelines and full-stack features for Microsoft Teams transcripts, plus Google and Outlook calendars and Gmail.',
      outcome: 'Teams integration shipped on a tight deadline with no reported post-release issues.',
      tags: ['Integrations', 'Microservices', 'AWS'],
    },
    {
      title: 'Salesforce integration suite',
      what: 'Two-way sync between Salesforce and the platform.',
      did: 'Built and delivered a five-component Salesforce suite against three originally planned, including streaming-data handling for large datasets.',
      outcome: '5 components delivered against 3 planned, with very few defects.',
      tags: ['Salesforce', 'Streaming', 'System design'],
    },
    {
      title: 'Cross-cloud OAuth',
      what: 'Gmail / Outlook / Calendar access across Google and Azure.',
      did: 'Owned user-integration projects end to end: OAuth app registration, consent screens, verification reviews, token flows, plus token-health monitoring to catch credential revocations before customers feel them.',
      outcome: 'Reliable cross-cloud integrations with early revocation detection and proactive alerting.',
      tags: ['OAuth 2.0', 'Google', 'Azure'],
    },
    {
      title: 'Email re-architecture',
      what: 'Core email processing and event filtering at scale.',
      did: 'Reworked core email processing and event filtering to improve synchronization and processing performance, including dropping unwanted events during initial sync.',
      outcome: 'Major performance gains, with no bugs reported after release.',
      tags: ['Performance', 'Cost', 'AWS'],
    },
  ],
};

export const spotlight = {
  quote:
    'This is huge. How fast he was able to move really shows the true power of AI once utilised best.',
  attribution: 'Company leadership, Velaris',
  context:
    'On a rapid R&D spike that turned the Copilot into natural-language dashboard widgets, from idea to a working demo in a day.',
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
        'As a full-stack engineer, Newumal consistently demonstrated a strong command of React, Node.js, and SQL/DynamoDB. His ability to tackle complex technical challenges and deliver high-quality solutions is truly impressive, and he excels in communication and collaboration.',
      name: 'Supun Induwara',
      title: 'Co-founder, Sezenta',
    },
    {
      quote:
        'What sets Newumal apart is not just his technical expertise, but his ability to understand business requirements and translate them into elegant technical solutions. His foresight in designing our database structure has let us scale efficiently.',
      name: 'Yasintha Jayarathne',
      title: 'Senior Product Owner, Velaris',
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
  ],
  achievements: [
    'Publish engineering and technical-leadership content on YouTube (@buildwithnewumal).',
    'Kotiyak Watina Adahasak, Season 2, Final 24 (2018), a national innovative-ideas competition on Sirasa TV.',
    'Co-designed and shipped an IoT hardware product as co-founder of STEM Labs; a patent application was filed.',
  ],
};

export const resume = {
  kicker: 'Resume',
  heading: 'Curriculum vitae.',
  blurb:
    'Same story as the site, in one page. View it here or download the PDF.',
  file: '/resume.pdf',
  fileName: 'Newumal-Weerasinghe-Resume.pdf',
  downloadLabel: 'Download PDF',
  openLabel: 'Open in new tab',
  previewTitle: 'Resume PDF preview',
  mobileHint:
    'Inline preview works best on desktop. On mobile, open or download the PDF instead.',
};

export const contact = {
  kicker: 'Contact',
  heading: "Let's talk.",
  blurb:
    'Open to Team Lead and Associate Technical Lead conversations, and interesting engineering problems in production AI.',
};
