import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompanyService from '@modules/companies/services/CreateCompanyService';

export default class CompaniesController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createCompany = container.resolve(CreateCompanyService);

      const company = await createCompany.execute(req.body);

      return res.json(classToClass(company));
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
