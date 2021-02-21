import React  from 'react';
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function Resume() {
    return (
        <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="card-title"><strong>Resume</strong></h5>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-6">
                <p>Click on the logo to download the resume:</p>

                  <a href="/Resume-Sishir-Bhattarai.pdf" download>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRABWUKvt8DoB8oD1GqtzK1_Xv67mlq7yNULg&usqp=CAU" alt="W3Schools" width="204" height="202"></img>
                  
                    </a>
                  
              </div>
              
            </div>
          </div>
        </div>
      </div>
     )
}
export default Resume;