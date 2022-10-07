<script>
  import Router from 'svelte-spa-router'
  import Header from './components/Header.svelte'
  import Home from './pages/Home.svelte'
  import About from './pages/About.svelte'
  import Vision from './pages/Vision.svelte'
  import Projects from './pages/Projects.svelte'

  const routes = {
    '/': Home,
    '/about': About,
    '/vision': Vision,
    '/projects': Projects,
  }
</script>

<div>
  <Header />
  <div style="height: 50px;"></div>
  <Router {routes} />
</div>

<style>

</style>
