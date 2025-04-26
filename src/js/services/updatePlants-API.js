export const updatePlantsApi = async (plantId, plantToUpdate) => {
    try {
        return await fetch(`http://localhost:3000/plants/${plantId}`, {
            method: "PUT",
            body: JSON.stringify(plantToUpdate),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
    } catch (error) {
        return error
    }
}