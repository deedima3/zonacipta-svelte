<script>
    import Icon from '@iconify/svelte';
    import {location, link} from 'svelte-spa-router'

    export let icons
    export let title
    export let routes
</script>

<div class="flex flex-col">
    <a href={"#" + routes}>
        <Icon icon={icons} class={`${$location == routes ? "text-brand" : "text-gray-400"}`} style={"font-size: 48px"}/>
        <p class={`size-md ${$location === routes ? "text-brand" : "text-gray-400"}`}>
            {title}
        </p>
    </a>
</div>