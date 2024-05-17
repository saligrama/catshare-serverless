interface User {
  name: string
  age: number
  location: string
  birthday: string
  ssn: string
}

export async function getUser(db: D1Database, id: number): Promise<User | null> {
  return await db
    .prepare('SELECT * FROM user_data WHERE id = ?')
    .bind(id)
    .first<User>()
}

export async function getUsersVulnerable(db: D1Database, id: string): Promise<User[]> {
  const stmt = `SELECT * FROM user_data WHERE id = ${id}`
  const stmtToCheck = stmt.toLowerCase()
  if (stmtToCheck.includes('delete') || stmtToCheck.includes('update') || stmtToCheck.includes('insert')) {
    throw new Error('Invalid input')
  }

  const queryResult = await db.prepare(stmt).all<User>()
  return queryResult.results
}

export async function getUsers(db: D1Database): Promise<User[]> {
  const { results } = await db.prepare('SELECT * FROM user_data').all<User>()
  return results
}