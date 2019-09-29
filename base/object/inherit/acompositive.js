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

function Employee (name, dept) {
  this.name = name || "";
  this.dept = dept || "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee (projs) {
  this.projects = projs || [];
}
WorkerBee.prototype = new Employee;


function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer (mach) {
   this.dept = "engineering";
   this.machine = mach || "";
}
Engineer.prototype = new WorkerBee;

var jim = new Employee('Jim', 'marketing');

var mark = new WorkerBee(['js']);

var jane = new Engineer('belau');
console.log(jane.projects);
