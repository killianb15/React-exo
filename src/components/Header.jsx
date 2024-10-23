function Header({user}) {
    return (
      <header>
        <h1>Epsi React</h1>
        <nav>
          <ul>
            <p>Home - Articles - Contact</p>
          </ul>
        </nav>

        {user ? <p>Bienvenue {user}</p> : <p>Merci de vous connecter</p>}
      </header>
    );
  }
  
  export default Header;