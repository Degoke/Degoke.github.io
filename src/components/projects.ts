import { html, splitArrayByIndex } from "../library/utils";
import { Project, ProjectType } from "./project";

const projects: ProjectType[] = [
  {
    title: "Dekube Core",
    details:
      "A paas for deploying applications to kubernetes, acts as the core for Dekube application. <br><br>Built with golang, gin and kubernetes-client-go. ",
    link: "https://github.com/Degoke/dekube-core",
    tags: ["golang", "kubernetes", "devops"],
    type: "project",
  },
  {
    title: "Doc Verify",
    details: `Document analysis and image comparison application for identity verification <br><br> Built with golang, gin, aws-sdk-go, gorm, mongodb`,
    link: "https://github.com/Degoke/doc-verify",
    tags: ["golang", "aws", "ml", "backend"],
    type: "project",
  },
  {
    title: "ETH Service",
    details:
      "A service for managing Accounts and Transactions on Ethereum. <br><br> Built with NestJS, web3.js, MongoDB for data persistence and Ganache for a local node.",
    link: "https://github.com/Degoke/eth_service",
    tags: ["typescript", "nestjs", "backend", "blockchain"],
    type: "project",
  },
  {
    title: "Gitlab Slack App",
    details:
      "A slack app for receiving gitlab notifications, tagging the users that need to be aware of the notifications and sending them private direct messages",
    link: "https://github.com/Degoke/gitlab-slack-app",
    tags: ["javascript", "nodejs", "express", "backend"],
    type: "project",
  },
  {
    title: "Account Management API",
    details:
      "An account management application, for sending and receiving money.<br><br> Built with Nest js and MongoDB",
    link: "https://github.com/Degoke/account-management-api",
    tags: ["typescript", "nestjs", "mongodb", "backend"],
    type: "project",
  },
  {
    title: "Account Management UI",
    details:
      "The ui of the account management application.<br><br> Built with React and Material UI",
    link: "https://github.com/Degoke/account-management-ui-service",
    tags: ["typescript", "react", "materialui", "frontend"],
    type: "project",
  },
  {
    title: "My Portfolio Site",
    details: `Minimalist dark mode portfolio website to show my works
      <br><br>
      Built with Vanilla Typescript, Tailwind Css and Vite`,
    link: "https://github.com/Degoke/portfolio",
    tags: ["typescript", "html", "tailwind", "frontend"],
    type: "project",
  },
  {
    title: "Udapeople Autodeploy",
    details:
      "Setting up CI/CD for udapeople app, using Circle CI, AWS Cloud Formation, Ansible",
    link: "https://github.com/Degoke/udapeople-autodeploy",
    tags: ["aws", "ansible", "ci-cd", "devops"],
    type: "project",
  },
];

export function Projects(): string {
  const { evenIndexes, oddIndexes } = splitArrayByIndex<ProjectType>(projects);
  return html`
    <div
      id="projects"
      class="lg:w-8/12 p-2 md:p-6 lg:p-0 m-auto grid grid-cols-1 lg:grid-cols-2 gap-2 project-container"
    >
      <div class="grid grid-cols-1 gap-2 content-start">
        ${evenIndexes.reduce((acc, project) => acc + Project(project), "")}
      </div>
      <div class="grid grid-cols-1 gap-2 content-start lg:mt-8">
        ${oddIndexes.reduce((acc, project) => acc + Project(project), "")}
      </div>
    </div>
  `;
}
