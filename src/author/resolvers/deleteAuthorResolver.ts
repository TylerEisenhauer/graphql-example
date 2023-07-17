import Author, { IAuthor } from '../types.js'
import Book from '../../book/types.js'

export async function deleteAuthorResolver(
  _,
  args
): Promise<IAuthor> {
  await Book.deleteMany({ author: args.id })
  return await Author.findByIdAndDelete(args.id)
}