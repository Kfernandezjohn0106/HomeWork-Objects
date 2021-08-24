let books = [
  {
    title: "East of Eden",
    author: "John Steinback",
    alreadyRead: true,
  },
  {
    title: "The House of Mirth",
    author: "Edith Wharton",
    alreadyRead: false,
  },
  {
    title: "Moab is my Washspot",
    author: "Stephen Fry",
    alreadyRead: false,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  let bookinfo = book.title + " by " + book.author;
  if (book.alreadyRead) {
    console.log(" you already read " + bookinfo);
  } else {
    console.log(" you still need to read " + bookinfo);
  }
}

console.clear();

function recipecard() {
  let recipe = {
    title: "Ginger, Apple and Banana Smoothie",
    servings: 2,
    ingredients: [
      "500ml Milk",
      "2/3 cups of vanilla protein powder",
      "2 tbs rolled oats",
      "Pinch of cinnamon",
      "2 cups of baby spinach leaves",
      "2 frozen bananas",
      "2 roughly chopped apples",
      "1/2 avocado",
      "2 tsp fresh ginger",
      "6 ice cubes",
    ],
  };

  console.log(recipe.title);
  console.log("Servings:" + recipe.servings);
  console.log("Ingredients:");
  for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
  }
}

recipecard();

console.clear();

//The Movie DataBase

function moviedatabase() {
  let movie = {
    title: "The Amazing SpiderMan",
    duration: 228,
    director: "Marc Webb",
    stars: ["Andrew Garfied", "Emma Stone", "Stan Lee", "Sally Field"],
  };

  console.log(
    movie.title +
      " last for " +
      movie.duration +
      " minutes, and was directed by " +
      movie.director
  );
  console.log("stars : " + movie.stars.join(", "));
}
moviedatabase();

console.clear();
