import React  from 'react';
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function About() {
    return (
     <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="card-title"><strong>About me</strong></h5>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12 col-md-4">
                <img src="/image3.jpg" width="200%" />
              </div>
              <div className="col-sm-12 col-md-8">
                
                <p>
                  My name is Sishir Bhattarai. I am currently working with Dell as a
                  Cloud Support Engineer with knowledge of Dell EMC Storage,
                  Linux, DNS, DHCP, Routing, Active Directory, Servers, IP
                  address, and ensuring security of
                  Company's IT network and Servers.
                </p>
            </div>
            <div className="col-sm-12 col-md-8">
                <p>
                  I am also enrolled in intensive, partime, 24 weeks coding bootcamp program that includes both frontend and backend academics to become full stack web-developer.
                  
                  The Marketable Skills that I am learning are HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Node.js, Database Theory, MongoDB, MySQL, Command Line, Git, and more.
                </p>
              </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <p>
                    I am experienced and results-oriented with proven abilities in
                    developing positive relationships with clients and
                    coworkers. Highly motivated and energetic, I strive to
                    ensure that all tasks are successfully accomplished on time.
                    You can also click on below link to find me on LinkedIn. 
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
    
      )
}

export default About