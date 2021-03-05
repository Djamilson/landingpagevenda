import axios from 'axios';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { injectable } from 'tsyringe';

const baseUrl =
  process.env.GN_ENV === 'producao'
    ? process.env.GN_API_PRODUCTION
    : process.env.GN_API_HOMOLOGATION;

@injectable()
class CreateTokenTrufaShopService {
  constructor() {}

  public async execute(): Promise<any> {
    const listDir = async () => {
      try {
        const cert =
          process.env.GN_ENV === 'producao'
            ? process.env.GN_CERTIFICADO_PRODUCTION
            : process.env.GN_CERTIFICADO_HOMOLOGATION;
        return fs.readFileSync(path.resolve(__dirname, `../../../${cert}`));
      } catch (err) {
        console.error('Error occured while reading directory!', err);
      }
    };

    const certificado = await listDir();

    const configGN = {
      client_id: process.env.GN_CLIENT_ID,
      client_secret: process.env.GN_CLIENT_SECRET,
    };

    const data = JSON.stringify({ grant_type: 'client_credentials' });

    const dataConfig = `${configGN.client_id}:${configGN.client_secret}`;

    const auth = Buffer.from(dataConfig).toString('base64');

    const agent = new https.Agent({
      pfx: certificado,
      passphrase: '',
    });

    const resp = await axios({
      method: 'POST',

      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      url: `${baseUrl}/oauth/token`,
      httpsAgent: agent,
      data,
    });

    console.log(resp.data);
    const { access_token } = resp.data;
    return access_token;
  }
}

export default CreateTokenTrufaShopService;
