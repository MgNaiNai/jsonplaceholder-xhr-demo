// ===============================================
// getData(callback)
// A reusable function that fetches data from an API
// using XMLHttpRequest (XHR) and returns the result
// through a callback function.
// ===============================================

let getData = (callback) => {

    // Create a new HTTP request object
    let request = new XMLHttpRequest();

    // Listen for changes in the request state (0 → 4)
    request.addEventListener("readystatechange", () => {

        // readyState 4 = request is finished
        // status 200 = success (OK)
        if (request.readyState === 4 && request.status === 200) {

            // Convert JSON text into JavaScript object
            let data = JSON.parse(request.responseText);

            // Return the data to the callback (no error)
            callback(data, undefined);

        // When the server returns "Not Found"
        } else if (request.readyState === 4 && request.status === 404) {

            // Return an error message to the callback
            callback(undefined, "Could not fetch data");
        }
    });

    // Open a GET request to the API endpoint
    request.open("GET", "https://jsonplaceholder.typicode.com/todos");

    // Send the request to the server
    request.send();
};


// ===============================================
// Using getData()
// Call the function and receive the data or error
// ===============================================

getData((data, err) => {

    // If data was received successfully
    if (data) {
        console.log(data);

    // If an error occurred
    } else {
        console.log(err);
    }
});
