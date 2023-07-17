import Book, { IBook } from '../types.js'

export async function bookResolver(
  _,
  args
): Promise<IBook> {
  return await Book.findById<IBook>(args.id)
}