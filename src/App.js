import React from 'react';
import Gallery from './components/Gallery'
import './App.scss';


const data = [
  {
      src: 'https://unsplash.it/800/300?image=1',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/1300?image=22',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/1800/1300?image=13',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/600?image=8',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/200/300?image=15',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/300?image=6',
      title: 'title',
      content: 'content'
  },
   {
      src: 'https://unsplash.it/800/300?image=1',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/1300?image=22',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/1800/1300?image=13',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/600?image=8',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/200/300?image=15',
      title: 'title',
      content: 'content'
  },
  {
      src: 'https://unsplash.it/800/300?image=6',
      title: 'title',
      content: 'content'
  }
  
];

function App() {
  return (
    <div className="App">
      <Gallery images={data} />
    </div>
  );
}

export default App;
