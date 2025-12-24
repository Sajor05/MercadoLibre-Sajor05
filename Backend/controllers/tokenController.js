import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../config.js';
import User from '../models/user_model.js';

export const verifyToken = async (req, res) => {
    // 1. Buscamos el token en las COOKIES (no en headers)
    const { token } = req.cookies;

    // Si no hay token en la cookie, rechazamos
    if (!token) return res.status(401).json({ message: "No autorizado" });

    // 2. Verificamos el token
    jwt.verify(token, SECRET_TOKEN, async (err, user) => {
        // Si el token es inválido o expiró
        if (err) return res.status(401).json({ message: "No autorizado" });

        // 3. Buscamos el usuario en la DB para asegurar que sigue existiendo
        const userFound = await User.findById(user.id);
        
        if (!userFound) return res.status(401).json({ message: "No autorizado" });

        // 4. Devolvemos los datos del usuario al frontend
        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            // Agrega aquí otros datos que necesites en el frontend
        });
    });
};