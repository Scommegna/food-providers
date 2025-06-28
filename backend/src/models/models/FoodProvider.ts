import mongoose, { Schema, Document, Model, Types } from "mongoose";

export interface IFoodProvider extends Document {
  _id: Types.ObjectId;
  name: string;
  address: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

const FoodProviderSchema: Schema<IFoodProvider> = new Schema({
  _id: { type: Schema.Types.ObjectId, auto: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  coordinates: {
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },
});

const FoodProvider: Model<IFoodProvider> = mongoose.model<IFoodProvider>(
  "FoodProvider",
  FoodProviderSchema
);

export default FoodProvider;
