import mongoose, { Schema, Document } from 'mongoose'

export interface IBook extends Document {
  author: string,
  title: string,
}

const BookSchema: Schema = new Schema({
  author: { type: Schema.Types.ObjectId, required: true },
  title: { type: String, required: true },
})

export default mongoose.model<IBook>('Book', BookSchema)
