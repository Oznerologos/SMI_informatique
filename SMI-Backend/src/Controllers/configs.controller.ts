import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Config } from 'src/Entities/config.entity';
import { ConfigsService } from 'src/Services/configs.service';

@Controller('configs')
export class ConfigsController {
    constructor(private readonly configsService: ConfigsService) {}
  
    @Post()
    create(@Body() config: Config) {
      return this.configsService.create(config);
    }
  
    @Get()
    findAll() {
      return this.configsService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number) {
      return this.configsService.findOne(+id);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() config: Config) {
      return this.configsService.update(+id, config);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number) {
      return this.configsService.remove(+id);
    }
}
