<script>
import SplashLoad from "./custom/SplashScreen/SplashLoad.svelte";
import Main from "./routes/Main.svelte";

  let loader = 2
  
  const handleOutroed = () => {
    
  }
  
</script>

<main class="flex flex-col items-center animate-gradient-x bg-gradient-to-br from-gradient-one to-gradient-two w-full">
  <div class="blur-xl animate-spin"></div>
  <div class="flex flex-col min-h-screen bg-white shadow-lg max-w-lg w-full">
    {#if loader == 0}
       <SplashLoad on:outroed={handleOutroed}></SplashLoad>
    {:else if loader == 2}
       <Main></Main>
    {/if}
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<!--   
  const splashFunction = () => {
      setTimeout(() => {
        loader++
    }, 2000);
  }

  const handleOutroed = () => {
    loader++
  }
  splashFunction()
-->