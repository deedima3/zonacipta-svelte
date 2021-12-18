<script>
    export let label
    export let placeholder
    export let name
    export let type
    export let value
    export let required
</script>

<div class="w-full p-2 mt-3">
    <label for="input">
        <p class="text-transparent bg-clip-text bg-gradient-to-br from-gradient-one to-gradient-two font-bold">
            {label}
        </p>
    </label>
    <div class="w-full p-1 border-2 border-gray-500 focus:border-brand mt-1 h-10">
        <input value={value} type={type} class="w-full h-full border-none focus:border-none" name={name} placeholder={placeholder} required={required ? true : false}>
    </div>
</div>