const container = document.querySelector('main');

const displayItems = (dataMeals) => {
  dataMeals.forEach((meals) => {
    const mainDiv = document.createElement('div');
    mainDiv.className = 'dflex container';
    mainDiv.innerHTML = `
    <div class="item dflex">
      <img class="mealimg" id="${meals.idMeal}" src="${meals.strMealThumb}" alt="${meals.strMealThumb}">
      <div class="dflex mealtitle">
        <h2>${meals.strMeal}</h2>
        <div>
          <span>0</span>
          <button id="likes">&#9825;</button>
        </div>
      </div>
        <button id="comments">Comments</button>
      </div>
    `;
    container.appendChild(mainDiv);
  });
};

const getItems = async () => {
  const request = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
  const data = await request.json();
  displayItems(data.meals);
};

export default getItems;