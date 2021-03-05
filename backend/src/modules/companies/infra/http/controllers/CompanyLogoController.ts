import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCompanyLogoService from '@modules/companies/services/UpdateCompanyLogoService';

export default class CompanyLogoController {
  public async update(req: Request, res: Response): Promise<Response> {
    console.log('==>>', req.params);
    const updateCompanyLogo = container.resolve(UpdateCompanyLogoService);
    const { companyId } = req.params;

    const company = await updateCompanyLogo.execute({
      company_id: companyId,
      logoFilename: req.file.filename,
    });

    return res.json(classToClass(company));
  }
}
