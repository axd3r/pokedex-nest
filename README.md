
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
<p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
</p>

# Pokémon API - NestJS

Una API para gestionar Pokémon desarrollada con **NestJS** y **MongoDB**.

## ✍️ Autor

**Joaquin Orihuela**  
Versión: `0.0.1`  
Licencia: `UNLICENSED`

## 🚀 Stack Tecnológico

- NestJS
- MongoDB (vía Mongoose)
- TypeScript

## ⚙️ Setup del proyecto

```bash
pnpm install
```

## ▶️ Levantar base de datos

```bash
docker-compose up -d
```

## 🛠️ Ejecutar el proyecto

```bash
# Modo desarrollo
pnpm run start:dev

# Modo producción
pnpm run build
pnpm run start:prod
```

## ✅ Tests

```bash
pnpm run test       # Unit tests
pnpm run test:e2e   # End to end tests
pnpm run test:cov   # Cobertura de tests
```

## 📦 Endpoints disponibles

- Base URL: `/api/pokemon`
- Seed Data: `/api/seed`

### 🔹 Cargar Pokémons

`GET /api/seed`

Se cargaran 50 pokémons con los atributos de número, nombre y tipos, si la carga es correcta devolvera
```json
{
    "status": "Success",
    "message": "Seed Executed"
}
```

### 🔹 Crear Pokémon

`POST /api/pokemon`  
Cuerpo:

```json
{
  "name": "Pikachu",
  "no": 25,
  "types": ["electric"]
}
```

### 🔹 Obtener todos los Pokémon

`GET /api/pokemon`

### 🔹 Obtener un Pokémon por ID

`GET /api/pokemon/:id`

### 🔹 Actualizar un Pokémon

`PATCH /api/pokemon/:id`  
Cuerpo:

```json
{
  "name": "raichu"
}
```

### 🔹 Eliminar un Pokémon

`DELETE /api/pokemon/:id`

## 🧪 Validaciones

- Todos los IDs se validan como MongoID usando `ParseMongoIdPipe`.

## 🚨 Manejo de errores

- `400 Bad Request`: formato inválido o duplicado.
- `404 Not Found`: recurso no encontrado.
- `500 Internal Server Error`: error del servidor.

---

Este proyecto es parte de un aprendizaje práctico con NestJS.
