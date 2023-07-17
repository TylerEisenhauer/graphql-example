import Book, { IBook } from '../types.js'

export async function updateBookResolver(
  _,
  args
): Promise<IBook> {
  return await Book.findByIdAndUpdate(args.id, args.book, { new: true })
}