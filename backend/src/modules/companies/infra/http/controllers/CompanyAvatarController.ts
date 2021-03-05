import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateCompanyAvatarService from '@modules/companies/services/UpdateCompanyAvatarService';

export default class CompanyAvatarController {
  public async update(req: Request, res: Response): Promise<Response> {
    const updateCompanyAvatar = container.resolve(UpdateCompanyAvatarService);

    const { companyId } = req.params;

    const company = await updateCompanyAvatar.execute({
      company_id: companyId,
      avatarFilename: req.file.filename,
    });

    return res.json(classToClass(company));
  }
}
