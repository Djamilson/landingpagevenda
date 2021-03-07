import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateSheetsService from './CreateSheetsService';
import GetSheetsService from './GetSheetsService';

export default class SheetsController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createSheets = container.resolve(CreateSheetsService);

      const sheet = await createSheets.execute({ access_token: '980808098' });

      // console.log('=>>', barCode);

      console.log('compra loc id', sheet);

      return res.json({ sheet });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const getSheets = container.resolve(GetSheetsService);

      const sheet = await getSheets.execute({ access_token: '980808098' });

      // console.log('=>>', barCode);

      console.log('compra loc id', sheet);

      return res.json({ sheet });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
