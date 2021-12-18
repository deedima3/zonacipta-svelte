<script>

    import RegisWrapper from "./Auth/RegisWrapper.svelte";
    import { onDestroy, setContext } from 'svelte'
    import { user } from '../libs/UserStore'
    import MainMenu from './App/MainMenu.svelte'
    import { fade } from 'svelte/transition'

</script>


<div class="px-4">
    <div class="" transition:fade >
        {#if false}
            <RegisWrapper/>
        {:else}
            <MainMenu/>
        {/if}
    </div>
</div>