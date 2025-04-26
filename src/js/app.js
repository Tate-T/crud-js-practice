import { getPlantsApi } from "./services/getPlantsAPI";
import { createPlantsList } from "./markup/createPlantsList";
import { openAddModal, closeAddModal } from "./modals/addPlantModal";
import { closeUpdateModal } from "./modals/updatePlantModal";
import { postPlantApi } from "./services/postPlantApi";
import { deletePlantsApi } from "./services/deletePlantsAPI";
import { updatePlantsApi } from "./services/updatePlants-API"
getPlantsApi().then((plants) => {
  document.querySelector(".plants__list").innerHTML = createPlantsList(plants);
});
document.querySelector(".plants__btn").addEventListener("click", openAddModal);
document.querySelector(".form__close").addEventListener("click", closeAddModal);
document.querySelector("#form-update").addEventListener("submit", async (e) => {
  e.preventDefault()
  closeUpdateModal()
  const plant = {
    title: document.getElementById("updateName").value,
    image: document.getElementById("updateImage").value,
    price: document.getElementById("updatePrice").value,
    isFavorite: false,
  }
  const id = document.querySelector(".backdrop").id;
  await updatePlantsApi(id, plant)
  await getPlantsApi().then((plants) => {
    document.querySelector(".plants__list").innerHTML =
      createPlantsList(plants);
  });
})
document.querySelector(".update-close").addEventListener("click", closeUpdateModal);



document.querySelector("#list").addEventListener("click", async (e) => {
  if (e.target.dataset.action === "delete") {
    await deletePlantsApi(e.target.closest("li").id);
    await getPlantsApi().then((plants) => {
      document.querySelector(".plants__list").innerHTML =
        createPlantsList(plants);
    });
  } else if (e.target.dataset.action === "update") {

    document.querySelector(".backdrop-update").classList.remove("is-hidden");
    console.log(e.target.closest(".plants__item").children[1])
    document.getElementById("updateName").value = e.target.closest(".plants__item").firstElementChild.textContent;
    document.getElementById("updateImage").value = e.target.closest(".plants__item").children[1].src;
    document.getElementById("updatePrice").value = e.target.closest(".plants__item").children[2].textContent;
    document.querySelector(".backdrop").id = e.target.closest(".plants__item").id;


  }
});

document.querySelector("#form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const inputNameValue = event.currentTarget.querySelector("#name").value;
  const inputImageValue = event.currentTarget.querySelector("#image").value;
  // const inputPriceValue = Number.parseFloat(event.currentTarget.querySelector("#price"))
  const inputPriceValue = event.currentTarget.elements.price.value;

  closeAddModal()


  event.currentTarget.querySelector("#name").value = "";
  event.currentTarget.querySelector("#image").value = "";
  event.currentTarget.elements.price.value = "";

  const flower = {
    title: inputNameValue,
    image: inputImageValue,
    price: inputPriceValue,
    isFavorite: false,
  };
  await postPlantApi(flower);
  await getPlantsApi().then((plants) => {
    document.querySelector(".plants__list").innerHTML =
      createPlantsList(plants);
  });
});
