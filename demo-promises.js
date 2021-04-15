// Importante! Fetch devuelve un objeto Promise conteniendo la respuesta HTTP, un objeto Response
// Esto es, por supuesto, una respuesta HTTP no el archivo JSON.
// Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json()

const getFighters = () => {
	return fetch("data/chun-li.json");
};

getFighters()
	.then((res) => {
		console.log("Promise async function json() resolved!");
		return res.json();
	})
	.then((data) => {
		// --> Encadenamos .then de forma secuencial gracias a....????
		console.log("Promise resolved - Fighter 1!");
		console.log(data);
		return fetch("data/ryu.json");
	})
	.then((res) => {
		console.log("Promise async function json() resolved!");
		return res.json();
	})
	.then((data) => {
		console.log("Promise resolved - Fighter 2!");
		console.log(data);
		return fetch("data/vega.json");
	})
	.then((res) => {
		console.log("Promise async function json() resolved!");
		return res.json();
	})
	.then((data) => {
		console.log("Promise resolved - Fighter 3!");
		console.log(data);
	})
	.catch((err) => console.log(err));
