# Dockerfile para Frontend

FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Criar diretório de cache
RUN mkdir -p /app/node_modules/.cache

# Copiar arquivos de dependências e instalar
COPY package*.json ./
RUN yarn install && \
    yarn add -D @types/react @types/react-dom @types/node

# Copiar o restante do código
COPY . .

# Definir variáveis de ambiente
ENV NODE_ENV=development
ENV WDS_SOCKET_PORT=0

# Expor a porta necessária
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["yarn", "start"]
