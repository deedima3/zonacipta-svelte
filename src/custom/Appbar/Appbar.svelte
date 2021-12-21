<script>
    import AppbarItem from "./AppbarItem.svelte";

    const items = [
        {
        "icons" : "mdi-light:home",
        "title" : "Menu",
        "routes" : "/"
        },
        {
        "icons" : "mdi-light:book-multiple",
        "title" : "History",
        "routes" : "/history"
        },
    ]
</script>

<div class="bg-gray-100 sticky bottom-0 w-full flex max-w-lg justify-around rounded-md shadow-md p-1">
    {#each items as item}
         <AppbarItem icons={item.icons} title={item.title} routes={item.routes}/>
    {/each}
</div>