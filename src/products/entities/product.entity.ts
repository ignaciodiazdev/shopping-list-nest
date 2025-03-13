import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose"


@Schema({ timestamps: true })
export class Product extends Document{

    @Prop({ required: true })
    nombre: string;

    @Prop({ required: true })
    categoria: string;

    @Prop({ required: true, min: 0 })
    precio: number;

    @Prop({ required: true, min: 1 })
    cantidad: number;

    @Prop({ required: true })
    unidad: string; // Ejemplo: kg, litros, unidades

    @Prop({ default: false }) 
    comprado: boolean; // Indica si ya fue comprado o no
}

export const ProductSchema = SchemaFactory.createForClass(Product);
