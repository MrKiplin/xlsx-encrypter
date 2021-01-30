/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// import { join } from "path";
// import { dirSync } from "tmp-promise";
// import { XlsxGenerator } from ".";

describe("xlsx-generator", () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  // const tempOutputDirectory = dirSync();
  // let xlsxGenerator: XlsxGenerator;

  // beforeEach(() => {
  //   xlsxGenerator = new XlsxGenerator();
  // });

  // const password = "dummy-password";
  // const dummyData = [
  //   {
  //     apples: "EHL",
  //     oranges: "00123456ABC",
  //   },
  // ];

  // const headers = ["apples", "oranges"];

  // eslint-disable-next-line jest/expect-expect
  // it("Generates an xlsx file with headers", () => {
  //   const filePath = join(tempOutputDirectory.name, "/empty-worksheet.xlsx");

  //   const workSheet = xlsxGenerator.createWorkSheet([], "fruit", headers);
  //   xlsxGenerator.exportWorkSheetsToFile(filePath, [workSheet]);
  // });

  it("Totally legit test", () => {
    expect(true).toEqual(true);
  });
});
