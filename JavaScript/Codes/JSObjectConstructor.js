function Person(first, last, age)
{
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    }
} 