document.addEventListener('DOMContentLoaded', async function () {
    //Llamada a la funcion que hace un fetch a la API
    await fetchRandomUser()
})


const randomUserButton = getElementById('randomUserButton')

if(randomUserButton) {
    randomUserButton.addEventListener('click', async function () {
        //Llamada a la funcion que hace un fetch a la API
        await fetchRandomUser()
    })
}

async function fetchRandomUser(){
    // Fetch a la fake store
    const response = await fetch('https://randomuser.me/api/');
    // Tranformamos la response a un JSON
    const data = await response.json();

    const user = data.results[0]

    const { email, name : { first, last } } = user

    document.getElementById('pnombre').value = first
    
    document.getElementById('apellido').value = last

    document.getElementById('correo').value = email

}