import * as React from "react";

interface TestProps {
    a: string;
    b: number;
}

export class TestComponent extends React.Component<TestProps, {}> {
    public render() {
        return (
            <div className="root">
                <div className="string">String is {this.props.a}</div>
                <div className="number">Number is {this.props.b}</div>
            </div>
        );
    }
}