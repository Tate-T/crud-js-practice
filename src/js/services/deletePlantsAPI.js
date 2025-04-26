export const deletePlantsApi = async (plantId) => {
  try {
    return await fetch(`http://localhost:3000/plants/${plantId}`, {
      method: "DELETE",
    });
  } catch (error) {
    return error
  }
}