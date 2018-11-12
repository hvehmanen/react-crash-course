import React from "react";
import Enzyme, { render } from "enzyme";
import { CountersProvider } from "../contexts/countersContext";
import Counters from "./counters";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe("<Counters />", () => {
  it("Renders correct amount of <Counter /> elements", () => {
    const container = render(
      <CountersProvider>
        <Counters />
      </CountersProvider>
    );
    expect(container.find("div.counter").length).toBe(4);
  });

  it("Renders the <CounterActions /> element", () => {
    const container = render(
      <CountersProvider>
        <Counters />
      </CountersProvider>
    );
    expect(container.find("div.actions").length).toBe(1);
  });
});
