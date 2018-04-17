
//import MyGrid from './MyGrid'

class Main extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    private onAddToStage(event:egret.Event){
        // var _myGrid:MyGrid = new MyGrid();
        // this.addChild( _myGrid );
        console.log('onaddtostage')
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0x00ff00 );
        shp.graphics.drawRect( 0, 0, 100, 100 );
        shp.graphics.endFill();
        shp.x = 100;
        shp.y = 100;
        this.addChild( shp );
    }
}
egret.registerClass(Main, "Main");
window["Main"] = Main;
egret.runEgret({renderMode:"webgl", audioType:0});











