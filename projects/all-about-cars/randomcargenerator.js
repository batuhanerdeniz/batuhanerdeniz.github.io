let carPicture = '';
let carName = '';
let carYear = '';
let carType = '';

function displayCar() {
    document.getElementById('carPicture').src = carPicture;
    document.getElementById('carName').innerHTML = carName;
    document.getElementById('carYear').innerHTML = carYear;
    document.getElementById('carType').innerHTML = carType;
}


function generateRandomCar() {

    //get car list from json file

    fetch('cars.json')
        .then(response => response.json())
        .then(data => {
            let carList = data;
            let randomCar = carList[Math.floor(Math.random() * carList.length)];

            carPicture = randomCar.image;
            carName = randomCar.title;
            carYear = randomCar.start_production;
            carType = randomCar.class;

            //display car
            displayCar();
        });


}