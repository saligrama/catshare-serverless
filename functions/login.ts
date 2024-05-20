interface Env { }

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const formData = await context.request.formData()
  let username = formData.get('username')
  const password = formData.get('password')

  const auth = {
    'cooper': 'cooper',
    'stanford': 'stanford',
  }
  if (auth[username] === password) {
    return new Response(null, {
      status: 303,
      headers: {
        'Location': '/auth',
        'Set-Cookie': `userId=${btoa(username)}; path=/; max-age=${24 * 60 * 60}`,
      },
    })
  }

  return new Response(
    `Invalid username or password, you will be redirected in 3 seconds
    <meta http-equiv="refresh" content="3;url=/login"/>`,
    {
      status: 400,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
  )
}
