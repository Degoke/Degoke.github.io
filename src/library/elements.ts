export const navButtons: NodeListOf<HTMLLIElement> =
  document.querySelectorAll(".nav-button");

export const projects: NodeListOf<HTMLElement> = document.querySelectorAll(
  "div[data-type='project']",
);

export const blogPosts: NodeListOf<HTMLElement> = document.querySelectorAll(
  "div[data-type='blogpost']",
);

export const mainContent: HTMLElement =
  document.getElementById("main-content")!;

export const blogNavButton: HTMLElement = document.querySelector(
  ".nav-button[name='blogposts']",
)!;

export const projectNavButton: HTMLElement = document.querySelector(
  ".nav-button[name='projects']",
)!;

export const projectNav: HTMLElement = document.getElementById("project-nav")!;
