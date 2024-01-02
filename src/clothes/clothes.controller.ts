import { Controller, Get } from '@nestjs/common';
import { ClothesService } from './clothes.service';

@Controller('clothes')
export class ClothesController {
    constructor (private readonly clothesService : ClothesService) {}

    @Get()
    async getAllClothes(){
        try {
            const clothes = await this.clothesService.getAllClothes();
            
            return clothes;
        } catch (error) {
            throw new Error(error);
        }
        
    }
}
