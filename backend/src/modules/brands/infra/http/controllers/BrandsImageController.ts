import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateImageService from '@modules/brands/services/UpdateImageService';

export default class BrandsImageController {
  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { brandId } = req.params;

      const updateImageBrand = container.resolve(UpdateImageService);
      const image = await updateImageBrand.execute({
        brand_id: brandId,
        image: req.file.filename,
      });
      return res.json(classToClass(image));
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
