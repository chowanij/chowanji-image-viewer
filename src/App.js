import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Gallery from './components/Gallery'
import './App.scss';


const data = [
  {
      src: 'https://unsplash.it/800/300?image=1',
      title: 'title-test1',
      content: 'content',
      author: 'jan'
  },
  {
      src: 'https://unsplash.it/800/1300?image=22',
      title: 'title-test2',
      content: 'content',
      author: 'adam'
  },
  {
      src: 'https://unsplash.it/1800/1300?image=13',
      title: 'title-test3',
      content: 'content',
      author: 'kamil'
  },
  {
      src: 'https://unsplash.it/800/600?image=8',
      title: 'title-test4',
      content: 'content',
      author: 'anna'
  },
  {
      src: 'https://unsplash.it/200/300?image=15',
      title: 'title-test5',
      content: 'content',
      author: 'ivan'
  },
  {
      src: 'https://unsplash.it/800/300?image=6',
      title: 'title-test6',
      content: 'content',
      author: 'ivan'
  },
   {
      src: 'https://unsplash.it/800/300?image=1',
      title: 'title-test7',
      content: 'content',
      author: 'paul'
  },
  {
      src: 'https://unsplash.it/800/1300?image=22',
      title: 'title-test8',
      content: 'content',
      author: 'sonya'
  },
  {
      src: 'https://unsplash.it/1800/1300?image=13',
      title: 'title-test9',
      content: 'content',
      author: 'alan'
  },
  {
      src: 'https://unsplash.it/800/600?image=8',
      title: 'title-test10',
      content: 'content',
      author: 'tina'
  },
  {
      src: 'https://unsplash.it/200/300?image=15',
      title: 'title-test12',
      content: 'content',
      author: 'tola'
  },
  {
      src: 'https://unsplash.it/800/300?image=6',
      title: 'title-test13',
      content: 'content',
      author: 'lola',
  }
  
];

function App() {
  const gallery = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: "LOAD_GALLERY",
      payload: data
    })
  }, []);

  return (
    <div className="App">
      {gallery && <Gallery images={gallery} />}
    </div>
  );
}

export default App;
