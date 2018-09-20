import React from "react"
import "../styles/about.css"

function About(props){
return(
    <div className="bio-body">
        <img className="hero-image" src={require("../images/imageedit_3_4072812862.jpg")} alt="keyboard" />
        <h1 className='title'>Nicholas Munson Bio</h1>
        <h3>Bio.Summery</h3>
        <p className="paragraph">After many years in the restaurant business and earning an Associates Degree in Communications, 
        I decided it was time for a change. I knew I wanted to be challenged but creative at the same time. 
        I found coding after a friend showed me a website he had built. 
        I immediately fell in love with HTML and CSS. I loved the feeling of
        being able to move things around on the page. Since then, I taught myself some things like JavaScript (ES6), 
        HTML5 standards, CSS3. I have also attended and graduated the web development immersive program
        at Galvanize Platt. It was at Galvanize I discovered just how powerful being a developer could actually be. 
        I learned to learn at Galvanize a tool I am forever grateful for because of the potential I now have to learn whatever
        language or technique that is needed to get the job done. After learning to learn I was able to quickly pick up and use Full-Stack concepts like...
        </p>
        <div className="concept-list">
            <ul>
                <li>Git and Github</li>
                <li>NPM</li>
                <li>CLI</li>
                <li>Scope</li>
                <li>Responsive design</li>
                <li>Creating and manipulating RESTful API's</li>
                <li>Frontend Frameworks like React.js, Vue.js, and React-Native</li>
                <li>Dom manipulation</li>
                <li>JSON</li>
                <li>Full CRUD operations with Ajax</li>
                <li>Arrays and Linked Lists</li>
                <li>CSS frameworks like Bootstrap, Materialize, and Native-Base</li>
            </ul>
            <ul>  
                <li>Higher Order Functions</li>
                <li>Recursion</li>
                <li>OOP</li>
                <li>ES6 JavaScript</li>
                <li>Promises</li>
                <li>SQL</li>
                <li>Node.js ecosystem</li>
                <li>Express.js</li>
                <li>Knex.js</li>
                <li>MongoDB</li>
                <li>Deploying to Heroku and Firebase</li>
                <li>Agile methodology.</li>
            </ul>
        </div>
        <p className="paragraph">
        Since graduation, I have found that I have a thirst for learning, so I fill my time in between
        filling out applications and finding freelance work with learning new languages. 
        I am currently learning a few new languages and getting a refresher on some others from the list below.
        </p>
        <div className="learning-list">
            <ul className="li-list">
                <li>Java</li>
                <li>Python</li>
            </ul>
            <ul className="li-list">
                <li>PHP</li>
                <li>Webkit</li>
            </ul>
            <ul className="li-list">
                <li>SaaS</li>
                <li>MERN stack</li>
            </ul>
        </div>
        <img className="hero-image" src={require("../images/imageedit_6_8426369842.jpg")} alt="DJ equipment" />
        <h3>Bio.Life_Outside_Coding</h3>
        <p className="paragraph">
        Outside of coding I enjoy many things and have lots of hobbies. I have a family consisting of an amazing women named Hannah that somehow
        I have convinced to spend the rest of her life with me, and our two dogs Annabelle and Ruca. I love adventure and exploration along with sports and entertainment. Below you can find a list of
        the various activities I like to do.
        </p>
        <div className="concept-list">
            <ul>
                <li>Spending time with the family</li>
                <li>Snowboarding</li>
                <li>Skateboarding</li>
                <li>Scuba diving</li>
                <li>Netflix binges (Orange is the New Black, Peaky Blinders)</li>
                <li>Travel (especially Asia) </li>
                <li>DJing (I worked as a professional DJ for a year) </li>
            </ul>
            <ul>
                <li>Craft Beer (working in a brewery for 4 years)</li>
                <li>Producing Techno </li>
                <li>Concerts of all generes (Red Rocks is my JAM!)</li>
                <li>Camping</li>
                <li>Long walks at the dog park</li>
                <li>Hiking</li>
                <li>In the future I would like to start blogging and podcasting</li>
            </ul>
        </div>
        <img className="hero-image" src={require("../images/imageedit_9_7830771010.jpg")} alt="handshake"  />
        <h3>Bio.Why_you_should_hire_me</h3>
        <p className="paragraph ">
            Are you looking for a moldable, fun, hard working, self motivated, JavaScript 
            loving developer?... because that's me. 
            There is more to me than just my tech chops. I also offer many soft skills that 
            I have picked up over the years from my work in the service industry, and from my studies of communications.
            These skills include, but are not limited to...
        </p>
        <div className="concept-list">
            <ul>
                <li>Communication (written and spoken)</li>
                <li>Teamwork</li>
                <li>Loyalty</li>
                <li>Empathy</li>
                <li>Patience</li>
                <li>Understanding</li>
                <li>Open-Mindedness</li>
            </ul>
            <ul>
                <li>Accountability</li>
                <li>Personal Responsibility</li>
                <li>Time Management</li>
                <li>Adaptability</li>
                <li>Problem solving</li>
                <li>Highly Coachable</li>
                <li>Sarcastic (when appropriate)</li>
            </ul>
        </div>
        <p className="paragraph ">
            Combining these soft skills with my tech chops I believe that I would be a valuable asset to any company willing 
            to take a chance on me. So lets build something big, something amazing, and something dynamic! I look forward to hearing from you!
        </p>
        <img className="hero-image" src={require("../images/imageedit_7_7468252971.jpg")} alt="team puts their fists in to celebrate" />
    </div>

)
}

export default About 