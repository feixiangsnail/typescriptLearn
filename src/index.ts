import Main from './app/Main';
egret.registerClass(Main, "Main");
window["Main"] = Main;
egret.runEgret({renderMode:"canvas"});