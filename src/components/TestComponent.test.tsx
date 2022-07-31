import { screen, render } from "@testing-library/react";

import TestComponent from "./TestComponent";

describe('TestComponent', () => {
    it('renders without crashing', () => {
        render(<TestComponent />)
        expect(screen.getByText('test')).toBeInTheDocument();
    });
});