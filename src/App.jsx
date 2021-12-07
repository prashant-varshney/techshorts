import { About, Home, NewPost, PageNotFound } from './pages';
import { Header, Nav, Footer, EditPost, PostPage } from './components';
import { BlogContextProvider } from './context/BlogContext';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <BlogContextProvider>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post' element={<NewPost />} />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/edit/:id' element={<EditPost />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BlogContextProvider>
      <Footer />
    </div>
  );
}

export default App;
