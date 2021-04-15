const getFighters = async () => {
	try {
		const resFighter1 = await fetch("data/chun-li.json");
		console.log(await resFighter1.json());

		const resFighter2 = await fetch("data/ryu.json");
		console.log(await resFighter2.json());

		const resFighter3 = await fetch("data/vega.json");
		console.log(await resFighter3.json());
	} catch (err) {
		console.log("Error atrapado-> " + err);
	}
};

getFighters();
