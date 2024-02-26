import { connect, Person } from './model.js';

export class MainController
{
    // Constructor
    constructor(){
        console.log('MainController initialized');
        
    }

    // Connect to MongoDB
    async connect() {
        await connect();
    }

    //CRUD
    create(name, age, email)
    {
        let person = new Person({
            name: name,
            age: age,
            email: email,
            haarkleur: "blauw"
        });

        person.save()
    }

    read()
    {
        //read all persons
        Person.find()
            .populate('hobby')
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    update()
    {
        console.log('TODO: Implement update command');
        // Add your update logic here
    }

    delete()
    {
        console.log('TODO: Implement delete command');
        // Add your delete logic here
    }
}
