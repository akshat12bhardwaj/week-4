const expenditures = [
  { category: "Travel", amount: 200 },
  { category: "Food", amount: 50 },
  { category: "Utilities", amount: 120 },
  { category: "Rent", amount: 1200 },
  { category: "Groceries", amount: 150 },
  { category: "Insurance", amount: 95 },
  { category: "Subscriptions", amount: 30 },
  { category: "Clothing", amount: 65 },
  { category: "Gas", amount: 45 },
  { category: "Entertainment", amount: 80 },
];

let total_amt = 0;
let category_el = 0; 
let high_exp = 0;
let rec ="";

const main_el = document.querySelector("main");
const div_el = document.createElement("div");
div_el.classList.add("pricing");
main_el.append(div_el);

expenditures.forEach((item) => {
    total_amt += item.amount;

});

function create_list(item) {
  const { category, amount } = item;

  const contri =  (amount/total_amt)*100
  const p_el = document.createElement("p");
  p_el.textContent = `${category}: $${amount} (${contri.toFixed(2)}%)`;

  category_el ++;

  if (high_exp<amount) {
    high_exp=amount;
    rec = category
  }

   div_el.append(p_el);

}

expenditures.forEach((item) => {
  create_list(item);
});

const total_amt__el = document.createElement("p");
total_amt__el.textContent = `Total Expenses: $${total_amt}`;

const category_amt__el = document.createElement("p");
category_amt__el.textContent = `Total Category: ${category_el}`;

const high_exp__el = document.createElement("p");
high_exp__el.textContent = `Highest Expense: ${rec} => $${high_exp}`;

const avg_el = document.createElement("p");
avg_el.textContent = `AVG Expense: ${total_amt/expenditures.length}`;

div_el.append(total_amt__el);
div_el.append(category_amt__el)
div_el.append(high_exp__el)
div_el.append(avg_el)
