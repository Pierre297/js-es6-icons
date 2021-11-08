const iconsElement = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// crea una costante per stampare le icone in HTML
const containerBox = document.getElementById("boxes-container");
let createBoxes = '';

// crea un ciclo per selezionare tutti gli elementi dell'array
iconsElement.forEach((element) => {
	console.log(`${element}`);
	// concatenali per stamparli in pagina con la sequenza corretta
	createBoxes =
	// usa le chiavi con i colori per inserirle nella classe delle icone
	 `
	<div class="boxes">
	<i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
	<p class="icons-name">${element.name}</p>
    </div>
	`;
	containerBox.innerHTML += createBoxes;
});

// BONUS ----------------------------------------------------------------------------------------------------------------------------------------

var activities = document.getElementById("activitySelector");

document.querySelector('select').addEventListener('change',

	function(){

		// sezione animali
		if(activities.value == "Animals"){
			const animalsArr = iconsElement.filter((animals) => {
				return animals.color == "orange";
			});
			console.log(animalsArr);


			animalsArr.forEach((element) => {

				animalBoxes =
				 `
				<div class="boxes">
				<i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
				<p class="icons-name">${element.name}</p>
				</div>
				`;
				containerBox.innerHTML += animalBoxes;
			});
		}

		// sezione vegetali
		if(activities.value == "Vegetables"){
			const vegArr = iconsElement.filter((animals) => {
				return animals.color == "green";
			});
			console.log(vegArr);


			vegArr.forEach((element) => {

				veggieBoxes =
				 `
				<div class="boxes">
				<i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
				<p class="icons-name">${element.name}</p>
				</div>
				`;
				containerBox.innerHTML += veggieBoxes;
			});
		}

		// sezione utenti
		if(activities.value == "Users"){
			const userArr = iconsElement.filter((animals) => {
				return animals.color == "blue";
			});
			console.log(userArr);


			userArr.forEach((element) => {

				userBoxes =
				 `
				<div class="boxes">
				<i class="${element.family} ${element.prefix}${element.name} ${element.type} ${element.color}"></i>
				<p class="icons-name">${element.name}</p>
				</div>
				`;
				containerBox.innerHTML += userBoxes;
			});
		}

	
}
);


