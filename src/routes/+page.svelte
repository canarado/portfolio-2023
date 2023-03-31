<script lang="typescript">
    import Sidebar from "../lib/components/Sidebar.svelte";
    import AboutMe from "../lib/components/AboutMe.svelte";
    import Project from "../lib/components/Project.svelte";
</script>

<Sidebar />

<div class="p-4 md:ml-96" id="content-container">
    <div id="about-me" class="pb-96">
        <AboutMe />
    </div>
    <div class="flex flex-wrap flex-row justify-evenly" id="projects">
        <Project title="Raytracer" technologies="Rust" githubUrl="https://github.com/canarado/rust-rt">
            Simple toy-raytracer made in about 12 hours with SIMD for vector math, utilizes rayon multithreading to render each scanline on a separate core. Supports custom materials and shapes via Rust code.
        </Project>
        <Project title="Jellyfin Server" technologies="Linux,Nginx,SSH">
            Jellyfin server setup on my home lab, running Ubuntu server,  to consume media content via LAN or outside connection proxied through Nginx, and secured with an auto-regenerating SSL certificate.
        </Project>
        <Project title="Yabe Discord Bot" technologies="Nodejs,Typescript,PM2,Sqlite" githubUrl="https://github.com/Academy-Of-Animu/Coding-Yabe-Sei">
            Yabe was a passion project of mine I started in 2018 with a group of friends, this sparked my love for backend technology and APIs. Yabe had moderation features, fun commands to bring joy to users, and I solely authored a fully-fledged Youtube streaming module for Yabe to stream music in Discord voice channels.
        </Project>
        <Project title="Joketeller" technologies="Rust" githubUrl="https://github.com/canarado/joketeller" appUrl="https://docs.rs/joketeller/latest/joketeller/">
            JokeAPI is a fairly successful API written by a good friend of mine, I wanted to add a way to consume his API to fellow rustaceans, so I created one. This crate covers 100% of the API and has a neat chainable feature similar to Java factories for ease-of-use.
        </Project>
        <Project title="Brewbot" technologies="Nodejs,Prisma,Postgres" githubUrl="https://github.com/codedrunks/BrewBot">
            Another Discord bot I created with a group of friends, I primarily authored the database schemas and economy system as well as the now defunct Youtube streaming module (Thanks Youtube corporate!), this bot was made as a way to advertise our work-in-progress forum, and to moderate our community discord server.
        </Project>
        <Project title="Portfolio" technologies="Nodejs,SvelteKit,Tailwind" githubUrl="https://github.com/canarado/portfolio-2023">
            It may be a bit mundane to put this on the list, seeing as how you are viewing this page <em>right now</em>, but I listed it to show the technologies it is built with, as well as to give a link to its repository.
        </Project>
        <Project title="Ferret API" technologies="Rust,Nginx,PM2" githubUrl="https://github.com/canarado/ferret-api-rs" appUrl="https://ferrets.canarado.xyz/">
            Rest API to acquire random pictures of my ferrets (and a few random ones that aren't mine). Previously written with Javascript, I rewrote the API in Rust for speed and also to learn about HTTP libraries in Rust's ecosystem.
        </Project>
    </div>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.cream)
    }
</style>