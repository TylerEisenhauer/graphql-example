import Book, { IBook } from '../types.js'

export async function addBookResolver(
  _,
  args
): Promise<IBook> {
  return await Book.create(args.book)
}