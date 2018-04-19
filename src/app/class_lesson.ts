// class Greet {
//     greeting: string;
//     constructor(msg: string) {
//         this.greeting = msg;
//     }
//     greet() {
//         return 'hello' + this.greeting;
//     }
// }
// let g: Greet = new Greet('bob');
// console.log(g.greet());

// class Animal {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }

// class Snake extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }

// class Horse extends Animal {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }

// let sam = new Snake("Sammy the Python");
// let tom: Animal = new Horse("Tommy the Palomino");

// sam.move();
// tom.move(34);

//-----------
// class Animal {
//     private name: string;
//     constructor(theName: string) { this.name = theName; 
//     console.log(this.name)}
// }

// class Rhino extends Animal {
//     constructor() { super("Rhino"); }

// }

// class Employee {
//     private name: string;
//     constructor(theName: string) { this.name = theName; }
// }

// let animal = new Animal("Goat");
// let rhino = new Rhino();
// let employee = new Employee("Bob");

//----------------
// let passcode = "secret passcode2";

// class Employee {
//     private _fullName: string;

//     get fullName(): string {
//         return this._fullName;
//     }

//     set fullName(newName: string) {
//         if (passcode && passcode == "secret passcode") {
//             this._fullName = newName;
//         }
//         else {
//             console.log("Error: Unauthorized update of employee!");
//         }
//     }
// }
// let employee = new Employee();
// employee.fullName = 'jhon';
// if (employee.fullName) {
//     console.log(employee.fullName, 'fullname')
// }
// else {
//     console.log(employee.fullName, 'fullname2')
// }
//-------------静态----
// class Grid {
//     static origin = {x: 0, y: 0};
//     calculateDistanceFromOrigin(point: {x: number; y: number;}) {
//         let xDist = (point.x - Grid.origin.x);
//         let yDist = (point.y - Grid.origin.y);
//         return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
//     }
//     constructor (public scale: number) { }
// }

// let grid1 = new Grid(1.0);  // 1x scale
// let grid2 = new Grid(5.0);  // 5x scale

// console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
// console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
//--------------抽象类-------------
// abstract class Department {

//     constructor(public name: string) {
//     }

//     printName(): void {
//         console.log('Department name: ' + this.name);
//     }

//     abstract printMeeting(): void; // 必须在派生类中实现
// }

// class AccountingDepartment extends Department {

//     constructor() {
//         super('Accounting and Auditing'); // 在派生类的构造函数中必须调用 super()
//     }

//     printMeeting(): void {
//         console.log('The Accounting Department meets each Monday at 10am.');
//     }

//     generateReports(): void {
//         console.log('Generating accounting reports...');
//     }
// }

// let department: Department; // 允许创建一个对抽象类型的引用
// //department = new Department(); // 错误: 不能创建一个抽象类的实例
// department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
// department.printName();
// department.printMeeting();
// //department.generateReports(); // 错误: 方法在声明的抽象类中不存在
//-------------------------构造函数------------

