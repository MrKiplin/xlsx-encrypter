import { readFileSync } from "fs";
import { join } from "path";
import { dirSync } from "tmp-promise";
import { XlsxGenerator } from ".";
const excelToJson = require("convert-excel-to-json");

describe("xlsx-generator", () => {
  const tempOutputDirectory = dirSync();
  let xlsxGenerator: XlsxGenerator;

  beforeEach(() => {
    xlsxGenerator = new XlsxGenerator();
  });

  const password = "dummy-password";
  const sheetName = "Fruit Sales";
  const headers = ["Fruit", "Quantity", "Price"];
  const dummyData = [
    {
      Fruit: "Apples",
      Quantity: "4",
      Price: "£6.86",
    },
    {
      Fruit: "Oranges",
      Quantity: "2",
      Price: "£2.39",
    },
  ];

  const testFileDirectory = join(__dirname, "../test-files");

  it("Generates an xlsx file with headers", () => {
    const filePath = join(
      tempOutputDirectory.name,
      "/worksheet-with-headers.xlsx"
    );
    const workSheet = xlsxGenerator.createWorkSheet([], sheetName, headers);
    xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet]);

    const pathToExpectedReport = join(
      testFileDirectory,
      "worksheet-with-headers.json"
    );
    const expectedReportContents = readFileSync(pathToExpectedReport).toString(
      "utf8"
    );
    const expectedReport = JSON.parse(expectedReportContents);

    const generatedReport = excelToJson({
      sourceFile: filePath,
    });

    expect(generatedReport).toEqual(expectedReport);
  });

  it("Generates an xlsx file with data", () => {
    const filePath = join(
      tempOutputDirectory.name,
      "/worksheet-with-data.xlsx"
    );

    const workSheet = xlsxGenerator.createWorkSheet(
      dummyData,
      sheetName,
      headers
    );
    xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet]);

    const pathToExpectedReport = join(
      testFileDirectory,
      "worksheet-with-data.json"
    );
    const expectedReportContents = readFileSync(pathToExpectedReport).toString(
      "utf8"
    );
    const expectedReport = JSON.parse(expectedReportContents);

    const generatedReport = excelToJson({
      sourceFile: filePath,
    });

    expect(generatedReport).toEqual(expectedReport);
  });

  // eslint-disable-next-line jest/expect-expect
  it("Generates an xlsx file with password", () => {
    const filePath = join(
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
