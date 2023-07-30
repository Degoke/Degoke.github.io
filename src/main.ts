import { BlogPosts } from "./components/blogPosts";
import { Projects } from "./components/projects";
import { getHash, html } from "./library/utils";
import "./styles/main.css";

function Main(): string {
  const tab = getHash();
  return html`
    <main class="p-1 max-h-[95vh]">
      <section class="w-6/12 m-auto py-8 flex justify-between flex-wrap">
        <div class="space-y-4 max-w-prose">
          <div class="space-y-2">
          <h1 class="text-4xl font-semibold">Adewoye Adegoke</h1>
          <p class="text-2xl font-semibold">Product Engineer <br /> 
          <span class="text-sm font-medium text-slate-300">
          I turn ideas into seamless user experiences, and craft innovative solutions.
          </span>
          </p>
          </div>
          
          <p class="text-base font-normal text-slate-300">
          My experience as a <span class="font-semibold">Fullstack Engineer</span>, <span class="font-semibold">Cloud Devops Engineer</span> and <span class="font-semibold">Blockchain Engineer</span> with my expertise in <span class="font-semibold">TypeScript</span>, <span class="font-semibold">Golang</span> and <span class="font-semibold">Python</span> forms my foundation for bringing software products to life across diverse industries.
          </p>
          <p class="text-base font-normal text-slate-300">
          I excel in designing robust architectures, implementing cutting-edge features, and optimizing performance to deliver high-quality and scalable solutions while collaborating with cross-functional teams, mentoring fellow developers, and driving projects to successful completion.
          </p>
        </div>
        <div class="space-y-8 flex flex-col self-end">
          <a href="#projects" name="projects" class="nav-button group text-lg text-slate-300 hover:text-slate-50 hover:scale-125 hover:cursor-pointer data-[active=true]:text-slate-50 data-[active=true]:scale-125" ${
            (tab === "#projects" || !tab) && "data-active='true'"
          }">
          <span>01</span>
          <hr class="w-2/6 group-hover:w-full group-data-[active=true]:w-full" /> 
          <span>Projects</span>
          </a>
          <a href="#blogposts" name="blogposts" class="nav-button group text-lg text-slate-300 hover:text-slate-50 hover:scale-125 hover:cursor-pointer data-[active=true]:text-slate-50 data-[active=true]:scale-125" ${
            tab === "#blogposts" && "data-active='true'"
          }">
          <span>02</span> 
          <hr class="w-2/6 group-hover:w-full group-data-[active=true]:w-full" /> 
          
          <span>Blog Posts</span>

          </a>
        </div>
      </section>
      <section id="main-content" class="main-content overflow-auto h-[55vh] py-2 space-y-16">

      ${Projects()}
      ${BlogPosts()}
      </section>
      <footer class="flex place-content-center mb-6 mt-4">
        <ul class="flex gap-6">
          <li>
            <a href="https://www.linkedin.com/in/degoke/" target="__blank" class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-linkedin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                />
                <path d="M8 11l0 5" />
                <path d="M8 8l0 .01" />
                <path d="M12 16l0 -5" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span>linkedin</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Degoke" target="__blank" class="flex gap-1 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-github-filled"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                  stroke-width="0"
                  fill="currentColor"
                />
              </svg>
              <span>Github</span>
            </a>
          </li>
          <li>
            <a href="https://calendly.com/degokeadewoye/30-minute-meeting-with-degoke" target="__blank" class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
            <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
            <path d="M15 3v4" />
            <path d="M7 3v4" />
            <path d="M3 11h16" />
            <path d="M18 16.496v1.504l1 1" />
          </svg>
              <span>Schedule a Meeting</span>
            </a>
          </li>
        </ul>
      </footer>
    </main>
  `;
}

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Main();