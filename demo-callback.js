function getFighters(cb) {
	const request = new XMLHttpRequest();

	request.open("GET", "data/ryu.json");
	request.send();

	request.addEventListener("readystatechange", () => {
		if (request.readyState === 4 && request.status === 200) {
			cb(null, request.responseText);
		} else if (request.readyState === 4) {
			cb("No se ha podido recuperar los datos", null);
		}
	});
}

console.log(1);
console.log(2);

getFighters((err, data) => {
	console.log("Callback fired!");

	if (err) console.log(err);
	else console.log(data);
});

console.log(3);
console.log(4);

// Control flow pattern: SEQUENTIAL EXECUTION

// Callback Hell

// 2a operacion async anidada...
asyncOp2((err, data) => {
	// 3a operacion async anidada...
	asyncOp3((err, data) => {
		// 4a operacion async anidada...
		asyncOp4((err, data) => {
			// Hacer algo asincrono
			// Si aquí ocurre una exception, el invoker no puede atrapar el método
			// ya que la operación async se ejecuta en un ciclo diferido de CPU y por tanto en un contexto diferente de
			// call stack.
			// Lo mismo con los resultados. No podemos utilizar return data (ej.) porque esta operación al ser
			// asincrona se ejecuta en un contexto diferente al del método invoker. El return del resultado es ignorado.
			// En resumen, tanto el resultado como un posible error se deben pasar en el callback como parametros.
			// CPS: continuos passing style.
		});
	});
});

// Reglas para evitar el Callback Hell mediante Callback Discipline
// 0) Salir tan pronto sea posible. Utilizar return, continue o break --> mantiene el código más legible evitando if - else
// 1) La funcion Cb siempre es la última de la lista de params
// 2) Los params DENTRO de la funcion Cb son: primero el posible Error y después los resultados
// 3) Utilizar Named functions --> modulariza el código

/* 
function task1(cb) {
	asyncOperation(() => {
		task2(cb); // --> CPS Continous passing style
	});
}

function task2(cb) {
	asyncOperation((err, data) => {
		task3(cb);
	});
}

function task3(cb) {
	asyncOperation(() => {
		cb(); // --> Finalmente ejecuta el callback
	});
}

// Main task
task1(() => {
	// Se ejecutará cuando las task 1 2 y 3 hayan finalizado en
	console.log("Task 1 2 y 3 ejecutadas!");
})
 */
