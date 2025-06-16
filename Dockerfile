# Use official Node.js image
FROM node:20

# Create app directory
WORKDIR /app

# Copy package files and install
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Expose the port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
