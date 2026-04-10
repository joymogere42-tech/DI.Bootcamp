// Giphy API URL
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Fetch data from the API
fetch(url)
  .then(response => {
    // Check if the request was successful
    if (!response.ok) {
      throw new Error("HTTP error! Status: " + response.status);
    }
    // Convert response to JSON
    return response.json();
  })
  .then(data => {
    // Log the JavaScript object received
    console.log(data);
  })
  .catch(error => {
    // Catch and display any errors
    console.error("Error fetching data:", error);
  });