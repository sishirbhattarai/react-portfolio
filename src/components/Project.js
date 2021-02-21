import React from 'react';
// import data from '../components/data.json';
import '../styles/indexstyle.css'
import '../styles/contactstyle.css'
import '../styles/portfoliostyle.css'

function Project() {
    return (
<div class="container">
<div class="card">
  <div class="card-body">
    <div class="row">
      <div class="col-sm-12">
        <h5 class="card-title"><strong>My Project and applications</strong></h5>
        <hr />
        <p><b>A. GitHub Project: </b> The user story for this project is, as a user, I need an app which shows current local weather as well as any latest news on searching all in one page. As a user, I want to save news if needed and delete it after saved. For more information about project and its contributors, click my Github link below.</p>
        <ul>
          <li><b>Github Link: </b><a
            href="https://github.com/sishirbhattarai/DailyFeed"
            target="_blank"
            >https://github.com/sishirbhattarai/DailyFeed</a
          ></li>
          <li><b>Live Deployed Link: </b><a
            href="https://sishirbhattarai.github.io/DailyFeed/"
            target="_blank"
            >https://sishirbhattarai.github.io/DailyFeed/</a
          ></li>
          </ul>
<hr />
        <p><b>B. My Applications:</b></p>
        
          <p1><b>a) Weather Dashboard Application: </b>The user story for this application is, as a traveler
            I want to see the weather outlook for multiple cities
            so that I can plan a trip accordingly. For more information, click my Github link below.</p1>
          
         <ul>
          <li><b>Github Link: </b><a
            href="https://github.com/sishirbhattarai/Sishir-Weather-Dashboard"
            target="_blank"
            >https://github.com/sishirbhattarai/Sishir-Weather-Dashboard</a
          ></li>
          <li><b>Live Deployed Link: </b><a
            href="https://https://sishirbhattarai.github.io/Sishir-Weather-Dashboard/"
            target="_blank"
            >https://sishirbhattarai.github.io/Sishir-Weather-Dashboard/</a
          ></li>
        </ul>

        <p1><b>b) Password Generator Application: </b>The user story for this application is, AS AN employee with access to sensitive data
          I WANT to randomly generate a password that meets certain criteria
          so that I can create a strong password that provides greater security. For more information, click my Github link below.</p1>

        <ul>
          <li><b>Github Link: </b><a
            href="https://github.com/sishirbhattarai/Passowrd-Generator"
            target="_blank"
            >https://github.com/sishirbhattarai/Passowrd-Generator</a
          ></li>
          <li><b>Live Deployed Link: </b><a
            href="https://sishirbhattarai.github.io/Passowrd-Generator/"
            target="_blank"
            >https://sishirbhattarai.github.io/Passowrd-Generator/</a
          ></li>
        </ul>

      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">

      </div>
    </div>
  </div>
</div>
</div>
    )
};


export default Project;

//   let buttonstyle = {
//     'font-size': '16px',
//   };
//   const newdata = data.reverse().map((data) => {
//     return (
//       <>
//         <div className='flex flex-col tablet:w-4/5 tablet:mx-auto laptop:w-2/5 desktop:w-1/5 m-5 p-5 shadow-2xl rounded-2xl mx-3 laptop:mx-5 desktop:mx-10 h-1/2 my-auto transition duration-500 ease-in-out hover:bg-silverSand hover:bg-opacity-50 '>
//           <a href={data.deploymentLink} target='_blank'>
//             <img src={data.img} className='w-full my-3' alt='...' />
//           </a>

//           <div className='' key={data.id}>
//             <h5 className='text-3xl mb-2 border-b font-light font-bioRhyme text-center'>
//               {data.projectName}
//             </h5>
//             <p className='font-cabin italic text-lg'>{data.description}</p>
//             <div className='flex flex-row justify-evenly py-5'>
//               <a
//                 style={{ buttonstyle }}
//                 className='bg-oxfordBlue text-white float-left py-2 px-3 rounded-lg mx-1'
//                 href={data.repoLink}
//                 target='_blank'
//               >
//                 Github Repo <i className='fa fa-github'></i>
//               </a>
//               <a
//                 style={{ buttonstyle }}
//                 className='bg-oxfordBlue text-white float-left py-2 px-3 rounded-lg mx-1'
//                 href={data.deploymentLink}
//                 target='_blank'
//               >
//                 Live Deployment <i className='fa fa-rocket'></i>
//               </a>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   });


// export default class Project extends Component {
//   render() {
    
//     return (
      
//       <div className='flex flex-col laptop:flex-row justify-center p-5 laptop:flex-wrap w-screen'> {newdata} </div>

//     )
//   }
// }