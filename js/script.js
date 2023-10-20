const form = document.querySelector('#form')
const results = document.querySelectorAll('.result')
const input = document.querySelector('#input')

form.onsubmit = (event) => {
    event.preventDefault()
    results.forEach(result => {
        result.innerHTML = input.value
    })
}