import mongoose from 'mongoose';

// Connect to MongoDB

export async function connect() {

    await mongoose.connect('mongodb://localhost/telephonebook', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Failed to connect to MongoDB', error));

}


// Define the person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        unique: true
    },
    hobby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hobby'
    }
});

// Create the person model
const Person = mongoose.model('People', personSchema);

const hobbySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const Hobby = mongoose.model('Hobby', hobbySchema);

export { Person }