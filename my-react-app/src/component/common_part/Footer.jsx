import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <nav>
        <ul>
          <Link to="/weather">
            <li>Weather</li>
          </Link>
          <Link to="/todolist">
            <li>ToDoList</li>
          </Link>
          <Link to="/meditation">
            <li>Meditation</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Footer;
