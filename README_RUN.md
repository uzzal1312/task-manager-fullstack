# Run Instructions

## Backend (Spring Boot)
1. Ensure MySQL is running locally with a database named `productivity_hub`.
2. Update credentials in `backend/src/main/resources/application.properties` if needed.
3. Install dependencies and run:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
   - Server runs on `http://localhost:8080`.
   - H2 demo profile: `SPRING_PROFILES_ACTIVE=demo mvn spring-boot:run` (uses in-memory H2).

## Frontend (React + Vite + Tailwind)
1. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```
2. Start dev server:
   ```bash
   npm run dev
   ```
   - App runs on `http://localhost:3000`.
   - Vite proxy forwards `/api` and `/ws` to backend.

## Key URLs
- Landing: http://localhost:3000/
- Dashboard: http://localhost:3000/app
- API Auth: POST http://localhost:8080/api/auth/login
- WebSocket STOMP endpoint: ws://localhost:8080/ws

## Build
- Backend: `mvn clean package`
- Frontend: `npm run build`

## Notes
- Hibernate auto-creates/updates tables via `spring.jpa.hibernate.ddl-auto=update`.
- File uploads store under `backend/uploads` by default.
