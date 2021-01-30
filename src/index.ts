/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
import * as XlsxPopulate from "xlsx-populate";

export interface WorkSheets {
  sheet: WorkSheet;
  name: string;
}

export class XlsxGenerator {
  public createWorkSheet(
    data: any[],
    sheetName: string,
    headers?: string[],
    cellOrigin?: string
  ): WorkSheets {
    const options: any = {
      header: headers,
      origin: cellOrigin,
    };
    return {
      sheet: utils.json_to_sheet(data, options),
      name: sheetName,
    };
  }

  public exportWorkSheetsToFile(
    filePath: string,
    workSheets: WorkSheets[],
    password?: string
  ): void {
    const workBook = this.createWorkBook();

    for (const workSheet of workSheets) {
      utils.book_append_sheet(workBook, workSheet.sheet, workSheet.name);
    }

    writeFile(workBook, filePath);
    if (password) {
      this.encryptXlsxFile(filePath, password);
    }
  }

  private createWorkBook(): WorkBook {
    return utils.book_new();
  }

  private encryptXlsxFile(filePath: string, password: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    XlsxPopulate.fromFileAsync(filePath).then((workbook: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      workbook.toFileAsync(filePath, {
        password,
      });
    });
  }
}
