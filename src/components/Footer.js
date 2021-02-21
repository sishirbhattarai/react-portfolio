import React  from 'react';
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

// function Footer() {
//     return (
//        <footer>
//         <h2>Sishir portfolio@2021</h2>

//       </footer>

//     )}

function Footer(){
  return(
    <footer
      className="bg-black text-center text-white w-full justify-center"
    >
      <div className="flex flex-row bg-black justify-center">
        <a
          className="fa fa-github m-2 text-white"
          href="https://github.com/sishirbhattarai"
        ></a>
        <a
          className="fa fa-linkedin m-2 text-white"
          href="https://www.linkedin.com/in/sishir-bhattarai/"
        ></a>
        <a
          className="fa fa-envelope m-2 text-white"
          href="mailto:sishir.bhattarai@outlook.com"
        ></a>
        <a
          className="fa fa-phone m-2 text-white animate-bounce"
          href="tel:7048065842"
        ></a>
      </div>
      <div className="flex text-white justify-center">
        <p className="font-cabin">&copy; Copyright Sishir Inc.</p>
      </div>
    </footer>
  );
}

export default Footer;