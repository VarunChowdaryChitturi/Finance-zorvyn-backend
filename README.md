# Finance Backend System

## Tech Stack
- Node.js
- Express.js
- MongoDB

## Features
- User management with roles (admin, analyst, viewer)
- Financial records (income & expenses)
- Dashboard summary (total income, expenses, balance)
- Role-based access control

## API Endpoints

### Users
- POST /api/users
- GET /api/users

### Records
- POST /api/records
- GET /api/records

### Dashboard
- GET /api/dashboard/summary

## How to Run
1. npm install
2. npm run dev

## Notes
- Role is passed via headers (mock authentication)