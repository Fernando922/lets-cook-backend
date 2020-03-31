const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Categories', () => {
  const newDatabase = async () => {
    await connection.migrate.latest()
  }

  const killConnections = async () => {
    await connection.migrate.rollback()
    await connection.destroy()
  }

  beforeEach(async () => {
    await newDatabase()
  })

  afterAll(async () => {
    await killConnections()
  })

  const createCategorie = async () => {
    const newCategorie = await request(app)
      .post('/categories')
      .send({
        name: 'teste',
        image: 'http://google.com',
      })
    return newCategorie
  }

  it('should be able to create a new categorie', async () => {
    const newCategorie = await createCategorie()
    expect(newCategorie.body).toHaveProperty('id')
  })

  it('should be able to list all categories', async () => {
    await createCategorie()
    const list = await request(app).get('/categories')

    expect(list.body[0].id).toEqual(1)
  })
})
