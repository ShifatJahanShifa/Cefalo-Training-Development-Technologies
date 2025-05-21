# PostGreSql

when I will create a table, i nedd to specify which column i want to have value and it is a must. That means, if i need, i nedd to use constraints to enforce it. Like if a column seems to not as a mandatory column, then we should not psecify `not null` in this case.

Use `Bigserial` for primary key or any id because it autoincrements.

`Commands:`

1. create a database
2. create a table
3. insert into table
4. select from table
5. order by for sorting. 
(syntax: select * from table Order By id asc; ) if a column has null values, then sorting it in desc order, all the null valued row will come first. then actual rule for ascending will be applied.
6. distinct keyword in output
7. where clause , and, or operator
8. comparision operator can be used with number, string, date. <> means not equal.
9. In keyword
10. Between ... And
11. for pattern matching, we can use like keyword. we use `%` for having wildcard behavior. for single character, use `_` underscore. For matching without the consideration of case, use `Ilike`.
12. Group By , select group by column, count(*) . // count(*)
13. having provides us the facility of extra filtering after the aggregation. group by + having
14. max, min, avg. while using group by, i can only use the column used in group by and aggregate functions with any column.
15. sum 
16. math operators like factorial(!)
17. round function for math operation.
18. As for creating alias