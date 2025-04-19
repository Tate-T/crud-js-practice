import { getPlantsApi } from "./services/getPlantsAPI";
import { createPlantsList } from "./markup/createPlantsList";
import { openModal, closeModal } from "./modals/addPlantModal";
import { postPlantApi } from "./services/postPlantApi";
import { deletePlantsApi } from "./services/deletePlantsAPI";
getPlantsApi().then((plants) => {
  document.querySelector(".plants__list").innerHTML = createPlantsList(plants);
});
document.querySelector(".plants__btn").addEventListener("click", openModal);
document.querySelector(".form__close").addEventListener("click", closeModal);

document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.dataset.action === "delete") {
    deletePlantsApi(e.target.closest("li").id);
    getPlantsApi().then((plants) => {
      document.querySelector(".plants__list").innerHTML =
        createPlantsList(plants);
    });
  }
});

document.querySelector("#form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNameValue = event.currentTarget.querySelector("#name").value;
  const inputImageValue = event.currentTarget.querySelector("#image").value;
  // const inputPriceValue = Number.parseFloat(event.currentTarget.querySelector("#price"))
  const inputPriceValue = event.currentTarget.elements.price.value;

  const flower = {
    title: inputNameValue,
    image: inputImageValue,
    price: inputPriceValue,
    isFavorite: false,
  };
  postPlantApi(flower);
  getPlantsApi().then((plants) => {
    document.querySelector(".plants__list").innerHTML =
      createPlantsList(plants);
  });

  console.log(flower);

  event.currentTarget.querySelector("#name").value = "";
  event.currentTarget.querySelector("#image").value = "";
  event.currentTarget.elements.price.value = "";
});
