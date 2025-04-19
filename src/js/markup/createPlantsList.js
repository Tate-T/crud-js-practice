export const createPlantsList = (plants) =>
  plants
    .map(
      (plant) =>
        `<li id="${plant.id}" class="plants__item">
        <h2 class="plants__title">${plant.title}</h2>
        <img src="${plant.image}" alt="${plant.title}" class="plants__image" />
        <p class="plants__price">${plant.price}</p>
        <label class="plants__label">
          Do you like this plant?
          <input type="checkbox" class="plants__checkbox" />
        </label>
        <button type='button' data-action="delete">Delete</button>
      </li>`
    )
    .join("");
