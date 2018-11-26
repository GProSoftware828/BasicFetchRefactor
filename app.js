// async function myFunc() {

// 	const promise = new Promise((resolve, reject) => {
// 		setTimeOut(() => resolve('Hello'), 1000);
// 	});

// 	if(!error){

// 		const res = await promise;
// 		return res;		

// 	} else {
// 		await Promise.reject(new Error('Something went wrong'));
// 	}
// }

// myFunc()
// 	.then(res => console.log(res));
// 	.catch(err => console.log(err));

//Better to use with fetch:

async function getUsers() {
	const response = await fetch
	('#');

	const data = await response.json();

	return data;
}

getUsers().then(users => console.log(users));