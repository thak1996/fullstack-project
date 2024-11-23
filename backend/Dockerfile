# Dockerfile para Backend

FROM node:18

# Definir diretório de trabalho
WORKDIR /app

# Criar diretório de cache
RUN mkdir -p /app/node_modules/.cache

# Copiar arquivos de dependências e instalar
COPY package*.json ./
RUN yarn install && \
    yarn add dotenv && \
    yarn add -D @types/express @types/cors @types/node

# Copiar o restante do código
COPY . .

# Compilar TypeScript
RUN yarn tsc

# Expor a porta necessária
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["yarn", "dev"]
