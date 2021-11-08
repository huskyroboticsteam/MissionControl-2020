# Husky Robotics Mission Control
Husky Robotics Mission Control Repo

## Setup

### Linux
1. Open your terminal.
1. Install Node.js:
    ```
    curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
    sudo apt install nodejs
    ```
2. Clone the Mission Control repository to your local machine.
4. Navigate to the `client` folder in the repository.
5. Run `npm install` to install dependencies for the client.
6. Navigate to the `server` directory in the repository.
7. Run `npm install` to install dependencies for the server.

### Windows
1. Install [Node.js for Windows](https://nodejs.org/en/download/).
2. Open your terminal (e.g. PowerShell or Git Bash).
3. Clone the Mission Control repository to your local machine.
4. Navigate to the `client` folder in the repository.
5. Run `npm install` to install dependencies for the client.
6. Navigate to the `server` directory in the repository.
7. Run `npm install` to install dependencies for the server.

### Mac
1. Install [Node.js for macOS](https://nodejs.org/en/download/).
2. Open your terminal.
3. Clone the Mission Control repository to your local machine.
4. Navigate to the `client` folder in the repository.
5. Run `npm install` to install dependencies for the client.
6. Navigate to the `server` directory in the repository.
7. Run `npm install` to install dependencies for the server.

## Running Mission Control
1. Open your terminal.
2. Navigate to the client directory.
3. Run `npm start` to start the client.
4. Open a new terminal.
5. Navigate to the server directory.
6. Run `npm start` to start the server.

If you run into any issues, try deleting your `node_modules` directory and re-installing by following the setup instructions for your operating system.

## Using the Simulator with MissionControl

Follow the setup instructions for the [simulator](https://github.com/huskyroboticsteam/Simulator).

## Architecture

Rover <-> Server <-> Client

In this repository are the server and client: the server is a NodeJS backend app and the client is the React interface, both run on the same machine and comprise Mission Control. The server acts as a relay between the rover and client and is necessary because browsers can't send TCP packets, which we use to send commands. So, the client sends HTTP requests to the server which then sends TCP packets to the rover.

## Components
Mission Control is broken down into components. The app uses redux for overall state management and automatically updates in response to incoming packets via the client's middleware.

The components that are their own page are:
- Main
- Arm
- Camera
- Science
- Telemetry
