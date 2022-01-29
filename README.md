# Usage
## Env Dependencies: `.env.local`

The following `.env.local` file should be included, with the proper values.
```
DB_HOST=[postgres hostname]
DB_PORT=[postgres used]
POSTGRES_USER=[postgres username]
POSTGRES_PASSWORD=[postgres password]

# default to http://localhost:3000
API_URL=[docker hostname endpoint]

```
# Docker Usage

Assuming you have a `.env.local` file, run:
```
docker-compose up
```

# Local Usage

As NextJs12 is used, `node v12` is required for a local usage.

## Dependencies installation
```
npm run install
```

## Dev server
After installing the dependencies

```
npm run dev
```

## Linting 


```
npm run lint
```

## Unit tests (using jest)

```
npm run test
```

## E2E tests (with dev server started)
```
npm run cypress
```
