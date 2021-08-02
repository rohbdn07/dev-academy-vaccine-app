import React from "react";
import { shallow } from "enzyme";
import AntiquaResult from "./AntiquaResult";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("AntiquaResult", () => {
  it("should render TextInfo component", () => {
    const wrapper = shallow(<AntiquaResult />);
    const textInfoExits = wrapper.find("TextInfo").exists();
    expect(textInfoExits).toBe(true);
  });
});
