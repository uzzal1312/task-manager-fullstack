# Database Visualization Guide for VS Code

## Complete Guide to Connect and View MySQL Database in VS Code

---

## Step 1: Install MySQL Extension

1. Open VS Code Extensions panel (`Ctrl+Shift+X` or `Cmd+Shift+X` on Mac)
2. Search for **"MySQL"** by **Jun Han**
3. Click **Install**
4. After installation, reload VS Code window:
   - Press `Ctrl+Shift+P` (or `Cmd+Shift+P`)
   - Type "Reload Window"
   - Press Enter

---

## Step 2: Start MySQL Service (Required)

Before connecting, ensure MySQL is running:

```bash
# Start MySQL service
sudo service mysql start

# Check if MySQL is running
sudo service mysql status
```

**Expected output**: MySQL should show as "running"

---

## Step 3: Create Database (If Not Exists)

Run this command in terminal to create the database:

```bash
mysql -u root -p'u11das6532@r' < /workspaces/task-manager-fullstack/database_setup.sql
```

Or manually:

```bash
mysql -u root -p
# Enter password: u11das6532@r

CREATE DATABASE IF NOT EXISTS productivity_hub;
USE productivity_hub;
# Run table creation commands from database_setup.sql
EXIT;
```

---

## Step 4: Connect to MySQL Database

### 4.1 Find the Database Icon

After installing the MySQL extension, look for the **Database icon** (cylinder/database symbol) in the left sidebar.

If you can't find it:
- Press `Ctrl+Shift+P`
- Type "MySQL: Add Connection"
- Select it

### 4.2 Add New Connection

1. Click the **Database icon** in left sidebar
2. Click the **"+"** button (Add New Connection)
3. Enter connection details:

   ```
   Host: localhost
   Port: 3306
   Username: root
   Password: u11das6532@r
   ```

4. Click **Connect** or **Test Connection**

### 4.3 Alternative: Use Command Palette

- Press `Ctrl+Shift+P`
- Type "MySQL: Add Connection"
- Follow the prompts to enter credentials

---

## Step 5: Browse Database

Once connected, you'll see your connection in the MySQL panel:

1. **Expand the connection** → Click the arrow next to your connection name
2. **Find productivity_hub database** → Expand it
3. **View all tables** → You'll see 14 tables:
   - activity_logs
   - documents
   - file_versions
   - files
   - goals
   - messages
   - notifications
   - projects
   - task_assignees
   - task_tags
   - tasks
   - team_members
   - teams
   - users

---

## Step 6: View Table Data

### View Table Contents
- **Right-click on any table** → Select **"Show Table"**
- Data will open in a new tab

### View Table Structure
- **Right-click on table** → Select **"Show Table Structure"**
- Shows columns, data types, keys, etc.

### Run Custom Queries
- **Right-click on database** → Select **"New Query"**
- Write your SQL:
  ```sql
  SELECT * FROM users;
  SELECT * FROM tasks WHERE status = 'TODO';
  ```
- Press `Ctrl+Enter` to execute

---

## Common Operations

### Insert Data
```sql
INSERT INTO users (email, name, password, role, active, created_at, updated_at) 
VALUES ('admin@example.com', 'Admin User', 'hashedpassword', 'ADMIN', 1, NOW(), NOW());
```

### Update Data
```sql
UPDATE tasks SET status = 'DONE' WHERE id = 1;
```

### Delete Data
```sql
DELETE FROM tasks WHERE id = 1;
```

### Join Tables
```sql
SELECT t.title, t.status, u.name as assignee
FROM tasks t
JOIN task_assignees ta ON t.id = ta.task_id
JOIN users u ON ta.user_id = u.id;
```

---

## Troubleshooting

### Problem: "Can't connect to MySQL server"
**Solution**: MySQL service is not running
```bash
sudo service mysql start
```

### Problem: "Access denied for user 'root'"
**Solution**: Wrong password
- Verify password is: `u11das6532@r`
- Or reset it:
```bash
sudo mysql -u root -proot -e "ALTER USER 'root'@'localhost' IDENTIFIED BY 'u11das6532@r';"
```

### Problem: "Unknown database 'productivity_hub'"
**Solution**: Database hasn't been created
```bash
mysql -u root -p'u11das6532@r' -e "CREATE DATABASE productivity_hub;"
# Then run the database_setup.sql file
mysql -u root -p'u11das6532@r' productivity_hub < database_setup.sql
```

### Problem: Database icon not showing after extension install
**Solution**: Reload VS Code
- Press `Ctrl+Shift+P`
- Type "Reload Window"
- Press Enter

### Problem: Working in Codespaces but want local MySQL Workbench access
**Solution**: Port forwarding required
1. Go to **PORTS** tab in VS Code
2. Add port **3306** if not there
3. Right-click → **Port Visibility** → **Public**
4. Use the forwarded URL in MySQL Workbench

---

## Quick Reference: Database Credentials

```
Host: localhost / 127.0.0.1
Port: 3306
Username: root
Password: u11das6532@r
Database: productivity_hub
```

---

## Database Schema Overview

### Core Tables
- **users**: User accounts (email, password, role)
- **teams**: Team information
- **team_members**: Users in teams (many-to-many)
- **projects**: Projects linked to teams
- **tasks**: Tasks linked to projects
- **task_assignees**: Users assigned to tasks (many-to-many)
- **task_tags**: Tags for tasks

### Supporting Tables
- **goals**: Goals for users/teams
- **messages**: Chat messages
- **notifications**: User notifications
- **documents**: Project documents
- **files**: File metadata
- **file_versions**: File version history
- **activity_logs**: Audit log of actions

---

## Backend Connection

The Spring Boot backend automatically connects to this database using settings in:
```
backend/src/main/resources/application.properties
```

Key settings:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/productivity_hub
spring.datasource.username=root
spring.datasource.password=u11das6532@r
spring.jpa.hibernate.ddl-auto=create
```

When backend starts, it will:
1. Connect to MySQL
2. Create tables automatically (if using `ddl-auto=create`)
3. Ready to serve API requests

---

## Tips

- **Backup Database**: Right-click database → Export
- **Keyboard Shortcut**: `Ctrl+Enter` to execute SQL query
- **Multiple Connections**: You can add connections to different databases
- **Dark Mode**: Extension respects VS Code theme
- **Auto-completion**: Start typing SQL - extension provides suggestions
