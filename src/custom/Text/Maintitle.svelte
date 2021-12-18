<script>
    export let title
    export let size
    export let subtitle
</script>

<h3 class={`font-Inter font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gradient-one to-gradient-two ${size}`}>{title}</h3>
{#if subtitle}
     <h4 class="font-Inter text-transparent bg-gradient-to-br from-gradient-one to-gradient-two mt-2 bg-clip-text text-lg font-medium">{subtitle}</h4>
{/if}