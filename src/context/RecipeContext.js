// apikey = 41b43eb0b8a44f078a40831dc9a102a7 

//Example: get recipe  https://api.spoonacular.com/recipes/search?query=chicken&number=2&apiKey=41b43eb0b8a44f078a40831dc9a102a7 
//get recipe information https://api.spoonacular.com/recipes/716429/information?includeNutrition=false

//Get Analyzed Recipe Instructions  https://api.spoonacular.com/recipes/{id}/analyzedInstructions

//Get similar recipe   https://api.spoonacular.com/recipes/715538/similar

// get summary   https://api.spoonacular.com/recipes/4632/summary

//Get recepe image example   https://spoonacular.com/recipeImages/579247-556x370.jpg
//image. The complete path follows this pattern https://spoonacular.com/recipeImages/{ID}-{SIZE}.{TYPE}, where {SIZE} is one of the following:
//90x90,240x150,312x150,480x360,556x370,636x393



import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios'

export const RecipeContext = createContext();

const RecipeContextProvider = (props) => {
    const[recipes, setRecipes] = useState([]);
    const[food, setFood] = useState("");
    const[country, setCountry] = useState("")
    const[type, setType] = useState("")
    useEffect(() => {
        async function getData() {
            const request = await axios.get(`https://api.spoonacular.com/recipes/search?query=${food}&cuisine=${country}&number=150&apiKey=${process.env.REACT_APP_RECIPE_API_KEY}&type=${type}`);
            setRecipes(request.data.results)
            
        }
        getData();
    },[food, country, type])


    return (
        <RecipeContext.Provider value={{ recipes, food, setFood, setCountry, setType }}>
            {props.children}
        </RecipeContext.Provider>
    )
}

export default RecipeContextProvider;
