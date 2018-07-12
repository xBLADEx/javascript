//--------------------------------------------------------------
// PROMISE
//
// CodePen: https://codepen.io/xBLADEx/pen/xJxxVJ
//--------------------------------------------------------------

const p = new Promise((resolve, reject) => {
	resolve('Sweet');
	reject(Error('Shoot'));
});

p.then(data => console.log(data)).catch(error => console.log(error));
