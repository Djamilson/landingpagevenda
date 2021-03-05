import axios from 'axios';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { injectable } from 'tsyringe';

const baseUrl =
  process.env.GN_ENV === 'producao'
    ? process.env.GN_API_PRODUCTION
    : process.env.GN_API_HOMOLOGATION;

interface IResponse {
  access_token: string;
}

@injectable()
class CreateCompraTrufaShopService {
  constructor() {}

  public async execute({ access_token }: IResponse): Promise<any> {
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

    const agent = new https.Agent({
      pfx: certificado,
      passphrase: '',
    });
    const chave = process.env.GN_CHAVE_PIX;

    const data = JSON.stringify({
      calendario: {
        expiracao: 3600,
      },
      devedor: {
        cpf: '12345678909',
        nome: 'Djamilson Alves da Costa',
      },
      valor: {
        original: '123.88',
      },
      chave, // chave pix pelo o app do gerencianet
      solicitacaoPagador: 'Cobrança dos serviços prestados',
    });
    let d;
    try {
      const resp = await axios({
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access_token}`,
          'Content-Type': 'application/json',
        },
        url: `${baseUrl}/v2/cob`,
        httpsAgent: agent,
        data,
      });

      d = resp.data;
    } catch (error) {
      console.log('Error:::', error);
      return error;
    }

    return d;
  }
}

export default CreateCompraTrufaShopService;
