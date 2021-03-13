# Redbelt - Tech Test

This project is a Tech Test for the company Redbelt. \
It's developed in Lumen and React

## Configuration

Configure the `.env` for the application
```bash
  cd backend
  cp .env.example .env
```

Run docker
```bash
  docker-compose up -d
```
PS: Docker might take some secounds to build, if you see an error on the following command, wait a couple secounds and try again.

Run migrations to build DB
```bash
  docker exec -it php php /var/www/html/artisan migrate
```

## Frontend App

To see the frontend app access `http://localhost:3001/`

## API Documentation

Import the `./api.json` at Postman, Insomnia etc, to check project's APIs.
