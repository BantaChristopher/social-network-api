const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUser, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    let thoughtCheck = await connection.db.listCollections({name: 'thoughts'}).toArray();
    if(thoughtCheck.length){
        await connection.dropCollection('thoughts');
    }

    let userCheck = await connection.db.listCollections({name: 'users'}).toArray();

    if(userCheck.length){
        await connection.dropCollection('users');
    }

    const users = [];
    const thoughts = []; 

    for(let i = 0; i<20; i++){
        users.push(getRandomUser());
        thoughts.push(getRandomThought());
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts);
    console.table(users);
    console.table(thoughts);
    console.info('seeding complete!')
});