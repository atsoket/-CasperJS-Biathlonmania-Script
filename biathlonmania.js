/**
	Author: Daniel Costa (github.com/atsoket/)
	How to run: 1st - Fill in the email and password fields(Line 42 and 43)
				2nd - execute the following command: casperjs --ssl-protocol=tlsv1 biathlonmania.js
	Note: This script will take screenshots to show the progress. 
*/

var casper = require('casper').create({
	viewportSize: { width: 1920, height: 1080 }
});

casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.114 Safari/537.36");

casper.start('http://s1.biathlonmania.com/', function() {
});

var x = require('casper').selectXPath;

function getRandomInt(min, max) { 
    return Math.floor(Math.random() * (max - min)) + min; 
}

casper.then(function(){
	casper.wait(1000);
});

casper.then(function(){
	casper.wait(3000);
});


casper.then(function(){
	console.log("Login");
    casper.click("#login2 > button");  
	
    casper.waitForPopup(/.*/, function(){
		//console.log("wait for PopUP")
    });	

    casper.withPopup(/.*/, function(){
		casper.evaluate(function(){
			document.getElementById("email").value="YOUR_FACEBOOK_USERNAME";
			document.getElementById("pass").value="YOUR_FACEBOOK_PASSWORD";
		});
		casper.click("#u_0_2");
		console.log("Login Completed");
    });
	casper.wait(3000);
	
	console.log("Login End");
});

for (iterator = 0; iterator < 1; iterator++) {
	
	casper.then(function(){
		console.log("Game Loaded");
		casper.wait(6500);
		
		if(casper.exists('#dialog-page-close > span')){
			casper.click("#dialog-page-close > span");
			casper.wait(2000);
		}
	});

	casper.then(function(){
		if(casper.exists('#map-artefact-area-5-1-0')){
			console.log("Opened sponsors");
			casper.click("#map-artefact-area-5-1-0");
			casper.wait(2000);
			casper.captureSelector('00sponsors.png', 'html');
		}
	});

	casper.then(function(){	
		if(casper.exists('#sponsor-item-6')){
				console.log("International Airlines activated");
				casper.click("#sponsor-item-6");
				casper.wait(2000);
			}
	});


	casper.then(function(){	
		if(casper.exists('#dialog-confirm > div > div > a')){
				console.log("International Airlines confirmed");
				casper.captureSelector('01Airlines.png', 'html');
				casper.click("#dialog-confirm > div > div > a");
				casper.wait(2000);
			}
	});

	casper.then(function(){	
		if(casper.exists('#sponsor-item-5')){
				console.log("Mobile network operator activated")
				casper.click("#sponsor-item-5");
				casper.wait(2000);
			}
	});

	casper.then(function(){	
		if(casper.exists('#dialog-confirm > div > div > a')){
				console.log("Mobile network operator confirmed")
				casper.captureSelector('02Mobile.png', 'html');
				casper.click("#dialog-confirm > div > div > a");
				casper.wait(2000);
			}
	});

	casper.then(function(){	
		if(casper.exists('#sponsor-item-4')){
				console.log("Sports magazine activated");
				casper.click("#sponsor-item-4");
				casper.wait(2000);
			}
	});

	casper.then(function(){	
		if(casper.exists('#dialog-confirm > div > div > a')){
				console.log("Sports magazine confirmed");
				casper.captureSelector('03magazine.png', 'html');
				casper.click("#dialog-confirm > div > div > a");
				casper.wait(2000);
			}
	});

	casper.then(function(){	
		if(casper.exists('#dialog-page-close > span')){
			console.log("closed sponsors");
			casper.click("#dialog-page-close > span");
			casper.wait(2000);
			casper.captureSelector('04Sponsors.png', 'html');
		}
	});

	casper.then(function(){	
		if(casper.exists('#map-artefact-area-2-0-0')){
			console.log("Training Center");
			casper.click("#map-artefact-area-2-0-0");
			casper.wait(2000);
			casper.captureSelector('05Center.png', 'html');
		}
	});

	casper.then(function(){	
		if(casper.exists('#skill-button-1')){
			console.log("Speed increased");
			casper.click("#skill-button-1");
			casper.wait(2000);
			casper.captureSelector('06Speed.png', 'html');
		}
	});

	casper.then(function(){	
		if(casper.exists('#skill-button-2')){
			console.log("Aim increased");
			casper.click("#skill-button-2");
			casper.wait(2000);
			casper.captureSelector('07Aim.png', 'html');
		}	
	});

	casper.then(function(){	
		if(casper.exists('#skill-button-3')){
			console.log("Endurance increased");
			casper.click("#skill-button-3");
			casper.wait(2000);
			casper.captureSelector('08Endurance.png', 'html');
		}	
	});

	casper.then(function(){	
			if(casper.exists('#dialog-page-close > span')){
				console.log("Training Center Closed");
				casper.click("#dialog-page-close > span");
				casper.wait(2000);
		}
	});

	casper.then(function(){	
			if(casper.exists('#map-artefact-notification-snowie')){
				console.log("SNOWIE");
				casper.click("#map-artefact-notification-snowie");
				casper.wait(2000);
		}
	});
	
		casper.then(function(){	
			if(casper.exists('#dialog-page-close > span')){
				casper.click("#dialog-page-close > span");
				casper.wait(2000);
		}
	});
	
	casper.then(function(){	
		if(casper.exists('#dialog-page-close > span')){
			casper.click("#dialog-page-close > span");
			casper.wait(2000);
		}
	});
}

casper.run();

