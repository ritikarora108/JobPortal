## About

JobPortal is a full-stack web application that connects job seekers and employers on a single platform. It allows users to search and apply for jobs, while employers can post openings and manage applications with ease.

## Features

### For Job Seekers
- Create and manage your professional profile
- Search for jobs by category
- Apply to jobs with a single click
- Track your application status
- Receive notifications for new matching opportunities

### For Employers
- Post and manage job listings
- Browse candidate profiles
- Review and manage applications
- Communicate with potential candidates
- Access analytics on job posting performance

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT


### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/ritikarora108/job-portal.git
   cd job-portal
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/jobportal
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers
   ```
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5000`

## Project Structure

```
job-portal/
│__ controller/
│__ middleware/
│__ model/
│__ route/
│__ utils/
│__ .env
│__ package.json
│__ index.js
└── README.md
```


## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Linkedin - [ritikarora108](https://www.linkedin.com/in/ritikarora108/) 

Project Link: [https://github.com/ritikarora108/job-portal](https://github.com/ritikarora108/job-portal)
