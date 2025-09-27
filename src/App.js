import "./App.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skillset />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src="https://media.licdn.com/dms/image/v2/D4E03AQG8GCkMi20Z6w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730443401279?e=2147483647&v=beta&t=RjT8rMGHFCB0qn1oiJxchrV27Ij2T9HZaiwgUV9ppjw"
      alt="Profile Photo"
      className="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Satish Konduru</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
        cumque esse laborum quae nulla saepe dicta? Fuga dolor dolorem minima
        illo quisquam incidunt possimus ullam vel, cum, ut fugit sapiente!
      </p>
    </div>
  );
}

function Skillset() {
  return (
    <div className="skill-set">
      <Skill skill="React" emoji="💪" color="blue" textColor="white" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
      <Skill skill="Angular" emoji="💪" color="tomato" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      className="skill"
      style={{ backgroundColor: props.color, color: props.textColor }}
    >
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
