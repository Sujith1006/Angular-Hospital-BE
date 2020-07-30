FROM node:13.3.0
WORKDIR /app
RUN mkdir -p /app
COPY package*.json ./
ENV PATH /usr/src/node_modules/.bin:$PATH
RUN npm install
COPY . .
EXPOSE 8081

CMD [ "node","index.js" ]