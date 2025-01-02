
async function Listar(){
    const doctors = [
        {id:1, name: "Heber", specialty:"Cardiologista", icon:"M"},
        {id:2, name: "João", specialty:"Clínico Geral", icon:"M"},
        {id:3, name: "Maria", specialty:"Cardiologista", icon:"M"}

    ];
    return doctors;
}



function Inserir(name, specialty, icon){
    res.status(200).send("Aqui vamos listar os médicos");
}


export default {Listar}