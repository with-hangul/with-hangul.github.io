<script>
  import logoWhite from '../assets/logo-white.svg'
</script>

<footer>
  <img src={logoWhite} alt="" width="70" height="auto" />
  <nav>
    <a href="https://www.instagram.com/with.hangul">
      <img src="" alt="인스타그램" />
    </a>
    <a href="https://www.facebook.com/with.hangul">
      <img src="" alt="페이스북" />
    </a>
  </nav>
</footer>

<style>
  footer {
    height: 130px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  footer > img {
    margin-left: 30px;
  }
</style>
