import { Elysia } from "elysia";

const app = new Elysia()
.get('/', () => 'Hello Elysia')


app.listen(3000, () => {
    console.log('Serve rodando na porta 3000');
    console.log('URL: http://localhost:3000');
});

export { app };