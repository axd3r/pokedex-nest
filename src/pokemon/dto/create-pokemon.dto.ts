import { ArrayMinSize, IsArray, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    @IsNumber()
    @IsPositive()
    @Min(1)
    no: number;

    @IsString()
    @MinLength(1)
    name: string;

    @IsArray()
    @ArrayMinSize(1)
    @IsString({ each: true })
    types: string[];
}
