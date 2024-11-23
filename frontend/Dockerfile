FROM node:18
WORKDIR /app
RUN mkdir -p /app/node_modules/.cache && \
    chown -R node:node /app
USER node
COPY --chown=node:node package*.json ./
RUN yarn install && \
    yarn add -D @types/react @types/react-dom @types/node
COPY --chown=node:node . .
ENV NODE_ENV=development
ENV WDS_SOCKET_PORT=0
EXPOSE 3000
CMD ["yarn", "start"]