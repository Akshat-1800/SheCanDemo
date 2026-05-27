
# She Can Foundation — Demo Assignment Project

A modern full-stack NGO website built as a demo internship assignment for **She Can Foundation**.

This project focuses on:
- Women empowerment awareness
- Community engagement
- Full-stack form handling
- Admin dashboard management
- Clean modern NGO UI

Built using:
- Next.js (App Router)
- JavaScript
- MongoDB
- Mongoose
- Tailwind CSS
- shadcn/ui
- Framer Motion
- React Hook Form
- Zod

---

# Features

## Public Website
- Responsive NGO landing page
- Hero, About, Programs, Quote & Footer sections
- Contact/Join form
- Modern UI with animations
- Custom favicon/logo

## Backend Integration
- MongoDB database integration
- API routes using Next.js Route Handlers
- Form submission storage
- Duplicate email prevention

## Admin Dashboard
- Protected admin route
- View submissions
- Pagination (5 entries at a time)
- Detailed submission modal
- Delete functionality
- Responsive dashboard UI

## Admin Protection
- Cookie-based admin authentication
- Middleware route protection
- Simple password access system

---

# Setup Instructions

## 1. Clone Repository


git clone <your-repo-url>
cd she-can-foundation


---

## 2. Install Dependencies


npm install


---

## 3. Configure Environment Variables

Create:


.env.local


Add:


MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_ADMIN_SECRET=your_admin_password


---

## 4. Run Development Server


npm run dev


Visit:


http://localhost:3000


---

# Admin Access

Admin Login Route:


/admin-login


Admin Dashboard:


/admin


Use the password stored in:


NEXT_PUBLIC_ADMIN_SECRET


---

# Project Structure


app/
 ├── admin/
 ├── admin-login/
 ├── api/
 │    └── contact/
 ├── page.js
 ├── layout.js

components/
 ├── admin/
 ├── ui/

lib/
 ├── mongodb.js

models/
 ├── submission.js

---

# Important Note

This project was developed as a **demo internship assignment** and focuses on showcasing:

* Full-stack development skills
* UI/UX implementation
* API integration
* Database handling
* Basic admin functionality

It is NOT intended to be a production-grade enterprise application.

---

# Current Limitations

## Authentication

The admin authentication system is intentionally lightweight.

Current implementation:

* Cookie-based authentication
* Environment variable password check
* Middleware route protection

Missing enterprise-level features:

* JWT authentication
* OAuth providers
* Role-based access control
* Session management
* Refresh tokens
* Cookie TTL management
* Secure HTTP-only cookies
* Database-backed sessions
* Rate limiting
* CSRF protection
* Brute-force protection

---

## Dashboard Limitations

* No search/filter functionality
* No export functionality
* No analytics
* No multi-admin support

---

# Future Improvements

Potential future enhancements:

* Proper authentication system
* Email notifications
* Admin analytics
* Search & filtering
* Role-based admin access
* Rich text submissions
* Cloudinary image uploads
* Deployment optimization
* Docker support

---

# Author

Developed by Akshat Jaiswal
As a demo assignment submission for She Can Foundation.

