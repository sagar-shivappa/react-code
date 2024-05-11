import { useEffect, useState } from "react"

export default function SimilarFood({recipeId}){
    const [recipes, setReciepes]=useState([])
    const api_key="ecbc2567b2024a3499674d8128dcb2ddTEST"
    const url=`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${api_key}`
    
    useEffect(()=>{
        function setFood(){
            console.log("Recieved Id ", recipeId)
            fetch(url)
            .then(data=>data.json())
            .then(res=>setReciepes(res))
        }
        setFood()
    },[recipeId])
    return <>Instructions to Prepare : {recipes.instructions}</>
}