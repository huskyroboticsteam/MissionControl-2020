# Husky Robotics Mission Control
Husky Robotics Mission Control Repo

# Setup
This repo requires the installation of NodeJS and ReactJS. After cloning the repo onto your local machine, navigate to the client folder and type `npm install` in the terminal. This should install the rest of the packages required.


NodeJS: https://nodejs.org/en/

ReactJS: https://reactjs.org/

# Running Mission Control

Client: Navigate to the client directory and type into the terminal `npm start.` This should open up a new html page that is on the main menu.

Server: Navigate to the server director and enter `npm start`. This will start the server in the terminal window.

If you run into any issues, try cleaning your node directory and re-installing. Additionally, view a folder's `package.json` file to inspect the start commands.

# Architecture

Rover <-> Server <-> Client

In this repository are the server and client: the server is a NodeJS backend app and the client is the React interface, both run on the same machine and comprise Mission Control. The server acts as a relay between the rover and client and is necessary because browsers can't send TCP packets, which we use to send commands. So, the client sends HTTP requests to the server which then sends TCP packets to the rover.

# Components
Mission Control is broken down into components. The app uses redux for overall state management and automatically updates in response to incoming packets via the client's middleware.

The components that are their own page are:

Main

Arm

Camera

Science

Telemetry

