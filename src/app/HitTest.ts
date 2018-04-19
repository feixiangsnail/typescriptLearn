export default class HitTest extends egret.DisplayObjectContainer{
    public constructor()
    {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
    }
   private onAddToStage(event:egret.Event){
        this.drawText();
        var shp:egret.Shape = new egret.Shape();
       shp.graphics.beginFill( 0xff0000 );
       shp.graphics.drawRect( 0,0,100,100);
       shp.graphics.endFill();
       shp.width = 200;
       shp.height = 200;
       //this.addChild( shp );
        // let isHit:boolean = shp.hitTestPoint(150,150);
        // this.infoText.text = `isHit:${isHit}`






    }
    
    private infoText:egret.TextField;
    private drawText(){
        this.infoText = new egret.TextField();
        this.infoText.type = egret.TextFieldType.INPUT;
        this.infoText.inputType = egret.TextFieldInputType.PASSWORD;
        this.infoText.displayAsPassword = true;
        this.infoText.width = 282;
        this.infoText.height = 43;
        this.infoText.x = 100;
        this.infoText.y = 200;
        this.infoText.textColor = 0x00ff00;
        this.infoText.text = 'isHit';
        this.addChild(this.infoText);
        let button:egret.Shape =  new egret.Shape();
        button.graphics.beginFill(0x00cc00);
        button.graphics.drawRect(0,0,100,40);
        button.graphics.endFill();
        button.y = 50;
        this.addChild(button);
        button.touchEnabled = true;
        button.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
            this.infoText.setFocus();
        },this)










    }


}