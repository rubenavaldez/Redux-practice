
import './App.css';
import Post from './components/Post'
import PostForm from './components/PostFrom';

function App() {
  return (
    <div className="App">
      <PostForm/>
      <hr/>
      <Post/>
    </div>
  );
}

export default App;
