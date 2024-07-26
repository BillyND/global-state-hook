# Global State Hook

This project provides a custom React hook for managing global state in React applications. It simplifies state management by allowing you to create and use global state without the need for external libraries like Redux.

## Features

- Simple and lightweight global state management
- Create and use global state with ease
- Easy integration with React components

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/BillyND/global-state-hook.git
    ```

2. Navigate to the project directory:

    ```bash
    cd global-state-hook
    ```

3. Install the necessary packages:

    ```bash
    npm i
    ```

### Using the Hook

1. Import the `useGlobalState` hook into your React components:

    ```javascript
    import { useGlobalState } from './path-to-hook';
    ```

2. Create and manage global state using the hook:

    ```javascript
    const [state, setState] = useGlobalState('initialValue');
    ```

3. Use the `state` and `setState` as needed in your components.

### Running the Project

1. To start the development server, run:

    ```bash
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000` to view and test the app.

### Building for Production

1. To build the application for production, run:

    ```bash
    npm run build
    ```

2. To serve the production build, you can use a static server like `serve`:

    ```bash
    npm install -g serve
    serve -s build
    ```

## Built With

- [React.js](https://reactjs.org/) - JavaScript library for building user interfaces
- [Node.js](https://nodejs.org/) - JavaScript runtime
- [npm](https://www.npmjs.com/) - Package manager

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **BillyND** - *Initial work* - [BillyND's GitHub Profile](https://github.com/BillyND)

See also the list of [contributors](https://github.com/BillyND/global-state-hook/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc.
