
# See explanation below
FROM node:14.8-slim

RUN yarn global add @angular/cli
# Create a directory for the app code
RUN mkdir -p /app

WORKDIR /app

COPY ./client ./

COPY ./client/package*.json ./


RUN npm install

