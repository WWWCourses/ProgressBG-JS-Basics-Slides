function power(base,exp){
	console.log("power start!")
	var res = base;
	for (var i = 1; i < exp; i++) {
		res *= base;
	}

	return res;
}