import { render, screen, fireEvent } from "test-utils";

import Counter from "./Counter";

describe("<Counter />", () => {
  const utils = render(<Counter />);
  it("matches snapshot", () => {
    const utils = render(<Counter />);
    expect(utils.container).toMatchSnapshot();
  });

  it("has a number and two button", () => {
    render(<Counter />);
    screen.getByText("0");
    screen.getByText("+");
    screen.getByText("-");
  });

  it("increase", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const plus = screen.getByText("+");
    fireEvent.click(plus);
    expect(number).toHaveTextContent("1");
    expect(number.textContent).toBe("1"); // textContent 를 직접 비교
  });

  it("decrese", () => {
    render(<Counter />);
    const number = screen.getByText("0");
    const minus = screen.getByText("-");
    fireEvent.click(minus);
    fireEvent.click(minus);
    expect(number).toHaveTextContent("-2");
  });
});
