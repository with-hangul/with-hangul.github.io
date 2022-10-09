<script>
  import arrowLink from '../assets/arrow-link.svg'
  import arrowLinkWhite from '../assets/arrow-link-white.svg'

  export let link;
  export let text;
  export let isDark;
</script>

<a href={link} class="center" class:dark={isDark}>
  <div class="content-wrapper" class:dark={isDark}>
    <div class="text">{text}</div>
    <img src={isDark ? arrowLinkWhite : arrowLink} alt="" width="13" height="13" />
  </div>
</a>

<style>
  a {
    width: 162px;
    height: 42px;
    text-decoration: none;
  }

  .content-wrapper {
    color: black;
    background-color: white;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
  }

  .content-wrapper.dark {
    color: white;
    background-color: black;
    border: 1px solid white;
  }

  .text {
    margin-left: 15px;
    font-weight: 700;
    font-size: 12px;
  }

  img {
    margin-right: 15px;
  }

  a:hover {
    transform: translate(-5px, -5px);
    overflow: visible;
  }

  a:hover::before {
    content: '';
    width: 160px;
    height: 40px;
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(5px, 5px);
    z-index: -1;
    border: 1px solid black;
    background-color: white;
  }

  a.dark:hover::before {
    border: 1px solid white;
    background-color: black;
  }

  a:active .content-wrapper {
    background-color: #BDFF00;
  }
</style>
