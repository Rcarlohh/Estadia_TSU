import nodemailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.VITE_GOOGLE_EMAIL,
    pass: process.env.VITE_GOOGLE_PASSWORD
  }
});

const generateEmailTemplate = ({ nombre, cargo, asociacion, telefono, email, ciudad, motivo, servicio }) => {
  return `
  <!DOCTYPE html>
  <html>
  <head>
      <style>
          body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
          }
          .container {
              width: 100%;
              max-width: 600px;
              margin: 20px auto;
              padding: 20px;
          }
          .card {
              background-color: #ffffff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              border: 1px solid #ddd;
          }
          .header {
              background-color: #347AB6;
              color: white;
              padding: 20px;
              border-radius: 10px 10px 0 0;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .content {
              padding: 20px;
              color: #333333;
          }
          .content table {
              width: 100%;
              border-collapse: collapse;
          }
          .content table, .content th, .content td {
              border: 1px solid #ddd;
          }
          .content th, .content td {
              padding: 10px;
              text-align: left;
          }
          .content th {
              background-color: #f4f4f4;
          }
          .button-container {
              text-align: center;
              margin: 20px 0;
          }
          .button {
              padding: 10px 20px;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              border: 2px solid #347AB6;
              color: #347AB6;
              background-color: transparent;
              margin: 5px;
          }
          .button:hover {
              background-color: #347AB6;
              color: white;
          }
          .button-reject {
              border: 2px solid #ff6f61;
              color: #ff6f61;
          }
          .button-reject:hover {
              background-color: #ff6f61;
              color: white;
          }
          .footer {
              text-align: center;
              padding: 10px 0;
              background-color: #f1f1f1;
              border-radius: 0 0 10px 10px;
              color: #888888;
              position: relative;
              overflow: hidden;
          }
          .footer p {
              margin: 0;
              font-size: 12px;
          }
          .truck-design {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 80px;
              background: url('https://example.com/truck-design.png') no-repeat center bottom;
              background-size: cover;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="card">
              <div class="header">
                  <h1>Solicitud de Registro de la Plataforma Web</h1>
              </div>
              <div class="content">
                  <table>
                      <tr>
                          <th>Nombre</th>
                          <td>${nombre}</td>
                      </tr>
                      <tr>
                          <th>Cargo</th>
                          <td>${cargo}</td>
                      </tr>
                      <tr>
                          <th>Compañía</th>
                          <td>${asociacion}</td>
                      </tr>
                      <tr>
                          <th>Teléfono</th>
                          <td>${telefono}</td>
                      </tr>
                      <tr>
                          <th>Correo Electrónico</th>
                          <td>${email}</td>
                      </tr>
                      <tr>
                          <th>Ciudad</th>
                          <td>${ciudad}</td>
                      </tr>
                      <tr>
                          <th>Motivo</th>
                          <td>${motivo}</td>
                      </tr>
                      <tr>
                          <th>Servicio</th>
                          <td>${servicio}</td>
                      </tr>
                  </table>
                  <div class="button-container">
                      <a href="http://ec2-54-183-144-98.us-west-1.compute.amazonaws.com:3000/procesar-solicitud?nombre=${nombre}&email=${email}" class="button">Procesar Solicitud</a>
                      <a href="http://main.d524xsx7dlqze.amplifyapp.com/rechazar-solicitud" class="button button-reject">Rechazar Solicitud</a>
                  </div>
              </div>
          </div>
          <div class="footer">
              <p>&copy; 2024 MiEmpresa. Todos los derechos reservados.</p>
              <div class="truck-design"></div>
          </div>
      </div>
  </body>
  </html>
  `;
};

app.post('/send-email', (req, res) => {
  const { nombre, cargo, asociacion, telefono, email, ciudad, motivo, servicio } = req.body;

  const mailOptions = {
    from: process.env.VITE_GOOGLE_EMAIL,
    to: process.env.VITE_GOOGLE_EMAIL,
    subject: 'Nueva Solicitud de Registro',
    html: generateEmailTemplate({ nombre, cargo, asociacion, telefono, email, ciudad, motivo, servicio })
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email enviado: ' + info.response);
  });
});

app.listen(port, () => {
  console.log(`Servidor de correos ejecutándose en http://localhost:${port}`);
  console.log(process.env.VITE_GOOGLE_EMAIL); // Debe imprimir tu email
    console.log(process.env.VITE_GOOGLE_PASSWORD); // Debe imprimir tu contraseña
});
