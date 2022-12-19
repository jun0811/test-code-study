import { render, screen } from "test-utils";
import { Profile } from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="lsj" name="이승준" />);
    expect(utils.container).toMatchSnapshot();
  });

  it("shows the props correctly", () => {
    render(<Profile username="lsj" name="이승준" />);

    screen.getByText("lsj"); // velopert 라는 텍스트를 가진 엘리먼트가 있는지 확인
    screen.getByText("(이승준)"); // (김민준) 이라는 텍스트를 가진 엘리먼트가 있는지 확인
    screen.getByText(/이/); // 정규식 /김/ 을 통과하는 엘리먼트가 있는지 확인
  });
});
