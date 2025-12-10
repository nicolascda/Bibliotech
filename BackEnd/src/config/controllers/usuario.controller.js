import db from "../db.js"


export async  function listarUsuarios (req, res) {

    try {
        const [reserva] = await db.query(`SELECT usuario.nome AS usuario, livros.nome AS livro FROM reservado 
INNER JOIN usuario ON  reservado.usuario_id  = usuario.id 
INNER JOIN livros ON reservado.livro_id = livros.id;`);
        res.json(reserva);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export async  function buscarUsuario (req, res) {
    const id = req.params.id;
    try {
        const [reserva] = await db.query(`SELECT usuario.nome AS usuario, livros.nome AS livro FROM reservado 
INNER JOIN usuario ON  reservado.usuario_id  = usuario.id 
INNER JOIN livros ON reservado.livro_id = livros.id where  usuario.id= ${id}`);
        res.json(reserva);

        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


