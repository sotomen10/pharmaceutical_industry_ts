import cors from 'cors';

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Lista blanca de orígenes permitidos
    const whitelist = ['http://localhost:3000'];

    // Check for undefined origin, common in tools like Thunder Client or Postman
    if (!origin) {
      callback(new Error('CORS policy error: Missing or undefined origin'));
    } else if (whitelist.indexOf(origin) !== -1) {
      callback(null, true); // Permite la solicitud
    } else {
      callback(new Error('Not allowed by CORS')); // Bloquea otros orígenes
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

export default cors(corsOptions);
