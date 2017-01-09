import { TestComponent } from "../component";
import * as React from "react";
import { create } from "react-test-renderer";

describe("component", () => {
    it("Should be rendered correctly", () => {
        const tree = create(<TestComponent a="test string" b={5} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toMatchSnapshot();
    });
    
    it("Should be rendered correctly with different props", () => {
        const tree = create(<TestComponent a="another string" b={6} />).toJSON();
        expect(tree).toMatchSnapshot();
        expect(tree).toMatchSnapshot();
    });
});