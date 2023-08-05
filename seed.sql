
INSERT INTO department (name)
 VALUES ("sales"),
        ("production"),
        ("management"),
        ("legal"),
        ("labor");

 INSERT INTO role (title, salary, department_id)
   VALUES ("CEO","100000", 3),
          ("Grunt","50000", 5),
          ("Sales floor","75000", 1),
          ("Production control","60000", 2),
           ("Lawyer", "150000", 4);



INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Marston", 1),
        ("William", "Munny", 5),
        ("Cole", "Thorton", 2),
        ("Kate", "Barlow", 3),
        ("John", "Holiday", 4);
 UPDATE employee set manager_id = 1 where id = 3;
 UPDATE employee set manager_id = 2 where id = 5;       