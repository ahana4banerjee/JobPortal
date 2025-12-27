# Job Portal — MERN Stack Web Application

A full-stack job portal built with the MERN stack that enables **job seekers** to discover and apply for jobs and **recruiters** to post, manage, and track applications through role-based dashboards.

🔗 **Live Demo:** https://job-portal-sable-eight.vercel.app/

---
## Problem Statement

Most job portals overwhelm users with cluttered interfaces or fail to provide streamlined workflows for tracking applications and managing job listings. Recruiters struggle with applicant management, while job seekers lack clear visibility into their application progress.

This project delivers a **simple, role-based job portal** with intuitive dashboards, secure file handling, and real-time application tracking.

---

## Why I Built This

- To understand how real-world platforms implement **role-based authentication systems**.  
- To gain hands-on experience with **secure file uploads**, resume storage, and user dashboards.  
- To build a production-style MERN application that mirrors practical industry use cases.

---

## Key Features

### Role-Based Access
- **Job Seekers:** Register, manage profiles, upload resumes, apply & track applications  
- **Recruiters:** Post, edit & delete jobs, view applicant details  

### Core Functionality
- JWT-based authentication & authorization  
- Secure resume & profile image uploads using Cloudinary  
- Job search, filtering & application tracking  
- Application withdrawal & status management  
- Admin dashboard for platform moderation  

---

## Tech Stack

### Frontend
- React  
- React Router  
- Tailwind CSS, Shadcn UI  
- Axios  

### Backend
- Node.js  
- Express.js  
- MongoDB (Mongoose ODM)

### Cloud & Utilities
- Cloudinary — File & image storage  
- JWT & bcrypt — Authentication & security  
- Multer — File handling  
- Dotenv — Environment configuration  
- Vercel — Deployment & hosting  

---



## Getting Started Locally

### Prerequisites
- Node.js  
- MongoDB  
- Cloudinary account  

### Setup

```bash
git clone https://github.com/ahana4banerjee/JobPortal.git
cd JobPortal
```
### Backend
```bash
cd backend
npm install
npm run dev
```
### Create a .env file

```text
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```
### Frontend
```bash
cd frontend
npm install
npm run dev
```
---
## Future Enhancements
- Email notifications for job status updates

- Resume parsing & skill-matching algorithms

- Recruiter analytics dashboards

- Real-time chat between recruiters & applicants

---
## Author
**_Ahana Banerjee_**

GitHub: https://github.com/ahana4banerjee

LinkedIn: https://linkedin.com/in/ahana-4-banerjee

