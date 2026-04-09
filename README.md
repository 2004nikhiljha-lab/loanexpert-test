# Loan Expert Website

A professional loan consultation website with admin dashboard for managing enquiries.

## Features

- Responsive landing page optimized for desktop and mobile
- Customer enquiry form with validation
- Admin login system (username: admin, password: admin123)
- Dashboard to view, approve, and reject loan applications
- Search and filter functionality for enquiries
- Modern UI/UX with Tailwind CSS

## Technology Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Lucide React for icons
- LocalStorage for data persistence

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm start
```

3. Open http://localhost:3000

## Usage

### Customers
- Browse loan services
- Fill enquiry form
- Submit application

### Admin
- Go to /admin/login
- Login with admin/admin123
- Manage enquiries from dashboard

## Project Structure

```
src/
├── components/
│   ├── Home.tsx          # Landing page
│   ├── AdminLogin.tsx    # Admin login
│   └── AdminDashboard.tsx # Admin dashboard
├── App.tsx               # Main app with routing
└── index.css             # Global styles
```

## Backend Setup (Optional)

For production use with MongoDB database:

1. Navigate to server directory:
```bash
cd server
```

2. Install backend dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Required variables:
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for authentication
- `REACT_APP_API_BASE_URL`: Backend API URL

## Build for Production

```bash
npm run build
```
