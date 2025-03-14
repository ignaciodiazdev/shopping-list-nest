import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productModel.create(createProductDto);
    return product;
  }

  findAll() {
    return this.productModel.find().select('-__v');
  }

  async findOne(id: string) {
    const product = await this.productModel.findById(id).select('-__v');
    if(!product)
      throw new NotFoundException(`No se encontró el Producto con ID: ${id}`)
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.findOne(id);
    const product = await this.productModel
      .findByIdAndUpdate(id, {$set: updateProductDto}, {new: true})
      .select('-__v');
    return product;
  }

  async remove(id: string) {
    await this.findOne(id);
    await this.productModel.findByIdAndDelete(id);
    return {message: 'Producto eliminado!'}
  }
}
