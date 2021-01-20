import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Newsletter } from 'src/Entities/newsletter.entity';
import { NewslettersService } from 'src/Services/newsletters.service';

@Controller('newsletters')
export class NewslettersController {  
    constructor(private readonly newslettersService: NewslettersService) {}
    
    @Post()
    create(@Body() newsletter: Newsletter) {
        return this.newslettersService.create(newsletter);
    }

    @Get()
    findAll() {
        return this.newslettersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.newslettersService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() newsletter: Newsletter) {
        return this.newslettersService.update(+id, newsletter);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.newslettersService.remove(+id);
    }
}
