# What is ORM?

ORM- Object Relational Mapping. It is a programming technique that uses objects to interact with databases rather than writing raw SQL queries. ORM library treats the db table as a class and rows of it as instances of the class. A SQL string is passed from the app code to the database by db package or dbms like postgree, mysql. 
```
app code -> interaction with ORM -> ORM contacts with database
```

We don't need to know how the tables are strcutured in a database even SQL language. I will have a model. This model will define how the object will be structured in the app code. 
ORM is a way of interacting with databases like inserting data and retrieving data from a database. TTo do this task, we don't need any database specific things. Like SQL query. 

The pros of an ORM:
1. it abstracts the underlying database.
2. I don't need to use or write any database specific code.
3. I can easily changte the underlying database. No changes are made to the project code.
4. secure

The cons of an ORM: 
1. needs to learn the orm syntax.
2. it is not performant as RDBMS.


Prisma is built on top of typescript. 

## PostGreSQL
It is an open-source database.

Migration: we make changes to our databases using migration. client code -> migration -> database.