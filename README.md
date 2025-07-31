# Veg-booking
Project Structure:
shaikmohammadrafi77/
├── public/
│   ├── index.html  ( existing HTML file)
│   ├── css/        ( existing CSS folder)
│   └── Js/         (existing JS folder)
├── server.js       (new backend file)
└── init.sql        (new database schema)
Setup Instructions:
Install Dependencies:
npm init -y
npm install express mysql2
Database Setup:
# Import SQL schema to MySQL
mysql -u root -p < init.sql
Run Server:
node server.js
Key Features:
Server:
Serves static files from public/ directory
REST API endpoints for data CRUD operations
MySQL database integration
Runs on port 3000

Important Notes:
Update database credentials in server.js (username/password)
Ensure MySQL is installed and running
Frontend files should be moved to a public/ folder
For production use:
Add environment variables for DB credentials
Implement proper error handling
Add authentication/authorization
Use connection pooling
