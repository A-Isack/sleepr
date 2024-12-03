import { Module } from '@nestjs/common';
import { ConfigModule as nestConfigModule } from '@nestjs/config';

@Module({
    imports: [nestConfigModule.forRoot()]
})

export class ConfigModule {}
