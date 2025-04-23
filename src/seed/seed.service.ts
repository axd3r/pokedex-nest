import { Injectable } from '@nestjs/common';
//import axios, { AxiosInstance } from 'axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { PokeResponse } from './interfaces/poke-response.initerface';
import { Pokemon, PokemonDocument } from 'src/pokemon/entities/pokemon.entity';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  //private readonly axios: AxiosInstance = axios;

  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<PokemonDocument>,

    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonModel.deleteMany({});

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=50'
    );

    const insertPromisesArray = data.results.map(async ({ name, url }) => {
      const segments = url.split('/');
      const no = parseInt(segments[segments.length - 2], 10);
      const pokeDetail = await this.http.get<any>(url);
      const types = pokeDetail.types.map((t: any) => t.type.name);

      return this.pokemonModel.create({ name, no, types });
    });

    await Promise.all(insertPromisesArray);

    return {
      status: 'Success',
      message: 'Seed Executed'
    };
  }
}
