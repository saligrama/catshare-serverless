interface Env { }

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const requestUrl = new URL(context.request.url)
  const name = requestUrl.searchParams.get('name')

  if (!name) {
    return new Response(
      "Include your name so we can say hello with a custom cat photo! Try `/hello?name=test`",
      {
        status: 400,
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      }
    )
  }

  return new Response(
    `Hello, ${name}! Here is your custom cat!
    <br>
    <img src="https://cataas.com/cat/says/Hello%20${name}">`,
    {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
  )
}