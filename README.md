# drag-and-drop-functionality

# Drag-and-Drop Project

This project is a drag-and-drop application built with vanilla JavaScript and Webpack. The project follows good practices for creating visual components and is structured using hexagonal architecture to ensure maintainability and scalability.

## Project Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/drag-and-drop.git
   cd drag-and-drop
   ```

2. Install the dependencies:

```bash
   npm install
```

3. Running the project:

This will start a development server and open the application in your default web browser.

```bash
   npm start
```

4. Building the project

   To build the project for production, run:

```bash
   npm build
```

This will create a dist directory with the optimized production build.

### Project Structure

The project follows a hexagonal architecture to ensure maintainability and scalability. The main directories are:

src/application/: Contains application services and use cases.
src/domain/: Contains domain models and repositories.
src/infrastructure/: Contains infrastructure adapters and configurations.
src/interfaces/: Contains user interface components and controllers.
src/shared/: Contains shared constants, utilities, and exceptions.

### Good Practices

- Visual Components: The visual components are created following good practices to ensure reusability and maintainability. Each component is modular and encapsulated.
- Vanilla JavaScript: The project is built using vanilla JavaScript, without relying on any frameworks, to keep it lightweight and easy to understand.
- Hexagonal Architecture: The project is structured using hexagonal architecture, which separates the core business logic from the infrastructure and user interface layers. This makes the project easier to maintain and extend.
