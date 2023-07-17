import Author, { IAuthor } from '../../author/types.js'

export async function bookAuthorResolver(
  parent
): Promise<IAuthor> {
  return await Author.findById<IAuthor>(parent.author)
}