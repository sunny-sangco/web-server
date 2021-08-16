console.log('Client site javascript file is loaded')

const weatherForm = document.querySelector('form')

const search = document.querySelector('input')

const locationVal = document.querySelector('#location')
const forecastVal = document.querySelector('#forecast')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const location = search.value;

    locationVal.textContent = 'Loading...'
    forecastVal.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response) => {
        response.json().then((data)=>{
            if(data.error){
                locationVal.textContent = data.error
            }
            else{
                locationVal.textContent = data.location
                forecastVal.textContent = data.forecast
            }
        })
       
    })
})