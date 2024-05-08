<h1 align="center">NodeJs + Cerbos Demo</h1>

<p align="center">
  NodeJs API server that uses Cerbos for smooth authorization.
</p>
<br>

## Introduction

This is a ExpressJs application that provides a APIs for users to view and manage courses. It uses Cerbos for authorization.

<br>

## Tech Stack

- [Node.js](https://nodejs.org/) – JavaScript runtime

- [Express](https://expressjs.com/) – NodeJs Web application framework

- [Cerbos](https://www.cerbos.dev/) – Authorization Service

- [docker](https://www.docker.com/) - Containerization platform

- [fly.io](https://fly.io) - Deployments

- [Git](https://git-scm.com/) – versioning

<br>

## 🐳&nbsp;&nbsp; Run with Docker locally

0. **Prerequisites**

   Make sure you have the [Docker](https://www.docker.com/) installed on your machine.

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rohitg00/fly-cerbos-demo.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd node-cerbos-fly/server
   ```

3. **Add Environment Variables:**

   Create .env file in the root folder and copy paste the content of .env.sample.

   ```bash
   cp .env.sample .env
   ```

   If required, add/replace credentials.

4. **Start the services using Docker Compose from Root:**

   ```bash
   cd ..
   docker-compose up

   # then press 'w' to Enable Watch (For Hot Reloading)
   ```

<br>

## Deployemnt Setup

0.  **Prerequisites**

    Make sure you have the following installed on your machine:

    - [Git](https://git-scm.com/)
    - [Node.js](https://nodejs.org/en)
    - [docker](https://www.docker.com/)
    - [flyctl](https://fly.io/docs/hands-on/install-flyctl/)

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/rohitg00/fly-cerbos-demo.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd node-cerbos-fly
    ```

3.  **Deploy Cerbos PDP:**

    - **Navigate to the cerbos directory in your terminal:**

      ```bash
      cd cerbos
      ```

    - **Use Fly Launch to quickly deploy PDP instance using a Docker image. :**

      ```bash
      flyctl launch
      ```

4.  **Deploy NodeJs App:**

    - **Navigate to the server directory in your terminal:**

      ```bash
      cd ../server
      ```
    - **Add and update Environment Variables:**
      1. Open the [fly.toml](./server/fly.toml) file, Copy `CERBOS_PDP_URL`

      2. Update the environment variables in `.env.prod.sample`, especially set `CERBOS_PDP_URL` to the URL of your deployed Cerbos PDP instance.
      3. Create `.env` file in the root folder and copy paste the content of `.env.prod.sample`.

      ```bash
      cp .env.prod.sample .env
      ```

    - **Use Fly Launch to quickly deploy NodeJs api sever using a Docker image. :**

      ```bash
      flyctl launch
      ```

5. **Testing APIs using Postman**

   - Open Postman

   - Import this [collection](./server/node-cerbos.postman_collection.json).

   - Replace the URL in each request with the URL of your Node.js server.

   - Access the courses and test whether the authorization logic is working properly.

<br>

## Contributing

Contributions are always welcome! Feel free to open issues or submit PRs.
