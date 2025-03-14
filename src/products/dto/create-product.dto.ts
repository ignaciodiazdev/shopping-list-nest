import { IsBoolean, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
    @IsString()
    nombre: string;
  
    @IsString()
    categoria: string;
  
    @IsNumber()
    @Min(0)
    precio: number;
  
    @IsNumber()
    @Min(1)
    cantidad: number;
  
    @IsString()
    unidad: string; // kg, litros, unidades, etc.
  
    @IsBoolean()
    @IsOptional() // Es opcional porque tiene un valor por defecto en el schema
    comprado?: boolean;
}
