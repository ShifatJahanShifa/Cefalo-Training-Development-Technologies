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
