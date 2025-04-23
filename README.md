# Phudu - Doctors Appointment Booking Platform

![Phudu Logo](./public/logo.png)

Phudu is a modern web application for booking appointments with verified, experienced doctors across various specialties. The platform connects patients with healthcare professionals in a user-friendly interface.

## 🌟 Live Demo

Visit the live application: [https://phudu-2437.surge.sh](https://phudu-2437.surge.sh)

## ✨ Features

- **Doctor Profiles**: Detailed information about doctors including specialties, education, experience, and registration numbers
- **Appointment Booking**: Schedule appointments with available doctors
- **Search Functionality**: Search for doctors by name or specialty
- **My Bookings**: View and manage your scheduled appointments
- **Statistics Visualization**: Interactive charts showing consultation fees and booking data
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **Blog Section**: React interview questions and answers

## 🛠️ Technologies Used

- **Frontend**: React (v19), React Router (v7)
- **UI/Styling**: Tailwind CSS, DaisyUI
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State Management**: React Hooks (useState, useEffect)
- **Notifications**: React Hot Toast
- **Icons**: React Icons
- **Build Tool**: Vite
- **Deployment**: Surge

## 📊 Project Structure

```
phudu/
├── public/
│   ├── blogPosts.json    # Blog data
│   ├── doctors.json      # Doctors data
│   ├── logo.png          # Logo/favicon
│   ├── vite.svg          # Vite logo
│   └── _redirects        # Surge redirects configuration
├── src/
│   ├── assets/           # Images and static assets
│   ├── Components/       # React components
│   │   ├── BarChart/     # Chart components
│   │   ├── Blogs/        # Blog components
│   │   ├── BookingList/  # Booking components
│   │   ├── DoctorDetails/# Doctor profile components
│   │   ├── DoctorsCard/  # Doctor card components
│   │   ├── Footer/       # Footer component
│   │   ├── Hero/         # Hero section
│   │   ├── LoadingSpinner/ # Loading state components
│   │   └── Navbar/       # Navigation component
│   ├── hooks/            # Custom hooks
│   ├── layouts/          # Layout components
│   ├── pages/            # Page components
│   ├── routes/           # Routing configuration
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # Entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd phudu
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view the application in your browser.

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

The build files will be located in the `dist` directory.

## 🌐 Deployment

This project is configured for deployment on Surge. To deploy:

1. Build the project:

   ```bash
   npm run build
   ```

2. Copy required files to the dist directory:

   ```bash
   copy CNAME dist\
   copy public\logo.png dist\
   copy public\_redirects dist\
   copy public\doctors.json dist\
   copy public\blogPosts.json dist\
   copy dist\index.html dist\200.html
   ```

3. Deploy using Surge:
   ```bash
   surge dist/ phudu-2437.surge.sh
   ```

## 📱 Screenshots

![Homepage](screenshots/homepage.png)
_(Screenshots will be added here)_

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

- **MD Hossain** - [GitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- Images and icons from various sources
- Special thanks to all contributors
