import { compare } from "./compare";

test("Compare", () => {
  const list = [
    {
      Priority: "High",
      Name: "Test 1",
    },
    {
      Priority: "Low",
      Name: "Test 2",
    },
    {
      Priority: "Mid",
      Name: "Test 3",
    },
    {
      Priority: "High",
      Name: "Test 4",
    },
  ];
  const expectedResult = [
    {
      Priority: "High",
      Name: "Test 1",
    },
    {
      Priority: "High",
      Name: "Test 4",
    },
    {
      Priority: "Mid",
      Name: "Test 3",
    },
    {
      Priority: "Low",
      Name: "Test 2",
    },
  ];
  expect(list.sort(compare("Priority"))).toEqual(expectedResult);
});
