let cards = document.querySelector(".cards");
let card = document.querySelector(".card");

let img = document.getElementsByTagName("img");
let name = document.querySelector("h1");

// window.addEventListener("load", () => {



const food = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
    const data = await response.json();
    const meal = data.meals;
    // console.log(data.meals)
    const { strMeal, strMealThumb ,strDescription} = meal;
    // img.src = strMealThumb[1];            console.log(e.strMeal);

    meal.forEach(e => {
        let card = document.createElement("div");
        card.classList.add("card");
        cards.appendChild(card);

        let img = document.createElement("img");
        img.setAttribute("src",e.strMealThumb);
        card.appendChild(img);

        let name = document.createElement("h1")
        name.innerHTML = `${e.strMeal}`;
        card.appendChild(name);


    });


}
food();