import axios from "axios";

const foodInstance = axios.create({
    baseURL: process.env.REACT_APP_FOOD_API,
    headers: {
        Accept: 'application/json'
    }
})


export async function getMenu(){
    const { data } = await foodInstance.get('/menu')
    const menu = data.data
    return menu
}