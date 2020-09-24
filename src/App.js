import React from 'react';
import RecipeContextProvider from './context/RecipeContext'
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App({match}) {
  console.log(process.env.REACT_APP_RECIPE_API_KEY)
  return (
    <RecipeContextProvider>
      
      <Router>
        
        <Switch>
          
          <Route exact path="/">
            
            <HomePage />
          </Route>
          
          <Route exact path="/:recipeId">
            <DetailPage />
          </Route>

        </Switch>
      </Router>
      
      
    </RecipeContextProvider>
    
  );
}

export default App;
