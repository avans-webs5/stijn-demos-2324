import { prompt } from './commands.js';
import {MainController}  from './controller.js';

console.log('starting app...')


const main_controller = new MainController();
await main_controller.connect();

//link prompt to controller

while(true){

    let result = await prompt({
        create: main_controller.create,
        read: main_controller.read,
        update: main_controller.update,
        delete: main_controller.delete
    })

    if (result == -1){
        console.log('Exiting program')
        break;
    }
}