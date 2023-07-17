import Book, { IBook } from '../../book/types.js'

export async function authorBookResolver(
  parent
): Promise<Array<IBook>> {
  return await Book.find<IBook>({ author: parent._id })
}