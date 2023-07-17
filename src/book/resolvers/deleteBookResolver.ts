import Book, { IBook } from '../types.js'

export async function deleteBookResolver(
  _,
  args
): Promise<IBook> {
  return await Book.findByIdAndDelete(args.id)
}