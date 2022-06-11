const http = require( "http" );
const { fork } = require( "child_process" );

const sumar = () => {
	let sum = 0;
	for ( let i = 0; i < 5e9; i++ ) {
		sum += i;
	}
	return sum;
};

let visitas = 0;

const server = http.createServer();

server.on( "request", ( req, res ) => {
	const { url } = req;
	if ( url === "/" ) {
		res.end( "Ok " + ( ++visitas ) );
	} else if ( url === "/calculo-bloq" ) {
		const sum = sumar();
		res.end( `La suma es ${sum}` );
	} else if ( url === "/calculo-nobloq" ) {
		const computo = fork( "computo.js" );
		computo.send( "start" );
		computo.on( "message", sum => {
			res.end( `La suma es ${sum}` );
		} );
	}
} );

const PORT = 8080;
server.listen( PORT, err => {
	if ( err ) throw new Error( `Error en servidor: ${err}` );
	console.log( `Server running on port ${PORT}` );
} );
