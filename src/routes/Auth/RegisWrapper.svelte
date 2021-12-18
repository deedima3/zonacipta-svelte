<script>
    import Login from '../Auth/Login.svelte'
    import Registration from '../Auth/Registration.svelte'
    let registration = 0   
    
    const handleChange = (e) => {
        registration = e.detail
        console.log(e.detail)
    }
    
</script>

{#if registration == 0}
    <Registration on:change={handleChange}/>   
{:else}
    <Login on:change={handleChange}/>
{/if}