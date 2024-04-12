function NavTabs({ currentPage, handlePageChange }) {
    return (
      <ul className="nav nav-tabs" style={{backgroundColor:'#091345', textAlign:"right", fontSize:"150%" }}>
        <li className="nav-item">
          <b style={{color:'#ffffffa0', fontSize:'300%', margin:0, display:"inline-block"}}>Brandon A. Gonzalez</b>
          <a
            href="#aboutMe"
            onClick={() => handlePageChange('About Me')}

            className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
          >
            <b style={{marginInline:'20px', color:'#ffffffa0', textDecoration:'none'}}>About Me</b>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}

            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            <b style={{marginInline:'20px', color:'#ffffffa0', textDecoration:'none'}}>Contact</b>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange('Projects')}

            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          >
            <b style={{marginInline:'20px', color:'#ffffffa0', textDecoration:'none'}}>Projects</b>
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}

            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            <b style={{marginInline:'20px', color:'#ffffffa0', textDecoration:'none'}}>Resume</b>
          </a>
        </li>
      </ul>
    );
  }
  
  export default NavTabs;
  