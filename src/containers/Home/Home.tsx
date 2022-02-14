import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h3>Scrum Toolkit</h3>
      <ul>
        <li>
          <Link to="/retro/1">Open Retro</Link>
        </li>
        <li>
          <Link to="/planning/1">Open Planning</Link>
        </li>
        <li>
          <Link to="/kudos/1">Open Kudos Giving</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
