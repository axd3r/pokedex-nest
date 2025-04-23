import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PokemonService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly PokemonModel: Model<Pokemon>){;
    }

  async create(createPokemonDto: CreatePokemonDto) {
    try {
      const pokemon = await this.PokemonModel.create(createPokemonDto);
      return pokemon; 
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify( error.keyValue )}`);
      }
      throw new InternalServerErrorException(`Can't create Pokemon - Check server logs`)
    }
  }

  findAll() {
    const pokemon = this.PokemonModel.find();
    return pokemon;
  }

  async findOne(id: string) {
    const pokemon = await this.PokemonModel.findById(id);
    if (!pokemon) {
      throw new NotFoundException(`Pokemon with id, not found`);
    }
    return pokemon; 
  }

  async update(id: string, updatePokemonDto: UpdatePokemonDto) {
    try {
      const pokemon = await this.PokemonModel.findByIdAndUpdate(id, updatePokemonDto, {new: true});
      if(!pokemon){
        throw new NotFoundException(`Pokemon with id, not found`)
      }
      return pokemon;
    } catch (error) {
      if(error.code === 11000){
        throw new BadRequestException(`Pokemon exists in db ${JSON.stringify( error.keyValue )}`);
      }
      throw new InternalServerErrorException(`Can't create Pokemon - Check server logs: ${error.message}`)
    }
  }

  async remove(id: string) {
    const pokemon = await this.findOne(id);
    const del = await pokemon.deleteOne();
    if(!del){
      throw new BadRequestException("No se logro eliminar");
    }
    return {message: "Registo eliminado con exito"}
  }
}
