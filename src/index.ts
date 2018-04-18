
import Main from './app/Main';
let container = document.getElementById('app');
let main = new Main(container);
main.run();


egret.registerClass(Main, "Main");
window["Main"] = Main;
egret.runEgret({renderMode:"webgl", audioType:0});