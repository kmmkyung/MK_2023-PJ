// Logo Svg
import Svg_data from '../../data/Svg_data';

window.addEventListener("DOMContentLoaded",()=>{
  document.querySelector(".nav-logo").innerHTML=Svg_data.logo;
})

const MainLogo = () => {

  return(
    <>
    <div class="nav-C nav-logo"></div>
    </>

  );
};

export default MainLogo;