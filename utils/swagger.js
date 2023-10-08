const swaggerJsdoc = require('swagger-jsdoc') 
const swaggerUi = require('swagger-ui-express') 
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ZoomStore Api',
      version: '1.0.0',
    },
    Components: {
      securitySchemas:{
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security:[{
      bearerAuth: [],
    }]
  },
  apis: ['./routes/*.js', './schema/*.js'], // files containing annotations as above
};
const swaggerSpec= swaggerJsdoc(options);

 function swaggerDocs(app, port){
  
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  app.get("docs.json",(req, res)=>{
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec)
    console.log('info', `Docs available at http://localhost:${port}/docs`);

  })
}


module.exports = {swaggerDocs};
