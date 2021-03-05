import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateAddressService from '@modules/companies/services/UpdateAddressService';

export default class CompaniesAddressesController {
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      console.log('=>>>', req.body);
      const updateAddress = container.resolve(UpdateAddressService);

      const address = await updateAddress.execute(req.body);

      return res.json(classToClass(address));
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
