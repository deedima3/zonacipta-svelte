<script>
    import Icon from '@iconify/svelte'


    export let title
    export let icon
</script>

<div class="flex flex-col items-center justify-center hover:scale-110 transform transition-all">
    <Icon icon={icon} class="text-brand text-4xl"></Icon>
    <h6 class="text-sm font-bold text-brand">
        {title}
    </h6>
</div>