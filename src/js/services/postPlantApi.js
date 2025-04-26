export const postPlantApi = async (newPlant) => {
    const options = {
        method: "POST",
        body: JSON.stringify(newPlant),
        headers: {
            "Content-Type": "application/json; charset=UTF-8"
        }
    }
    try {
        return await fetch("http://localhost:3000/plants", options).then((response) =>
            response.json()
        );
    } catch (error) {
        return error
    }
}