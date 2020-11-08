const app = require('./app')
const request = require('supertest')

describe('recipes', () => {
    const data = [
        {id: 1, title: 'Greek style peas in tomato sauce', order: 1, completed: true},
        {id: 2, title: 'Quick bolognese', order: 2, completed: true },
        {id: 3, title: 'Lentil soup', order: 3, completed: true},
        {id: 4, title: 'Burgers', order: 4, completed: false},
        {id: 5, title: 'Quick pizza', order: 5, completed: false},
    ];

    it('should GET all recipes', async () => {
        await request(app)
            .get('/recipes')
            .expect(200)
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.body).toStrictEqual(data)
            })
    })
})