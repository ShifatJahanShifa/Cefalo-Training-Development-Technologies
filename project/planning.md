# My Project Planning


✅ Key Features
1. User Profiles & Roles
Travelers, Explorers, Admins/Moderators

Role-based access control (RBAC)

2. Travel Experience Sharing
Create/edit travel logs with sections:

Transport

Lodging

Food

Attractions

Metrics (Cost, Time, Effort)

Image uploads and geo-tagging

Category tagging

3. Wishlist Management
Create personal or group wishlists

Group items by region/theme

Add notes, annotations

Shareable wishlist links

4. Travel Matchmaking
Detect wishlist overlaps

View "Users Interested"

Initiate group chats / planning sessions

Collaborative trip planning with itinerary builder

5. Discovery & Search
Map-based service discovery

Nearby hotels, restaurants, transports using 3rd-party APIs

Filters: rating, price, type

6. Proximity Alerts
Push notifications (web/mobile)

User-defined radius around wishlist locations

Alerts on arrival near POIs or meetup points

7. Admin Tools
Content moderation

Category & tag management

API config management

🌿 GitHub Branch Structure
| Branch | Purpose                                                 |
| ------ | ------------------------------------------------------- |
| `main` | Stable production-ready code                            |
| `dev`  | Integration of all features under development (staging) |

🌱 Feature Branch Naming Convention
Create a branch for each feature using the format:
feature/<module>-<short-description>

Examples:
`feature/auth-login-system`

`feature/post-create-travel-log`

`feature/wishlist-add-remove`

`feature/chat-group-planning`

`feature/map-service-discovery`

`feature/notifications-radius-alerts`

`feature/admin-dashboard-controls`

🧩 Technology Mapping
| Technology     | Where You'll Use It                           | Purpose                                                          |
| -------------- | --------------------------------------------- | ---------------------------------------------------------------- |
| **React.js**   | `frontend/`                                   | Build the **UI**: pages, components, user interactions           |
| **TypeScript** | `frontend/`, `backend/`, `shared/` (optional) | Add **type safety** across frontend, backend, and shared modules |
| **Express.js** | `backend/`                                    | Build the **RESTful API server** to handle client requests       |
| **Prisma ORM** | `backend/prisma/`, `backend/models/`          | **Interact with your database** in a type-safe way               |


1. Frontend: React + TypeScript  // 
📁 frontend/

| Folder/File           | Purpose                                                       |
| --------------------- | ------------------------------------------------------------- |
| `src/components/`     | Reusable React components (e.g., Navbar, WishlistCard)        |
| `src/pages/`          | React Router views (Home, Profile, Wishlist, Discovery, etc.) |
| `src/features/`       | Organized logic & UI per feature (e.g., post, wishlist, chat) |
| `src/services/`       | API calls to backend using `fetch`/`axios`                    |
| `src/context/`        | React context for auth, notification settings, etc.           |
| `src/hooks/`          | Custom reusable hooks like `useAuth`, `useGeoLocation`, etc.  |
| `main.tsx`, `App.tsx` | Entry point and top-level routing                             |


2. Backend: Express.js + TypeScript + Prisma ORM   // 
📁 backend/

| Folder/File            | Purpose                                                             |
| ---------------------- | ------------------------------------------------------------------- |
| `src/index.ts`         | Main server entry point using Express                               |
| `src/routes/`          | API routes (e.g., `/api/posts`, `/api/wishlist`, etc.)              |
| `src/controllers/`     | Business logic to handle route requests                             |
| `src/middleware/`      | Authentication, error handlers, rate limiting                       |
| `src/services/`        | Extra logic, e.g., matching wishlist users, notification logic      |
| `src/utils/`           | Helper functions (geo calculations, etc.)                           |
| `prisma/schema.prisma` | Your **data model** definition — generates the DB schema via Prisma |
| `src/models/`          | Optional: abstracted data access logic using Prisma client          |


> Your components, props, and state will have types.
> PostGIS is a spatial database extender for postgresql.
> https://www.dhiwise.com/post/how-to-structure-and-organize-react-css-modules  
> https://medium.com/nerd-for-tech/structuring-react-projects-with-feature-driven-development-%EF%B8%8F-b671ee898145

// css file
🔍 Recommendation for Your Case:
Since you're using React + TypeScript, and want a clean, modular project, go with:

✅ CSS Modules + Global index.css
Local styles: Component.module.css

Global resets and base theme: index.css

This gives you both modularity and clarity.


In his article Screaming Architecture, Bob Martin says architectures should tell readers about the system, not the frameworks used. 

> https://profy.dev/article/react-folder-structure
> https://stackoverflow.com/questions/19041837/difference-between-res-send-and-res-json-in-express-js



`setup`
create folder backend.
npx create-react-app frontend
cd frontend
npm install --save typescript @types/react @types/react-dom
npx tsc --init
cd backend
npx tsc --init
npm install -D typescript ts-node-dev @types/node @types/express
npx tsc
to set up prisma--
npm install prisma --save-dev
npm install @prisma/client
npx prisma init
npx prisma generate
npx prisma migrate dev --name init   // for migration
"target": "es2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "dist",
    "rootDir": "src"


// auth 
npm install bcrypt @types/bcrypt
npm install jsonwebtoken @types/jsonwebtoken
dotenv
i need to validate data**** refresh token**




<!-- --------------------------------------------------------- feature/user-auth -->

✅ Feature: user-auth
🔧 Responsibilities:
User registration & login

JWT generation & validation

Role management (in token & middleware)

Token refresh/revoke (optional)

Logout


APIs:

| Method | Route            | Description                               |
| ------ | ---------------- | ----------------------------------------- |
| `POST` | `/auth/register` | Register a new user (with default role)   |
| `POST` | `/auth/login`    | Authenticate and return token with role   |
| `POST` | `/auth/logout`   | (If using sessions/cookies)               |
| `GET`  | `/user/me`       | Return logged-in user info including role |

| Method | Endpoint            | Description                              | Access        |
| ------ | ------------------- | ---------------------------------------- | ------------- |
| POST   | `/auth/register`    | Register a new user                      | Public        |
| POST   | `/auth/login`       | Login and receive token                  | Public        |
| POST   | `/auth/logout`      | Logout user                              | Authenticated |
| GET    | `/user/me`          | Get authenticated user info (w/ role)    | Authenticated |
| PUT    | `/auth/update-role` | (Optional) Update user role (admin only) | Admin Only    |



folder structure: 01
/user-auth
├── controllers
│   └── auth.controller.js
├── routes
│   └── auth.routes.js
├── middlewares
│   ├── auth.middleware.js       // e.g., verifyToken
│   └── role.middleware.js       // new: role-based access check middleware
├── utils
│   ├── jwt.js                   // generate/access JWTs
│   └── role.utils.js            // optional: helper functions for roles
├── models
│   └── user.model.js            // include email, password, role
├── validators
│   └── auth.validator.js
├── constants
│   └── roles.js                 // export ['traveler', 'explorer', 'admin']
└── index.js                     // entry point for this module



folder structure: 02

/user-auth
├── controllers
│   └── auth.controller.js
├── routes
│   └── auth.routes.js
├── middlewares
│   ├── auth.middleware.js        // verifyToken
│   └── role.middleware.js        // allowRoles([...])
├── models
│   └── user.model.js             // email, password, role, name, etc.
├── utils
│   └── jwt.js                    // generateToken, verifyToken
├── validators
│   └── auth.validator.js
├── constants
│   └── roles.js                  // ['explorer', 'traveler', 'admin']
└── index.js                      // export routes/middlewares


Why this is a good design?
Auth & role validation are security concerns, closely related — so grouping them in the same feature module makes logical sense.

Role validation is just another layer of middleware after verifying the token.

role.middleware.js can be reused anywhere in your app to protect routes based on roles.

Keeps related code (roles, tokens, validation) in one place → easier to maintain.





//-------------------------------------------------------- user profile----------------------

✅ Feature: user-profile
🔧 Responsibilities:
Update personal info (name, bio, image, etc.)

View/edit profile

View other users’ public profiles (optional)



APIs:

| Method  | Route            | Description                         |
| ------- | ---------------- | ----------------------------------- |
| `GET`   | `/user/:id`      | View public profile by ID           |
| `PUT`   | `/user/update`   | Update own profile                  |
| `PATCH` | `/user/password` | (Optional) Change password securely |

🔐 All of these require auth.middleware.js from user-auth

| Method | Endpoint           | Description                       | Access        |
| ------ | ------------------ | --------------------------------- | ------------- |
| GET    | `/profile/me`      | Get current user's profile        | Authenticated |
| PUT    | `/profile/update`  | Update profile info               | Authenticated |
| GET    | `/profile/:userId` | Get another user’s public profile | Optional      |




/user-profile
├── controllers
│   └── profile.controller.js
├── routes
│   └── profile.routes.js
├── middlewares
│   └── validateProfile.middleware.js     // optional validations
├── validators
│   └── profile.validator.js
└── index.js


/user-profile
├── controllers
│   └── profile.controller.js
├── routes
│   └── profile.routes.js
├── middlewares
│   └── validateUser.middleware.js   // Check ownership, optional
├── validators
│   └── profile.validator.js
└── index.js


//----------------------------------------- publish experience------------------------------

✅ Feature: publish-experience
🔧 Responsibilities:
Create and manage travel posts

Each post includes sections: transport, hotel, food, places, personal metrics (cost, duration, effort)

Upload images and geo-tracks

View travel experiences (individual or list)

/publish-experience
├── controllers
│   └── experience.controller.js       // business logic
├── routes
│   └── experience.routes.js           // route definitions
├── models
│   └── experience.model.js            // Mongoose/ORM schema
├── middlewares
│   └── upload.middleware.js           // handle image/geo-track uploads
├── validators
│   └── experience.validator.js        // input validation
├── utils
│   └── parser.js                      // optional: geo-track parsing, etc.
└── index.js                           // export routes/middleware


| Method | Endpoint                 | Description                              | Access        |
| ------ | ------------------------ | ---------------------------------------- | ------------- |
| POST   | `/experience`            | Create a new travel experience           | Authenticated |
| GET    | `/experience`            | Get all published experiences            | Public        |
| GET    | `/experience/:id`        | Get a specific experience by ID          | Public        |
| PUT    | `/experience/:id`        | Update an experience (if owner)          | Authenticated |
| DELETE | `/experience/:id`        | Delete an experience (if owner or admin) | Authenticated |
| POST   | `/experience/:id/upload` | Upload images or geo-tracks for a post   | Authenticated |


🚀 Optional Middleware/Utilities
upload.middleware.js: Use multer or cloudinary to handle uploads.

parser.js: Parse and store geo-track files (e.g., GPX, KML) if needed.

{
  title: String,
  description: String,
  transport: String,
  hotel: String,
  food: String,
  placesToVisit: [String],
  metrics: {
    cost: Number,
    duration: String,
    effort: String
  },
  geoTrackUrl: String,         // stored or linked
  images: [String],            // image URLs or file refs
  location: {
    lat: Number,
    lng: Number
  },
  author: ObjectId (User),
  createdAt: Date,
  updatedAt: Date
}


| Query Param | Type     | Description                                       |
| ----------- | -------- | ------------------------------------------------- |
| `category`  | String   | Filter by travel category (`food`, `hotel`, etc.) |
| `region`    | String   | Filter by region or location name (e.g., "Asia")  |
| `startDate` | Date     | Filter posts from a specific start date           |
| `endDate`   | Date     | Filter posts up to a specific end date            |
| `author`    | ObjectId | Filter by user ID                                 |
| `search`    | String   | Free-text search in title, description, etc.      |



//--------------------------------------------- wishlist management--------------------------------------------

the scenario is like. i can go for discover button. i will search for place of interest. The POI will appear in frontend. They see search results with photos, ratings, descriptions, etc. i can see the map location also these sort of description. now tell me,
from where i will see this sort of description?? There will be an option somewhere liek add to wishlist. when i will click the option, a modal of form will appear. 
from gpt: 

📋 Step 2: Select/Create Wishlist
A modal/dialog appears:

Select an existing wishlist (e.g., “Japan Trip 2025”)

Or create a new one (e.g., “Dream Mountains”)

but i am not still clear about this feature. 

myb there will be an option for select group or theme. i can also add note. I will generate a public link for sharing. 

gpt suggests to use opentripmap, google places, rapidapi key.


APIS:

📁 Create & Manage Wishlist
POST /wishlist
➤ Create a new wishlist (with title, theme, optional region)

GET /wishlist
➤ Get all wishlists of the current user

GET /wishlist/:id
➤ Get details of a specific wishlist (POIs, notes, etc.)

PUT /wishlist/:id
➤ Update wishlist info (title, theme, grouped data)

DELETE /wishlist/:id
➤ Delete a wishlist

📍 Manage POIs in Wishlist
POST /wishlist/:id/poi
➤ Add a POI (Point of Interest) to a wishlist

PUT /wishlist/:id/poi/:poiId
➤ Update notes or details of a POI

DELETE /wishlist/:id/poi/:poiId
➤ Remove a POI from a wishlist


Sharing Wishlist
POST /wishlist/:id/share
➤ Generate or update public/shared link

GET /shared/wishlist/:shareId
➤ Publicly viewable wishlist via shared link

POST /wishlist/:id/share/user
➤ Share with a specific user (via user ID or email)

/wishlist-management
├── controllers
│   └── wishlist.controller.js          # Main logic for wishlist & POIs
├── routes
│   └── wishlist.routes.js              # Express routes
├── models
│   └── wishlist.model.js               # Wishlist + nested POIs schema
├── services
│   └── share.service.js                # Logic for sharing/public links
├── middlewares
│   └── wishlist.middleware.js          # Optional access control or validation
├── validators
│   └── wishlist.validator.js           # Request validation schemas
├── utils
│   └── generateShareLink.js            # Utility for creating unique share IDs
└── index.js                            # Exports router, connects module


{
  user: ObjectId,           // owner
  title: String,
  theme: String,
  region: String,
  pois: [
    {
      name: String,
      location: { lat: Number, lng: Number },
      notes: String,
      category: String,
    }
  ],
  sharedWith: [ObjectId],   // user IDs
  publicShareId: String     // for shareable links
}



<!--    req obj     -->

| Property              | Description                                                                                                     |
| --------------------- | --------------------------------------------------------------------------------------------------------------- |
| `req.body`            | The parsed request body (e.g., JSON or form data) — requires middleware like `express.json()` or `body-parser`. |
| `req.params`          | Route parameters (e.g., `/user/:id`) — accessed like `req.params.id`.                                           |
| `req.query`           | Query string parameters (e.g., `/search?q=term`) — accessed like `req.query.q`.                                 |
| `req.headers`         | An object containing the request headers.                                                                       |
| `req.cookies`         | Cookies sent by the client — requires `cookie-parser` middleware.                                               |
| `req.signedCookies`   | Signed cookies, if you're using `cookie-parser` with a secret.                                                  |
| `req.method`          | HTTP method used (GET, POST, etc.).                                                                             |
| `req.url`             | Full request URL (without host).                                                                                |
| `req.originalUrl`     | The original request URL, even after any internal redirections.                                                 |
| `req.path`            | The route path, e.g., `/users/123`.                                                                             |
| `req.ip`              | The IP address of the client.                                                                                   |
| `req.protocol`        | `http` or `https`.                                                                                              |
| `req.secure`          | Boolean indicating if the request was via HTTPS.                                                                |
| `req.get(headerName)` | Retrieves a specific header (e.g., `req.get('Authorization')`).                                                 |


## Core response method: 

| Method                  | Description                                                |
| ----------------------- | ---------------------------------------------------------- |
| `res.status(code)`      | Sets the HTTP status code.                                 |
| `res.send(body)`        | Sends a response body (text, HTML, object, etc.).          |
| `res.json(obj)`         | Sends a JSON response (automatically sets `Content-Type`). |
| `res.end()`             | Ends the response without sending any data.                |
| `res.redirect(url)`     | Redirects to another URL.                                  |
| `res.set(field, value)` | Sets a response header.                                    |
| `res.get(field)`        | Returns the value of a response header.                    |


## Cookie method:

| Method                             | Description      |
| ---------------------------------- | ---------------- |
| `res.cookie(name, value, options)` | Sets a cookie.   |
| `res.clearCookie(name, options)`   | Clears a cookie. |


## file and download methods

| Method                       | Description                                         |
| ---------------------------- | --------------------------------------------------- |
| `res.sendFile(path)`         | Sends a file as response.                           |
| `res.download(path)`         | Sends a file for download.                          |
| `res.attachment([filename])` | Sets the `Content-Disposition` header for download. |


## rendering views

| Method                     | Description                        |
| -------------------------- | ---------------------------------- |
| `res.render(view, locals)` | Renders a view template with data. |


## other useful methods
| Method               | Description                                         |
| -------------------- | --------------------------------------------------- |
| `res.type(type)`     | Sets the `Content-Type` header.                     |
| `res.format(object)` | Sends different responses based on `Accept` header. |
| `res.location(path)` | Sets the `Location` header.                         |
| `res.links(links)`   | Sets the `Link` header.                             |
