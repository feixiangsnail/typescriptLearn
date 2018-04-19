
export default class Main extends egret.DisplayObject {
   constructor(){
       super();
       this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddToStage,this);
   }

   onAddToStage(){
       console.log('onAddToStage')
   }







}

















