import { useParams, Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import api from '../helpers/api';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { PageNotFound } from '../pages';
import BlogContext from '../context/BlogContext';

const PostPage = () => {
  const { posts, setPosts } = useContext(BlogContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((post) => post.id.toString() === id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postsList = posts.filter((post) => post.id !== id);
      setPosts(postsList);
      navigate('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.datetime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}>
              <button className='editButton'>
                <FaEdit />
              </button>
            </Link>
            <button
              className='deleteButton'
              onClick={() => handleDelete(post.id)}
            >
              <FaTrashAlt />
            </button>
          </>
        )}
        {!post && <PageNotFound />}
      </article>
    </main>
  );
};

export default PostPage;
