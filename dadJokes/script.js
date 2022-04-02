const jokeEL = document.getElementById('jokes')
const btn = document.getElementById('next')



generateData()

async function generateData(){
    const config ={
        headers: {
            Accept: 'application/json',

        },
    }
    const res = await fetch("https://icanhazdadjoke.com", config)
    const data = await res.json()
    jokeEL.innerHTML = data.joke}
    //     fetch('https://icanhazdadjoke.com', config)
    //     .then((res)=> res.json())
    //     .then((data)=> {jokeEL.innerHTML = data.joke})

// }
btn.addEventListener('click', generateData)