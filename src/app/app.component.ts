import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Skill = {
  name: string;
  icon: string;
  color: string;
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
              Open to exciting product and frontend roles
            </div>

            <div class="space-y-5">
              <p class="text-sm uppercase tracking-[0.4em] text-slate-400">Portfolio</p>
              <h1 class="max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
                Aryan <span class="text-transparent bg-gradient-to-r from-secondary via-sky-300 to-fuchsia-400 bg-clip-text">builds</span>
                polished digital experiences.
              </h1>
              <p class="max-w-2xl text-lg leading-8 text-slate-300">
                I design and build elegant, responsive, and user-focused interfaces with a product mindset.
                I enjoy turning ambitious ideas into clean, scalable web experiences with strong visual storytelling.
              </p>
            </div>

            <div class="grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">12+</p>
                <p class="mt-2 text-sm text-slate-400">Concepts, demos, and UI builds shipped.</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">UI/UX</p>
                <p class="mt-2 text-sm text-slate-400">Strong focus on visual hierarchy and delightful interactions.</p>
              </div>
              <div class="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p class="text-3xl font-bold text-white">Fast</p>
                <p class="mt-2 text-sm text-slate-400">Responsive layouts with reusable component-driven thinking.</p>
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

          <div class="relative">
            <div class="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-secondary/30 blur-2xl"></div>
            <div
              class="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 via-slate-900 to-black p-6"
            >
              <div class="flex h-full w-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-slate-500/50 bg-white/5 text-center">
                <div class="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 text-4xl">📸</div>
                <p class="text-xl font-semibold text-white">Photo Placeholder</p>
                <p class="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  Replace this with your portrait, a studio shot, or a lifestyle image for a premium personal-brand feel.
                </p>
              </div>
            </div>
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
              I combine clean engineering practices with strong design instincts, which means I can build interfaces that
              not only work reliably but also feel premium and intentional. I care about performance, accessibility,
              consistency, and product clarity. Whether the task is creating a landing page, a dashboard, or a polished
              portfolio experience, I bring ownership, thoughtful execution, and a strong eye for detail from idea to delivery.
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
                <p class="text-sm text-slate-400">Modern workflow</p>
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
            <a class="block text-lg font-semibold text-white" href="mailto:aryan&#64;example.com">aryan&#64;example.com</a>
            <a
              class="block text-sm text-secondary underline-offset-4 transition hover:underline"
              href="https://www.linkedin.com/in/aryan"
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
      title: 'AI Portfolio Assistant',
      description: 'An interactive portfolio companion that helps recruiters explore work, skills, and achievements with smart conversational flows.',
      stack: ['Angular', 'TailwindCSS', 'AI UX'],
      link: '#'
    },
    {
      title: 'Creator Analytics Dashboard',
      description: 'A visually rich dashboard concept for monitoring growth, engagement trends, and campaign opportunities in one place.',
      stack: ['Data Visualization', 'Product Design', 'Frontend'],
      link: '#'
    },
    {
      title: 'Modern Hiring Platform',
      description: 'A premium web experience focused on simplifying applications, talent discovery, and candidate storytelling.',
      stack: ['UI Systems', 'Responsive Design', 'Angular'],
      link: '#'
    }
  ];

  readonly deliveredProjects: ProjectCard[] = [
    {
      title: 'E-commerce Brand Showcase',
      description: 'Designed a conversion-focused storefront experience with elegant product presentation, smooth navigation, and trust-building layouts.',
      stack: ['Landing Pages', 'UX Writing', 'Performance'],
      link: '#'
    },
    {
      title: 'SaaS Product Website',
      description: 'Built a clean marketing website with feature storytelling, modular content sections, and a strong visual rhythm across pages.',
      stack: ['Web Design', 'Frontend Architecture', 'Accessibility'],
      link: '#'
    },
    {
      title: 'Personal Branding Site',
      description: 'Crafted a minimal yet expressive digital presence highlighting expertise, selected work, and clear ways to connect professionally.',
      stack: ['Branding', 'Responsive UI', 'Content Strategy'],
      link: '#'
    },
    {
      title: 'Student Community Portal',
      description: 'Created a platform concept for events, collaboration, and resource sharing with intuitive navigation and scalable layout patterns.',
      stack: ['User Research', 'Component Design', 'Frontend'],
      link: '#'
    }
  ];

  readonly skills: Skill[] = [
    { name: 'Angular', icon: 'A', color: 'bg-red-500/20 text-red-300' },
    { name: 'TailwindCSS', icon: 'T', color: 'bg-cyan-500/20 text-cyan-300' },
    { name: 'TypeScript', icon: 'TS', color: 'bg-blue-500/20 text-blue-300' },
    { name: 'JavaScript', icon: 'JS', color: 'bg-yellow-500/20 text-yellow-300' },
    { name: 'HTML5', icon: 'H', color: 'bg-orange-500/20 text-orange-300' },
    { name: 'CSS3', icon: 'C', color: 'bg-sky-500/20 text-sky-300' },
    { name: 'Figma', icon: 'F', color: 'bg-pink-500/20 text-pink-300' },
    { name: 'Git', icon: 'G', color: 'bg-emerald-500/20 text-emerald-300' }
  ];
}