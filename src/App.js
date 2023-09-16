import React from "react";
import "./App.css";

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "React.Js",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "HTML+CSS",
    level: "intermediate",
    color: "#C3DCAF",
  },
  {
    skill: "Java",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "SQL",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#FF3B00",
  },
];

//create three components like Avatar ,Intro,SkillList

function App() {
  return (
    <>
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

//Avatar component
function Avatar() {
  return (
    <>
      <img className="avatar" src="/52.jpg" alt="ashok image" />
    </>
  );
}

//Intro component
function Intro() {
  return (
    <>
      <h1>Frontend Developer</h1>
      <p>
        I am Frontend Developer,I am good with HTML5,CSS3 and JavaScript.I am
        also familiar with frame works like React.Js and Angular.I love coding
        :)
      </p>
    </>
  );
}

//create SkillList component
function SkillList() {
  return (
    <div className="skill-list">
      <>
        {skills.map((skill) => (
          <Skill skill={skill.skill} level={skill.level} color={skill.color} />
        ))}
        {/* <Skill skill="React.js" emoji="✌️" color="blue" /> */}
        {/* <Skill skill="JavaScript" emoji="✌️" color="green" />
        <Skill skill="Java" emoji="✌️" color="yellow" />
        <Skill skill="HTML+CSS" emoji="✌️" color="brown" />
        <Skill skill="SQL" emoji="✌️" color="orange" /> */}
      </>
    </div>
  );
}

//create skill component
// Skill child component
function Skill({ skill, level, color }) {
  //above we used Object destructuring
  //props is an object
  //console.log(props);
  return (
    //to add styling we use style={{property:value}}
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>

      {/* <span>   ......one way using && operator
      {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span> */}

      <span>
        {level === "beginner" ? "👶" : level === "intermediate" ? "👍" : "💪"}
      </span>
    </div>
  );
}

export default App;
