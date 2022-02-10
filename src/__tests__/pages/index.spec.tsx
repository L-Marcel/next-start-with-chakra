import { screen, render } from '@testing-library/react';
import Home from '../../pages';

describe("Template default test", () => {
  it("should be able to load default page template", async() => {
    render(<Home/>);
    expect(
      await screen.findByText("Hello World")
    ).toBeInTheDocument();
  });
});