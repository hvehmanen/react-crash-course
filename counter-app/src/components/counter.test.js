import React from "react";
import Enzyme, { shallow } from "enzyme";
import Counter from "./counter";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("renders badge with count", () => {
    const counter = shallow(<Counter counter={{ id: 1, value: 2 }} />);
    expect(counter.find("span.badge").length).toEqual(1);
  });
});
