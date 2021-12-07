import { Link } from 'react-router-dom';
const PageNotFound = () => {
  return (
    <main className='Missing'>
      <h2>Oops! You weren't supposed to see this</h2>
      <p>The page you are looking for no longer exist.</p>
      <p>
        Return to the <Link to='/'>homepage</Link> and remember: you haven't
        seen anything.
      </p>
    </main>
  );
};

export default PageNotFound;
