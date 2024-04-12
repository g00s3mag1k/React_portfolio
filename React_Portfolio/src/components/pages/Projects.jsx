import React from "react";
import CalendarApp from '../../assets/images/CalendarApp.png';
import NoteTaker from '../../assets/images/NoteTaker.png';
import Ecommerce from '../../assets/images/Ecommerce.png';
import SocialNet from '../../assets/images/Social.png';
import SVGLogo from '../../assets/images/SVG.png';
import PWATextEditor from '../../assets/images/TextEditor.png';
import ProjectBox from "../ProjectBox";



export default function Projects() {
    const projects = [
      {
        title: 'Calendar App',
        description: 'This Calendar Application was part of an assignment where I needed to debug and add onto the starter code and asset files. It contains HTML, JavaScript, CSS, Bootstrap, and jQuery elements. This application runs in the browser and its HTML and CSS is updated by jQuery.',
        image: CalendarApp,
        repoLink: 'https://github.com/g00s3mag1k/Calendar_App',
        deployedLink: 'https://g00s3mag1k.github.io/Calendar_App/',
      },
      {
        title: 'Note Taker',
        description: 'This is a Note Taker app in Express.js that is deployed through the integrated terminal using Node.js and Heroku',
        image: NoteTaker,
        repoLink: 'https://github.com/g00s3mag1k/Note_Taker',
        deployedLink: 'https://agile-ocean-40328-4e9f59754427.herokuapp.com/',
      },
      {
        title: 'E-Commerce back-end',
        description: 'This is a E-commerce back-end server application. Insomnia helps with the server testing on the GET, POST, PUT, and DELETE commands and comes into play by interacting with the server when there is no static webpage for front-end testing. This server is interactive when properly installed with Insomnia.',
        image: Ecommerce,
        repoLink: 'https://github.com/g00s3mag1k/E-Commerce_back-end',
        deployedLink: 'https://drive.google.com/file/d/1ikCJmb1omuBX3zZ13B2jA7nAws1Gyo09/view',
      },
      {
        title: 'Social Network API',
        description: 'This is a Social Network Api back-end server application. Insomnia helps with the server testing on the GET, POST, PUT, and DELETE commands and comes into play by interacting with the server when there is no static webpage for front-end testing. This server is interactive when properly installed with Insomnia.',
        image: SocialNet,
        repoLink: 'https://github.com/g00s3mag1k/social_network_api',
        deployedLink: 'https://drive.google.com/file/d/1mxtqHpcNJ9IYgVhdrIvlKn0X8siAa0xX/view',
      },
      {
        title: 'SVG Logo Maker',
        description: 'This is a command-line application that is deployed through the terminal using JavaScript, Node.js, Inquirer, and Jest. It renders a SVG logo when application is fully executed and placed in a file named "logo.svg" inside the repository.',
        image: SVGLogo,
        repoLink: 'https://github.com/g00s3mag1k/SVG_Logo_Maker',
        deployedLink: 'https://drive.google.com/file/d/1EkFsc5XO8usyy_bnwwMtIlMaixiX3fgx/view',
      },
      {
        title: 'PWA Text Editor',
        description: 'This is a PWA text editor with both back-end and front-end components that render dynamically and store everything in a IndexedDB which can be accessed through the development tools (right-click & scroll to inspect and click). JavaScript files are bundled using a webpack and generate an HTML file, service worker, and manifest file. PWA can be used offline due to cache data being saved and stored in the web browser.',
        image: PWATextEditor,
        repoLink: 'https://github.com/g00s3mag1k/PWA_text-editor',
        deployedLink: 'https://pwa-text-editor-c77u.onrender.com',
      }
    ]
    return (
    <>
     <h1>Projects</h1>
      <div className='row'>
        {projects.map(project => (
        <div className='col-sm-12 col-md-6' key={project.title}>
          <ProjectBox 
          title={project.title} 
          description={project.description} 
          image={project.image} 
          repoLink={project.repoLink} 
          deployedLink={project.deployedLink}/>
        </div>))}
      </div>
    </>
    )
};