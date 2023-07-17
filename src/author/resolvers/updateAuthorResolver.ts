import Author, { IAuthor } from '../types.js'

export async function updateAuthorResolver(
  _,
  args
): Promise<IAuthor> {
  return await Author.findByIdAndUpdate(args.id, args.author, { new: true })
}