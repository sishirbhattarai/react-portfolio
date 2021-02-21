import React  from 'react';
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function Contact() {
    return (
        <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-12">
                <h5 className="card-title">
                  <strong>My Contacts</strong>
                </h5>
                <hr />
              </div>
            </div>

            <div className="row">
              <div className="col-sm-10">
                <form action="action_page.php">
                  <p className="Name"><strong>Name: </strong>Sishir Bhattarai</p>
                  <p className="Email">
                    <strong>Email: </strong>sishir.bhattarai@outlook.com
                  </p>
                  <p className="Phone"><strong>Phone: </strong> (704)-806-5842</p>
                  <p class="Github">
                    <strong>Github: </strong>
                    <a
                      href="https://github.com/sishirbhattarai"
                      target="_blank"
                      >https://github.com/sishirbhattarai</a>
                  </p>
                  <p class="Linked">
                    <strong>LinkedIn: </strong
                    ><a
                      href=" https://www.linkedin.com/in/sishir-bhattarai/"
                      target="_blank"
                    >
                      https://www.linkedin.com/in/sishir-bhattarai/</a
                    >
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;