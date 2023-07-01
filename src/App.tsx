import React from 'react';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
// Hooks
import {createContext, useState} from 'react'
import { postType } from './components/Home/Home';

export const PostContext = createContext<contextType>([[], () => {}]);

export type contextType = [
  posts: postType[],
  setPosts: React.Dispatch<React.SetStateAction<postType[]>>
]

function App() {
  const [posts, setPosts] = useState<postType[]>([])
  return (
    <div className="App">
      <PostContext.Provider value={[posts, setPosts]} >
        <Header />
        <Home />
        <Footer />
      </PostContext.Provider>
    </div>
  );
}

export default App;
