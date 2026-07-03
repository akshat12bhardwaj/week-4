//Data
const movies = [
  {
    name: "Avatar",
    imdb_rating: 7.9,
    poster:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500&q=80",
  },
  {
    name: "Interstellar",
    imdb_rating: 8.7,
    poster:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
  },
  {
    name: "The Dark Knight",
    imdb_rating: 9.0,
    poster:
      "https://images.unsplash.com/photo-1509281373149-e957c6296406?w=500&q=80",
  },
  {
    name: "Joker",
    imdb_rating: 8.4,
    poster:
      "https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?w=500&q=80",
  },
  {
    name: "Inception",
    imdb_rating: 8.8,
    poster:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80",
  },
  {
    name: "Titanic",
    imdb_rating: 7.9,
    poster:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500&q=80",
  },
  {
    name: "The Matrix",
    imdb_rating: 8.7,
    poster:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
  },
  {
    name: "Gladiator",
    imdb_rating: 8.5,
    poster:
      "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&q=80",
  },
  {
    name: "Mad Max: Fury Road",
    imdb_rating: 8.1,
    poster:
      "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?w=500&q=80",
  },
  {
    name: "Dune",
    imdb_rating: 8.0,
    poster:
      "https://images.unsplash.com/photo-1547234935-80c7145ec969?w=500&q=80",
  },
];

//Search JS

const main_el = document.querySelector("main");

function card(film) {
  const div_el = document.createElement("div");
  div_el.classList.add("movie-card");
  main_el.append(div_el);

  const { name, imdb_rating, poster } = film;

  const img_el = document.createElement("img");
  img_el.src = poster;
  div_el.append(img_el);

  const movie_name_el = document.createElement("p");
  movie_name_el.textContent = `Movie Name:${name}`;
  div_el.append(movie_name_el);

  const imdb_el = document.createElement("p");
  imdb_el.textContent = `IMDB-Rating:${imdb_rating}`;
  div_el.append(imdb_el);
}

movies.forEach((films) => {
  card(films);
});


const search_el = document.querySelector('#search')

search_el.addEventListener('input',()=>{
  main_el.textContent=""
  const results = movies.filter(movie => 
    movie.name.includes(search_el.value) || movie.imdb_rating.toString().includes(search_el.value)
  )
  results.forEach(result=>{
    card(result)
  })
  if (results.length===0) {
    main_el.textContent="NO Movies Found"
  }
})

//Sort Js

const alphabetical = document.querySelector("header>div>button:first-child");
alphabetical.addEventListener("click", () => {
  const sorted_movies = [...movies];
  for (let i = 0; i < sorted_movies.length; i++) {
    for (let j = 0; j < sorted_movies.length - i - 1; j++) {
      if (sorted_movies[j].name.localeCompare(sorted_movies[j + 1].name) > 0) {
        [sorted_movies[j], sorted_movies[j + 1]] = [
          sorted_movies[j + 1],
          sorted_movies[j],
        ];
      }
    }
  }
  main_el.textContent = "";
  sorted_movies.forEach((films) => {
    card(films);
  });
});

const alphabetical_rev = document.querySelector(
  "header>div>button:nth-child(2)",
);
alphabetical_rev.addEventListener("click", () => {
  const sorted_movies = [...movies];
  for (let i = 0; i < sorted_movies.length; i++) {
    for (let j = 0; j < sorted_movies.length - i - 1; j++) {
      if (sorted_movies[j].name.localeCompare(sorted_movies[j + 1].name) < 0) {
        [sorted_movies[j], sorted_movies[j + 1]] = [
          sorted_movies[j + 1],
          sorted_movies[j],
        ];
      }
    }
  }
  main_el.textContent = "";
  sorted_movies.forEach((films) => {
    card(films);
  });
});

const reset = document.querySelector("header>div>button:last-child");
reset.addEventListener("click", () => {
  main_el.textContent = "";
  movies.forEach((films) => {
    card(films);
  });
});


const high_rated = document.querySelector("header>div>button:nth-child(3)");
high_rated.addEventListener("click", () => {
  const sorted_movies = [...movies];
  for (let i = 0; i < sorted_movies.length; i++) {
    for (let j = 0; j < sorted_movies.length - i - 1; j++) {
      if(sorted_movies[j].imdb_rating < sorted_movies[j + 1].imdb_rating) {
        [sorted_movies[j], sorted_movies[j + 1]] = [
          sorted_movies[j + 1],
          sorted_movies[j],
        ];
      }
    }
  }
  main_el.textContent = "";
  sorted_movies.forEach((films) => {
    card(films);
  });
});


const low_rated = document.querySelector("header>div>button:nth-child(4)");
low_rated.addEventListener("click", () => {
  const sorted_movies = [...movies];
  for (let i = 0; i < sorted_movies.length; i++) {
    for (let j = 0; j < sorted_movies.length - i - 1; j++) {
      if(sorted_movies[j].imdb_rating > sorted_movies[j + 1].imdb_rating) {
        [sorted_movies[j], sorted_movies[j + 1]] = [
          sorted_movies[j + 1],
          sorted_movies[j],
        ];
      }
    }
  }
  main_el.textContent = "";
  sorted_movies.forEach((films) => {
    card(films);
  });
});
