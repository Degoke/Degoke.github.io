import {
  blogNavButton,
  blogPosts,
  navButtons,
  projectNav,
  projectNavButton,
  projects,
} from "../library/elements";
import { getHash, setHash } from "./utils";

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    handleNavClick(button);
  });
});

function handleNavClick(button: HTMLElement) {
  const isActive = button.getAttribute("data-active");
  const name = button.getAttribute("name");
  if (!isActive) {
    const active = document.querySelectorAll(".nav-button[data-active=true");
    active.forEach((elem) => {
      elem.toggleAttribute("data-active");
    });
    button.setAttribute("data-active", "true");
    setHash(name!);
  }
}

let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

let callback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    if (entry.target.getAttribute("data-type") === "project") {
      const hash = getHash();
      if (hash == "#projects") {
        return;
      }

      const active = document.querySelectorAll(".nav-button[data-active=true");
      active.forEach((elem) => {
        elem.toggleAttribute("data-active");
      });

      projectNavButton.setAttribute("data-active", "true");
      setHash("projects");
    }

    if (entry.target.getAttribute("data-type") === "blogpost") {
      const hash = getHash();
      if (hash == "#blogposts") {
        return;
      }

      const active = document.querySelectorAll(".nav-button[data-active=true");
      active.forEach((elem) => {
        elem.toggleAttribute("data-active");
      });

      blogNavButton.setAttribute("data-active", "true");
      setHash("blogposts");
    }
  });
};

let observer = new IntersectionObserver(callback, options);

document.addEventListener("scroll", () => {
  projects.forEach((project) => observer.observe(project));
  blogPosts.forEach((post) => observer.observe(post));
});

document.addEventListener("scroll", () => {
  const rect = projectNav.getBoundingClientRect();
  if (rect.top === 0) {
    if (projectNav.classList.contains("added")) {
      return;
    }

    projectNav.classList.add("shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]");
    projectNav.classList.add("added");
  } else {
    projectNav.classList.remove("shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]");
    projectNav.classList.remove("added");
  }
});
