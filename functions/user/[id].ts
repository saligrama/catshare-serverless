interface Env { }

export const onRequestGet: PagesFunction<Env> = async (context) => {
  return new Response(null, {
    status: 303,
    headers: {
      'Location': `/user?id=${context.params.id}`,
    },
  })
}
