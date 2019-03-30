/*
    Employee
       |
  ---------------
  |             |
Manager     WorkerBee
                |
           ------------
          |           |
      SalesPerson   Engineer

*/

//通过直接调用原型链上的更高层次对象的构造器函数，让构造器添加更多的属性
function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee (name, dept, projs) {
  this.base = Employee;
  this.base(name, dept);
  this.projects = projs || [];
}
//WorkerBee.prototype = new Employee;


function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer (name, projs, mach) {
  this.base = WorkerBee;
  this.base(name, "engineering", projs);
  this.machine = mach || "";
}
//Engineer.prototype = new WorkerBee; //显式地设置原型才能确保动态的继承



//使用call() / apply() 方法,与上面等价，无需 再要base方法了
// function Engineer (name, projs, mach) {
//   WorkerBee.call(this, name, "engineering", projs);
//   this.machine = mach || "";
// }



var jane = new Engineer("Jane", ["navigator", "javascript"], "belau");
//Employee.prototype.specialty = "none";

console.log(jane.name);
console.log(jane.dept);
console.log(jane.projects);
console.log(jane.machine);
console.log(jane.specialty);
