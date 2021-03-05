import axios from 'axios';
import fs from 'fs';
import https from 'https';
import path from 'path';

const apiProduction = 'https://api-pix.gerencianet.com.br';
const apiStaging = 'https://api-pix-h.gerencianet.com.br';

const baseUrl = process.env.GN_ENV === 'producao' ? apiProduction : apiStaging;

class GetToken {
  public async getToken(): Promise<any | undefined> {
    // import slug from '../util/slug';
    const file = fs.readFileSync(
      path.resolve(__dirname, '../../../../developer289308.p12'),
    );

    console.log(file);

    // const certificado = fs.readFileSync('/tmpFolder/developer289308.p12');

    /*
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

    console.log(resp.data); */

    return 'resp.data';
  }

  public async createCobranca(): Promise<void> {
    const accesToken = '';
    const certificado = fs.readFileSync(
      '../../../../../../developer289308.p12',
    );

    const data = JSON.stringify({
      calendario: {
        expiracao: 3600,
      },
      devedor: {
        cpf: '00000000000',
        nome: 'Djamilson Alves da Costa',
      },
      valor: {
        original: '123,88',
      },
      chave: 'aaa', // chave pix pelo o app do gerencianet
      solicitacaoPagador: 'Cobrança dos serviços prestados',
    });

    const agent = new https.Agent({
      pfx: certificado,
      passphrase: '',
    });

    try {
      const resp = await axios({
        method: 'POST',

        headers: {
          Authorization: `Bearer ${accesToken}`,
          'Content-Type': 'application/json',
        },
        url: `${baseUrl}/v2/cob`,
        httpsAgent: agent,
        data,
      });

      console.log(resp.data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  }
}

export default GetToken;
