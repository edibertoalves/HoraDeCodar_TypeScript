import { body } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

export const movieCreateValidation = () => {
    return [
        body("title")
            .isString().withMessage("O título é obrigatório")
            .isLength({ min: 5 }).withMessage("O título no mínimo precisa ter 5 caracteres"),
        body("rating")
            .isNumeric()
            .withMessage("A nota precisa ser um número")
            .custom((value: number) => {
                if (value < 0 || value > 10) {
                    throw new Error("A nora precisa estar entre 0 e 10")
                }
                return true
            }),
        body("description")
            .isString()
            .withMessage("A descrição é obrigatória"),
        body("director")
            .isString()
            .withMessage("O nome do diretor é obrigatório"),
        body("poster")
            .isURL()
            .withMessage("A imagem precisa ser uma URL.")
    ]

    // next()
}