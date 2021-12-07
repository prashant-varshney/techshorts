import { useContext } from 'react';
import BlogContext from '../context/BlogContext';
import { Feed } from '../components';

const Home = () => {
  const { searchResults } = useContext(BlogContext);

  return (
    <main className='Home'>
      {searchResults.length ? (
        <Feed posts={searchResults} />
      ) : (
        <p style={{ marginTop: '2rem' }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
