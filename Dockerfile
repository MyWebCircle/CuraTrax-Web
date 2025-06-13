# Use the official nginx image as a base
FROM nginx:latest

# Copy the static website files to the nginx html directory
COPY . /usr/share/nginx/html

# Expose port 3005
EXPOSE 3006