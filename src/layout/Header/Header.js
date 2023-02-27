import { Link } from 'react-router-dom';
import { HeaderBox } from './Header.styled';

export const Header = () => {
  return (
    <HeaderBox>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </HeaderBox>
  );
};
