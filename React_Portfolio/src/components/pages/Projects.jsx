export default function Projects() {
    const projects = [
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
      },
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
      },
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
      },
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
      },
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
      },
      {
        title: '',
        description: '',
        image: ,
        repoLink: '',
        deployedLink: '',
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
}