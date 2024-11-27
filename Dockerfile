# Use the official Nginx image as the base
FROM nginx:latest

# Copy your project files to the default Nginx directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
