# Database Migration 

It is like version control for database. Why do we need migration? 

- Version Control for Database Schema: Just as source code is version-controlled, database schemas need to be versioned to track changes over time. This ensures that all team members are working with the same database structure, reducing inconsistencies and conflicts.

- For migration, we write a script which will migrate the database from one version to another version. 

- Migrations can include rollback scripts, allowing teams to revert to previous database states if a deployment introduces issues. This safety net is vital for maintaining application stability.

- keep the database up to date with the schema. 

In the scope of database, we have two types of migration. 
1. schema migration. ( changes in schema so migrate)
2. data migration. (move data from one db to another db)

further explore: https://www.youtube.com/watch?v=mMsZPZKNc4g&t=717s
