import readline from 'readline'



const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


export async function prompt(options) {

    let prompt_promise = new Promise((resolve, reject) => {
        // Prompt the user for input
        rl.question('Enter a command (create, read, update, delete, exit): ', resolve);
    });

    //await the user input
    let input = await prompt_promise;

    //split in first and arugments
    let command_parts = input.split(' ');
    let command = command_parts[0];
    let args = command_parts.slice(1);

    // Execute the corresponding command based on user input
    switch (command) {
        case 'create':

            //min args = 1, max = 3
            if (args.length < 1 || args.length > 3) {
                console.log('Invalid number of arguments (1 to 3)');
                return;
            }

            let name = args[0]
            let age = args[1] ?? 0
            let email = args[2] ?? ''

            return options.create(name, age, email)
            break;
        case 'read':
            return options.read()
        case 'update':
            
            //min args = 2, max = 4
            //TODO: Implement params
            return options.update();

        case 'delete':

            //min args = 1, max = 1
            //TODO: Implement params
            return options.del();
            
        case 'exit':
            console.log('Exiting program');
            rl.close();
            return -1;
            break;
        default:
            console.log('Invalid command');
            break;
    }
}
