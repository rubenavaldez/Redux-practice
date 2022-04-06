import './App.css';
import Post from './components/Post'
import PostForm from './components/PostFrom';

import store from "./store"

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <PostForm/>
      <hr/>
      <Post/>
    </div>
    </Provider>
  );
}

export default App;
