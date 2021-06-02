FROM node:12

ENV SKIP_PREFLIGHT_CHECK=true

RUN mkdir /app
WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm ci --no-save

EXPOSE 3000
CMD ["npm", "start"]
