// getting the element from the html
const result = document.getElementById('result')
const filter = document.getElementById('filter')

//creating a valueless variable so you can push the fetched data into it
const listItem = []
getData()


filter.addEventListener('input', (e)=> filterData(e.target.value))

// fetch url
async function getData(){
    const res = await fetch('https://randomuser.me/api?results=50')
    const {results} = await res.json()
// clear results
result.innerHTML = ''
// looping the fetch results and creating li element and appending the results into the 
// li's 
results.forEach(user =>{
const li = document.createElement('li')
 listItem.push(li)
//  adding html according to the api documentation
li.innerHTML =`<img src="${user.picture.large}" alt="${user.name.first}" >
<div class="user-info">
<h4>${user.name.first} ${user.name.last} </h4>
<p>${user.location.city}, ${user.location.country}</p> 
`// attaching the data to the li
result.appendChild(li)
})

}
// filtering users in relation to the input.value swich is written as e.target.value
function filterData(searchTerm){
listItem.forEach(item =>{
    // controlling the display element from the css through classList to filter users
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
        item.classList.remove('hide')
    } else{
        item.classList.add('hide')
    }
})
}