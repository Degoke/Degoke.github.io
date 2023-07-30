import { html } from "../library/utils";
import { Project, ProjectType } from "./project";

const blogPosts: ProjectType[] = [
  {
    title: "Sending your API Errors Asynchronously as Slack Notifications",
    details:
      "Sending errors asynchronously from your express API as slack notifications using the slack API and BullMQ queues",
    link: "https://blog.degokeadewoye.com/sending-your-api-errors-asynchronously-as-slack-notifications",
    tags: ["error-handling", "javascript", "backend"],
    type: "blogpost",
  },
  {
    title: "Learning Organizations and Why We Need Them: A Personal Take",
    details:
      "In today's fast-paced world, I believe it's more important than ever for organizations to adapt and grow. in my professional journey, I have witnessed the power of learning organizations in unlocking potential and fostering a culture of continuous improvement, knowledge sharing, and adaptability to change.",
    link: "https://blog.degokeadewoye.com/learning-organizations-and-why-we-need-them-a-personal-take",
    tags: ["workplace", "growth", "leadership"],
    type: "blogpost",
  },
  {
    title: "SQL queries on a production database",
    details:
      "Precautions to take when running SQL queries on your production database",
    link: "https://blog.degokeadewoye.com/sql-queries-on-a-production-database",
    tags: ["sql", "database", "backend"],
    type: "blogpost",
  },
];

export function BlogPosts(): string {
  return html`
    <div
      id="blogposts"
      class="p-2 md:p-6 lg:p-0 lg:w-8/12 m-auto grid grid-cols-1 gap-2 project-container"
    >
      ${blogPosts.reduce((acc, post) => acc + Project(post), "")}
    </div>
  `;
}
