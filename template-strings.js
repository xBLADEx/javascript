//--------------------------------------------------------------
// TEMPLATE STRINGS
//
// CodePen: https://codepen.io/xBLADEx/pen/jKXPwo
//--------------------------------------------------------------

const weapons = ['Battle Axe', 'Short Sword', 'Dagger', 'Flail'];

function buildArmory(gear) {
	return `
		<ul class="armory">
			${gear.map(item => `<li>${item}</li>`).join('')}
		</ul>
	`;
}

const armory = `
	View our armory:
	${buildArmory(weapons)}
`;

document.body.innerHTML = armory;
