const employees = [
  {
    name: "Alice Johnson",
    position: "Software Engineer",
    department: "Engineering",
    salary: 95000,
  },
  {
    name: "Bob Smith",
    position: "Project Manager",
    department: "Operations",
    salary: 88000,
  },
  {
    name: "Charlie Brown",
    position: "UX Designer",
    department: "Design",
    salary: 78000,
  },
  {
    name: "Diana Prince",
    position: "DevOps Engineer",
    department: "Engineering",
    salary: 105000,
  },
  {
    name: "Evan Wright",
    position: "Data Analyst",
    department: "Analytics",
    salary: 72000,
  },
  {
    name: "Fiona Gallagher",
    position: "HR Manager",
    department: "Human Resources",
    salary: 68000,
  },
  {
    name: "George Clark",
    position: "QA Engineer",
    department: "Engineering",
    salary: 80000,
  },
  {
    name: "Hannah Abbott",
    position: "Marketing Specialist",
    department: "Marketing",
    salary: 65000,
  },
  {
    name: "Ian Malcolm",
    position: "Data Scientist",
    department: "Analytics",
    salary: 115000,
  },
  {
    name: "Julia Roberts",
    position: "Product Owner",
    department: "Operations",
    salary: 92000,
  },
];

const main_el = document.querySelector("main");
const container = document.createElement("div");
main_el.append(container);

function card(employ) {
  const { name, position, department, salary } = employ;
  const employ_card = document.createElement("div");
  employ_card.classList.add("employ_card");
  container.append(employ_card);

  const employee_name = document.createElement("p");
  employee_name.textContent = name;
  employ_card.append(employee_name);

  const employee_position = document.createElement("p");
  employee_position.textContent = position;
  employ_card.append(employee_position);

  const employee_department = document.createElement("p");
  employee_department.textContent = department;
  employee_department.classList.add(
    `dept-${department.toLowerCase().replace(/\s+/g, "-")}`,
  );
  employ_card.append(employee_department);

  const employee_salary = document.createElement("p");
  employee_salary.textContent = `$${salary}`;
  employ_card.append(employee_salary);

  const remove_el = document.createElement("button");
  remove_el.textContent = "Remove";
  remove_el.style.padding = "0.5rem 2rem";
  employ_card.append(remove_el);

  remove_el.addEventListener("click", () => {
    remove_el.parentElement.remove();
    let index = employees.indexOf(employ);
    if (index>=0) {
      employees.splice(index, 1);
    }
  });
}

employees.map((employ) => card(employ));

const search = document.querySelector("#search");
search.addEventListener("input", () => {
  container.textContent = "";
  const check = search.value.toLowerCase();
  let result = employees.filter((employee) =>
    employee.name.toLowerCase().includes(check),
  );
  result.map(card);

  if (result.length == 0) {
    container.textContent = "No results found";
  }
});

const form_el = document.querySelector("form");

form_el.addEventListener("submit", (event) => {
  event.preventDefault();
  const new_Data = new FormData(form_el);

  const newEmployee = {
    name: new_Data.get("name-of-employee"),
    position: new_Data.get("position-of-employee"),
    department: new_Data.get("department-of-employee"),
    salary: new_Data.get("salary-of-employee"),
  };

  employees.push(newEmployee);

  card(newEmployee);

  form_el.reset();
});
