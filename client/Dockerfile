# Use the specific Node.js version as the base image
FROM node:20.11.1

# Set the working directory in the container to /app
WORKDIR /app

# Copy the rest of the application code to the working directory
COPY . .

# Install the application dependencies
RUN npm install

# Expose port 3000 for the application
EXPOSE 5173

# Define the command to run the application
CMD ["npm", "run", "dev"]