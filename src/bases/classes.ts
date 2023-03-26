import axios from "axios";


export class Pokemon {


    async getPokemo() {
        const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/514');
        console.log(data.species.name);
        
        return data.species.name;
    }
}

