// Importa a biblioteca Express
import express from "express";
import type { Express, Request, Response } from "express";

// Importa a classe Player
import { Player } from "./models/player.js";

// Cria uma aplicação Express
const app: Express = express();

// Middleware para permitir que o servidor entenda JSON
app.use(express.json());

// Define a porta do servidor
const PORT: number = 8081;

// Cria um novo jogador chamado "Hero"
// Nome: Hero | Vida: 100 | Nível: 5
const player1: Player = new Player("Hero", 100, 5);

// GET
// Quando o usuário acessa /player,
// o servidor retorna os dados do jogador
app.get("/player", (req: Request, res: Response) => {
    res.json({
        message: "Informações do Player",
        player: player1,
    });
});

// POST
// Faz o jogador atacar
app.post("/player/attack", (req: Request, res: Response) => {
    const attackMessage = player1.attack();

    res.json({
        message: attackMessage,
    });
});

// POST
// Faz o jogador receber dano
app.post("/player/damage", (req: Request, res: Response) => {
    const { damage } = req.body;

    const damageMessage = player1.takeDamage(damage);

    res.json({
        action: damageMessage,
        currentHealth: player1.health,
        currentLevel: player1.level,
    });
});

// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    console.log("Rotas disponíveis:");
    console.log("GET /player - Obter informações do jogador");
    console.log("POST /player/attack - Jogador realiza um ataque");
    console.log("POST /player/damage - Jogador recebe dano");
});