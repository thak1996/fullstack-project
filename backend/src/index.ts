import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

// Log de inicialização
console.log("🚀 Iniciando aplicação...");

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    credentials: true,
    optionsSuccessStatus: 200
};

// Log das configurações CORS
console.log("⚙️ Configurações CORS:", {
    origins: corsOptions.origin,
    methods: corsOptions.methods
});

app.use(cors(corsOptions));
app.use(express.json());

// Interface para erros customizados
interface CustomError extends Error {
    status?: number;
}

// Log de requisições
app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(`📨 ${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.get("/", (req: Request, res: Response) => {
    console.log("✅ Rota / acessada com sucesso");
    res.json({ message: "Hello from backend!" });
});

// Log de erros com tipagem correta
app.use((err: CustomError, req: Request, res: Response, next: NextFunction) => {
    console.error("❌ Erro:", {
        message: err.message,
        stack: err.stack,
        timestamp: new Date().toISOString()
    });

    res.status(err.status || 500).json({
        error: err.message || "Erro interno do servidor",
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.BACKEND_PORT || 8080;
app.listen(PORT, () => {
    console.log(`
    🔥 Servidor rodando!
    🚪 Porta: ${PORT}
    🌍 Ambiente: ${process.env.NODE_ENV || "development"}
    ⏰ ${new Date().toISOString()}
    `);
});
