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
class GetSheetsService {
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
      const doc = new GoogleSpreadsheet(String(SPREADSHEET_ID));

      await doc.useServiceAccountAuth({
        client_email: String(CLIENT_EMAIL),
        private_key: String(PRIVATE_KEY),
      });

      await doc.loadInfo();

      const sheet = doc.sheetsById[String(SHEET_ID)];

      console.log('chegou PPPPP');

      const maxRows = sheet.rowCount;
      await sheet.loadCells(`A1:A${maxRows}`);
      await sheet.loadCells(`H1:H${maxRows}`);

      const validIndex = [...Array(maxRows - 1).keys()];

      const orderId = 1;
      const status = 'Pago com PIX';

      for await (const i of validIndex) {
        const cell = sheet.getCell(1 + i, 0);
        if (cell.value) {
          if (cell.value === orderId) {
            const statusCell = sheet.getCell(1 + i, 7);
            statusCell.value = status;
          }
        } else {
          break;
        }
      }

      await sheet.saveUpdatedCells();
    } catch (error) {
      console.log('Error::::', error);
    }

    return 'd';
  }
}

export default GetSheetsService;
