FROM node:18
WORKDIR /app
RUN mkdir -p /app/node_modules/.cache && \
    chown -R node:node /app
USER node
COPY --chown=node:node package*.json ./
RUN yarn install && \
    yarn add dotenv && \
    yarn add -D @types/express @types/cors @types/node
COPY --chown=node:node . .
RUN yarn tsc
EXPOSE 8080
CMD ["yarn", "dev"]