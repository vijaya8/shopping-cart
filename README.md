# shopping-cart

Node express server to get the products and categories data.

To run the application local follow the below steps:

1.clone the project first.

2.goto the root folder to the project.

3.install the node modules for that run below command

       npm i

4.after that start the server

      npm run start

Then server will be started.

I have used sequelize ORM and database i have used MSSQL.

I have setup the local database by using azure data studio.

I have created the tables Groups, Categories,Products.

I have used sequelize-auto for generate models. write the script.

To run this we have to run below command

goto the project folder.

# node db.js

migration and seeds for schema using knex module

created the schema using below command to create migrations for particular table.

       npx knex migrate:make groups1

After creating the schemas run the migrations to create tables in mssql

      npx knex migrate:latest

After that to feed the data for tables run below command

       npx knex seed:run
