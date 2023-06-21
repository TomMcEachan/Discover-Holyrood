import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Homepage", () => {
    it("should render the homepage", () => {
        const { container } = render(<Home />);
        expect(container).toMatchSnapshot();
    });
});
