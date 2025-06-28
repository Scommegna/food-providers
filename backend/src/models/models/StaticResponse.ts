import mongoose, { Schema, Document, Model } from "mongoose";

export interface IStaticResponseProvider extends Document {
  responseId: number;
  response: string;
}

const StaticResponseSchema: Schema<IStaticResponseProvider> = new Schema({
  responseId: { type: Number, required: true, unique: true },
  response: { type: String, required: true },
});

const StaticResponseProvider: Model<IStaticResponseProvider> =
  mongoose.model<IStaticResponseProvider>(
    "StaticResponseProvider",
    StaticResponseSchema
  );

export default StaticResponseProvider;
