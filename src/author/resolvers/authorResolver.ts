import Author, { IAuthor } from '../types.js'

export async function authorResolver(
  _,
  args
): Promise<IAuthor> {
  return await Author.findById(args.id)
}