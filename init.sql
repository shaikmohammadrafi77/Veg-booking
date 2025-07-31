-- Create database
CREATE DATABASE IF NOT EXISTS webapp_db;
USE webapp_db;

-- Create sample table
CREATE TABLE IF NOT EXISTS sample_data (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  value TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO sample_data (name, value) VALUES 
('Sample Entry 1', 'This is a test value'),
('Sample Entry 2', 'Another test value');
