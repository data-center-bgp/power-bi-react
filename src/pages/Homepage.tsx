import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <h1>Homepage</h1>
      <Link to="/invoice-masbro">Dashboard Invoice Masbro</Link>
    </div>
  );
}

export default Homepage;