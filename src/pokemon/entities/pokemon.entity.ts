import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Pokemon extends Document{
    @Prop({
        unique: true,
        index: true,
    })
    name: string;

    @Prop({
        unique: true,
        index: true,
    })
    no: number;

    @Prop({
        type: [String],
        index: true
    })
    types: string[]
}

export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
export type PokemonDocument = Pokemon & Document;