require('axios');
const axios = require("axios");
const { Character } = require('../../DB_connection');

const getApiData = async () => {
    try {
        let characterPromise = []
        let i = 1;
        while(i < 6) {
            const apiData = await axios(`https://rickandmorty.com/api/character?page=${i}`)
    
            characterPromise.push(apiData);
            i++;
        }
        characterPromise = await Promise.all(characterPromise).map(res => res.data.results.map( char => {
            return {
                id: char.id,
                name: char.name,
                species: char.species,
                status: char.status,
                origin: char.origin.name,
                gender: char.gender,
                image: char.image
            }
        }))

        let characterAll = [];
        characterPromise.map(char => characterAll.concat(char));
        return characterAll;

    } catch (error) {
        return {error: error.message}
    }
}

const saveApiData = async () => {
    try {
        const characterAll = await getApiData();
        await Character.bulkCreate(characterAll);
        return characterAll
        
    } catch (error) {
        return { error: error.message } 
    }
}

module.exports = saveApiData;