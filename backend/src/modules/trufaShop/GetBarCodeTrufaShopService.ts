import axios from 'axios';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { injectable } from 'tsyringe';

interface IResponse {
  access_token: string;
  locationId: string;
}

const baseUrl = process.env.GN_API_HOMOLOGATION;

@injectable()
class GetBarCodeCompraTrufaShopService {
  constructor() {}

  public async execute({ access_token, locationId }: IResponse): Promise<any> {
    const listDir = async () => {
      try {
        return fs.readFileSync(
          path.resolve(
            __dirname,
            `../../../${process.env.GN_CERTIFICADO_PRODUCTION}`,
          ),
        );
      } catch (err) {
        console.error('Error occured while reading directory!', err);
      }
    };

    const certificado = await listDir();

    const agent = new https.Agent({
      pfx: certificado,
      passphrase: '',
    });

    let d;
    try {
      const resp = await axios({
        method: 'GET',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },

        url: `${baseUrl}/v2/loc/${locationId}/qrcode`,
        httpsAgent: agent,
      });

      d = resp.data;
    } catch (error) {
      console.log('Error::: BarCode', error);
      return error;
    }

    return d;
  }
}

export default GetBarCodeCompraTrufaShopService;
