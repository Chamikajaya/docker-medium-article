# using node's alpine image as base image
FROM node:alpine

# setting the working directory inside the container
WORKDIR /app

# copying package.json and package-lock.json to the working directory
COPY package*.json ./

# installing dependencies using npm
RUN npm i

# copying all the files from the current directory to the working directory
# but make sure to add .dockerignore file to ignore node_modules
COPY . .

# run the server
CMD ["node", "./src/server.js"]