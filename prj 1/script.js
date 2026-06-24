const users = [
  { name: "Alice", age: 12, subject: "Maths" },
  { name: "Bob", age: 14, subject: "CSE" },
  { name: "Angel", age: 10, subject: "ECE" },
];

const body = document.querySelector("body");

users.forEach((user) => {
  const parent = document.createElement("div");
  parent.style.margin = "1rem";
  body.append(parent);
  const child_el = document.createElement("div");
  child_el.style.whiteSpace = "pre-line";

  child_el.textContent = `
    Name: ${user.name}
    Age: ${user.age}
    Subject: ${user.subject}
    `;
  parent.append(child_el);
});
