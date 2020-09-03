"use strict"

function renderCoffee(coffee) {
    // var html = '<div class="coffee col-6">';
    // html += '<p class="d-none">' + coffee.id + '</p>'; /* class="d-none"*/
    // html += '<h6 class="d-inline-block pr-1">' + coffee.name + '</h6>';
    // html += '<p class="d-inline-block text-muted sizing">' + coffee.roast + '</p>';
    // html += '</div>';

    var html = '<div class="col mb-4">';
    html += '<div class="card">';
    html += '<div class="row no-gutters">';
    html += '<div class="col">';
    html += '<img src="img/pexels-tirachard-kumtanom-544113.jpg" class="card-img" alt="coffee">';
    html += '</div>'
    html += '<div class="col-md-8">'
    html += '<div class="card-body">';
    html += '<h6 class="d-inline-block headings pr-2">' + coffee.name + '</h6>';
    html += '<p class="d-inline-block text-muted sizing">' + coffee.roast + '</p>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';
    html += '</div>';

    // var html = '<div class="col mb-4">';
    // html += '<div class="card">';
    // html += '<img src="img/pexels-tirachard-kumtanom-544113.jpg" class="card-img" alt="coffee">';
    //
    // html += '</div>';
    // html += '</div>';
    // html += '</div>';
    // html += '</div>';



        // <div class="col mb-4">
        //     <div class="card">
        //         <img src="..." class="card-img-top" alt="...">
        //             <div class="card-body">
        //                 <h5 class="card-title">Card title</h5>
        //                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        //             </div>
        //     </div>

    // <div class="media">
    //     <img src="..." class="mr-3" alt="...">
    //         <div class="media-body">
    //             <h5 class="mt-0">Media heading</h5>
    //             Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
    //         </div>
    // </div>
    // var html = '<div class="media col-6 align-items-center text-center">';
    // html += '<img src="img/pexels-tirachard-kumtanom-544113.jpg" class="mr-3" alt="coffee" style="width: 128px;" >'
    // html += '<div class="media-body">'
    // html += '<h5 class="pr-1 headings">' + coffee.name + '</h5>';
    // html += '<p class="text-muted sizing paratags">' + coffee.roast + '</p>';
    // html += '</div>'
    // html += '</div>'
    // html += '</div>'
    // html += '</div>'


    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffeesTRY(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    let inputedCoffee = (coffeeSelection.value).toLowerCase();
    var filteredCoffees = [];
    var newArr = [];

    for (let i = 0; i < coffees.length; i++) {
        let roast = coffees[i].roast;
        if(roast === selectedRoast || selectedRoast === "all") {
            filteredCoffees.push(coffees[i]);
        }
    }

    for (let i = 0; i < filteredCoffees.length;  i++) {
        let name = (filteredCoffees[i].name).toLowerCase();
        if (name === inputedCoffee || name.includes(inputedCoffee)){
            newArr.push(filteredCoffees[i])
        }
    }
    tbody.innerHTML = renderCoffees(newArr);
}

// function updateCoffees2(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSelection2.value;
//     let inputedCoffee = (coffeeSelection2.value).toLowerCase();
//     var filteredCoffees = [];
//     var newArr = [];
//
//     for (let i = 0; i < coffees.length; i++) {
//         let roast = coffees[i].roast;
//         if(roast === selectedRoast) {
//             filteredCoffees.push(coffees[i]);
//         }
//     }
//
//     for (let i = 0; i < filteredCoffees.length;  i++) {
//         let name = (filteredCoffees[i].name).toLowerCase();
//         if (name === inputedCoffee || name.includes(inputedCoffee)){
//             newArr.push(filteredCoffees[i])
//         }
//     }
//     tbody.innerHTML = renderCoffees(newArr);
// }

function addCoffee (e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let newArr = [];
    for (let i = 0; i < 1; i++) {
        newArr.push({
            id: coffees.length + 1,
            name: coffeeSelection2.value,
            roast: roastSelection2.value
        })
        console.log(newArr)
        // var combineArr = coffees.concat(newArr);
        coffees = coffees.concat(newArr);
        console.log(coffees);
    }

    // tbody.innerHTML = renderCoffees(combineArr);
    updateCoffeesTRY(e);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#add-submit');
var roastSelection = document.querySelector('#roast-selection');
var roastSelection2 = document.querySelector('#add-roast-selection');
var coffeeSelection = document.querySelector('#coffeeName');
var coffeeSelection2 = document.querySelector('#add-coffeeName');

// console.log("Pre-sort", coffees);

coffees.sort(function (a,b) {
    return b.id - a.id;
})

tbody.innerHTML = renderCoffees(coffees);

// submitButton.addEventListener('click', addCoffee);
submitButton2.addEventListener('click', addCoffee);

roastSelection.addEventListener('change', updateCoffeesTRY);

coffeeSelection.addEventListener('input', updateCoffeesTRY);

roastSelection2.addEventListener('change', updateCoffeesTRY);

coffeeSelection2.addEventListener('input', updateCoffeesTRY);
