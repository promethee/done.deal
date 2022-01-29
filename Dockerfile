FROM node
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
ENV NODE_ENV=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
