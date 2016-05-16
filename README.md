# CasperJS-Biathlonmania-Script
This script will sign sponsorship deals and increase attributes. (All by itself)

## How to run

##### Prerequisites

[1st] PhantomJS (2.1.1)

You can download PhantomJS and learn how to install it [here](http://phantomjs.org/download.html)

[2nd] CasperJS (1.1.0-beta)

You can download CasperJS and learn how to install it [here](http://docs.casperjs.org/en/latest/installation.html)

##### How to run the script?

[0] Clone this repo

```
git clone https://github.com/atsoket/CasperJS-Biathlonmania-Script/
```

[1] Move to the directory

```
cd CasperJS-Biathlonmania-Script
```

[2] Change the login fields

```
line 42			document.getElementById("email").value="YOUR_FACEBOOK_USERNAME"";
line 43			document.getElementById("pass").value="YOUR_FACEBOOK_PASSWORD";
```

[3] Run it

```
casperjs --ssl-protocol=tlsv1 biathlonmania.js
```

Successful execution:
![alt tag](http://web.ist.utl.pt/daniel.da.costa/images/biathlon.png "Successful execution")


[3.5] Run in loop **Linux**
```
for i in {1..99999}; do casperjs --ssl-protocol=tlsv1 biat.js; done
```

[3.5] Run in loop **Windows**
```
FOR /L %G IN (1,1,999999) DO casperjs --ssl-protocol=tlsv1 biat.js
```
