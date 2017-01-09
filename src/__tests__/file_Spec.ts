import { testFunc } from "../file";

describe("File", () => {
    it("Should return another", () => {
        expect(testFunc(true)).toBe("another");
    });
    
    it("Should return main", () => {
        expect(testFunc(false)).toBe("main");
    });
});