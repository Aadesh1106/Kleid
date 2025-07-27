# Kleid - MERN Stack E-commerce Platform

A full-stack e-commerce application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring a customer frontend, admin dashboard, and robust backend API.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-green.svg)

## 🚀 Features

### Customer Frontend
- 🛍️ Product browsing and search
- 🛒 Shopping cart management
- 👤 User authentication (Login/Signup)
- 📱 Responsive design for all devices
- 💳 Order placement and tracking
- 🔍 Advanced product filtering
- 📧 Email notifications

### Admin Dashboard
- 📊 Product management (Add/Edit/Delete)
- 📦 Order management and tracking
- 👥 User management
- 📈 Sales analytics
- 🖼️ Image upload with Cloudinary
- 📋 Inventory management

### Backend API
- 🔐 JWT-based authentication
- 🛡️ Secure password hashing with bcrypt
- ☁️ Cloud image storage (Cloudinary)
- 💾 MongoDB database integration
- 🔄 RESTful API endpoints
- 🛒 Cart management
- 💰 Payment integration (Razorpay)

## 🛠️ Tech Stack

### Frontend (Customer & Admin)
- **React.js** 18.3.1 - UI Library
- **Vite** 5.4.1 - Build Tool
- **Tailwind CSS** 3.4+ - Styling
- **React Router DOM** 6.26+ - Navigation
- **Axios** 1.7+ - HTTP Client
- **React Toastify** 10.0+ - Notifications

### Backend
- **Node.js** - Runtime Environment
- **Express.js** 4.21+ - Web Framework
- **MongoDB** - Database
- **Mongoose** 8.6+ - ODM
- **JWT** - Authentication
- **Bcrypt** - Password Hashing
- **Multer** - File Upload
- **Cloudinary** - Image Storage
- **Razorpay** - Payment Gateway

## 📁 Project Structure

```
Kleid/
├── frontend/          # Customer-facing React app
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Route components
│   │   ├── context/       # React Context
│   │   └── assets/        # Images & static files
│   └── package.json
├── admin/             # Admin dashboard React app
│   ├── src/
│   │   ├── components/    # Admin components
│   │   ├── pages/         # Admin pages
│   │   └── assets/        # Admin assets
│   └── package.json
├── backend/           # Node.js API server
│   ├── controllers/       # Route handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Custom middleware
│   ├── config/           # Configuration files
│   └── package.json
└── README.md
```

## ⚡ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Cloudinary account
- Razorpay account (for payments)

### 1. Clone Repository
```bash
git clone https://github.com/yourusername/kleid-ecommerce.git
cd kleid-ecommerce
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
touch .env
```

Add environment variables to `.env`:
```env
MONGODB_URI=mongodb://localhost:27017/kleid_ecommerce
JWT_SECRET=your_jwt_secret_key_here
ADMIN_EMAIL=admin@kleid.com
ADMIN_PASSWORD=admin123
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
PORT=4000
```

```bash
# Start backend server
npm run server
# or for production
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
touch .env
```

Add to frontend `.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
# Start frontend development server
npm run dev
```

### 4. Admin Dashboard Setup
```bash
cd ../admin
npm install

# Create .env file
touch .env
```

Add to admin `.env`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
# Start admin development server
npm run dev
```

## 🚀 Running the Application

### Development Mode
Open 3 terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend && npm run server
```

**Terminal 2 - Frontend:**
```bash
cd frontend && npm run dev
```

**Terminal 3 - Admin:**
```bash
cd admin && npm run dev
```

### Access Points
- **Customer Frontend:** http://localhost:5173
- **Admin Dashboard:** http://localhost:5174
- **Backend API:** http://localhost:4000

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/user/register - User registration
POST /api/user/login - User login
POST /api/user/admin - Admin login
```

### Product Endpoints
```
GET /api/product/list - Get all products
POST /api/product/add - Add new product (Admin)
POST /api/product/remove - Remove product (Admin)
GET /api/product/single - Get single product
```

### Cart Endpoints
```
POST /api/cart/get - Get user cart
POST /api/cart/add - Add to cart
POST /api/cart/update - Update cart item
```

### Order Endpoints
```
POST /api/order/place - Place new order
POST /api/order/userorders - Get user orders
GET /api/order/list - Get all orders (Admin)
POST /api/order/status - Update order status (Admin)
```

## 🔐 Authentication Flow

1. User registers/logs in via frontend
2. Backend validates credentials
3. JWT token generated and sent to client
4. Token stored in localStorage
5. Token included in API request headers
6. Backend middleware validates token
7. Access granted to protected routes

## 🛒 Shopping Cart Logic

- Cart data stored in React Context
- Persistent storage in localStorage
- Backend synchronization for logged-in users
- Real-time cart count updates
- Size and quantity management

## 💳 Payment Integration

- Razorpay payment gateway integration
- Secure payment processing
- Order confirmation system
- Payment status tracking

## 🎨 UI/UX Features

- Responsive design (mobile-first)
- Modern Tailwind CSS styling
- Loading states and error handling
- Toast notifications
- Smooth animations and transitions
- Intuitive navigation

## 🔧 Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
npm run preview
```

### Admin Build
```bash
cd admin
npm run build
npm run preview
```

### Backend Production
```bash
cd backend
npm start
```

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret
PORT=4000
```

### Frontend (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

### Admin (.env)
```env
VITE_BACKEND_URL=http://localhost:4000
```

## 🧪 Testing

```bash
# Run ESLint
npm run lint

# Build test
npm run build
```

## 🚀 Deployment

### Vercel Deployment
The project includes `vercel.json` files for easy deployment:

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
1. Build frontend and admin dashboards
2. Deploy backend to hosting service
3. Update environment variables
4. Configure domain and SSL

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**N. Aadesh**
- GitHub: [@Aadesh1106](https://github.com/Aadesh1106)
- LinkedIn: [Aadesh-N](https://linkedin.com/in/Aadesh-N)
- Email: aadeshn45@gmail.com

## 🙏 Acknowledgments

- React team for the amazing library
- Vite for the fast build tool
- Tailwind CSS for utility-first styling
- MongoDB for the flexible database
- Cloudinary for image management
- Razorpay for payment processing

---

⭐ **Star this repository if you found it helpful!** ⭐
