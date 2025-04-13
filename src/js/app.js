import {getPlantsApi} from "./services/getPlantsAPI";
import {createPlantsList} from "./markup/createPlantsList";
import {openModal, closeModal} from "./modals/addPlantModal";
getPlantsApi().then(plants => {document.querySelector(".plants__list").innerHTML = createPlantsList(plants)});
document.querySelector(".plants__btn").addEventListener("click", openModal());
document.querySelector(".form__close").addEventListener("click", closeModal());
