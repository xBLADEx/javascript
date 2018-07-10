//--------------------------------------------------------------
// FETCH THEN CATCH
//
// CodePen: https://codepen.io/xBLADEx/pen/YjzKBR
//--------------------------------------------------------------

// Fetch creates a promise.
// In real life, sometimes promises do not always happen, they can be made, but not fulfilled.
const postsPromise = fetch('https://wesbos.com/wp-json/wp/v2/posts');

// Then we get the response.
const response = postsPromise.then(data => data.json());

// Then we extract the response.
response
	.then(data => console.log(data))

	// Catch our errors.
	.catch(error => console.log(error));

// console.log(postsPromise);
