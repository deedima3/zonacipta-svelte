<script>
  import Router from 'svelte-spa-router';
  import {push, pop, replace} from 'svelte-spa-router'
  import { routes } from './routes'

  replace('/splashload')
  
  const splashFunction = () => {
      setTimeout(() => {
        replace('/')
    }, 2000);
  }
  splashFunction()
  
</script>

<main class="flex flex-col items-center animate-gradient-x bg-gradient-to-br from-gradient-one to-gradient-two w-full">
  <div class="blur-xl animate-spin"></div>
  <div class="flex flex-col min-h-screen bg-white shadow-lg max-w-lg w-full">
    <Router {routes}/>
  </div>
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<!--   
 
-->