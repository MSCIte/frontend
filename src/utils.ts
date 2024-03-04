/**
 * (typescript) returns the given object with keys sorted alphanumerically.
 * @param {T} obj the object to sort
 * @returns {T} the sorted object
 */
export const sortByKeys = <T extends object>(obj: T): T =>
  Object.keys(obj)
    .sort()
    .reduce((acc, c) => {
      //@ts-expect-error asdfasdf aasdf
      acc[c] = obj[c as unknown as keyof T];
      return acc;
    }, {}) as T;

export const groupBy = <T>(
  array: T[],
  predicate: (value: T, index: number, array: T[]) => string,
): { [key: string]: T[] } =>
  array.reduce(
    (acc, value, index, array) => {
      (acc[predicate(value, index, array)] ||= []).push(value);
      return acc;
    },
    {} as { [key: string]: T[] },
  );

export const disciplineNameToFriendly = (discipline: string) => {
  switch (discipline) {
    case "architectual_engineering":
      return "Architectural Engineering";
    case "architecture":
      return "Architecture";
    case "biomedical_engineering":
      return "Biomedical Engineering";
    case "chemical_engineering":
      return "Chemical Engineering";
    case "civil_engineering":
      return "Civil Engineering";
    case "computer_engineering":
      return "Computer Engineering";
    case "electrical_engineering":
      return "Electrical Engineering";
    case "environmental_engineering":
      return "Environmental Engineering";
    case "geological_engineering":
      return "Geological Engineering";
    case "management_engineering":
      return "Management Engineering";
    case "mechanical_engineering":
      return "Mechanical Engineering";
    case "mechatronics_engineering":
      return "Mechatronics Engineering";
    case "nanotechnology_engineering":
      return "Nanotechnology Engineering";
    case "software_engineering":
      return "Software Engineering";
    case "systems_design_engineering":
      return "Systems Design Engineering";
    default:
      return discipline;
  }
};

export const backgroundColors = {
  red: "bg-red-400",
  green: "bg-green-400",
  orange: "bg-orange-400",
  yellow: "bg-yellow-400",
  blue: "bg-blue-400",
  purple: "bg-purple-400",
  pink: "bg-pink-400",
  indigo: "bg-indigo-400",
  gray: "bg-gray-400",
};
