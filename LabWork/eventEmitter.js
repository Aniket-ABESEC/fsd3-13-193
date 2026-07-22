import{EventEmitter} from 'node:events';
const task = new EventEmitter();
const sayHi = (name) => {
    console.log(`Logged In ${name}`);
     
};
const starts =()=>{
    console.log("System Started");
};
task.on("greet",starts);
task.on("greet",sayHi); //Event and method binding 
task.emit("greet","Aniket Kumar") // Announcementc

