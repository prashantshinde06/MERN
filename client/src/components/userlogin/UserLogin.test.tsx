import { render, screen } from "@testing-library/react";
import UserLogin from "./UserLogin";

test("login form working", () => {
  render(<UserLogin></UserLogin>);

  const text = screen.getByText("Log In");
  expect(text).toBeInTheDocument();

  const userEmail = screen.getByRole("textbox", { name: "User Email" });
  expect(userEmail).toBeInTheDocument();

  const userPassword = screen.getByLabelText("User Password", {
    selector: "input",
  });
  expect(userPassword).toBeInTheDocument();

  const submitButton = screen.getByRole("button");
  expect(submitButton).toBeInTheDocument();

  const userEmailPlacholder = screen.getByPlaceholderText("Enter Valid Email");
  expect(userEmailPlacholder).toBeInTheDocument();

  const userPassPlacholder = screen.getByPlaceholderText("Password");
  expect(userPassPlacholder).toBeInTheDocument();
});
