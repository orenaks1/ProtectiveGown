const {app, BrowserWindow} = require('electron')
const url = require("url");
const path = require("path");
app.commandLine.appendSwitch('ignore-certificate-errors', 'true');
app.commandLine.appendSwitch('allow_displaying_insecure_content');
//app.commandLine.appendSwitch('allow-insecure-localhost', 'true');


let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
   // width: 1152,
   // height: 800,
    width: 1182,
    height: 800,
    frame:true,
    
    //backgroundColor: '#2e2c29',
    backgroundColor: '#1F618D',
    title: 'protective',
    
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false,
      nodeIntegration: false
    }
  })

mainWindow.loadURL('http://192.168.101.10/Tc3PlcHmiWeb/Port_851/Visu/webvisu.htm')
//mainWindow.loadURL('http://127.0.0.1/Tc3PlcHmiWeb/Port_851/Visu/webvisu.htm')
//mainWindow.loadURL('https://192.168.101.10:1020')
mainWindow.webContents.session.clearCache();

  //mainWindow.loadURL(
    //url.format({
      //pathname: path.join(__dirname, 'index.html'),
      //protocol: "file:",
      //slashes: true
    //})
  //);


  // Open the DevTools.
 // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)