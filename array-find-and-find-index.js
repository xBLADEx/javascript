//--------------------------------------------------------------
// ARRAY FIND AND FIND INDEX
//
// CodePen: https://codepen.io/xBLADEx/pen/RJmGjE
//--------------------------------------------------------------

const vehicles = [
	{
		make: 'Jeep',
		model: 'Rubicon',
		color: 'Gray',
	},
	{
		make: 'Honda',
		model: 'Civic Si',
		color: 'Black',
	},
	{
		make: 'Honda',
		model: 'CR-V',
		color: 'Mountain Air Metallic',
	},
	{
		make: 'Chevrolet',
		model: 'Colorado',
		color: 'White',
	},
	{
		make: 'Chevrolet',
		model: 'Camaro',
		color: 'White',
	},
];

// Array.find()
// This will return the entire object that matches what we want.
const jeep = vehicles.find(vehicle => vehicle.make === 'Jeep');

// Array.findIndex()
// Note: This will return the first instance (index) that matches the condition.
const honda = vehicles.findIndex(vehicle => vehicle.make === 'Honda');

console.log(honda);
