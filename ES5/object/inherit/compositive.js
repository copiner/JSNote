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

function Employee () {
  this.name = "";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);


function SalesPerson() {
   WorkerBee.call(this);
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer() {
   WorkerBee.call(this);
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype = Object.create(WorkerBee.prototype);

var jim = new Employee; // parentheses can be omitted if the constructor takes no arguments
// jim.name is ''
// jim.dept is 'general'

var sally = new Manager;
// sally.name is ''
// sally.dept is 'general'
// sally.reports is []

var mark = new WorkerBee;
// mark.name is ''
// mark.dept is 'general'
// mark.projects is []

var fred = new SalesPerson;
// fred.name is ''
// fred.dept is 'sales'
// fred.projects is []
// fred.quota is 100

var jane = new Engineer;
// jane.name is ''
// jane.dept is 'engineering'
// jane.projects is []
// jane.machine is ''
