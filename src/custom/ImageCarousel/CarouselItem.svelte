<script>
    export let image
    export let altName
    export let text
    export let location
</script>

<div class="relative rounded-md overflow-hidden">
    <img src={image} alt={altName}>
    <div class="absolute bottom-0 w-full flex flex-col flex-end p-2">
        <h3 class="text-white font-Inter">{text}</h3>
        <div class="flex">
            <h5 class="text-white font-Inter">{location}</h5>
        </div>
    </div>
</div>