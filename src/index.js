const API_URL = 'http://localhost:3000/dogs'

function getDogs(dog) { 
    return `
    <tr>
  <td>${dog.name}</td>
  <td>${dog.breed}</td>
  <td>${dog.sex}</td>
  <td><button id = "edit-btn">Edit</button></td>
</tr>
    `
}
document.addEventListener('DOMContentLoaded', () => {

    const tableBody = document.querySelector('#table-body')
    fetch (API_URL)
    .then(res => res.json())
    .then(data => {
        data.forEach(dog => {
            tableBody.innerHTML += getDogs(dog)
        })
    })
    .catch(error => {
        console.log(error)
    })
    const editBtn = document.querySelectorAll('#edit-btn')
    editBtn.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(API_URL)
        .then(res => res.json())
        .then(dogForm => {
            console.log(dogForm)
        })
    })
    

    const dogForm = document.querySelector('#dog-form')
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const breed = e.target.breed.value
        const sex = e.target.sex.value
        fetch(`http://localhost:3000/dogs/:id`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                breed,
                sex,

            })
            })
    })
    //POST new dog

    // const NewDogForm = document.querySelector('#dog-form')
    // dogForm.addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     const name = e.target.name.value
    //     const breed = e.target.breed.value
    //     const sex = e.target.sex.value
    //     fetch(API_URL, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name,
    //             breed,
    //             sex,
    //         })
    //     })
 
    // })
})

