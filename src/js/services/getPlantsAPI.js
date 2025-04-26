export const getPlantsApi = async () => {
  try {
    return await fetch("http://localhost:3000/plants").then((response) =>
      response.json()
    );
  } catch (error) {
    return error
  }
};
