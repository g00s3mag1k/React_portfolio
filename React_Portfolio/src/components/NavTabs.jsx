function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={{ display: 'flex', justifyContent: 'space-evenly', fontSize: '150%', paddingRight: '40px', paddingTop:'20px' }}>
      <li className="nav-item">
        <a
          href="#aboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#ffffffa0', textDecoration: 'none' }}
        >
          <b>AboutMe</b>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#ffffffa0', textDecoration: 'none' }}
        >
          <b>Contact</b>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#ffffffa0', textDecoration: 'none' }}
        >
          <b>Projects</b>
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          style={{ color: '#ffffffa0', textDecoration: 'none' }}
        >
          <b>Resume</b>
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;