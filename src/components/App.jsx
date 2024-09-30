import { useState } from 'react'
import Card from './card.jsx'

function App() {

    let array = [ "pikachu", "bulbasaur", "charmander", "venusaur", "charmeleon",
        "charizard", "squirtle", "wartortle", "blastoise", "caterpie", "metapod", "ivysaur"
    ]

    let objectArray = array.map(item => {
        return { name: item, clicks: 0 };
    });

    let [randomArray, setRandomArray] = useState(objectArray);
    let [score, setScore] = useState(0)
    let [bestScore, setBestScore] = useState(0)

    function reshuffleCards(name){
        console.log(name);
        let copyRandomArray = [...randomArray]

        let updatedCopyArray = copyRandomArray.map((pokemon)=>{
            if(pokemon.name == name){
                console.log(pokemon.clicks)
                return {...pokemon, clicks: pokemon.clicks + 1};
            }
            else{
                return pokemon
            }
        })
        setScore(score+1)
        console.log(updatedCopyArray)
        updatedCopyArray.forEach((pokemon)=>{
            if(pokemon.clicks > 1){
                setScore(0)
                setBestScore(score)
                updatedCopyArray.forEach((item, index)=>{
                    updatedCopyArray[index] = {name : item.name, clicks: 0}
                })
            }
        })
        let random = getRandomUniqueArray(updatedCopyArray);
        setRandomArray(random);
    }

    function getRandomUniqueArray(updatedCopyArray) {

        let numbers = [...updatedCopyArray]
        
        //Shuffle the array using the Fisher-Yates (Knuth) shuffle algorithm
        for (let i = numbers.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1)); 
          [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        }
        
        return numbers;
    }
    return(
    <>  
        <header>
            <div className='main-header'>
                <div className='title'>Pokemon Memory game</div>
                <div className='score-board'>
                    <div>Score: {score}</div>
                    <div>Best Score: {bestScore}</div>
                </div>
            </div>
            <div className='rules'>
            Get points by clicking on an image but don&#39;t click on any more than once!
            </div>
        </header>
        
        <div className='card-container'>
            <Card pokemonName = {randomArray[0].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[1].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[2].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[3].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[4].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[5].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[6].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[7].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[8].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[9].name}  clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[10].name} clickFunc ={reshuffleCards}/>
            <Card pokemonName = {randomArray[11].name} clickFunc ={reshuffleCards}/>
        </div>
    </>
    )
}

export default App
