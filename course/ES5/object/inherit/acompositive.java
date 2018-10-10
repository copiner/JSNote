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

public class Employee {
   public String name;
   public String dept;
   public Employee () {
      this("", "general");
   }
   public Employee (String name) {
      this(name, "general");
   }
   public Employee (String name, String dept) {
      this.name = name;
      this.dept = dept;
   }
}

public class Manager extends Employee {
   public Employee[] reports = new Employee[0];
}



public class WorkerBee extends Employee {
   public String[] projects;
   public WorkerBee () {
      this(new String[0]);
   }
   public WorkerBee (String[] projs) {
      projects = projs;
   }
}

public class SalesPerson extends WorkerBee {
   public String dept = "sales";
   public double quota = 100.0;
}


public class Engineer extends WorkerBee {
   public String machine;
   public Engineer () {
      dept = "engineering";
      machine = "";
   }
   public Engineer (String mach) {
      dept = "engineering";
      machine = mach;
   }
}
