import Express from "express";

const routes = Express.Router()

let lista = ['renzo', 'pedro', 'gui']

routes.get('/',(req,res)=>{
    return res.status(200).json('hello word')
})

routes.get('/nomes/:nome', (req,res)=>{
    let nome_existe = false
    const  {nome} = req.params
    for (let i = 0; i < lista.length; i++) {
        if (nome == lista[i]) {
            nome_existe = true
        }
        
    }
    if (nome_existe == true) {
        return res.status(200).json('o nome existe')
    } else {
        return res.status(500).json('o nome não existe')
    }
})

export default routes