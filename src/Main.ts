
//import MyGrid from './MyGrid'

class Main extends egret.DisplayObjectContainer{
    public constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
    // private onAddToStage(event:egret.Event){
    //     var shp:egret.Shape = new egret.Shape();
    //     shp.graphics.beginFill( 0xff0000 );
    //     shp.graphics.drawRect( 0,0,100,100);
    //     shp.graphics.endFill();
    //     this.addChild( shp );
    //     var shp2:egret.Shape = new egret.Shape();
    //     shp2.graphics.beginFill( 0x00ff00 );
    //     shp2.graphics.drawCircle( 0,0, 20);
    //     shp2.graphics.endFill();
    //     this.addChild( shp2 );
    //     shp2.x = 20;
    //     shp2.y = 20;
    // }


    private onAddToStage(event:egret.Event)
    {
        this.drawText();
        var shp:egret.Shape = new egret.Shape();
        shp.graphics.beginFill( 0xff0000 );
        shp.graphics.drawRect( 0,0,100,100);
        shp.graphics.endFill();
        shp.width = 100;
        shp.height = 100;
        this.addChild( shp );
        var isHit:boolean = shp.hitTestPoint( 10, 10 );
        this.infoText.text = "isHit: " + isHit;
    }
    private infoText:egret.TextField;
    private drawText()
    {
        this.infoText = new egret.TextField();
        this.infoText.y = 200;
        this.infoText.text = "isHit";
        this.addChild( this.infoText );
    }









}
egret.registerClass(Main, "Main");
window["Main"] = Main;
egret.runEgret({renderMode:"webgl", audioType:0});











