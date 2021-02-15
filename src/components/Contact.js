import React  from 'react';
import './indexstyle.css'
import './contactstyle.css'
import './portfoliostyle.css'

function Contact() {
    return (
        <div class="container">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-sm-12">
                <h5 class="card-title">
                  <strong>My Contacts</strong>
                </h5>
                <hr />
              </div>
            </div>

            <div class="row">
              <div class="col-sm-10">
                <form action="action_page.php">
                  <p class="Name"><strong>Name: </strong>Sishir Bhattarai</p>
                  <p class="Email">
                    <strong>Email: </strong>sishir.bhattarai@outlook.com
                  </p>
                  <p class="Phone"><strong>Phone: </strong> (704)-806-5842</p>
                  <p class="Github">
                    <strong>Github: </strong
                    ><a
                      href="https://github.com/sishirbhattarai"
                      target="_blank"
                      >https://github.com/sishirbhattarai</a
                    >
                    {/* <!-- <ol class = "list" type="a">
                      <li>Coffee</li>
                      <li>Tea</li>
                      <li>Milk</li>
                    </ol> --> */}
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