import logo from './logo.svg';
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostFrom';

function App() {
  return (
    <div className="App">
      <Post/>
      <hr/>
      <PostForm/>
    </div>
  );
}

export default App;
