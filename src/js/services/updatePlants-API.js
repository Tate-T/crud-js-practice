export const updatePlantsApi = (plantId, plantToUpdate) =>{
    console.log(plantToUpdate)
    fetch(`http://localhost:3000/plants/${plantId}`, {
        method: "PUT",
        body: JSON.stringify(plantToUpdate),
        headers: {
        "Content-Type": "application/json; charset=UTF-8",
        },
    });
}