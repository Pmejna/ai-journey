import { render } from "utils/test";

import { Button } from "../Button";
describe("Button", () => {
  const buttonText = "Button";
  it("should render", () => {
    const { container } = render(<Button>{buttonText}</Button>);
    expect(container).toBeInTheDocument();
  });
  it("should render with correct style", () => {
    const { getByText } = render(
      <Button variant="primary">{buttonText}</Button>
    );
    expect(getByText(buttonText)).toHaveStyle("background-color: #8c8cf2");
  });
});
