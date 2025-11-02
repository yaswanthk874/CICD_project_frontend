# Step 1: Build stage (Node.js for React/Vite)
FROM node:18 AS build-stage
WORKDIR /app

# Install git to clone repo
RUN apt-get update && apt-get install -y git

# Clone frontend repo fresh every build
RUN git clone https://github.com/yaswanthk874/CICD_project_frontend.git .

# Install dependencies and build
RUN npm install
RUN npm run build

# Step 2: Runtime stage (Nginx to serve build)
FROM nginx:alpine
# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy the corrected Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built React output to Nginx's web root
COPY --from=build-stage /app/dist /usr/share/nginx/html

# EXPOSE port 80 to align with docker-compose.yml mapping ("8065:80")
EXPOSE 80

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]