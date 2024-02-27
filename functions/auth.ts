import { parse } from 'cookie'
import { getUsers } from './lib/user'

interface Env {
  USERS_DB: D1Database
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const cookies = await context.request.headers.get('cookie')
  const parsedCookies = parse(cookies)

  if (!parsedCookies.userId) {
    return Response.redirect('/login', 303)
  }

  const userId = atob(parsedCookies.userId)

  if (userId === 'admin') {
    return new Response(
      `Welcome, admin! <br>
      Here is the user data, please keep confidential <br>
      <pre>${JSON.stringify(await getUsers(context.env.USERS_DB))}</pre>`,
      {
        headers: {
          'content-type': 'text/html;charset=UTF-8',
        },
      }
    )
  }

  return new Response(
    `You are ${userId}. <br>
    Sorry, you do not have admin access to this endpoint`,
    {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      },
    }
  )
}