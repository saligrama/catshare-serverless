interface Env { }

export const onRequestGet: PagesFunction<Env> = async (context) => {
  return Response.redirect(`/user?id=${context.params.id}`)
}