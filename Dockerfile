# Build Angular App and Generate dist files
FROM node:latest as build-stage
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
RUN npm run ng build -- --configuration=production

# Run the dist files using NGINX
FROM nginx:alpine
RUN mkdir /app
COPY --from=build-stage /app/dist/nuit-info/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf