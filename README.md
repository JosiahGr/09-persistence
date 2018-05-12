## Persistence 
This program contains a body parser module that uses promises to parse the JSON body POST and PUT requests. It also contains a router that handles all requests for GET, POST, PUT, and DELETE. It also contains a storage module that stores "paintings" by their title and content. Each resource is given a unique id provided by the UUID package.

## API Calls
This program allows users to input a painting object. You will need to give it `content` and `a title`, an ID will automatically be assigned to any new objects using npm UUID.

# POST
To add a new object to the API, type the following in the command line.

``` http POST :3000/api/v1/paintings content=text title=text ```

This will create a new object with a unique ID.

# GET 
To retrieve a specific file from the API you will need to make a GET request that includes either the  `title` or the `ID` that was already assigned. 

``` http GET :3000/api/v1/paintings id==1234567890 title==text ```

To view all files in a certain criteria, simply make the request with only the route. This will return the list of IDs of each file.

# DELETE
To remove a file from the API you will need to find the specific ID of the desired file. 

``` http DELETE :3000/api/v1/paintings id==123456789 ```

This will successfully remove the file. 

Log
4-26-18: Post functionality complete 4-26-18: Delete and Get functionality complete
4-28-18: Refactored majority of codebase to better handle errors


Developed by Josiah Green

