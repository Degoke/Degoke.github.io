import { html } from "../library/utils";
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
    title: "ETH Service",
    details:
      "A service for managing Accounts and Transactions on Ethereum. <br><br> Built with NestJS, web3.js, MongoDB for data persistence and Ganache for a local node.",
    link: "https://github.com/Degoke/eth_service",
    tags: ["typescript", "nestjs", "backend", "blockchain"],
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
    title: "Udapeople Autodeploy",
    details:
      "Setting up CI/CD for udapeople app, using Circle CI, AWS Cloud Formation, Ansible",
    link: "https://github.com/Degoke/udapeople-autodeploy",
    tags: ["aws", "ansible", "ci-cd", "devops"],
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
    tags: ["typescript", "nestjs", "mngodb", "backend"],
    type: "project",
  },
];

export function Projects(): string {
  return html`
    <div id="projects" class="w-6/12 m-auto grid grid-cols-2 gap-2">
      <div class="grid grid-cols-1 gap-2 content-start">
        ${projects
          .slice(0, Math.ceil(projects.length / 2))
          .reduce((acc, project) => acc + Project(project), "")}
      </div>
      <div class="grid grid-cols-1 gap-2 content-start mt-8">
        ${projects
          .slice(Math.ceil(projects.length / 2))
          .reduce((acc, project) => acc + Project(project), "")}
      </div>
    </div>
  `;
}
