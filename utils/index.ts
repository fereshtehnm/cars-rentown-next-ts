export async function fetchCars() {
  const headers = { "X-Api-Key": "Gs3QcQVnwj3hRwvZYmDZJw==Ve59DtbxD1XcbuV2" };
  const contentType = "application/json";

  const response = await fetch("https://api.api-ninjas.com/v1/cars", {
    headers: headers,
  });

  const result = await response.json();
  return result;
}
