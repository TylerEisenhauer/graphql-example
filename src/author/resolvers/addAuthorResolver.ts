import Author, { IAuthor } from '../types.js'

export async function addAuthorResolver(
  _,
  args
): Promise<IAuthor> {
  return await Author.create(args.author)
}