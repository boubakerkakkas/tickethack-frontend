

// Mettre la date par defaut a AJD :
document.querySelector('#date').valueAsDate = new Date();
function majTrip() {
    for ( let i = 0; i < document.querySelectorAll('#book').length; i++) {
        document.querySelectorAll('#book')[i].addEventListener ('click', function () {
            fetch('', {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(data => { 
                data.result 

            })
        })

    }
}





// Bouton de recherche :
document.querySelector('#search').addEventListener('click', function(){
    const departure = document.querySelector('#departure').value;
    const arrival = document.querySelector('#arrival').value;
    const date = document.querySelector('#date').value;

    if (!departure || !arrival || !date) {
        return;
      }

fetch('mongodb+srv://boubakerkks:ctd9IDeojnpQSzz7@cluster0.v8svwcc.mongodb.net/Tickethack')      


})



// Màj :




