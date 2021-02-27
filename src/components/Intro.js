import React  from 'react';
import image from '../styles/image3.jpg'
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function Intro() {
    return (
        
        <div class= "container-card">
            <h1>Profile Card</h1>
        <img src={image} alt="Sishir"></img>
        <h1>Sishir Bhattarai</h1>
        <p class="title">Cloud Engineer@Dell Technologies</p>
  
</div>

    )
}

export default Intro;