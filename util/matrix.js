module.exports = function (line,logStream) {
'use strict';

	let command = line.split('\r');
	let n='\n';
	
	if (command[0].indexOf('matrix')!=-1){
	 command[0] = command[0].replace('matrix','math.matrix');
	
	}
	if (command[0].indexOf('=')!=-1){
			command[0] = 'var ' + command[0];
			
		}
	else{
		command[0] = "console.log(eval('" + command[0] + "'" +'));';
		
	}
	
	logStream.write(command[0] + n);
	
};