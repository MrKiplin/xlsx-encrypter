import { WorkBook, WorkSheet, utils, writeFile } from "xlsx";
const XlsxPopulate = require("xlsx-populate");

// TODO: Rename this type
export interface WorkSheets {
  sheet: WorkSheet;
  name: string;
}

export class XlsxGenerator {
  public createWorkSheet(
    data: unknown[],
    sheetName: string,
    headers?: string[],
    cellOrigin?: string
  ): WorkSheets {
    const options = {
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
    XlsxPopulate.fromFileAsync(filePath).then((workbook: any) => {
      workbook.toFileAsync(filePath, {
        password,
      });
    });
  }
}
