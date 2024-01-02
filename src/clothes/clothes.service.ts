import { Injectable } from '@nestjs/common';
import axios from 'axios';

const URL = 'https://fakestoreapi.com'

@Injectable()
export class ClothesService {
    async getAllClothes(){
        const { data } = await axios(URL + '/products')
        
        return data;
    }
}
