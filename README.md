# API v1 Blog service

Proyecto RESTful que puede utilizarse para una pagina similar a [dev.to](http://dev.to), desarrollado utilizando Node.js, Express, MongoDB, mongoose, JWT, bcryptjs, http-errors y dotenv.

## Requisitos

- Node.js v14 o superior
- MongoDB

## Instalación

1. Clona el repositorio:

```bash
git clone git@github.com:Yairgg95/desafioAPI.git

cd desafioAPI
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:

Crea un archivo .env en la raíz del proyecto con el siguiente contenido, reemplazando los valores según sea necesario:

```bash
# DATABASE ACCESS
DB_USER=
DB_PASSWORD=
DB_HOST=
DB_NAME=

# JWT
JWT_SECRET=
```

## Inicializacion del servidor en local

Inicia el servidor en localhost con el siguiente comando:

```bash
npm run start
```

## Inicialización del servidor

Puedes iniciar el servidor en la siguiente URL;

```
https://desafioapi-awef.onrender.com/user
```

Esta URL te permitirá interactuar con la API.

## Endpoints Disponibles

1. POST /user : Registra un nuevo usuario.

Ejemplo de body de la solicitud:

```bash
{
  "name": "John Doe",
  "profilePic": "http://example.com/profile.jpg",
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

2. GET /user : Obtiene la información de todos los usuarios.

Respuesta:

```bash
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "profilePic": "http://example.com/profile.jpg",
  "email": "john.doe@example.com",
  "created_at": "2024-06-06T00:00:00.000Z",
  "updated_at": "2024-06-06T00:00:00.000Z"
},
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "profilePic": "http://example.com/profile.jpg",
  "email": "john.doe@example.com",
  "created_at": "2024-06-06T00:00:00.000Z",
  "updated_at": "2024-06-06T00:00:00.000Z"
}
```
3. GET /user/userId : Obtiene la información de un usuario por ID.

Respuesta:

```bash
{
  "_id": "60d0fe4f5311236168a109ca",
  "name": "John Doe",
  "profilePic": "http://example.com/profile.jpg",
  "email": "john.doe@example.com",
  "created_at": "2024-06-06T00:00:00.000Z",
  "updated_at": "2024-06-06T00:00:00.000Z"
}
```

## Autenticación

1. POST /auth/login : Otorga un nuevo JWT al iniciar sesión.

Solicitud:

```bash
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```



## Post

1. POST /posts : Crea un nuevo post (requiere autenticación).


Headers: Agrega un header llamado Authorization con el valor del token

Solicitud:

```bash
{
  "title": "My First Post",
  "image": "http://example.com/image.jpg",
  "body": "This is the body of my first post."
}
```

2. GET /posts: Lista todos los posts.

Puedes utilizar el query param search para filtrar por titulo

Respuesta:

```bash
[
  {
    "_id": "60d0fe4f5311236168a109cb",
    "title": "My First Post",
    "image": "http://example.com/image.jpg",
    "body": "This is the body of my first post.",
    "user": {
      "_id": "60d0fe4f5311236168a109ca",
      "name": "John Doe"
    },
    "created_at": "2024-06-06T00:00:00.000Z",
    "updated_at": "2024-06-06T00:00:00.000Z"
  }
]
```

3. PATCH /posts/postId : Actualiza un post (requiere autenticación).
   Headers: Agrega un header llamado Authorization con el valor del token

Solicitud:

```bash
{
  "title": "Updated Post Title",
  "body": "Updated body content."
}
```

4. DELETE /posts/postId : Elimina un post (requiere autenticación).

Headers: Agrega un header llamado Authorization con el valor del token

Respuesta:

```bash
{
  "success": "true"
  "data": "{ deleted post }" 
}
```
## Autor y Desarrollador

Este proyecto fue desarrollado por [Yair Guadarrama](https://github.com/Yairgg95).

