import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/items.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<Item>) {}

  async getAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  async create(item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  }

  async update(id, item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id);
  }
}
