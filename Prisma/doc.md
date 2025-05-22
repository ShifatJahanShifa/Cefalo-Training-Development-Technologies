schema.prisma
generator, datasource core components of prisma
The generator block tells Prisma what kind of code it should generate, and how.
the generator block tells prisma what kind of code it should generate.
provider='prisma-client-js' : tells prisma to generate client code in js/ts so that from the code, i can interact with database. 

------------------------------------------------------
username: postgres
password: shifa

client holo basically code jar maddhome amra database r sathe interact kori.

to migrate: 
npx prisma migrate dev --name init


model User {
  id              String            @id @default(uuid())
  name            String
  age             Int
  email           String
  role            Role              @default(BASIC)
  // preferences       Json
  // Posts       Post[]  // 1 to *. 
  writtenPosts    Post[]            @relation("writtenPosts")
  favoritedPosts  Post[]            @relation("favoritePosts")
  userPreferences userPreferences?
  // block level attribute
  @@unique([name,age])  // two user cannot have same name and age
  @@index([email])    // improves sorting or searching by email performance. actually if we want to do query by an email, in that case, index on email can be beneficial.
}
