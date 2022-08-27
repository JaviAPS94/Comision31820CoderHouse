import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCatDto {
    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly name: string;

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly age: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    readonly breed: string;
}