
var ads = require('node-ads');
var client;
const con = require('electron').remote.getGlobal('console');

var options = {
    //The IP or hostname of the target machine
    host: "192.168.101.10",
    //The NetId of the target machine
    amsNetIdTarget: "192.168.101.10.1.1",
    //The NetId of the source machine.
    //You can choose anything in the form of x.x.x.x.x.x,
    //but on the target machine this must be added as a route.
    amsNetIdSource: "15.17.216.85.1.1",

    //OPTIONAL: (These are set by default)
    //The tcp destination port
    //port: 48898
    //The ams source port
    //amsPortSource: 32905
    //The ams target port for TwinCat 2 Runtime 1 
    //amsPortTarget: 801 
    //The ams target port for TwinCat 3 Runtime 1
    amsPortTarget: 851 
    //The timeout for PLC requests
    //timeout: 500
}

function fRead(){

    var myHandle = {
        //Handle name in twincat
        symname: 'main.test',  
        //An ads type object or an array of type objects.
        //You can also specify a number or an array of numbers,
        //the result will then be a buffer object.
        //If not defined, the default will be BOOL.
        bytelength: ads.INT,  
        //The propery name where the value should be written.
        //This can be an array with the same length as the array length of byteLength.
        //If not defined, the default will be 'value'.     
        propname: 'value'      
    }

        client.read(myHandle)
        document.getElementById("demo").innerHTML = handle.value;
}

function fConect() {
    client = ads.connect(options);
    var result = client.readDeviceInfo();
    con.log(result);
}


  function fConectorig() {
    client = ads.connect(options);

    
    var client = ads.connect(options, function() {
        this.read(myHandle, function(err, handle) {
            if (err) console.log(err)
            //result is the myHandle object with the new properties filled in
            con.log(handle.value)
            document.getElementById("demo").innerHTML = handle.value;
            //All handles will be released automaticly here
            this.end()
        })
    })

    
  }
