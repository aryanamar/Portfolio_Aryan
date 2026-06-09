import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  icon: string;
  color: string;
  category: string;
};

type ProjectCard = {
  title: string;
  description: string;
  stack: string[];
  link: string;
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-mesh text-slate-100">
      <div class="absolute inset-0 -z-10 opacity-30">
        <div class="absolute left-10 top-20 h-56 w-56 rounded-full bg-accent/30 blur-3xl"></div>
        <div class="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl"></div>
      </div>

      <header class="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" class="text-lg font-semibold tracking-[0.25em] text-white">ARYAN</a>
          <div class="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects-now" class="transition hover:text-white">Current Projects</a>
            <a href="#why-hire-me" class="transition hover:text-white">Why Hire Me</a>
            <a href="#projects-built" class="transition hover:text-white">Past Work</a>
            <a href="#skills" class="transition hover:text-white">Skills</a>
            <a href="#contact" class="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <main class="mx-auto flex max-w-7xl flex-col gap-24 px-6 py-10 lg:px-8 lg:py-16">
        <section
          id="home"
          class="grid items-center gap-12 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow backdrop-blur md:p-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/10 px-4 py-2 text-sm text-secondary">
              <span class="h-2 w-2 rounded-full bg-secondary"></span>
              Open to exciting Product and Program Management roles working at the intersection of AI and Engineering. Let’s connect!
            </div>

            <div class="space-y-5">
              <h1 class="max-w-3xl text-5xl font-black leading-tight text-white md:text-4xl">
                Engineering x <span class="text-transparent bg-gradient-to-r from-secondary via-sky-300 to-fuchsia-400 bg-clip-text">AI</span>
                x Product
              </h1>
              <p class="max-w-2xl text-lg leading-8 text-slate-300">
                Senior Software Engineer exploring the intersection of AI, Analytics, Product Thinking, and Engineering.
                Passionate about turning emerging AI capabilities into scalable business solutions.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">3+</p>
                <p class="mt-2 text-sm text-slate-400">Years building software and solving business problems.</p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">40+</p>
                <p class="mt-2 text-sm text-slate-400">Users onboarded and supported through AI adoption initiatives.</p>
              </div>

              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">16+</p>
                <p class="mt-2 text-sm text-slate-400">Hours saved weekly through automation and analytics solutions.</p>
              </div>
            </div>

            <div class="flex flex-wrap gap-4">
              <a
                href="#contact"
                class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Let’s connect
              </a>
              <a
                href="#projects-built"
                class="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View my work
              </a>
            </div>
          </div>

          <div class="relative flex h-full items-center justify-center">
            <img
              src="assets/Profile.png"
              alt="Profile Picture"
              class="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover shadow-2xl"
            />
          </div>
        </section>

        <section id="projects-now" class="space-y-8">
          <div class="max-w-3xl">
            <p class="text-sm uppercase tracking-[0.35em] text-secondary">Current Focus</p>
            <h2 class="mt-3 text-3xl font-bold text-white md:text-4xl">Projects I am working on</h2>
            <p class="mt-4 text-slate-300">
              A curated selection of the ideas I’m actively shaping, refining, and bringing closer to production quality.
            </p>
          </div>

          <div class="grid gap-6 lg:grid-cols-3">
            <article
              *ngFor="let project of currentProjects; let i = index"
              class="group rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-secondary/40"
            >
              <div class="mb-6 flex items-center justify-between">
                <span class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">
                  0{{ i + 1 }}
                </span>
                <span class="text-lg text-secondary">↗</span>
              </div>
              <h3 class="text-2xl font-semibold text-white">{{ project.title }}</h3>
              <p class="mt-4 text-sm leading-7 text-slate-300">{{ project.description }}</p>
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  *ngFor="let item of project.stack"
                  class="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {{ item }}
                </span>
              </div>
              <a [href]="project.link" class="mt-8 inline-flex text-sm font-semibold text-white transition group-hover:text-secondary">
                Explore concept
              </a>
            </article>
          </div>
        </section>

        <section
          id="why-hire-me"
          class="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-slate-900/70 to-cyan-400/10 p-8 md:p-10"
        >
          <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-secondary">Why Me</p>
              <h2 class="mt-4 text-3xl font-bold text-white md:text-4xl">Why you should hire me</h2>
            </div>
            <p class="text-lg leading-8 text-slate-200">
              I believe the best solutions come from first-principles thinking—breaking problems down to their fundamentals before deciding what to build.
              My experience spans software engineering, analytics, AI adoption, and product initiatives, giving me the ability to understand both technical systems and business needs.
              Whether it's rolling out AI capabilities, automating workflows, analyzing data, or building software, I enjoy turning ambiguity into structured execution and measurable outcomes.
            </p>
          </div>
        </section>

        <section id="projects-built" class="space-y-8">
          <div class="max-w-3xl">
            <p class="text-sm uppercase tracking-[0.35em] text-secondary">Selected Work</p>
            <h2 class="mt-3 text-3xl font-bold text-white md:text-4xl">Projects that I have worked on</h2>
            <p class="mt-4 text-slate-300">
              Highlights from previous product, frontend, and design-focused builds that demonstrate execution, taste, and versatility.
            </p>
          </div>

          <div class="grid gap-6 md:grid-cols-2">
            <article
              *ngFor="let project of deliveredProjects"
              class="rounded-[1.75rem] border border-white/10 bg-slate-900/50 p-6 transition duration-300 hover:border-white/20 hover:bg-slate-900/70"
            >
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-2xl font-semibold text-white">{{ project.title }}</h3>
                  <p class="mt-4 text-sm leading-7 text-slate-300">{{ project.description }}</p>
                </div>
                <span class="rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary">Case</span>
              </div>
              <div class="mt-6 flex flex-wrap gap-2">
                <span
                  *ngFor="let item of project.stack"
                  class="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {{ item }}
                </span>
              </div>
              <a [href]="project.link" class="mt-8 inline-flex text-sm font-semibold text-white">View details</a>
            </article>
          </div>
        </section>

        <section id="skills" class="space-y-8">
          <div class="max-w-3xl">
            <p class="text-sm uppercase tracking-[0.35em] text-secondary">Toolkit</p>
            <h2 class="mt-3 text-3xl font-bold text-white md:text-4xl">Skills</h2>
            <p class="mt-4 text-slate-300">
              Core tools and technologies I use to design interfaces, build applications, and turn concepts into robust products.
            </p>
          </div>

          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              *ngFor="let skill of skills"
              class="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-secondary/40 hover:bg-white/10"
            >
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl text-2xl shadow-lg"
                [ngClass]="skill.color"
              >
                {{ skill.icon }}
              </div>
              <div>
                <p class="font-semibold text-white">{{ skill.name }}</p>
                <p class="text-sm text-slate-400">
                  {{ skill.category }}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          class="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow md:grid-cols-[1fr_auto] md:items-center"
        >
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-secondary">Contact</p>
            <h2 class="mt-3 text-3xl font-bold text-white md:text-4xl">Let’s build something memorable.</h2>
            <p class="mt-4 max-w-2xl text-slate-300">
              For freelance work, internships, collaborations, or full-time opportunities, feel free to reach out.
              I’d love to contribute to teams building thoughtful and modern digital products.
            </p>
          </div>

          <div class="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
            <a class="block text-lg font-semibold text-white" href="mailto:anshuamar8&#64;gmail.com">anshuamar8&#64;gmail.com</a>
            <a
              class="block text-sm text-secondary underline-offset-4 transition hover:underline"
              href="https://www.linkedin.com/in/aryan-amarnani "
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/aryan
            </a>
            <p class="text-sm text-slate-400">Based in India · Available for remote opportunities</p>
          </div>
        </section>
      </main>
    </div>
  `
})
export class AppComponent {
  readonly currentProjects: ProjectCard[] = [
    {
      title: 'AI Adoption Analytics Platform',
      description:
      'Building dashboards to monitor GenAI adoption, token utilization, active users, productivity gains, and ROI metrics. Focused on helping organizations make data-driven decisions around AI governance and adoption.',
      stack: ['Power BI', 'Analytics', 'AI Adoption', 'KPIs'],
      link: '#'
    },
    {
      title: 'Multi-Agent Workflow Orchestrator',
      description:
      'Designing a multi-agent system where specialized AI agents collaborate to perform research, planning, content generation, validation, and execution tasks. Exploring agent orchestration, memory management, and workflow automation.',
      stack: ['AI Agents', 'LLMs', 'Automation', 'Agentic Workflows'],
      link: '#'
    },
    {
      title: 'Enterprise AI Knowledge Assistant',
      description:
      'Developing an AI-powered knowledge assistant that enables teams to search documentation, retrieve context-aware answers, and accelerate decision-making through conversational interfaces.',
      stack: ['RAG', 'LLMs', 'Knowledge Management', 'AI UX'],
      link: '#'
    }
  ];

  readonly deliveredProjects: ProjectCard[] = [
    {
      title: 'ChatGPT Enterprise Adoption Program',
      description:
      'Led AI adoption initiatives within the ICS organization by identifying use cases, creating prompt engineering resources, establishing governance practices, and tracking adoption and ROI metrics.',
      stack: ['AI Adoption', 'Prompt Engineering', 'Analytics', 'Program Management'],
      link: '#'
    },
    {
      title: 'Legacy Platform Modernization',
      description:
      'Led frontend modernization efforts for a legacy platform, improving maintainability, user experience, and reducing feature delivery timelines by 60%.',
      stack: ['Angular', 'TypeScript', 'Architecture', 'Frontend'],
      link: '#'
    },
    {
      title: 'One-Click Object Repository Generator',
      description:
      'Built an automation tool that converts application screenshots into structured JSON object repositories with classified UI elements and location centroids.',
      stack: ['Computer Vision', 'Automation', 'JSON', 'Testing'],
      link: '#'
    },
    {
      title: 'Smart LPG Monitoring System',
      description:
      'Developed an IoT-based LPG leak detection and automated cylinder reordering solution using Arduino, ESP8266, sensors, and cloud notifications.',
      stack: ['IoT', 'Arduino', 'ESP8266', 'Cloud'],
      link: '#'
    }
  ];


readonly skills: Skill[] = [
  {
    name: 'AI Agents',
    icon: '🤖',
    color: 'bg-violet-500/20 text-violet-300',
    category: 'AI & Automation'
  },
  {
    name: 'Prompt Engineering',
    icon: '✨',
    color: 'bg-fuchsia-500/20 text-fuchsia-300',
    category: 'AI & Automation'
  },
  {
    name: 'Workflow Automation',
    icon: '⚡',
    color: 'bg-orange-500/20 text-orange-300',
    category: 'AI & Automation'
  },
  {
    name: 'Power BI',
    icon: '📊',
    color: 'bg-yellow-500/20 text-yellow-300',
    category: 'Analytics'
  },
  {
    name: 'SQL',
    icon: '🗄️',
    color: 'bg-blue-500/20 text-blue-300',
    category: 'Analytics'
  },
  {
    name: 'Analytics',
    icon: '📈',
    color: 'bg-emerald-500/20 text-emerald-300',
    category: 'Analytics'
  },
  {
    name: 'Python',
    icon: '🐍',
    color: 'bg-green-500/20 text-green-300',
    category: 'Engineering'
  },
  {
    name: 'Angular',
    icon: 'A',
    color: 'bg-red-500/20 text-red-300',
    category: 'Engineering'
  },
  {
    name: 'TypeScript',
    icon: 'TS',
    color: 'bg-sky-500/20 text-sky-300',
    category: 'Engineering'
  },
  {
    name: 'REST APIs',
    icon: '🔗',
    color: 'bg-cyan-500/20 text-cyan-300',
    category: 'Engineering'
  },
  {
    name: 'Stakeholder Management',
    icon: '🤝',
    color: 'bg-pink-500/20 text-pink-300',
    category: 'Product & Leadership'
  },
  {
    name: 'Product Thinking',
    icon: '🎯',
    color: 'bg-indigo-500/20 text-indigo-300',
    category: 'Product & Leadership'
  }
];

}