// import resume from '../'
export default function Resume(){
    return(
    <div style={{ "margin-left": "80px","margin-top":"50px" }}>
        <h1>Resume</h1>
            <a href={resume} target="blank" download>Download my Resume</a>
          <h2>Front-end Proficiencies</h2>
            <ul>
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
            <ul>
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