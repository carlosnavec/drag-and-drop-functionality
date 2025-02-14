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
      git clone https://github.com/carlosnavec/drag-and-drop-functionality.git
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

- **src/application/:** Contains application services and use cases.

- **src/domain/:** Contains domain models and repositories.

- **src/infrastructure/:** Contains infrastructure adapters and configurations.

- **src/interfaces/:** Contains user interface components and controllers.

- **src/shared/:** Contains shared constants, utilities, and exceptions.

### Good Practices

- **Visual Components:** The visual components are created following good practices to ensure reusability and maintainability. Each component is modular and encapsulated.
- **Vanilla JavaScript:** The project is built using vanilla JavaScript, without relying on any frameworks, to keep it lightweight and easy to understand.
- **Hexagonal Architecture:** The project is structured using hexagonal architecture, which separates the core business logic from the infrastructure and user interface layers. This makes the project easier to maintain and extend.

## Core requirements 

### Elements & Drag-and-Drop: 

- The sidebar contains two elements: Text and Image. 
- Dragging an element from the sidebar creates a clone in the designated area.

 

### Canvas structure & rules: 

- Header             → Accepts only Image elements. 
- Body & Footer  → Accepts any element. 

### Rearrangement & movement constraints: 

- Elements can be reordered within an area. 
- Text elements cannot be moved to Header. 
- Dragging an item outside the canvas should remove it. 

### State persistence: 

- If the page refreshes, the layout should remain unchanged. 

### Styling: 

- Ensure implementation matches the Figma design. 

## Short answer document. Responses

- **How did you structure your JavaScript, and why?**

  I followed hexagonal architecture principles to ensure maintainability and a well-structured project. This approach makes it easier to implement new features and maintain existing code.
  I chose not to rely on any JavaScript libraries to demonstrate my proficiency in the language and my ability to apply good programming practices.

- **How did you handle performance optimization in your implementation?**

  This project doesn’t currently have performance issues to address, as there’s no large batch of data to render or functionalities that require lazy loading. However, I ensured a strong foundation by following SOLID principles and incorporating good practices in the code structure.

- **How would you modernize this while keeping it compatible with legacycode?**

  First, I would implement tests for the core functionalities and requirements of the project using tools like Jest and Cypress. This approach helps familiarize myself with the codebase and ensures consistency as we introduce improvements.
  Next, I would review the code to ensure it aligns with a standard hexagonal architecture.
  Finally, I would integrate a CI/CD system to streamline development and deployment processes.
  Additionally, I would create a visual component library using a tool like Storybook and explore integrating React.js to modernize the codebase further.
