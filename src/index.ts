import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
const XlsxPopulate = require("xlsx-populate");
export interface WorkSheetWithName {
  sheet: WorkSheet;
  name: string;
}

export class XlsxGenerator {
  public createWorkSheet(
    data: unknown[],
    sheetName: string,
    headers?: string[],
    cellOrigin?: string
  ): WorkSheetWithName {
    const options = {
      header: headers,
      origin: cellOrigin,
    };
    return {
      sheet: utils.json_to_sheet(data, options),
      name: sheetName,
    };
  }

  public async exportWorkSheetsToFile(
    filePath: string,
    workSheets: WorkSheetWithName[],
    password?: string
  ): Promise<void> {
    const workBook = this.createWorkBook();

    for (const workSheet of workSheets) {
      utils.book_append_sheet(workBook, workSheet.sheet, workSheet.name);
    }

    writeFile(workBook, filePath);

    if (password) {
      await this.encryptXlsxFile(filePath, password);
    }
  }

  private createWorkBook(): WorkBook {
    return utils.book_new();
  }

  private async encryptXlsxFile(filePath: string, password: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await XlsxPopulate.fromFileAsync(filePath).then(async (workbook: any) => {
      await workbook.toFileAsync(filePath, {
        password,
      });
    });
  }
}
