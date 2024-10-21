# React Context and State Management Project

This project demonstrates the use of React's `useContext`, `useState`, and `useEffect` hooks, along with the `createContext` function to manage themes and token-based authentication logic.

## Features
- **Theme Context**: Manages two themes (primary and secondary) using React's context API.
- **Dynamic Token Setting**: Automatically sets a token after a 4-second delay using `useEffect` and `useState`.
- **Conditional Rendering**: Depending on the presence of a token, the form either displays or prompts the user to log in.
- **Contextual Styling**: The button styling is controlled by the current theme context.

## Project Structure

- **`Theme.js`**: Contains theme definitions and context creation.
- **`App.js`**: The main component that sets the token and provides the theme context to child components.
- **`Card.js`**: A child component that consumes the theme context and renders the button with theme-specific styles.
- **`Form.js`**: A form component that conditionally renders based on whether the user is logged in (token exists).

