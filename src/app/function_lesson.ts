function add(x:number,y:number):number{
    return x+y;
}
console.log(add(3,6));
console.log('helloworld2')
let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };
    console.log(myAdd(9,2));


