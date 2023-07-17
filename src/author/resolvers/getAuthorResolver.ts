import Author, { IAuthor } from '../types.js'

export async function getAuthorResolver(
  _,
  args
): Promise<IAuthor> {
  return await Author.findById(args.id)
}