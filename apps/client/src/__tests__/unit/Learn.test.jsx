import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AR from "@/app/ar-tour/page";

describe("Learn Page", () => {
    it("should render the learn page", () => {
        render(<AR />);
    });
});
