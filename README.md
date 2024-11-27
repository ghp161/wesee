
# WeSee Project

This project containerizes an HTML-based QGIS application using Docker and Docker Compose.

## Prerequisites

Ensure the following are installed on your system:
- Docker
- Docker Compose
- GNU Make

---

## Project Structure

```
WeSee/
├── images/                    # Static image files
├── layers/                    # Layers for the project
├── resources/                 # Supporting resources
├── styles/                    # Stylesheets
├── webfonts/                  # Web fonts used in the project
├── index.html                 # Main HTML file
├── Dockerfile                 # Dockerfile for building the Docker image
├── docker-compose.yaml        # Docker Compose file for service orchestration
└── Makefile                   # Makefile for build and run commands
```

---

## Usage

### Build the Docker Image
Run the following command to build the Docker image:

```bash
make build
```

This will build the Docker image using the `Dockerfile` in the project root directory.

---

### Run the Service
Run the following command to start the service using Docker Compose:

```bash
make run
```

This will start the container and expose the application on [http://localhost:8080](http://localhost:8080).

---

### Stop and Clean Up
To stop the service and clean up the containers, you can use the optional `clean` target:

```bash
make clean
```

---

### Versioning
The project uses **auto-versioning** for Docker images:
- The image version is dynamically generated using the current timestamp (`YYYYMMDDHHMM`) or a short git commit hash (if in a git repository).

To check the current version:
```bash
make version
```

---

## Notes
- The `index.html` and associated files (images, layers, resources, etc.) are mounted into the container as volumes, ensuring updates to these files are reflected without rebuilding the image.
- Ensure the `docker-compose.yaml` file is properly configured for your setup.

---
