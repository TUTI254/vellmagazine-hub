import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <p>Welcome to the main page!</p>
      <p>
        <Link to="/dashboard">Go to Dashboard</Link>
      </p>
    </div>
  );
};

export default Main;
