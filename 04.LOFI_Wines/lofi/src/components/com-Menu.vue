<template>
  <div>
    <header class="list">
      <div class="header-container">
        <div class="logo-All">
          <div class="logo"></div>
          <h1 class="ir">LOFI Wines</h1>
        </div>
        <div class="title">
          <h2>The wine List</h2>
        </div>
        <div class="menu-Icon">
          <div class="hamburger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </div>
      </div>
    </header>
    <nav>
      <ul class="menu-list">
        <li class="menu-item">
          <a href="producers.html" class="btn-underline">Producers</a>
        </li>
        <li class="menu-item">
          <a href="#" class="btn-underline">The Wine List</a>
        </li>
        <li class="menu-item">
          <a href="contact.html" class="btn-underline">Contact</a>
        </li>
      </ul>
      <aside>
        <a class="btn-line" href="#">INSTAGRAM</a>
        <a class="btn-line" href="#">FACEBOOK</a>
      </aside>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  body{
    font-family: 'Roboto', sans-serif;
    background-color: var(--main);
    font-weight: 300;
  }

  /* header */
  header{
    position: fixed;
    z-index: 999;
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
  }

  .header-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--black);
    padding-bottom: 5px;
    position: relative;
    z-index: 2;
  }

  .logo-All{
    flex-basis: 50%;
  }

  .logo{
    width: 100px;
    height: auto;
  }

  .title h2{
    font-family: 'Nanum Myeongjo', serif;
    font-weight: normal;
    font-size: var(--font-size-M);
    letter-spacing: 4px;
    text-wrap: nowrap;
  }

  .menu-Icon{
    flex-basis: 50%;
  }

  .hamburger{
    margin-left: auto;
    width: 40px;
  }

  .hamburger.on span:first-child{
    transform: translateY(10px) rotate(45deg);
  }

  .hamburger.on span:nth-child(2){
    visibility: hidden;
  }

  .hamburger.on span:last-child{
    transform: translateY(-10px) rotate(-45deg);
  }

  .hamburger span{
    display: block;
    height: 1px;
    background-color: var(--black);
    margin: 10px auto;
    transition: transform 0.2s;
  }

  .headerBG{
    width: 100%;
    position: fixed;
    height: 69px;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 1;
  }

  /* nav */
  nav{
    z-index: 99;
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0;
    background-color: var(--nav);
    transform: translateX(100%);
    transition: transform 0.4s ease-in;
  }

  nav.on{
    transform: translateX(0%);
  }

  .menu-list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .menu-item{
    font-family: 'Nanum Myeongjo', serif;
    font-weight: normal;
    margin: 10px 0;
    cursor: pointer;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.4s;
  }

  .menu-item > .btn-underline{
    font-size: var(--font-size-L);
  }

  aside{
    position: absolute;
    bottom: 0;
    display: flex;
    gap: 20px;
    justify-content: center;
    width: 100%;
    margin: 0 0 50px 0;
    transform: translateY(100%);
    opacity: 0;
    transition: all 0.4s;
  }
</style>