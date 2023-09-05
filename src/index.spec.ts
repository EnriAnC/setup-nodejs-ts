import Person from "."

it("should sum correctly", () => {
  const person = new Person()
  expect(person.sayMyName()).toBe("Pablo")
})
