const express = require( "express" );
const session = require( "express-session" );
const redis = require( "redis" );
const connectRedis = require( "connect-redis" );
const bodyParser = require( "body-parser" );

const app = express();
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended: true } ) );

const RedisStore = connectRedis( session );

const redisClient = redis.createClient( {
	host: "localhost",
	port: 6379
} );

redisClient.on( "error", ( err ) => {
	console.log( "Could not establish a connection with redis. " + err );
} );

redisClient.on( "connect", ( err ) => {
	console.log( "Connected to redis success" );
} );

app.use( session( {
	store: new RedisStore( { client: redisClient } ),
	secret: "secret",
	resave: false,
	saveUninitialized: false,
	cookie: {
		secure: false,
		httpOnly: false,
		maxAge: 1000 * 60
	}
} ) );

app.get( "/", ( req, res ) => {
	const session = req.session;
	if ( session.username && session.password ) {
		if ( session.username ) {
			res.write( `<h1>Welcome ${session.username} </h1><br>` );
			res.write( "<h3>This is the home page </h3>" );
			res.end( "<a href=" + "/logout" + ">Click here to logout</a>" );
		}
	} else {
		res.sendFile( __dirname + "/login.html" );
	}
} );

app.post( "/login", ( req, res ) => {
	const session = req.session;
	const { username, password } = req.body;
	session.username = username;
	session.password = password;
	res.end( "success" );
} );

app.get( "/logout", ( req, res ) => {
	req.session.destroy( err => {
		if ( err ) return console.log( err );
		res.redirect( "/" );
	} );
} );

const PORT = 8080;

app.listen( PORT, ( err ) => {
	if ( err ) return console.log( "error en listen server", err );
	console.log( `Server running on port ${PORT}` );
} );
