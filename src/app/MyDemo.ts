
/*
 */
class MyDemo extends LoadingUI {
    public constructor() {
        super();
    }

    private _egret3DCanvas: egret3d.Egret3DCanvas;//canvas对象
    private createCanvas(): void {
        this._egret3DCanvas = new egret3d.Egret3DCanvas();
        this._egret3DCanvas.x = 0;
        this._egret3DCanvas.y = 0;
        this._egret3DCanvas.width = window.innerWidth;
        this._egret3DCanvas.height = window.innerHeight;
        this._egret3DCanvas.start();//调用start()方法，则开启egret3d.Egret3DCanvas对象。
    }

    private _view:egret3d.View3D;
    private createView()
    {
        /*
        View3D是Egre3D中的显示窗口，我们在View3D对象初始化的时候，需要填写的四个参数分别为窗口的x，y和宽高值。
        backColor是当前显示窗口的背景颜色。需要注意的是，其中颜色值为ARGB，不要忘记前两位为Alpha信息。
        最后我们设置其当前View3D中摄像机的位置与朝向，并将其添加到egret3d.Egret3DCanvas对象中。
        */
        this._view = new egret3d.View3D(0,0,window.innerWidth,window.innerHeight);
        this._view.backColor = 0xff333333;
        this._view.camera3D.lookAt(new egret3d.Vector3D(500,500,-1000),new egret3d.Vector3D(0,0,0));
        this._egret3DCanvas.addView3D( this._view );
    }

    //加载3D模型文件
    private loadModel():void
    {
        var loader:egret3d.URLLoader = new egret3d.URLLoader();
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE,this.onLoad,this);//添加一个监听器,当loader对线加载完成之后，执行onload方法
        loader.load("resource/laohu/Mon_04.esm");
    }

    /*
    创建几何体，材质和Mesh对象。
    */
    private _mat:egret3d.TextureMaterial;//材质
    private _mesh:egret3d.Mesh;
    private _geom:egret3d.Geometry;//几何体
    private onLoad(evt: egret3d.LoaderEvent3D):void
    {
         /*
            当加载模型完成后，我们得到的evt.loader.data数据，实际上就是一个egret3d.Geometry对象，里面包含了一个模型的UV0，UV1，法线，顶点等信息。这个类是我们的几何体。
            同时还需要创建纹理材质（egret3d.TextureMaterial），纹理材质决定了一个物体对于光线的反射率，折射率等信息。
            想要将我们的材质与模型组合到一起，需要使用egret3d.Mesh对象，也被称之为网格。现在你可以将其理解为3D场景中能被渲染的看得见的物体对象。
            最后我们通过View3D中的addChild3D()方法，将Mesh对象放入到显示窗口中。
            注意，其中的createLigth方法是创建灯光
        */
        this._geom = evt.loader.data;
        this._mat = new egret3d.TextureMaterial();
        this._mesh = new egret3d.Mesh(this._geom, this._mat);
        this._view.addChild3D( this._mesh );
        this.createLigth();//创建灯光
        var loader:egret3d.URLLoader = new egret3d.URLLoader();
        loader.addEventListener(egret3d.LoaderEvent3D.LOADER_COMPLETE,this.onTextureLoad,this);
        loader.load("resource/laohu/Mon_04.png");
    }

    private createLigth():void
    {
        /*
            灯光在使用时需要先创建一个灯光组对象（egret3d.LightGroup）。然后将我们创建的平行光加入到这个灯光组当中。
            最后一句 this._mesh.material.lightGroup = lightGroup; 是将当前灯光组与我们前面创建的 Mesh 对象绑定。这样，当前灯光组中的灯光效果会直接作用到我们的这个Mesh对象中。
        */
        var lightGroup:egret3d.LightGroup = new egret3d.LightGroup();//创建灯光组对象
        var light:egret3d.DirectLight = new egret3d.DirectLight(new egret3d.Vector3D(0, -1, 0));//创建灯光
        lightGroup.addLight(light);//将灯光加入到灯光组当中
        light.diffuse = 0xffffffff;
        light.intensity = 1;
        this._mesh.material.lightGroup = lightGroup;
    }

    //设置漫反射贴图
    private onTextureLoad(evt: egret3d.LoaderEvent3D)
    {
        var texture:egret3d.ImageTexture = evt.loader.data;
        this._mat.diffuseTexture = texture;
    }
}