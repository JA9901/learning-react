import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/users/Ronaldo">Ronaldo</Link>
      <Link to="/users/Messi">Messi</Link>
      <Link to="/users/br4gg">David Bragg</Link>
    </nav>
  );
}

export default Nav