/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { join } from "path";
import { dirSync } from "tmp-promise";
import { XlsxGenerator } from ".";

describe("xlsx-generator", () => {
  const tempOutputDirectory = dirSync();
  let xlsxGenerator: XlsxGenerator;

  beforeEach(() => {
    xlsxGenerator = new XlsxGenerator();
  });

  const password = "dummy-password";
  const sheetName = "fruit";
  const dummyData = [
    {
      apples: "Apples",
      oranges: "Oranges",
    },
  ];

  const headers = ["apples", "oranges"];

  // eslint-disable-next-line jest/expect-expect
  it("Generates an xlsx file with headers", () => {
    const filePath = join(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      tempOutputDirectory.name,
      "/worksheet-with-headers.xlsx"
    );

    const workSheet = xlsxGenerator.createWorkSheet([], sheetName, headers);
    xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet]);
    // TODO: Add expect and test json data to compare to
  });

  // eslint-disable-next-line jest/expect-expect
  it("Generates an xlsx file with headers and data", () => {
    const filePath = join(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      tempOutputDirectory.name,
      "/worksheet-with-data.xlsx"
    );

    const workSheet = xlsxGenerator.createWorkSheet(
      dummyData,
      sheetName,
      headers
    );
    xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet]);
    // TODO: Add expect and test json data to compare to
  });

  // eslint-disable-next-line jest/expect-expect
  it("Generates an xlsx file with password", () => {
    const filePath = join(
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      tempOutputDirectory.name,
      "/worksheet-with-password.xlsx"
    );

    const workSheet = xlsxGenerator.createWorkSheet(
      dummyData,
      sheetName,
      headers
    );
    xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet], password);
  });
});
