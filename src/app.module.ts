import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config'
import { EnvConfiguration } from './config/env.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      isGlobal: true
    }),

    MongooseModule.forRoot(process.env.MONGO_DB!,
      {
        dbName: 'nest-pokemon'
      }
    ),

    PokemonModule,

    CommonModule,

    SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
