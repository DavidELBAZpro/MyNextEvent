
// require('dotenv').config()

// const apiKey = process.env.API_KEY;
fetchData()

async function fetchData() {
    const options = {
        method: 'GET',
    };

    const res = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${apiKey}&locale=*`, options)
    const record = await res.json()

    document.getElementById('concerts').innerHTML = record._embedded.events.map(item => `<a href='https://www.ticketmaster.com/search?q=${item.name}'
     target="_blank><li>${item.name}</li></a>  
     <div>Status : ${item.dates.status.code.toUpperCase()}</div> 
     <img src=${item.images[9].url} > <br> `)
        .join('')
}