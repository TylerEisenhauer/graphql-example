import Author, { IAuthor } from '../../author/types.js'

export async function getBookAuthorResolver(
  parent
): Promise<IAuthor> {
  return await Author.findById<IAuthor>(parent.author)
}