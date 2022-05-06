const object: AnObject = {
  cards: 6,
  label: "Test",
  description: "value",
  type: 1,
  role: undefined,
  person: { name: "John Doe" },
  skills: null,
  report: () => {
    console.log("Hello,  world!");
  },
  experience: { count: 5 },
};

interface AnObject {
  cards: number;
  label: string;
  description: string;
  type: number;
  role: undefined;
  person: { name: string };
  skills: null;
  report: () => void;
  experience: { count: number };
}

const getObjectWeight = (chosenObject: AnObject): number => {
  let weight: number = 0,
    object: AnObject = chosenObject;

  Object.entries(object).forEach(([key, value]) => {
    if (value === null) {
      weight += 2;
    } else if (
      value instanceof Function ||
      typeof value === "object" ||
      Array.isArray(value)
    ) {
      weight += 10;
    } else if (typeof value === "string") {
      weight += 8;
    } else if (typeof value === "number") {
      weight += 4;
    } else if (value instanceof Date) {
      weight += 5;
    } else if (typeof value === "undefined") {
      weight += 2;
    } else if (typeof value === "boolean") {
      weight += 4;
    } else if (value instanceof Date) {
      weight += 5;
    } else {
      console.log("Wasn't able to find a corresponding value in the array");
    }
  });

  return weight;
};

console.log("The object weight is: ", getObjectWeight(object));

export {};
