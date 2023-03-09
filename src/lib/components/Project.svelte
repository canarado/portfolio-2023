<script lang="ts">
    import { goto } from "$app/navigation";

    import githubIcon from "$lib/assets/github.svg";
    import linkIcon from "$lib/assets/link.svg";

    export let title: string = "";
    export let technologies: string = "";
    export let githubUrl: string | null = null;
    export let appUrl: string | null = null;

    function routeToBlog() {
        goto(`/${toCamelCase(title)}`);
    }

    function toCamelCase(str: string) {
        return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word: string, index: number) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="border-solid border-burnt-sienna-dark border-b-2 border-opacity-20 p-2 hover:border-opacity-75 transition mb-11 max-w-lg">
    <h1 class="text-4xl text-mint inline">{title}</h1>{#if githubUrl }
        <a href={githubUrl} target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="Github Icon" class="ml-2 inline h-8 w-8 -translate-y-2">
        </a>
    {/if}
    {#if appUrl}
        <a href={appUrl} target="_blank" rel="noreferrer">
            <img src={linkIcon} alt="App Icon" class="ml-2 inline h-8 w-8 -translate-y-2">
        </a>
    {/if}
    <h2 class="text-xl">
        Technologies Used: {technologies.split(",").join(", ")}
    </h2>
    <slot />
    <!-- <p class="indent-4">
        <slot />
    </p> -->
</div>