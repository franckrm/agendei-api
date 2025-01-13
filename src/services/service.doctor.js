import repoDoctor from "../repositories/repository.doctor.js";

async function Listar(name){
    const doctors = await repoDoctor.Listar(name);
    return doctors;
}



function Inserir(name, specialty, icon){
    res.status(200).send("Aqui vamos listar os médicos");
}


export default {Listar}