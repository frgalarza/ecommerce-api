import { Injectable } from '@nestjs/common';
import axios from 'axios';

const URL = 'http://api.fakeshop-api.com'

@Injectable()
export class ClothesService {
    async getAllClothes() : Promise<object>{
        const getAllClothes = await axios(URL + '/products/getAllProductsd')
        return getAllClothes;
    }
}
