import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const articles = [
    {id : 1, title:"react"},
    {id : 2, title:"Angular"},
    {id : 3, title:"Vue"},
  ];

  return (
      <div>
        <h1>Articles</h1>
        <ul>
          {articles.map((articles) =>(
            <li key={articles.id}>{articles.title}</li>
          ))}
        </ul>
      </div>
  );
}

export default App
