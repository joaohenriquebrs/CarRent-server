# Catálogo de Carros server

## Front-end
- #### Repository: https://github.com/joaohenriquebrs/CarRent-client.git

## Tools
- Node
- Express
- Typescript
- Nest
- Prisma
- Postgres

## Running the project

1. Make sure you have **Node.js** installed (version 20 or higher).
2. Be sure you have **node** and **npm** (or **yarn**, if you use it) installed.
3. Clone the repository by running
```bash
git clone https://github.com/joaohenriquebrs/CarRent-server.git
```
4. Install all the dependencies by running
```bash
npm install
# or
yarn install
```
5. Create .env 
```bash
cp .env.example .env
# and
Edit the .env file and update DATABASE_URL with your database URL
```
6. Install Nest CLI globally
```bash
npm install -g @nest/cli
# or 
yarn global add @nestjs/cli
```
7. Run Prisma migrations
```bash
npx prisma migrate dev
# or 
yarn prisma migrate dev
```
8. Populate the database with initial vehicles and create a default admin
```bash
npm run seed
# or
yarn run seed
```
9. Start the development server
```bash
npm run dev
# or
yarn run dev
```
## Done