import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Newsletter } from 'src/entities/newsletter.entity';
import { NewslettersService } from 'src/services/newsletters.service';

@Controller('newsletters')
export class NewslettersController {  
    constructor(private readonly newslettersService: NewslettersService) {}
    
    @Post()
    create(@Body() newsletter: Newsletter) {
        this.newslettersService.create(newsletter);
    }

    @Get()
    findAll() {
        return this.newslettersService.findAll();
    }

    @Get('getOneMail/:mail')
    getOneUser(@Param() params): Promise<Newsletter> {
      return this.newslettersService.findOneByMail(params.mail);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() newsletter: Newsletter) {
        this.newslettersService.update(id, newsletter);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.newslettersService.remove(id);
    }
}
