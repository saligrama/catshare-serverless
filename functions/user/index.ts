import { getUser } from '../lib/user'

interface Env {
  USERS_DB: D1Database
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const requestUrl = new URL(context.request.url)
  const id = requestUrl.searchParams.get('id')
  const admin = requestUrl.searchParams.get('admin')

  if (id === null || Number.isNaN(parseInt(id))) {
    return new Response('Must include id query parameter, which must be a number. Try `/user?id=0` or `/user/0`', {
      status: 400,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      }
    })
  }

  if (admin === null) {
    requestUrl.searchParams.set('admin', 'false')
    return Response.redirect(requestUrl.href)
  }

  if (admin !== 'true') {
    return new Response('You are not an admin! HACKER DETECTED!', {
      status: 403,
      headers: {
        'content-type': 'text/html;charset=UTF-8',
      }
    })
  }

  return Response.json(await getUser(context.env.USERS_DB, parseInt(id)))
}