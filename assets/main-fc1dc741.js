(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}})();function i(e,...t){return String.raw({raw:e},...t)}function c(){return new URL(window.location.href).hash}function d(e){const t=new URL(window.location.href);t.hash="#"+e,history.replaceState(null,"null",t)}function g(e){const t=[],o=[];return e.forEach((n,a)=>{a%2===0?t.push(n):o.push(n)}),{evenIndexes:t,oddIndexes:o}}function p(e){return i`
    <div
      data-type=${e.type}
      class="drop-shadow-lg px-6 py-4 bg-light space-y-12 hover:drop-shadow-2xl project-card md:ransition-all duration-500"
    >
      ${e.type==="blogpost"?`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-article" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00bfd8" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h10" />
      </svg>`:e.type==="project"?`<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#a905b6" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 8l-4 4l4 4" />
        <path d="M17 8l4 4l-4 4" />
        <path d="M14 4l-4 16" />
      </svg>`:""}

      <div class="">
        <h2 class="text-lg md:text-xl font-semibold">${e.title}</h2>
        <p class="opacity-70 text-base md:text-lg mt-4">${e.details}</p>
        <p class="font-semibold opacity-70 text-sm mt-8">
          ${e.tags.reduce((t,o)=>t+o+".","#")}
        </p>
      </div>
      <ul class="flex items-center gap-4">
        <li>
          <a
            href=${e.link}
            target="__blank"
            class="flex gap-1 items-center"
          >
            <span class="text-sm md:text-base font-medium">View More</span>
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
          </a>
        </li>
      </ul>
    </div>
  `}const u=[{title:"Sending your API Errors Asynchronously as Slack Notifications",details:"Sending errors asynchronously from your express API as slack notifications using the slack API and BullMQ queues",link:"https://blog.degokeadewoye.com/sending-your-api-errors-asynchronously-as-slack-notifications",tags:["error-handling","javascript","backend"],type:"blogpost"},{title:"Learning Organizations and Why We Need Them: A Personal Take",details:"In today's fast-paced world, I believe it's more important than ever for organizations to adapt and grow. in my professional journey, I have witnessed the power of learning organizations in unlocking potential and fostering a culture of continuous improvement, knowledge sharing, and adaptability to change.",link:"https://blog.degokeadewoye.com/learning-organizations-and-why-we-need-them-a-personal-take",tags:["workplace","growth","leadership"],type:"blogpost"},{title:"SQL queries on a production database",details:"Precautions to take when running SQL queries on your production database",link:"https://blog.degokeadewoye.com/sql-queries-on-a-production-database",tags:["sql","database","backend"],type:"blogpost"}];function f(){return i`
    <div
      id="blogposts"
      class="lg:w-8/12 m-auto grid grid-cols-1 gap-2 pt-32 project-container"
    >
      ${u.reduce((e,t)=>e+p(t),"")}
    </div>
  `}const v=[{title:"Dekube Core",details:"A paas for deploying applications to kubernetes, acts as the core for Dekube application. <br>Built with golang, gin and kubernetes-client-go. ",link:"https://github.com/Degoke/dekube-core",tags:["golang","kubernetes","devops"],type:"project"},{title:"Doc Verify",details:"Document analysis and image comparison application for identity verification <br> Built with golang, gin, aws-sdk-go, gorm, mongodb",link:"https://github.com/Degoke/doc-verify",tags:["golang","aws","ml","backend"],type:"project"},{title:"ETH Service",details:"A service for managing Accounts and Transactions on Ethereum. <br> Built with NestJS, web3.js, MongoDB for data persistence and Ganache for a local node.",link:"https://github.com/Degoke/eth_service",tags:["typescript","nestjs","backend","blockchain"],type:"project"},{title:"Gitlab Slack App",details:"A slack app for receiving gitlab notifications, tagging the users that need to be aware of the notifications and sending them private direct messages",link:"https://github.com/Degoke/gitlab-slack-app",tags:["javascript","nodejs","express","backend"],type:"project"},{title:"Account Management API",details:"An account management application, for sending and receiving money.<br> Built with Nest js and MongoDB",link:"https://github.com/Degoke/account-management-api",tags:["typescript","nestjs","mongodb","backend"],type:"project"},{title:"Account Management UI",details:"The ui of the account management application.<br>Built with React and Material UI",link:"https://github.com/Degoke/account-management-ui-service",tags:["typescript","react","materialui","frontend"],type:"project"},{title:"My Portfolio Site",details:`Minimalist dark mode portfolio website to show my works<br>
      Built with Vanilla Typescript, Tailwind Css and Vite`,link:"https://github.com/Degoke/portfolio",tags:["typescript","html","tailwind","frontend"],type:"project"},{title:"Udapeople Autodeploy",details:"Setting up CI/CD for udapeople app, using Circle CI, AWS Cloud Formation, Ansible",link:"https://github.com/Degoke/udapeople-autodeploy",tags:["aws","ansible","ci-cd","devops"],type:"project"}];function m(){const{evenIndexes:e,oddIndexes:t}=g(v);return i`
    <div
      id="projects"
      class="lg:w-8/12 pt-32 m-auto grid grid-cols-1 lg:grid-cols-2 gap-2 project-container"
    >
      <div class="grid grid-cols-1 gap-2 content-start">
        ${e.reduce((o,n)=>o+p(n),"")}
      </div>
      <div class="grid grid-cols-1 gap-2 content-start lg:mt-8">
        ${t.reduce((o,n)=>o+p(n),"")}
      </div>
    </div>
  `}function w(){const e=c();return i`
    <main class="px-8 py-12">
      <section class="lg:w-8/12 m-auto py-4 lg:py-8 lg:mt-16">
        <div class="space-y-12">
          <div class="space-y-2">
          <img src="/avatar.svg" class="rounded-full w-16 h-16" alt="Degokes Avatar Image" />
          <h1 class="text-3xl md:text-4xl font-semibold">Adegoke Adewoye
          </h1>
          
          <p class="text-xl md:text-2xl font-semibold">Product Engineer <br /> 
          <span class="text-sm font-medium opacity-70">
          I craft innovative solutions and turn ideas into seamless user experiences. 
          </span>
          </p>
          
          </div>
          <ul class="flex gap-x-6 gap-y-4 lg:gap-6 flex-wrap">
          <li>
            <a href="https://www.linkedin.com/in/degoke/" target="__blank" class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
  <path d="M8 11l0 5" />
  <path d="M8 8l0 .01" />
  <path d="M12 16l0 -5" />
  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
              <span class="font-semibold">Connect on Linkedin</span>
              <span class="">
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
              </span>
            </a>
          </li>
          <li>
            <a href="https://github.com/Degoke" target="__blank" class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
</svg>
              <span class="font-semibold">View my Github</span>
              <span class="">
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
              </span>
            </a>
          </li>
          <li>
            <a href="https://calendly.com/degokeadewoye/30-minute-meeting-with-degoke" target="__blank" class="flex gap-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
  <path d="M16 3v4" />
  <path d="M8 3v4" />
  <path d="M4 11h16" />
  <path d="M16 22l5 -5" />
  <path d="M21 21.5v-4.5h-4.5" />
</svg>
              <span class="font-semibold">Schedule a Call</span>
              <span class="">
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
              </span>
            </a>
          </li>
        </ul>
          
          <p class="text-sm md:text-base font-normal opacity-70">
          My experience as a <span class="font-semibold">Lead Software Engineer</span>, <span class="font-semibold">Fullstack Engineer</span>, <span class="font-semibold">Cloud Devops Engineer</span> and <span class="font-semibold">Blockchain Engineer</span> coupled with my expertise in <span class="font-semibold">TypeScript</span>, <span class="font-semibold">Golang</span> and <span class="font-semibold">Python</span> form my foundation for bringing software products to life across diverse industries.
          </p>
          <p class="text-sm md:text-base font-normal opacity-70">
          I excel in designing robust architectures, implementing cutting-edge features, and optimizing performance to deliver high-quality and scalable solutions while collaborating with cross-functional teams, mentoring fellow developers, and driving projects to successful completion.
          </p>
        </div>
        
      </section>
      <div id="project-nav" class="gap-16 py-8 px-2 flex  justify-center flex-wrap mt-8 sticky z-40 top-0 bg-dark">
        <a href="#projects" name="projects" class="nav-button group text-base md:text-lg opacity-70 hover:opacity-100 hover:scale-125 hover:cursor-pointer data-[active=true]:opacity-100 data-[active=true]:scale-125 md:transition-all duration-500" ${(e==="#projects"||!e)&&"data-active='true'"}">
          <span>01</span>
          <hr class="w-2/6 group-hover:w-full group-data-[active=true]:w-full" /> 
          <span>Projects</span>
          </a>
          <a href="#blogposts" name="blogposts" class="nav-button group text-base md:text-lg opacity-70 hover:opacity-100 hover:scale-125 hover:cursor-pointer data-[active=true]:opacity-100 data-[active=true]:scale-125 md:transition-all duration-500" ${e==="#blogposts"&&"data-active='true'"}">
          <span>02</span> 
          <hr class="w-2/6 group-hover:w-full group-data-[active=true]:w-full" /> 
          <span>Blog Posts</span>
          </a>
        </div>
      <section id="main-content" class="main-content py-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] overflow-y-hidden overflow-x-visible">
      ${m()}
      ${f()}
      </section>
      <ul class="flex gap-x-6 gap-y-4 lg:gap-6 flex-wrap place-content-center mt-8">
      <li>
        <a href="https://www.linkedin.com/in/degoke/" target="__blank" class="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#00abfb" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
<path d="M8 11l0 5" />
<path d="M8 8l0 .01" />
<path d="M12 16l0 -5" />
<path d="M16 16v-3a2 2 0 0 0 -4 0" />
</svg>
          <span class="font-semibold">Connect on Linkedin</span>
          <span class="">
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
          </span>
        </a>
      </li>
      <li>
        <a href="https://github.com/Degoke" target="__blank" class="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z" stroke-width="0" fill="currentColor" />
</svg>
          <span class="font-semibold">View my Github</span>
          <span class="">
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
          </span>
        </a>
      </li>
      <li>
        <a href="https://calendly.com/degokeadewoye/30-minute-meeting-with-degoke" target="__blank" class="flex gap-1 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-calendar-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ff4500" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
<path d="M12 21h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
<path d="M16 3v4" />
<path d="M8 3v4" />
<path d="M4 11h16" />
<path d="M16 22l5 -5" />
<path d="M21 21.5v-4.5h-4.5" />
</svg>
          <span class="font-semibold">Schedule a Call</span>
          <span class="">
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
          </span>
        </a>
      </li>
    </ul>
    </main>
  `}document.querySelector("#app").innerHTML=w();const b=document.querySelectorAll(".nav-button"),k=document.querySelectorAll("div[data-type='project']"),y=document.querySelectorAll("div[data-type='blogpost']");document.getElementById("main-content");const x=document.querySelector(".nav-button[name='blogposts']"),M=document.querySelector(".nav-button[name='projects']"),l=document.getElementById("project-nav");b.forEach(e=>{e.addEventListener("click",()=>{j(e)})});function j(e){const t=e.getAttribute("data-active"),o=e.getAttribute("name");t||(document.querySelectorAll(".nav-button[data-active=true").forEach(a=>{a.toggleAttribute("data-active")}),e.setAttribute("data-active","true"),d(o))}let A={root:null,rootMargin:"0px",threshold:1},B=e=>{e.forEach(t=>{if(t.isIntersecting){if(t.target.getAttribute("data-type")==="project"){if(c()=="#projects")return;document.querySelectorAll(".nav-button[data-active=true").forEach(a=>{a.toggleAttribute("data-active")}),M.setAttribute("data-active","true"),d("projects")}if(t.target.getAttribute("data-type")==="blogpost"){if(c()=="#blogposts")return;document.querySelectorAll(".nav-button[data-active=true").forEach(a=>{a.toggleAttribute("data-active")}),x.setAttribute("data-active","true"),d("blogposts")}}})},h=new IntersectionObserver(B,A);document.addEventListener("scroll",()=>{k.forEach(e=>h.observe(e)),y.forEach(e=>h.observe(e))});document.addEventListener("scroll",()=>{if(l.getBoundingClientRect().top===0){if(l.classList.contains("added"))return;l.classList.add("shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"),l.classList.add("added")}else l.classList.remove("shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]"),l.classList.remove("added")});
