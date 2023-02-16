import { render, screen } from "@testing-library/react";
import UserRegistration from "./UserRegistration";
import { BrowserRouter as Router } from 'react-router-dom';


describe("user registration", () => {
  test("render correctly", () => {
    render(<Router>
      <UserRegistration></UserRegistration>
    </Router>);

    const userName = screen.getByRole("textbox", { name: "User Name" });
    expect(userName).toBeInTheDocument();

    const userEmail = screen.getByRole("textbox", { name: "User Email" });
    expect(userEmail).toBeInTheDocument();

    const userPassword = screen.getByLabelText("User Password", {
      selector: "input",
    });
    expect(userPassword).toBeInTheDocument();

    const userRePassword = screen.getByLabelText("User Repeat Password", {
      selector: "input",
    });
    expect(userRePassword).toBeInTheDocument();

    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();

    const userNamePlacholder = screen.getByPlaceholderText("Enter Valid Name");
    expect(userNamePlacholder).toBeInTheDocument();

    const userEmailPlacholder =
      screen.getByPlaceholderText("Enter Valid Email");
    expect(userEmailPlacholder).toBeInTheDocument();

    const userPassPlacholder = screen.getByPlaceholderText("Password");
    expect(userPassPlacholder).toBeInTheDocument();

    const userRePassPlacholder =
      screen.getByPlaceholderText("Re-Enter Password");
    expect(userRePassPlacholder).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: "Sign up" });
    expect(heading).toBeInTheDocument();
  });
});
