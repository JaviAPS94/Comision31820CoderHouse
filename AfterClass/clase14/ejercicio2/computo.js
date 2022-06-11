const sumar = () => {
	let sum = 0;
	for ( let i = 0; i < 5e9; i++ ) {
		sum += i;
	}
	return sum;
};

process.on( "message", ( message ) => {
	if ( message == "start" ) {
		console.log( "Child process received START message" );
		const result = sumar();
		const fatherMessage = `{"sum": ${result}}`;
		process.send( fatherMessage );
	}
} );
