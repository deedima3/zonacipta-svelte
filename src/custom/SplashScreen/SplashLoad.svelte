<script>
    import { fade } from 'svelte/transition'
    import { createEventDispatcher } from 'svelte';
    
    const dispatch = createEventDispatcher();    
</script>

<div class="flex min-h-screen justify-center items-center" >
    <img class="p-10" src="/Frame4.png" alt="Loader Zona Cipta" transition:fade={{duration : 2000}} 
    on:outroend="{() => {
        dispatch('outroed')
    }}">
</div>