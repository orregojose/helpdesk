const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "administrador",
    password: "Admin50p0r73",
    database: "mesa_ayuda"
});

db.connect(err => {
    if (err) {
        console.error("❌ Error conectando a MySQL:", err);
    } else {
        console.log("✅ Conectado a MySQL");
    }
});

// Ruta para registrar usuarios
app.post("/register", (req, res) => {
    const { nombre, email, telefono, area, empresa, password } = req.body;

    const sql = "INSERT INTO usuarios (nombre, email, telefono, area, empresa, password) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [nombre, email, telefono, area, empresa, password], (err, result) => {
        if (err) {
            console.error("❌ Error en la consulta SQL:", err); // ⬅ Ver mensaje exacto en terminal
            res.status(500).send("❌ Error registrando usuario.");
        } else {
            console.log("✅ Usuario registrado correctamente:", result); // ⬅ Ver detalles si funciona
            res.status(200).send("✅ Usuario registrado con éxito.");
        }
    });
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const sql = "SELECT * FROM usuarios WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error("❌ Error en la consulta SQL:", err);
            res.status(500).send("❌ Error en el servidor.");
        } else if (result.length > 0) {
            res.status(200).json({ message: "✅ Inicio de sesión exitoso", usuario: result[0] });
        } else {
            res.status(401).send("❌ Credenciales incorrectas.");
        }
    });
});

app.post("/register-ticket", (req, res) => {
    const { usuario_id, titulo, descripcion } = req.body;

    const sql = "INSERT INTO tickets (usuario_id, titulo, descripcion) VALUES (?, ?, ?)";
    db.query(sql, [usuario_id, titulo, descripcion], (err, result) => {
        if (err) {
            console.error("❌ Error en la consulta SQL:", err);
            res.status(500).send("❌ Error registrando ticket.");
        } else {
            res.status(200).send("✅ Ticket registrado correctamente.");
        }
    });
});

app.get("/tickets", (req, res) => {
    const sql = `
        SELECT tickets.id, tickets.titulo, tickets.descripcion, tickets.estado, tickets.fecha_creacion, 
               usuarios.nombre AS creador 
        FROM tickets 
        JOIN usuarios ON tickets.usuario_id = usuarios.id`;
    
    db.query(sql, (err, result) => {
        if (err) {
            console.error("❌ Error obteniendo tickets:", err);
            res.status(500).send("❌ Error al obtener tickets.");
        } else {
            res.status(200).json(result);
        }
    });
});


app.put("/update-ticket", (req, res) => {
    const { id, estado } = req.body;

    const sql = "UPDATE tickets SET estado = ? WHERE id = ?";
    db.query(sql, [estado, id], (err, result) => {
        if (err) {
            console.error("❌ Error actualizando ticket:", err);
            res.status(500).send("❌ Error al actualizar ticket.");
        } else {
            res.status(200).send("✅ Estado del ticket actualizado.");
        }
    });
});

app.get("/ticket-stats", (req, res) => {
    const sql = "SELECT estado, COUNT(*) as cantidad FROM tickets GROUP BY estado";
    
    db.query(sql, (err, result) => {
        if (err) {
            console.error("❌ Error obteniendo estadísticas:", err);
            res.status(500).send("❌ Error al generar informe.");
        } else {
            res.status(200).json(result);
        }
    });
});

app.get("/user/:id", (req, res) => {
    const { id } = req.params;
    const sql = "SELECT nombre, email, telefono, empresa, area FROM usuarios WHERE id = ?";
    
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.error("❌ Error obteniendo usuario:", err);
            res.status(500).send("❌ Error al cargar perfil.");
        } else {
            res.status(200).json(result[0]);
        }
    });
});

app.put("/update-user", (req, res) => {
    const { id, nombre, telefono, empresa, area } = req.body;
    
    const sql = "UPDATE usuarios SET nombre = ?, telefono = ?, empresa = ?, area = ? WHERE id = ?";
    
    db.query(sql, [nombre, telefono, empresa, area, id], (err, result) => {
        if (err) {
            console.error("❌ Error actualizando perfil:", err);
            res.status(500).send("❌ Error al actualizar perfil.");
        } else {
            res.status(200).send("✅ Perfil actualizado correctamente.");
        }
    });
});


app.listen(3001, () => {
    console.log("🚀 Servidor corriendo en puerto 3001");
});
