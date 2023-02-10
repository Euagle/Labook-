import { BaseErro} from "./BaseErro";

export class NotFoundError extends BaseErro{
    constructor(
        message: string = "NotFoundError - Error 404 - Recurso não encontrado"
    ){
        super(404, message)
    }
}