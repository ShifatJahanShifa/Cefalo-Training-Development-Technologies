Drizzle ORM: 
Type safe object relational mapping with our fav relational databases. We know how much complex a sql query can be. To save us from this complexity, there are many libraries over the decade in our fav OOP languages to hide this complexity. This technique is called object relational mapping. It was great but it has some problems. It may bring unnecessary performance overhead. Also it can cause leaky abstractions because the developers don't know how the underlying SQL code works.

Drizzle is an ORM that takes the opposite approach. It provides us api in typescript that is closely matches to the native underlying SQL code. This gives us the benefit of type safety and intellisense. We don't need any type of abstraction now. As every RDBMS is different, then how drizzle works? Drizzle does not jam everything into a single api. Rather it provides dedicated adapter and dedicated tools for cloud hosts like RDS and neon for every dbms. But still the codes look raw. So it optionally provides prisma like query api. Also it provides optional CLI called Drizzle Kit for handling database migration. Gui-Drizzle studio. Neon: cloud host.
We optionally have relational function which simplifies relational query, join table. 

Comparison between drizzle and prisma: 

1. Performance: 
Drizzle does not slow us down. For bun env
avg latency: Drizzle-30.3ms, Prisma-425ms
avg req/sec: Drizzle-6.0k  , Prisma-2.4k
avg CPU load:Drizzle-76.4% , Prisma-94.8%

so, drizzle is faster than prisma. This was built to have keeping the "speed" in mind. While Prisma was built having "ease" in mind. Drizzle takes all the database queries and run one query to database. Whereas, prisma does some processing. It may make query each time.

2. Underlying databases: 
Drizzle: MySQL, SQLite, Postgre
Prisma: MySQL, Postgre

Drizzle gives us option for database driver
Prisma uses prisma driver

So, both work for several databases but drizzle gives us some customization option like behind the scene which driver i want to use.

3. Studio
Both have studio version.

4. CLI
Both have CLI. Drizzle has Drizzle kit. Prisma has CLI but that does not have a fancy name.

5. Setup
Drizzle is much more difficult to set up than prisma. Because the flexibility
drizzle gives us to use database driver ehind the scene.

6. Migration
In Prisma, migration is easier than drizzle.

--------------------- So, in the setup category:
Prisma has the edge but it is not a big deal.

7. Schema definition: 
Prisma has the edge in this case. Relation among tables, prisma has the edge.

8. CRUD operation:
insert operation is as much as similar. But when i am performing joints operation, Prisma has much benefit than Drizzle. 


9. Type safety:
In drizzle, we write schema in a .ts file. In prisma, we write the schema in .prisma file. They both have same level of type safety. 


### Is Drizzle Really Better Than Prisma?

In this video, Kyle from Web Dev Simplified compares two popular ORMs, Prisma and Drizzle, highlighting their strengths and weaknesses. Prisma is easy to set up, beginner-friendly, and well-documented, but it sacrifices performance, especially in serverless environments. Drizzle, on the other hand, offers better performance and flexibility, especially for complex projects, but requires more boilerplate and SQL knowledge. The choice between the two depends on your project’s needs—Prisma is ideal for ease of use, while Drizzle excels in speed and control for advanced users.

Takeaways
😀 Prisma is easier to set up and configure, requiring less manual setup compared to Drizzle.
🚀 Drizzle is designed for performance and is faster in most scenarios, especially in serverless environments.
🔧 Prisma uses a custom schema definition language, while Drizzle relies on TypeScript for greater flexibility.
💡 Drizzle offers more control over queries, allowing raw SQL usage, but requires more manual effort, especially for complex queries.
⚡ Prisma abstracts away many complexities, automating relations and joins, making it easier for developers who prefer less manual query writing.
💻 Both Prisma and Drizzle provide excellent TypeScript support, ensuring type safety across queries and database interactions.
🔎 Prisma’s documentation is more extensive and beginner-friendly, while Drizzle’s documentation is newer and less polished but still thorough for its age.
📈 Drizzle’s leaner architecture results in fewer queries being sent to the database, improving overall performance.
🌐 Drizzle was specifically designed for serverless environments, making it a better choice for performance in such setups.
📊 While Drizzle excels in flexibility and raw performance, Prisma is a better option for those who prioritize ease of use and quick setup.


Q & A
What are the main differences in performance between Prisma and Drizzle?
-
Drizzle is generally faster than Prisma due to its lightweight design, which sends fewer database queries and does less internal processing. Prisma, on the other hand, incorporates more complex functionality and may send multiple queries, resulting in slower performance in certain cases.

Why is Drizzle faster than Prisma in serverless environments?
-
Drizzle was specifically designed with serverless environments in mind. It has a faster cold start compared to Prisma, which struggles in serverless scenarios due to its more complex engine. Prisma is working on improving this with features like Prisma Accelerate, but Drizzle is naturally faster in this regard.

How does Drizzle handle database queries compared to Prisma?
-
Drizzle sends a single database query for most operations, whereas Prisma processes queries internally before sending multiple requests to the database. This results in Drizzle being more efficient in terms of data transfer and query execution.

Which tool provides better documentation, Drizzle or Prisma?
-
Prisma has more mature and extensive documentation compared to Drizzle. While Drizzle’s documentation is thorough, it is newer and less developed, especially for beginners. Prisma’s documentation is well-suited for those just starting, offering clear guidance on setup and usage.

What is the main advantage of Drizzle's flexibility?
-
Drizzle allows developers to write raw SQL queries while maintaining type safety, giving them more control over the database. This flexibility is powerful for complex queries but requires more manual coding and understanding of SQL.

Is Drizzle a good choice for beginners with little SQL knowledge?
-
No, Drizzle is more suited for developers with a solid understanding of SQL because it requires raw SQL for more complex queries. Beginners might find it challenging to use. Prisma, with its abstraction of SQL queries, is a better choice for those with less backend experience.

Can both Drizzle and Prisma be used in the same project?
-
Yes, both Drizzle and Prisma can be used in the same project. The choice between the two depends on the specific needs of the project. Drizzle offers more flexibility and speed for complex queries, while Prisma excels at ease of use and ease of setup.

What is Prisma Accelerate, and how does it relate to performance?
-
Prisma Accelerate is a new feature designed to improve the performance of Prisma, especially in serverless environments. It addresses issues like slow cold starts by optimizing the connection between the Prisma engine and the database, making it more suitable for serverless applications.

What kind of projects are best suited for Drizzle?
-
Drizzle is ideal for projects that require high performance, flexibility, and complex queries, particularly in serverless environments. It's also great for developers who have strong SQL skills and want to optimize their database interactions.

When would Prisma be a better choice than Drizzle?
-
Prisma is a better choice for projects where ease of use, simplicity, and good documentation are priorities. It is ideal for developers who want to get up and running quickly without having to write raw SQL. Prisma is also a good option for those less familiar with backend development or SQL.