const express = require ('express')

const cors = require('cors');

const doctors = require ('./doctors.json')

const patients = require ('./patients.json')

const app = express();

app.use(cors());

const port = 4000;




app.listen(port,console.log(`listining on port ${port}`))

app.get("/doctors",(request,response)=>{
    console.log("Someone requested the doctors' data");
    response.send(doctors)
});

app.get("/patients",(request,response)=>{
    console.log("Someone requested the doctors' data");
    response.send(patients)
});

app.get(
    '/patients/:id', 
    (request, response) => {
        const param=request.params.id
        response.send(patients.filter((patient)=> patient.id===param) )
    }
  )
