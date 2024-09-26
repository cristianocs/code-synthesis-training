# Task Manager Gemini project - README

## Versions

- Ruby: 3.2.2
- Rails: 7.0.4
- Devise: 4.9.0
- JWT: 2.6.0
- React 18.3.1

## Prerequisites

- Docker
- Docker Compose
- Node.js and npm

## Steps to Run the Project via Docker

1. **Copy project files:**

2. **Navigate to the backend project directory:**
    ```bash
    cd task_manager_gemini_code_assist_sample

3. **Build the Docker image:**
    ```bash
    docker build -t task-manager-image .

4. **Run the application:**
    ```bash
    docker run -p 3001:3001 task-manager-image


This will start the Rails server and expose it on port 3001.

5. **Navigate to the frontend project directory:**
    ```bash
    cd ..
    cd task_manager_gemini_code_assist_sample

6. **Build the Docker image:**
    ```bash
    docker build -t task-manager-frontend .

7. **Run the application:**
    ```bash
    docker run -p 3000:3000 task-manager-frontend

This will start the npm server and expose it on port 3000.
Now you should be able to access application at http://localhost:3000.