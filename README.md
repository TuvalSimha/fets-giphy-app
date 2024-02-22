# feTS Demo Project

## Overview

This Next.js project serves as a demonstration of the [feTS](https://www.npmjs.com/package/fets) library, a TypeScript-based Fetch API for building and consuming REST APIs. The project utilizes various features of the feTS library to interact with a sample REST API, showcasing the simplicity and type safety it brings to client-server communication.

## Project Structure

- **`components`**: Contains React components used in the application, including the `RandomGif` component responsible for displaying a random GIF.
  
- **`ui`**: Holds UI-related components such as the `Button` component.

- **`app`**: Includes the `fets` directory, housing the API configuration and endpoint definition for interacting with the feTS client.

## RandomGif Component

The `RandomGif` component is the main UI component that demonstrates fetching a random GIF from the Giphy API using the feTS library. It utilizes the `useQuery` hook from [React Query](https://react-query.tanstack.com/) to manage API requests.

### Dependencies

- `react-query`: Used for data fetching and state management.
- `next/image`: For efficient image loading and optimization.
- `clsx`: A utility for constructing class names dynamically.
- `fets`: The feTS library for building and consuming REST APIs.
- Other UI-related dependencies.

### How to Run

1. Install dependencies:

    ```bash
    npm install
    ```

2. Start the Next.js development server:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## feTS Library Overview

### Core Features

- **Type-Safety**: feTS ensures type safety in client-server communication without the need for code generation.

- **OpenAPI Compatibility**: It leverages the OpenAPI specification for universal tool compatibility.

- **JSON Schema Route Description**: Utilizes the JSON Schema specification for route description, enabling integration with any tool within the JSON Schema ecosystem.

- **No Code Generation Needed**: Experience full type-safety without the need for code generation. feTS infers types from the OpenAPI spec and JSON Schema.

## Sample Usage

Here is a snippet demonstrating how to use the feTS client:

```typescript
import { createClient, type NormalizeOAS } from 'fets';

const client = createClient<NormalizeOAS<typeof oas>>({
  endpoint: 'http://localhost:3000/api'
});

const response = await client['/auth/register'].post({
  json: {
    name: 'John Doe',
    email: 'john@doe.com',
    passcode: 12345
  }
});

// Handle response
if (!response.ok) {
  const errorJson = await response.json();
  throw new Error(`Failed to register: ${errorJson.message}`);
}

const successRes = await response.json();

console.log('User created with ID: ', successRes.user.name);


