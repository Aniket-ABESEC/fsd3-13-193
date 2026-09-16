localhost -URL
127.0.0.1 -IP address

control+c for stop the server
every request from client have a pair of {request,response}
npm = node package manager 
## Node Pacakage Manager 
used to install,run,unstall ant program/project and pacakage 
-npm install <pacakageName>
-npm unistall<pacckageName>
to use npm,the project must be npm project,
to create npm project we can use 

-npm init -y
-it creates a package.json file automatically 
pacakage.json holds all the information realted to intall
pacakage from npm
-update pacakage.json,set type = 'module'
-it also create a folder node_modules automatically
-node_modules holds the pacakage/library files
-generally we ignore the node_module by .gitignore

Nodemon - it restart the server automatically when file changes,to install
>npm i nodemon -D
Note- -D flag will install this package as develop dependency
-to execute any program,update the package.json file then start the server as
<b>npm run dev </b>

-start -> it will execute the app on deployment 
-dev-> ir will start server in development phase(only for developer)
-res: it will return content (json/html/plain) to the user /client 
-req: ir will retrive the information from client to the server
- server send also statusCodes to the client , that indicate the error /success
message
## Status Code
-200->ok
-201->Created
-400->Bad Request
-402 -> Unauthorized
-403 -> forbidden
-404 -> not found
-500 -> internal server error

## content type
-text/plain
-text/html
-appication/json
-text/css
the content type and status code can be send back to client by two ways
1. res.writeHead
2. res.setHeader
3. res.statusCode

## Response as html content 
-response.end we can share any html content /tag
- html file 
.read by createReadStream
.pipe with res

## send html file to client
1.html file
-read html files using createReadStreaam
-pipe it with res object 
 2. html content
 send any html tag/content by using 
 res.end('<any html tag>')

 ## Json (javascript object notation)
server returns data only not html contents because html contents will be return by frontend developer.the data is in json format
-json always store data in, key value pair  enclosed by {} array cna be stored by []
one pair of {} will represent one obect and it property wil be seprated by ,
example: '''
           {
            id:1,
            name:'Mobile',
            price:'25000',
            rating:'4.5',
            review:'200
            }
              '''
## headers
headers is used to tell the client, the type of data send by the server it may be html file,json data plane text file 
css file anky tokens(for login)
1. text/plane->text file
2. text/html-> html content/file
3. application/json-> json content/file
4. text/css->stylesheet
5. application/form-data -> for uploading
6. application/auth -> for token
the header can be set by res object at sever side by two ways

7. res.