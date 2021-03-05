import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompanyBranchsService from '@modules/companies/services/CreateCompanyBranchsService';

export default class CompanyBranchsController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createBranch = container.resolve(CreateCompanyBranchsService);
      const branch = await createBranch.execute(req.body);
      return res.json(classToClass(branch));
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
