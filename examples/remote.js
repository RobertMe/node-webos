"use strict";

var Remote = require('..').Remote;
var remote = new Remote();

remote.connect({
	address	: process.argv[2] || '192.168.0.109',
	key		: process.argv[3] || '4d5b7754bb3cc6475ffb3ca09a14dee9'
}, function( err, key ){
	console.log('------- showing float --------');
	remote.show_float( "Test", function( err, result ){
		if( err ) return console.error('Error', err);
		
		console.log("You should've seen 'Test'")	
		
		console.log('------- getting channels --------');
		remote.getChannels(function( err, channels ){
			if( err ) return console.error('Error', err);	
		
			console.log('got %s channels', channels.length)
			console.log('channel #1:', channels[0]);
			
			console.log('------- disconnecting --------');
			remote.disconnect(function( err, disconnected ){
				if( err ) return console.error('Error', err);
				console.log('Disconnected');			
			});
		})
	})
})