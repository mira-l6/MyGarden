import { Router } from 'express';
import Plant from '../models/Plant.js';

const plantController = Router();

plantController.get('/', (req, res) => {

});

plantController.get('/fetch-plants', async (req, res) => {

    const response = await fetch(`https://trefle.io/api/v1/plants?token=${process.env.API_TOKEN}`);
    const data = await response.json();
    let postData = data["data"];

    postData = postData.map((data) => {
        return {...data, count: 0}
    })
    
    try{
        await Plant.insertMany(postData);
    }catch(err) {
        console.log(err.message);
    }

    res.json(postData);
});


plantController.post('/create', (req, res) => {

})

export default plantController;