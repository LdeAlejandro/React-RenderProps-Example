Here’s the `README.md` for the provided code in English:

# React Counter with Render Props

This project demonstrates how to implement a counter using the **Render Props** pattern in React, managing the state within a class component and passing functions to a child component to control the increment and decrement of the counter.

## Features

- **Render Props Pattern**: The **Render Props** pattern allows passing render functions from a parent component (`Counter`) to child components, giving full control over the interface and logic.
- **State Management in Class Component**: The counter state is managed using a class component that utilizes the `setState` method to update the counter value.
- **Reusable Componentization**: The `Buttons` component handles displaying the increment and decrement buttons along with the current counter value.

## Project Structure

- **`Counter.js`**: Defines the `Counter` class component, which controls the counter's state and passes the increment and decrement functions as props using the **Render Props** pattern.
- **`App.js`**: The main component that renders `Counter` and passes a render function that defines the UI for the `Buttons` component.
- **`Buttons`** (within `App.js`): A functional component that receives the `increment`, `decrement`, and `count` methods as props and displays the counter value along with buttons to modify it.

## How It Works

1. **`Counter` Component**:
   - The `Counter` component is a class that manages the counter’s state (`count`). It provides two methods, `increment` and `decrement`, to update the state.
   - The `render` method receives a function from the parent component (`App`), which is used to pass the `count`, `increment`, and `decrement` values to the child component (`Buttons`).

2. **`App` Component**:
   - The `App` component wraps `Counter` and passes a render function that renders the `Buttons` component, passing the `increment`, `decrement`, and `count` props to handle the counter functionality.

3. **`Buttons` Component**:
   - This component is responsible for rendering the current count value and the increment and decrement buttons, using the functions passed down as props.

