let cars = null;
// get datas cars in cars.json
fetch('cars.json')
.then(res => res.json())
.then(data => {
    cars = data;
    showDetail();
})

// find this product
function showDetail(){
    let detail = document.querySelector('.detail');
    let carId = new URLSearchParams(window.location.search).get('id');
    let thisCar = cars.filter(value => {
        return value.id == carId
    })[0];
    // if there is no car has id = carId
    // => return to home page
    if(!thisCar){
        window.location.href = "/";
    }
    // and if has, add data this car in html
    detail.querySelector('.image img').src = thisCar.image;
    detail.querySelector('.name').innerText = thisCar.name;
    detail.querySelector('.price').innerText = thisCar.price;
    detail.querySelector('.body').innerHTML = "<strong>body</strong> : " + thisCar.body;
    detail.querySelector('.year').innerHTML = "<strong>year</strong> : " + thisCar.year;
    detail.querySelector('.model').innerHTML = "<strong>model</strong> : " + thisCar.model;
    detail.querySelector('.make').innerHTML = "<strong>brand</strong> : " +thisCar.make;
    detail.querySelector('.door').innerHTML = "<strong>door</strong> : " +thisCar.door;
    detail.querySelector('.fueltype').innerHTML = "<strong>fule type</strong> : " +thisCar.fueltype;
    detail.querySelector('.enginetype').innerHTML = "<strong>engine</strong> : " +thisCar.enginetype;
    detail.querySelector('.enginedisplacement').innerHTML = "<strong>engine displacement</strong> : " +thisCar.enginedisplacement;
    detail.querySelector('.horsepower').innerHTML = "<strong>horse power</strong> : " +thisCar.horsepower;
    detail.querySelector('.numberofspeed').innerHTML = "<strong>number of speed</strong> : " +thisCar.numberofspeed;
    detail.querySelector('.tank').innerHTML = "<strong>tank capacity</strong> : " +thisCar.tank;
    detail.querySelector('.wheelbase').innerHTML = "<strong>wheelbase</strong> : " +thisCar.wheelbase;
    detail.querySelector('.length').innerHTML = "<strong>length</strong> : " +thisCar.length;
    detail.querySelector('.width').innerHTML = "<strong>width</strong> : " +thisCar.width;
    detail.querySelector('.weight').innerHTML = "<strong>weight</strong> : " +thisCar.weight;
    detail.querySelector('.topspeed').innerHTML = "<strong>top of speed</strong> : " +thisCar.topspeed;
    detail.querySelector('.review').innerHTML = thisCar.review;
}   

let compare = document.querySelector('.compare');
let carId = new URLSearchParams(window.location.search).get('id');
compare.href = 'compare.html?id=' + carId;
