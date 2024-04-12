import { useState } from "react";
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import NavTabs from './NavTabs';


export default function PortfolioContainer(){
    const[ currentPage, setCurrenetPage ]=useState('AboutMe');

    const renderPage=()=>{
        if(currentPage==='AboutMe'){
            return <AboutMe/>
        }
        if(currentPage==='Contact'){
            return <Contact/>
        }
        if(currentPage==='Projects'){
            return <Projects/>
        }
        if(currentPage==='Resume'){
            return<Resume/>
    }
};

    const handlePageChange=(page)=>setCurrenetPage(page);
    
    return(
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} renderPage={renderPage}/>

          <main className="mx-3">{renderPage()}</main>
        </div>
)}