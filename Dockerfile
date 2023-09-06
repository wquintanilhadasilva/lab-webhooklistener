FROM node:14
WORKDIR /app
ENV TIMEOUT=300000
COPY package*.json ./
RUN npm install
COPY index.js index.js
EXPOSE 3000
CMD ["node", "index.js"]
