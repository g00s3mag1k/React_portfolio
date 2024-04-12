import resume from '../../assets/Resume.pdf';
import '../../App.css';


export default function Resume(){
    return(
    <div style={{ marginleft: "80px", marginTop:"50px" }}>
        <h1>Resume</h1>
            <a style={{textDecorationLine:'underline'}}href={resume} target="blank" download>Download my Resume</a>
          <h2>Front-end Proficiencies</h2>
            <ul style={{fontSize:'large'}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>

        <div>
          <h2>Back-end Proficiencies</h2>
            <ul style={{fontSize:'large'}}>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL,Sequelize</li>
                <li>MongoDB,Mongoose</li>
                <li>REST</li>
                <li>GraphQl</li>
            </ul>
        </div>
    </div>
    )
};