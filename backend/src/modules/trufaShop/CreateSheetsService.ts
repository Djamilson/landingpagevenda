import { GoogleSpreadsheet } from 'google-spreadsheet';
import { injectable } from 'tsyringe';

const baseUrl =
  process.env.GN_ENV === 'producao'
    ? process.env.GN_API_PRODUCTION
    : process.env.GN_API_HOMOLOGATION;

interface IResponse {
  access_token: string;
}

@injectable()
class CreateSheetsService {
  constructor() {}

  public async execute({ access_token }: IResponse): Promise<any> {
    const { SPREADSHEET_ID } = process.env;
    const { SHEET_ID } = process.env;
    const CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
    const PRIVATE_KEY = process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(
      /\\n/g,
      '\n',
    );

    try {
      const row = [
        {
          Pedido: 'dad',
          'Nome Cliente': 'tste',
          'Telefone Cliente': 'teste',
          Produto: '09',
          Quantidade: '989',
          Subtotal: '88',
          'Total pedido': '78',
          Status: 'aguardando',
        },
      ];

      const doc = new GoogleSpreadsheet(String(SPREADSHEET_ID));

      await doc.useServiceAccountAuth({
        client_email: String(CLIENT_EMAIL),
        private_key: String(PRIVATE_KEY),
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[String(SHEET_ID)];

      console.log('chegou PPPPP');

      await sheet.addRows(row);

      // console.log('access_token', access_token);
    } catch (error) {
      console.log('Error::::', error);
    }

    return 'd';
  }
}

export default CreateSheetsService;
