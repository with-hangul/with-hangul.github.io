<script>
  import Router from 'svelte-spa-router'
  import Header from './components/Header.svelte'
  import Home from './pages/Home.svelte'
  import Vision from './pages/Vision.svelte'

  const routes = {
    '/': Home,
    '/vision': Vision,
  }
</script>

<div>
  <Header />
  <div style="height: 50px;"></div>
  <Router {routes} />
</div>

<style>

</style>
