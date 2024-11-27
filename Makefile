# Define variables
DOCKER_IMAGE_NAME = mdlmagistrala/wesee
VERSION = $(shell date +"%Y%m%d%H%M") # Version based on timestamp
DOCKER_COMPOSE_FILE = docker-compose.yaml

# If git is available, use the short hash for versioning (uncomment below)
# VERSION = $(shell git rev-parse --short HEAD)

# Build function to create the Docker image with auto-versioning
build:
	docker build -t $(DOCKER_IMAGE_NAME):$(VERSION) .
	@echo "Built image: $(DOCKER_IMAGE_NAME):$(VERSION)"

# Run function to start the service using Docker Compose with the tagged image
run:
	DOCKER_IMAGE_TAG=$(VERSION) docker-compose -f $(DOCKER_COMPOSE_FILE) up -d
	@echo "Running service with image: $(DOCKER_IMAGE_NAME):$(VERSION)"

# Clean function for stopping and removing containers (optional)
clean:
	docker-compose -f $(DOCKER_COMPOSE_FILE) down
	@echo "Cleaned up containers"

# Display the current version
version:
	@echo "Current version: $(VERSION)"
