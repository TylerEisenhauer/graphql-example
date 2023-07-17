import Book, { IBook } from '../types.js'

export async function getBookResolver(
  _,
  args
): Promise<IBook> {
  return await Book.findById<IBook>(args.id)
}