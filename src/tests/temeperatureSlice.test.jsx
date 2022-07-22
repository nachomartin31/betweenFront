import temperatureSliceReducer, { setTemperatureUnit } from "../redux/slices/temperatureUnit";

describe("Given a temperature reducer", () => {
  describe("Thas has a setTemperatureUnit action", () => {
    describe("When setTemperatureUnit is called with 'farenheit", () => {
      test("Then unit should be farenheit", () => {
        const initialState = { unit: "celsius" };
        const action = setTemperatureUnit("farenheit");
        const result = temperatureSliceReducer(initialState, action);
        expect(result).toEqual({ unit: "farenheit" });
      });
    });
  });
});
