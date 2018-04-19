export default class Test extends egret.DisplayObjectContainer{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
 
    onAddToStage(event:egret.Event){
        // let shp:egret.Shape = new egret.Shape();
        // shp.graphics.beginFill(0xff0000);
        // shp.graphics.drawRect(0,0,100,100);
        // shp.graphics.endFill();
        // this.addChild(shp);
        // let shp2:egret.Shape = new egret.Shape();
        // shp2.graphics.beginFill(0x00ff00);
        // shp2.graphics.drawCircle(0,0,20);
        // shp2.graphics.endFill();
        // this.addChild(shp2);
        // shp2.x = 20;
        // shp2.y = 20;
        // let rect:egret.Rectangle = new egret.Rectangle(20,20,30,50);
        // shp.mask = rect;
        //--------------
        let squre:egret.Shape = new egret.Shape();
        squre.graphics.beginFill(0xff0000);
        squre.graphics.drawRect(0,0,100,100);
        squre.graphics.endFill();
        this.addChild(squre);
        var circle:egret.Shape = new egret.Shape();
        circle.graphics.beginFill(0x0000ff);
        circle.graphics.drawCircle(25,25,25);
        circle.graphics.endFill();
        circle.x = 80;
        this.addChild(circle);
        squre.mask = circle;





    }
 
}