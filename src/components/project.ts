import { html } from "../library/utils";

export type ProjectType = {
  title: string;
  details: string;
  link: string;
  tags: string[];
  type: "blogpost" | "project";
};

export function Project(project: ProjectType): string {
  return html`
    <div
      data-type=${project.type}
      class="drop-shadow-lg px-6 py-4 bg-light space-y-8 hover:drop-shadow-2xl project-card transition-all duration-500"
    >
      ${project.type === "blogpost"
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-article" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
      </svg>`
        : project.type === "project"
        ? `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>`
        : ""}

      <div class="">
        <h2 class="text-xl font-semibold">${project.title}</h2>
        <p class="text-opacity-10 text-lg mt-2">${project.details}</p>
        <p class="font-semibold text-opacity-10 text-sm mt-8">
          ${project.tags.reduce((acc, tag) => acc + tag + ".", "#")}
        </p>
      </div>
      <ul class="flex items-center gap-4">
        <li>
          <a
            href=${project.link}
            target="__blank"
            class="flex gap-1 items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-external-link"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
              />
              <path d="M11 13l9 -9" />
              <path d="M15 4h5v5" />
            </svg>
            <span class="text-sm">View More</span>
          </a>
        </li>
      </ul>
    </div>
  `;
}
