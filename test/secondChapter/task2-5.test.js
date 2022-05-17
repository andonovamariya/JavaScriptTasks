import { describe, expect, it } from "vitest";
import { flatten } from "../../dist/chapter2/task2-5";

describe("flatten", () => {
  it("should replace each array and object property of the elements of the array by their element", () => {
    const array = [
      {
        firstPerson: { firstName: "Mariya", lastName: "Andonova" },
      },
      { secondPerson: { firstName: "Hristo", lastName: "Andonov" } },
    ];
    const result = flatten(array);
    const expectedResult = {
      "0_firstPerson_firstName": "Mariya",
      "0_firstPerson_lastName": "Andonova",
      "1_secondPerson_firstName": "Hristo",
      "1_secondPerson_lastName": "Andonov",
    };

    expect(result).toEqual(expectedResult);
  });

  it("should return a value of type Array", () => {
    const array = [
      {
        firstPerson: { firstName: "Mariya", lastName: "Andonova" },
      },
      { secondPerson: { firstName: "Hristo", lastName: "Andonov" } },
    ];
    const result = flatten(array);

    expect(result).toBeTypeOf("object");
  });
});
