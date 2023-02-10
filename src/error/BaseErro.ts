export abstract class BaseErro extends Error {

    constructor(

        public statusCode: number, 
        message: string 
    ) {
        super(message) 
    }
}

