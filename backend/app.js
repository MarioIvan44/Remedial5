//Importar express
import express from 'express';
import usersRoutes from './routes/users.js';
import ordersRoutes from './routes/orders.js';
import cors from 'cors'; 
//Importante 
import cookieParser from 'cookie-parser';

//Ejecutar express
const app = express();

//Use cors is for allow cross-origin requests, which is necessary when the frontend and backend are hosted on different domains or ports. It enables the frontend to make API calls to the backend without being blocked by the browser's same-origin policy.
app.use(cors({
    origin: ['http://localhost:5173', 'https://localhost:5174'], // This is the URL of the frontend application that is allowed to access the backend API.
    //Allows the sending of cookies and other credentials in cross-origin requests, which is necessary for authentication and session management.
    credentials: true
}));
 
//Cookie parser allows us to parse the cookies sent by the client in the request headers and make them easily accessible in our route handlers. This is particularly useful for handling authentication tokens, session IDs, and other data stored in cookies. By using cookie-parser, we can read and manipulate cookies in our Express application, enabling features like user authentication and personalized experiences based on cookie data.
app.use(cookieParser());

//Acepta JSON 
app.use(express.json());


//Creamos los endpoints
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);

export default app;