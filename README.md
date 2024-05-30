# Catálogo de Carros server

## Front-end
- #### Repository: https://github.com/joaohenriquebrs/CarRent-client.git

## Tools
- Node
- Express
- Nest
- Prisma
- Postgres

## Running the project

1. Be sure you have **node** and **npm** (or **yarn**, if you use it) installed.
2. Clone the repository by running
```bash
git clone https://github.com/joaohenriquebrs/CarRent-server.git
```
3. Install all the dependencies by running
```bash
npm install
# or
yarn install
```
4. Create .env 
```bash
cp .env.example .env
# and
Edit the .env file and update DATABASE_URL with your database URL
```
5. Install Nest CLI globally
```bash
npm install -g @nest/cli
# or 
yarn global add @nestjs/cli
```
6. Run Prisma migrations
```bash
npx prisma migrate dev
# or 
yarn prisma migrate dev
```
7. Populate the database with initial vehicles and create a default admin
```bash
npm run seed
# or
yarn run seed
```
8. Start the development server
```bash
npm run dev
# or
yarn run dev
```
## Done