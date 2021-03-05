import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCompraTrufaShopService from './CreateCompraTrufaShopService';
import CreateTokenTrufaShopService from './CreateTokenTrufaShopService';
import GetBarCodeTrufaShopService from './GetBarCodeTrufaShopService';

export default class BrandsController {
  public async create(req: Request, res: Response): Promise<Response> {
    try {
      const createTokenTrufaShop = container.resolve(
        CreateTokenTrufaShopService,
      );

      const createCompraTrufaShop = container.resolve(
        CreateCompraTrufaShopService,
      );

      const getBarCodTrufaShopService = container.resolve(
        GetBarCodeTrufaShopService,
      );

      const access_token = await createTokenTrufaShop.execute();

      const compra = await createCompraTrufaShop.execute({
        access_token,
      });

      const barCode = await getBarCodTrufaShopService.execute({
        access_token,
        locationId: compra.loc.id,
      });

      // console.log('=>>', barCode);

      console.log('compra loc id', compra.loc.id);

      return res.json({ access_token, compra, barCode });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
