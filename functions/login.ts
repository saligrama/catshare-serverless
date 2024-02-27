interface Env { }

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const formData = await context.request.formData()
  let username = formData.get('username')
  const password = formData.get('password')

  if (username !== '' && password !== '') {
    if (username === 'admin') {
      username = 'admin7'
    }

    return new Response(null, {
      status: 303,
      headers: {
        'Location': '/auth',
        'Set-Cookie': `userId=${btoa(username)}; path=/; max-age=${24 * 60 * 60}`,
      },
    })
  }

  return new Response(
    `Invalid username or password`,
    {
      status: 400,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
  )
}