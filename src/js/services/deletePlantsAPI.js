export const deletePlantsApi = (plantId) =>
  fetch(`http://localhost:3000/plants/${plantId}`, {
    method: "DELETE",
  });
