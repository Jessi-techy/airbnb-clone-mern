Airbnb Clone (MERN Stack)

This is a 30% completed Airbnb clone built using the MERN stack (MongoDB, Express, React, Node.js). The project aims to replicate the core functionalities of Airbnb with additional features.

Features Implemented
- Authentication:
  - User signup and login using JWT.
- Property Listings:
  - CRUD operations for property management.
- Search & Filter:
  - Basic search by location and price.
- Responsive Design:
  - Optimized for mobile and desktop using Tailwind CSS.

 Upcoming Features
- Booking system with payment integration (Stripe).
- Reviews and ratings for properties.
- Admin dashboard for managing users and listings.

 Project Structure


airbnb-clone-mern/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── PropertyCard.jsx
│   │   │   └── SearchBar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   └── Signup.jsx
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Property.js
│   │   └── Booking.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── property.js
│   │   └── booking.js
│   ├── config/
│   │   └── db.js
│   ├── server.js
│   └── package.json
└── README.md
