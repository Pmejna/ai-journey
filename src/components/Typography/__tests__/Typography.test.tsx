import { screen, render, waitFor } from "utils";

import { Typography } from "..";

describe("TestComponent", () => {
  const heading = "test";
  const testColor = "red";
  const testVariant = "h1";

  it("renders porperly", async () => {
    const { container } = render(
      <Typography tag={testVariant} variant={testVariant} color={testColor}>
        {heading}
      </Typography>
    );
    await waitFor(() => {
      expect(container.querySelector(testVariant)).toHaveStyle(
        `color: ${testColor}`
      );
      expect(screen.getByText(heading)).toBeInTheDocument();
    });
  });
});
