export const getPlantsApi = () => {
  return fetch("http://localhost:3000/plants").then((response) =>
    response.json()
  );
};
