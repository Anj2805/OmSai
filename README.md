# OmSai Embroideries E-Commerce Website

An e-commerce platform for showcasing and selling embroidery products, designed to provide a seamless shopping experience. The project combines a responsive frontend with a robust backend to manage product data efficiently.

## Features

- **User-Friendly Interface**: Designed with React, HTML, CSS, and JavaScript for a responsive and visually appealing user experience.
- **Product Management**: Backend functionality to add new products dynamically.
- **Database Integration**: Uses MongoDB to store product details securely and ensure quick retrieval.
- **Responsive Design**: Optimized for use across devices including desktops, tablets, and smartphones.

## Technologies Used

### Frontend:
- **React**: For building reusable components and managing UI state.
- **HTML/CSS**: For structure and styling.
- **JavaScript**: For dynamic behavior and interactivity.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: To handle API requests and routes.

### Database:
- **MongoDB**: To store product details, such as names, prices, and descriptions.

### Tools:
- **Axios**: For handling HTTP requests between the frontend and backend.
- **Mongoose**: For database schema management.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/OmSai-Embroidery.git
   cd OmSai-Embroidery
   ```

2. Install dependencies for both the frontend and backend:
   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Set up MongoDB:
   - Install MongoDB and create a database named `omsai`.
   - Update the connection string in the backend's `.env` file.

4. Start the servers:
   ```bash
   # Backend
   cd backend
   npm start

   # Frontend
   cd ../frontend
   npm start
   ```

5. Access the application at `http://localhost:3000`.

## Future Enhancements

- **Authentication**: Add user login/signup functionality.
- **Payment Gateway**: Integrate payment options for a complete e-commerce experience.
- **Search and Filter**: Improve product search and category filtering.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for review.
