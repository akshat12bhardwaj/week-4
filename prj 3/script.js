let data = [
  {
    name: "Akshat",
    role: "Frontend Developer",
    city: "Patna",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    experience: "1 year",
    github: "https://github.com/akshat-dev",
  },
  {
    name: "Ananya",
    role: "Backend Developer",
    city: "Bengaluru",
    skills: ["Node.js", "Express", "MongoDB", "Python", "Docker"],
    experience: "3 years",
    github: "https://github.com/ananya-coded",
  },
  {
    name: "Rahul",
    role: "Full Stack Engineer",
    city: "Delhi",
    skills: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL", "AWS"],
    experience: "4 years",
    github: "https://github.com/rahul-stack",
  },
  {
    name: "Priya",
    role: "UI/UX Developer",
    city: "Mumbai",
    skills: ["Figma", "HTML5", "CSS3", "Sass", "JavaScript"],
    experience: "2 years",
    github: "https://github.com/priya-design",
  },
  {
    name: "Vikram",
    role: "DevOps Engineer",
    city: "Hyderabad",
    skills: ["Linux", "Jenkins", "Kubernetes", "Git", "Terraform"],
    experience: "5 years",
    github: "https://github.com/vikram-ops",
  },
];

function create_card(obj) {
  let div_el = document.createElement("div");
  div_el.classList.add("product");
  document.querySelector("main").append(div_el);

  const { name, role, city, skills, experience, github } = obj;

  let Name = document.createElement("p");
  Name.textContent = name;
  div_el.append(Name);

  let Role = document.createElement("p");
  Role.textContent = role;
  div_el.append(Role);

  let City = document.createElement("p");
  City.textContent = city;
  div_el.append(City);

  let Skill_head = document.createElement('ul')
  
  skills.forEach(skill=>{
    const skill_el = document.createElement('li')
    skill_el.textContent=skill
    Skill_head.append(skill_el)
  })
  
  div_el.append(Skill_head)

  let Experience = document.createElement("p");
  Experience.textContent = `Experience: ${experience}`;
  div_el.append(Experience);

  let Github = document.createElement("a");
  Github.textContent = "Show Profile";
  Github.href = github
  div_el.append(Github);
}

data.forEach((user) => {
  create_card(user);
});
