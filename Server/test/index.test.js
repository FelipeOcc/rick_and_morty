const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe('test de RUTAS', () => {
    describe('GET /rickandmorty/character/:id', () => {
        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"',
        async () => {
            const response = await request.get('/rickandmorty/character/1');
            const props = ['id', 'name', 'species', 'gender', 'status', 'origin', 'image']
            props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
            });
        });

        it('Si hay un error responde con status: 500', async () => {
            const response = await request.get('/rickandmorty/character/12375o');
            expect(response.statusCode).toBe(500);
        });
    });

    describe('GET /rickandmorty/login', () => {
        it('Responde con un onjeto con la propiedad access and true si la informacion del usuario es valida', async () => {
            const response = await request.get('/rickandmorty/login?email=prueba@gmail.com&password=prueba2826');
            const access = { access: true };
            expect(response.body).toEqual(access);            
        });

        it('Responde con un onjeto con la propiedad access and false si la informacion del usuario no es valida', async () => {
            const response = await request.get('/rickandmorty/login?email=prueba@gail.com&password=prueba226');
            const access = { access: false };
            expect(response.body).toEqual(access); 
        });
    });
});