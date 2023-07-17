import mongoose, { Schema, Document } from 'mongoose'

export interface IAuthor extends Document {
  firstName: string,
  lastName: string
}

const AuthorSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
})

export default mongoose.model<IAuthor>('Author', AuthorSchema)
