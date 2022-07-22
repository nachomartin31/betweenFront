import temperatureSliceReducer, { setTemperatureUnit } from "../redux/slices/temperatureUnit";

describe("Given a cart reducer", () => {
  describe("Thas has a addToCart action", () => {
    describe("When addToCart is called", () => {
      test("Then cart should have a count property equal to 1", () => {
        const initialState = { unit: "celsius" };
        const action = setTemperatureUnit("farenheit");
        const result = temperatureSliceReducer(initialState, action);
        expect(result).toEqual({ unit: "farenheit" });
      });
    });
  });
});
