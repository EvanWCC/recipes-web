import React, { useContext, useState } from 'react'
import '../css/Nav.css'



// import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home'
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { RecipeContext } from '../context/RecipeContext'
const Nav = () => {
  const [searchFood, setSearchFood] = useState('')
  const { setFood } = useContext(RecipeContext)

  //free max searchRecipes are 100; so we can make search from 1 to 100, 101 to 200, and so on
  
  const getNavRecipes = (e) => {
    e.preventDefault();
    setFood(searchFood);
  }


  return (
    <nav>
      <div className="nav__left">
          
          <div className="nav__brand">
            <h3>EvanWeb</h3>
            <span>Recipes</span>
          </div>
          <Link to="/">
            <HomeIcon className="homeIcon" style={{ fontSize: 40 }} />
          </Link>
      </div>
      <form className="nav__center" onSubmit={getNavRecipes}>
          <input type="text" value={searchFood} onChange={(e) => setSearchFood(e.target.value)}  />
          <SearchIcon />
      </form>
      <div className="nav__right">
        <Avatar style={{backgroundColor: "lightsteelblue"}} />
      </div>
    </nav>
  )
}

export default Nav
