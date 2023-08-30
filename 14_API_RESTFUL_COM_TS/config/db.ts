import mongoose from 'mongoose';
import config from "config";
import Logger from '../config/logger';

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri)
        Logger.info("Conectado ao banco de dados com sucesso!")
    } catch (e) {
        Logger.error("não foi possível conectar ao banco de dados")
        Logger.error(`Erro: ${(e as Error).message}`)
        // process.exit(1)
    }
}

export default connect