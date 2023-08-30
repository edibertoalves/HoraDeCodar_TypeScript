import { Request, Response} from 'express'

// movieModel
import { MovieModel } from '../models/Movie'

// Logger
import Logger from '../../config/logger'

export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body
        const movie = await MovieModel.create(data)
        return res.status(201).json(movie)
    } catch (e) {
        Logger.error(`Erro no sistema: ${(e as Error).message}`)
    }
}