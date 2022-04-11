import axios from 'axios';
import IItem from '../models/IItems';


const baseurl = process.env.REACT_APP_API_BASE_URL;

const getItems = async () => {
    const response = await axios.get<IItem[]>(`${baseurl}/items`);
    return response.data;
};

const postItem = async (item : Omit<IItem, 'id'> ) => {
    const response =  await axios.post<IItem>(
            `${baseurl}/items`,
            item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }


    )
    return response.data;
};

export {
    getItems,
    postItem
}