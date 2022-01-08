import "./App.css";
import axios from "axios";
import { useHistory } from "react-router";

function App(props) {
  const history = useHistory();

  return (
    <div className="container">
      {console.log(props)}
      <br />
      <a href="/home">
        <button type="submit" className="btn btn-primary  ">
          Home
        </button>
      </a>
    </div>
  );
}

export default App;
