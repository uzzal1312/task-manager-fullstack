# How to Run the Application

## Run Everything with One Command

```bash
./start.sh
```

That's it! This will start MySQL, backend, and frontend.

**Access the app:** http://localhost:3000

**To stop:** Press `Ctrl+C` then run: `pkill -f "mvn spring-boot:run"`

---

## Manual Steps (If needed)

### 1. Start MySQL
```bash
sudo service mysql start
```

### 2. Start Backend (Terminal 1)
```bash
cd backend
mvn spring-boot:run
```
Wait for: "Started ProductivityHubApplication"

### 3. Start Frontend (Terminal 2)
```bash
cd frontend
npm run dev
```

### 4. Open App
- **Codespaces:** Click port 3000 in PORTS tab
- **Local:** http://localhost:3000

---

## Database Info

- **Username:** root
- **Password:** u11das6532@r
- **Database:** productivity_hub
- **View in VS Code:** Install "MySQL" extension by Jun Han

---

## Troubleshooting

**MySQL won't start:**
```bash
sudo service mysql restart
```

**Port in use:**
```bash
pkill -f "mvn spring-boot:run"
```

**Database not found:**
```bash
mysql -u root -p'u11das6532@r' < database_setup.sql
```
