<script>
    import portrait from "$lib/assets/birby.png";
</script>

<aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-96 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
    <div class="h-full overflow-y-auto bg-burnt-sienna text-center">
        <ul class="text-cream opacity-80 font-normal p-2 text-2xl pt-28 space-y-3">
            <li>
                <img src={portrait} alt="Portrait" class="rounded-full h-56 w-56 ml-auto mr-auto border-solid border-8 border-burnt-sienna-dark mb-36">
            </li>
            <li>
                <a href="#about-me" class="active:opacity-100 text-4xl">
                    About
                </a>
            </li>
            <li>
                <a href="#projects" class="active:opacity-100 text-4xl">
                    Projects
                </a>
            </li>
        </ul>
        <div class="mb-4 pt-80 mt-auto text-cream">
            <a href="https://github.com/canarado" target="_blank" rel="noreferrer">Github</a> | <a href="https://www.linkedin.com/in/adamjke/" target="_blank" rel="noreferrer">Linkedin</a>
        </div>
    </div>
</aside>