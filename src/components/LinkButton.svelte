<script>
  import arrowLink from '../assets/arrow-link.svg'

  export let link;
  export let text;
  // export let theme;
  // export let activeColor;
</script>

<a href={link} class="center">
  <div class="content-wrapper">
    <div class="text">{text}</div>
    <img src={arrowLink} alt="" width="13" height="13" />
  </div>
</a>

<style>
  a {
    width: 162px;
    height: 42px;
    text-decoration: none;
  }

  .content-wrapper {
    color: white;
    background-color: black;
    width: 160px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
    /* background-color: white; */
    position: absolute;
    top: 0px;
    left: 0px;
    transform: translate(5px, 5px);
    z-index: -1;
    border: 1px solid white;
    background-color: black;
  }

  /* a.mail:active {
    background-color: #BDFF00;
  }

  a.chat:active {
    background-color: #FED35D;
  } */
</style>
