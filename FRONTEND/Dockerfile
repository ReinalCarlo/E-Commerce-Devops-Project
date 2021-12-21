FROM node:17-alpine 
WORKDIR /FRONTEND
ENV PATH="/.node_modules/.bin:$PATH"
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]

