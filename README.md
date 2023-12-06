# goit-js-hw-10

## Task

### Cat search
Create the front-end part of the application for searching information about a cat by its breed. Watch a demo video of the program, use it as a reference for the necessary functionality.

#### HTTP requests
Use the public The Cat API. To get started, you need to register and get a unique access key to attach to each request. Go to the main page and click the Signup for free button below, follow the instructions, the key will be sent to the specified email.

To use the key, you must use the x-api-key HTTP header. It is recommended to use axios and add a header to all requests.
```javascript
import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "your key";
```

#### Collection of breeds
An HTTP request to the rock collection must be made when the page is loaded. For this, it is necessary to perform a GET request to the resource https://api.thecatapi.com/v1/breeds, which returns an array of objects. In case of a successful request, it is necessary to fill select.breed-select with options so that the value of the option contains the id of the breed, and the name of the breed is displayed to the user in the interface.

Write a fetchBreeds() function that executes an HTTP request and returns a promise with an array of breeds - the result of the request. Export it to the cat-api.js file and make a named export.

#### Information about the cat
When the user selects an option in the selection, it is necessary to perform a request for complete information about the cat on the resource https://api.thecatapi.com/v1/images/search. Be sure to include the breed_ids query string parameter with the breed ID in this query.

Here's what a URL query would look like to get complete information about a dog by breed ID:
```
https://api.thecatapi.com/v1/images/search?breed_ids=breed_id
```

Write the fetchCatByBreed(breedId) function, which expects the breed identifier, makes an HTTP request and returns a promise with data about the cat - the result of the request. Export it to the cat-api.js file and make a named export.

If the request was successful, an image and detailed information about the cat appear under the selection in the div.cat-info block: breed name, description and temperament.

#### Download status processing
As long as any HTTP request is made, it is necessary to show the loader - the p.loader element. As long as there are no requests or when the request is complete, the loader must be hidden. Use additional CSS classes for this.

- Hide select.breed-select and show p.loader while querying the list of breeds.
- Hide div.cat-info and show p.loader while querying for cat info.
- As soon as any request has finished, the p.loader should be hidden.

#### Error handling
If the user experiences an error during any HTTP request, such as a network failure, packet loss, etc., i.e. the request is rejected, the p.error element must be displayed and hidden on each subsequent request. Use additional CSS classes for this.

It is very easy to test the functionality of error display - change the request address by adding any character to the end, for example, instead of https://api.thecatapi.com/v1/breeds, use https://api.thecatapi.com/v1/breeds123. A request to get a list of breeds will be rejected with an error. Similarly, to request information about a cat by breed.

#### Interface
- Add minimal design of interface elements.
- Instead of select.breed-select, you can use any library with beautiful selects, for example https://slimselectjs.com/
- Instead of p.loader, you can use any library with beautiful CSS loaders, for example https://cssloaders.github.io/
- The p.error downloader can use any library with good notifications, such as Notiflix
