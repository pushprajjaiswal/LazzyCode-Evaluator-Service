import { Request, Response } from 'express';

export const pingCheck = (_req: Request, res: Response) => {
    // console.log(_req.url); 
    res.status(200).json({ message: 'Ping! check ok' });
};
