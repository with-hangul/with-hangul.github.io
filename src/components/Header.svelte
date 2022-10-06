<script>
  import { link } from 'svelte-spa-router'
  import logo from '../assets/logo.svg'
</script>

<header>
  <a href="/" use:link>
    <img id="logo" src={logo} alt="" width="auto" height="75%" />
  </a>
  <nav>
    <a href="/about" use:link>ABOUT</a>
    <a href="/vision" use:link>VISION</a>
    <a href="/projects" use:link>PROJECTS</a>
  </nav>
</header>

<style>
  header {
    height: 50px;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    /* box-sizing: border-box; */
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: white;
    z-index: 2;
  }

  a {
    display: inline-flex;
    height: 50px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
  }

  #logo {
    margin-left: 8px;
  }

  nav {
    display: inline-flex;
    justify-content: space-between;
  }

  nav > a {
    border-left: 2px solid black;
    width: 150px;
    background-color: white;
    color: black;
    font-weight: 300;
    font-size: 20px;
  }

  nav > a:hover {
    background-color: black;
    color: white;
  }
</style>
