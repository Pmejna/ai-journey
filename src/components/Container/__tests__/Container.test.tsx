import { render } from "utils/test";

import { Container } from "../Container";

describe("Container", () => {
  const testText = "Test";
  it("renders correctly", () => {
    const { container } = render(<Container size="md">{testText}</Container>);
    expect(container.firstChild).toHaveTextContent(testText);
  });
});
