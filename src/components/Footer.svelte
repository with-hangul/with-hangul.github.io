<script>
  import logoWhite from '../assets/logo-white.svg'
  import facebook from '../assets/icons/facebook.svg'
  import instagram from '../assets/icons/insta.svg'
  import kakao from '../assets/icons/kakao.svg'
  import linktree from '../assets/icons/linktree.svg'
  import mail from '../assets/icons/mail.svg'
  import notion from '../assets/icons/notion.svg'
</script>

<footer>
  <img src={logoWhite} alt="" width="70" height="auto" />
  <nav>
    <a href="https://linktr.ee/with.hangul" target='_blank'>
      <img src={linktree} alt="linktree" class='icon'/>
    </a>
    <a href="https://www.facebook.com/with.hangul" target='_blank'>
      <img src={facebook} alt="facebook" class='icon'/>
    </a>
    <a href="https://www.instagram.com/with.hangul" target='_blank'>
      <img src={instagram} alt="instagram" class='icon'/>
    </a>
    <a href="https://with-hangul.notion.site/with-hangul/About-8f65165cb94a4f128a8072eb22ff3338" target='_blank'>
      <img src={notion} alt="notion" class='icon'/>
    </a>
    <a href="https://open.kakao.com/o/seBw5jGe" target='_blank'>
      <img src={kakao} alt="kakao"class='icon' />
    </a>
    <a href="mailto:with.hangul@gmail.com">
      <img src={mail} alt="mail" class='icon'/>
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

  footer > nav {
    width: 80%;
    text-align: right;
  }

  .icon {
    width: 10%;
    height: 40px;
    padding: 0px 0px 0px 0px;
  }

  .icon:hover {
    fill: blue;
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(50deg) brightness(118%) contrast(119%);
  }
</style>
