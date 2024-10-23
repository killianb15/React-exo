// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import React from 'react'
import Header from './Header'

import './App.css'



function App() {
  const articles = [
    {id:1 ,title: 'React'},
    {id:2 ,title: 'Angular'},
    {id:3, title: 'Vue'},
  ];

  const title = "Titre de la page"
  
  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
