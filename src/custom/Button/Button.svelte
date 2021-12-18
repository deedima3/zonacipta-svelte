<script>
    export let variant
    export let type
    export let text
    export let extraClass
</script>

<button class={`${variant == "solid" ? "bg-brand text-white" : "bg-white border-2 text-brand border-brand" } ${extraClass} py-3 px-8 rounded-md `} type={type}>
    {text}
</button>