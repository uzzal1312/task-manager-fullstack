# MySQL Database Setup Instructions

## How to Check Databases Using MySQL Command

### 1. Connect to MySQL Shell
```bash
mysql -u root -p
# When prompted, enter password: u11das6532@r
```

### 2. Inside MySQL Shell - Commands to Check Databases

```sql
-- List all databases (THIS IS THE COMMAND TO CHECK IF DATABASE EXISTS)
SHOW DATABASES;

-- Select a specific database
USE productivity_hub;

-- List all tables in the current database
SHOW TABLES;

-- See the structure of a specific table
DESCRIBE users;
DESCRIBE tasks;
-- ... etc for other tables

-- Count total rows in a table
SELECT COUNT(*) FROM users;

-- Exit MySQL shell
EXIT;
```

---

## How to Create Database Using the SQL File

### Method 1: Using Command Line (RECOMMENDED)

```bash
# Navigate to the repository directory
cd /workspaces/task-manager-fullstack

# Run the SQL file
mysql -u root -p < database_setup.sql
# When prompted, enter password: u11das6532@r
```

### Method 2: From MySQL Shell

```bash
# 1. Connect to MySQL
mysql -u root -p
# Enter password: u11das6532@r

# 2. Run the SQL file
SOURCE /workspaces/task-manager-fullstack/database_setup.sql;

# 3. Verify
SHOW DATABASES;
USE productivity_hub;
SHOW TABLES;

# 4. Exit
EXIT;
```

---

## Where the Database is Located

- **Location**: The database is stored on disk by MySQL server
- **Default Path**: `/var/lib/mysql/` (managed by MySQL system service)
- **Access**: You access it ONLY through MySQL shell or client tools like MySQL Workbench
- **Why you can't "see" it**: Databases are not stored as regular files you can browse - they're managed by the MySQL database engine

---

## How to Use MySQL Workbench to View the Database

1. **Open MySQL Workbench**
2. **Create New Connection**:
   - Hostname: `localhost` or `127.0.0.1`
   - Port: `3306`
   - Username: `root`
   - Password: `u11das6532@r`
3. **Click Test Connection** to verify
4. **Click OK**
5. **Double-click the connection** to open it
6. **Navigate** to the productivity_hub database in the left panel
7. You'll see all tables with their structure and data

---

## Troubleshooting

### Problem: "Can't connect to local MySQL server"
**Solution**: MySQL service is not running
```bash
sudo service mysql start
```

### Problem: "Access denied for user 'root'"
**Solution**: Wrong password or MySQL is not using the new password
```bash
# Restart MySQL and try to reset password
sudo service mysql restart
sudo mysql -u root -p'u11das6532@r' -e "SHOW DATABASES;"
```

### Problem: "Unknown database 'productivity_hub'"
**Solution**: Database hasn't been created yet - run the SQL file
```bash
mysql -u root -p < /workspaces/task-manager-fullstack/database_setup.sql
# Enter password: u11das6532@r
```

---

## Commands Cheat Sheet

| Command | Purpose |
|---------|---------|
| `SHOW DATABASES;` | List all databases |
| `CREATE DATABASE productivity_hub;` | Create a database |
| `USE productivity_hub;` | Select a database |
| `SHOW TABLES;` | List all tables in selected database |
| `DESCRIBE table_name;` | Show structure of a table |
| `SELECT * FROM users;` | View all data in a table |
| `SELECT COUNT(*) FROM users;` | Count rows in a table |
| `DROP DATABASE productivity_hub;` | Delete a database |
| `EXIT;` | Exit MySQL shell |
