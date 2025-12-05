# JSONPlaceholder XHR Demo

This project demonstrates how to fetch data from a public API using **XMLHttpRequest (XHR)** in JavaScript and handle responses using the **callback pattern**.  
It uses the free JSONPlaceholder API to retrieve a list of todos and logs the parsed JSON result.

## 📌 Features
- Uses XMLHttpRequest with callback-based handling  
- Parses JSON responses using `JSON.parse()`  
- Detects success (`status === 200`) and errors (`status === 404`)  
- Very beginner-friendly  
- Works in any modern browser  

## 📂 JavaScript Code Example

```javascript
// Function to get data from an API using XMLHttpRequest
// It accepts a callback function to handle success or error
let getData = (callback) => {

    // Create a new HTTP request object
    let request = new XMLHttpRequest();

    // Listen for changes in request state (0 → 4)
    request.addEventListener("readystatechange", () => {

        // readyState 4 = request finished
        // status 200 = success
        if (request.readyState === 4 && request.status === 200) {

            let data = JSON.parse(request.responseText);

            // On success → send data back with no error
            callback(data, undefined);

        // If server returns 404 (Not Found)
        } else if (request.readyState === 4 && request.status === 404) {

            // On error → send no data but send error message
            callback(undefined, "Could not fetch data");

        }
    });

    // Open a GET request to the API endpoint
    request.open("GET", "https://jsonplaceholder.typicode.com/todos");

    // Send the request
    request.send();
};


// Calling the function and handling the callback
getData((data, err) => {

    // If data exists → log it
    if (data) {
        console.log(data);

    // If error exists → log the error
    } else {
        console.log(err);
    }
});
