localhost  - URL
127.0.0.1 - IP address
ctrl+c  - For stop the server
every request from client has a pair of { request ,response}
## NPM - (Node Package Manager)
    use to install ,run ,unistall any program / projects and package
    - npm install   <packageName>
    - npm uninstall <packageName>


    to use npm, the project must be npm project,
    to create npm project we can use 
    - npm init  -y
    it creats a package.json file automatically package.json holds all the information related to install the package from npm.
    -  it also create s folder node_modules automatically
    - node_modules holdes the package / library files
    - generally we ignore the node_modules by .gitignore
    - Nodemon - it reatart the server automaticaly when file changes,to install
    > npm i nodemon -D
    Note : -D flag will install this package as developer dependency 
    -  to execute any program update the package .json file then restart the server as 
    <b>npm run dev</b>
    - start -> it will execute the app on devlopement phase( only for developer)
     - res: it will contents (json/html/plain) to the user/client
     - req: it will retrieve the information from client to server
      - server send also statusCodes to the client , that indicates he error / success message
      # Status Codes
       - 200 -> ok
       - 201 -> Created
       - 400 -> Bad request
       - 401 ->  Unauthorised
       - 403 -> forbidden
       - 404 -> not found
       - 500 -> internal server error

       # content type
       - text/ plain
       - text/html
       - application/json
       - text / css
       the content type and status code can be  send back to  client by two ways
       1. res.writehread
       2.res.setheader
       3.statuscode
       
## response html content
1. res.writeHead
2. res.setHeader
3. res.statusCode

## send html file to client
1. html file
 -read html file using createReadStress
 _pipe it with res object

2. html content
   send any html tags/content by using 
   res.end('<any html tag>)

   ## JSON(JAVA SCRIPT OBJECT NOTATION)
   server returns data only not html contents because html contents will by content devloper.
   The data is in json format.
   JSON- Always stores data in key value pairs enclosed by {}.\
   Array can be stored by [].
   one pair of {} will represent one object and its property will be seperated by , .
    ```
   {
    id:1,
    name-'Mobile',
    price:25000,
    rating:4.5,
    review:200
   }
   ```