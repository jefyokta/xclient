import XSocket from "./src/XSocket";

const ws = new XSocket('ws://127.0.0.1:3000')

ws.open((event:Event)=>{
    console.log(event);
    
});

ws.message((event:MessageEvent)=>{
    console.log(event.data);
    
})

ws.send({message:"hai",event:'even'})