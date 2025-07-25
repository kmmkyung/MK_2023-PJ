const MainLogo = () => {
  const logo = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 240 74.9" style="enable-background:new 0 0 240 74.9;" xml:space="preserve">
  <path d="M54,1.8H2.7v4.5l43.6,0L0,73.3h54.5v-4.5h-40L54,1.8z"></path>
  <path d="M88.6,0.1c-20.4,0-36.7,17-36.7,37.4c0,20.8,16.4,37.5,36.7,37.5c20.5,0,36.9-16.7,36.9-37.5
    C125.5,17.1,109.1,0.1,88.6,0.1z M88.6,70.7c-16.3,0-28.7-14.9-28.7-33.3c0-18.2,12.5-33.1,28.7-33.1c16.4,0,28.8,14.9,28.8,33.1
    C117.5,55.8,105,70.7,88.6,70.7z"></path>
  <path d="M165,33.2c3.1-3.4,5-7.8,5-12.7c0-10.5-8.3-18.9-18.5-18.9h-19.1v71.7h7V52.9c0-9.1,8.2-16.6,17.3-16.6
    c9.6,0,17.4,8.3,17.4,18v18.9h7V56.6C181.1,45.9,174.3,36.8,165,33.2z M153,32.1c-5.4,0.8-10.1,3.4-13.6,7v-33h12.1
    c6.4,0,11.5,6.6,11.5,13C162.9,26.8,157.4,31.4,153,32.1z"></path>
  <path d="M215.1,0.1c-13.7,0-24.9,11.4-24.9,25.3v48h7v-19c0-10,8-18.5,17.9-18.5c9.8,0,17.9,8.4,17.9,18.5v19h7v-48
    C240,11.4,228.8,0.1,215.1,0.1z M232.9,39.4c-4.5-4.7-10.8-7.7-17.8-7.7c-7,0-13.3,2.9-17.9,7.7V22.7c0-10,8-18.1,17.9-18.1
    c9.8,0,17.8,8.2,17.8,18.1V39.4z"></path>
  </svg>`;

  const goTop = () => {
    const html = document.documentElement;
    html.style.scrollBehavior = "smooth";
    window.scrollTo(0, 0);
    setTimeout(() => {
      html.style.scrollBehavior = "auto";
    }, 2000);
  };

  return (
    <div
      onClick={goTop}
      dangerouslySetInnerHTML={{ __html: logo }}
      className="nav-C nav-logo"
    ></div>
  );
};

export default MainLogo;
