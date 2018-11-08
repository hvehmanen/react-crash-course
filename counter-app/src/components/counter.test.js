import React from "react";
import Enzyme, { shallow } from "enzyme";
import Counter from "./counter";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counter />", () => {
  it("renders a badge with the correct count", () => {
    const counter = shallow(<Counter counter={{ id: 1, value: 2 }} />);
    const element = counter.find("span.badge");
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("2");
  });

  it("renders a badge with the text 'Zero' if the amount is 0", () => {
    const counter = shallow(<Counter counter={{ id: 1, value: 0 }} />);
    const element = counter.find("span.badge");
    expect(element.length).toEqual(1);
    expect(element.text()).toEqual("Zero");
  });

  it("calls the onIncrement method when increment button is called", () => {
    const fakeIncrement = jest.fn();
    const counter = shallow(
      <Counter counter={{ id: 1, value: 2 }} onIncrement={fakeIncrement} />
    );
    counter.find("button.increment").simulate("click");
    expect(fakeIncrement).toHaveBeenCalled();
  });

  it("calls the onDelete method when delete button is called", () => {
    const fakeDelete = jest.fn();
    const counter = shallow(
      <Counter counter={{ id: 1, value: 2 }} onDelete={fakeDelete} />
    );
    counter.find("button.delete").simulate("click");
    expect(fakeDelete).toHaveBeenCalled();
  });
});
