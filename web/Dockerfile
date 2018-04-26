FROM node:carbon

# Create app directory
WORKDIR /usr/src/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
ADD . /app
WORKDIR /app
ENV PGHOST=db
ENV PGUSER=postgres
ENV PGDATABASE=lernt
RUN npm install
RUN npm run build
CMD ["npm", "start"]