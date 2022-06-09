import React from 'react'
import './About.css'
import myimg from '../../img/myimg.JPG'
const About = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color: 'purple' }}>I Am Noor Mohammad</h1>
            <img style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} src={myimg} alt="" />
            <h2>My Skills</h2>
            <p>
                <span style={{ fontWeight: 'bold' }}>Experts:</span> HTML5 , CSS3 , Java Script , ES6 , Bootstrap , Tailwind , React JS .

            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>Comfortable:</span>  Daisy UI , Node JS , Express JS , MongoDB , React Router , React
                Hook Form , Re Chart .
            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>Familiar:</span>   Next JS , Payment Gateway , TypeScript , Send Grid .
            </p>
            <p>
                <span style={{ fontWeight: 'bold' }}>Tools And Others:</span>
                Firebase , Heroku, Netlify ,Github , JWT , VS Code , Figma ,
                Chrome Dev Tool .
            </p>
            <h2>About me</h2>
            <p style={{ fontSize: '20px' }} >I am a Web Developer, and I'm very passionate and dedicated about my work. I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the work process, from ideas.
                However,t I am a quick learner, and hardworker ,adaptive as well as an energetic person..</p>
        </div>
    )
}

export default About