<script>
    import Icon from '@iconify/svelte'

    export let image
    export let altName
    export let text
    export let location
</script>

<div class="relative rounded-md overflow-hidden h-44 transform transition-all hover:scale-105">
    <img src={image} alt={altName} class="transform transition-all hover:scale-110">
    <div class="absolute bottom-0 w-full flex flex-col flex-end p-3">
        <h3 class="text-white font-Inter font-bold">{text}</h3>
        <div class="flex items-center">
            <Icon icon="mdi-light:map-marker" style={"font-size: 24px; color: white;"}/>
            <h5 class="text-white font-Inter">{location}</h5>
        </div>
    </div>
</div>