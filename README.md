# 📌 Productivity & Collaboration Hub

## Team Name
Innovision Dynamics

---

## ⚠️ IMPORTANT DEVELOPMENT INSTRUCTIONS (READ FIRST)

This README defines **minimum functional requirements**, not design limits.

When implementing the application:
- Pages **must not be visually empty**
- Add additional UI sections, widgets, cards, tables, placeholders, and sample content where appropriate
- Follow modern dashboard UI/UX practices
- Dummy data and placeholder content are allowed and encouraged
- If a page logically requires more content than explicitly listed, **add it**
- Empty states must include descriptive messages and actionable buttons
- The application should feel **production-like and complete**, not minimal

---

## Project Overview

Productivity & Collaboration Hub is a full-stack web application designed to help teams manage projects, collaborate in real time, and track productivity from a single platform.

The system integrates:
- Project and task management
- Real-time communication and collaboration
- File storage with versioning
- Analytics and activity tracking
- Background automation using threads

This project demonstrates:
- RESTful API design
- Networking using WebSockets
- Multithreading and scheduling in Java
- Clean, scalable software architecture

---

## Core Objectives

- Provide a centralized collaboration workspace
- Demonstrate REST, WebSocket, and multithreading concepts
- Build a modular and extensible system
- Deliver a stable, presentable, and realistic application

---

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Socket.IO Client
- Chart.js / Recharts

### Backend
- Spring Boot
- REST APIs
- Spring WebSockets
- Java ScheduledExecutorService / Spring Scheduler
- JPA / Hibernate

### Database
- PostgreSQL or MySQL

### File Storage
- Local server storage
- Database for metadata and version control

---

## Authentication & Authorization

- JWT-based authentication
- Secure password hashing
- Role-based access control (Admin / Member)
- Protected frontend routes
- Backend token validation

---

## Application Pages & Features

---

## 1. Public Pages (No Authentication)

### Landing Page
Minimum:
- Project name and description
- Feature highlights
- Call-to-action buttons (Login / Register)

Expected:
- Hero section
- Feature cards or sections
- Footer with project/team info

---

### Authentication Pages

#### Login
Minimum:
- Email / username
- Password
- Error handling

Expected:
- Validation messages
- Redirect after login
- Helpful UI feedback

#### Register
Minimum:
- Name
- Email
- Password
- Create or join a team

Expected:
- Role selection
- Validation and onboarding hints

#### Forgot Password (Optional)
- Email input
- Reset flow or placeholder message

---

## 2. Main Application Layout (After Login)

This is the primary workspace and must feel like a complete dashboard system.

### Minimum Layout Components
- Top navigation bar
- Sidebar navigation
- Notification icon with unread count
- User profile menu

### Expected Behavior
- Sidebar includes labeled icons and grouped navigation
- Top bar may include search, project selector, and quick actions
- Pages must include content-rich layouts
- No page should appear blank or nearly empty

---

## 3. Dashboard Page

Primary landing page after login.

### Minimum Required Sections
- Task status summary (To Do / In Progress / Done)
- Upcoming deadlines
- Recent activity feed
- Notifications preview

### Additional Expected Content
- Welcome banner
- Quick action cards (Create Task, Open Board, Start Chat)
- Productivity or usage insights
- Placeholder charts when data is unavailable

---

## 4. User Profile & Settings

### Profile Page
Minimum:
- Name, email, role
- Profile image
- Activity statistics

Expected:
- Editable fields
- Contribution overview
- Visual indicators

---

### Settings Page
Minimum:
- Change password
- Notification preferences
- Logout

Expected:
- Clear sections
- Descriptive labels
- Confirmation feedback

---

## 5. Project Management Module

---

### Project Overview Page
Minimum:
- Project details
- Member list
- Linked tasks and documents

Expected:
- Project summary cards
- Timeline preview
- Activity snapshot

---

### Kanban Task Board

Minimum:
- Columns: To Do, In Progress, Review, Done
- Create, edit, delete tasks
- Assign users
- Drag-and-drop support

Expected:
- Task priority indicators
- Due date highlighting
- Empty state prompts

Backend: REST APIs  
Realtime updates: WebSockets

---

### Gantt Chart Planner
Minimum:
- Timeline visualization
- Task durations and milestones

Expected:
- Read-only or limited editing
- Clear legends and labels

---

## 6. Real-Time Collaboration

---

### Team Chat
Minimum:
- Project-based chat rooms
- Real-time messaging
- Message persistence

Expected:
- User avatars
- Timestamps
- Online/offline indicators

Technology: WebSockets

---

### Interactive Whiteboard
Minimum:
- Free drawing
- Shapes and text
- Multi-user real-time sync

Expected:
- Clear toolbar
- Session-based collaboration
- Placeholder canvas when empty

---

### Collaborative Documents
Minimum:
- Create and edit text documents
- Save content
- Version history

Expected:
- Auto-save or manual save
- Restore previous versions
- Clear editing UI

---

## 7. File Management & Versioning

### File Storage Page
Minimum:
- Upload and download files
- View file list
- Version history

Expected:
- File previews
- Restore older versions
- Clear empty state messaging

---

## 8. Notifications & Automation

---

### Notification Center
Minimum:
- Task assignments
- Deadline reminders
- System alerts

Expected:
- Read/unread states
- Timestamped entries

---

### Background Scheduler
Automated tasks:
- Daily summary generation
- Deadline monitoring
- Inactive data cleanup

Technology:
- Java ScheduledExecutorService
- Spring @Scheduled tasks

---

## 9. Analytics & Activity Tracking

### Analytics Dashboard
Minimum:
- Task completion statistics
- Team activity overview

Expected:
- Charts and graphs
- Time-based filtering
- Placeholder analytics when data is missing

---

## 10. Daily Summary

Minimum:
- Tasks completed
- Pending tasks
- Recent activity

Expected:
- Auto-generated content
- Clear formatting
- Stored history

---

## 11. Smart Search

Minimum:
- Keyword-based search
- Search across tasks, projects, files

Expected:
- Filters
- Highlighted results
- No-results messaging

---

## 12. Export & Reporting

Minimum:
- Export Kanban board
- Export project summaries

Expected:
- PDF and image formats
- Clear export options

---

## 13. Goal & Habit Tracker

Minimum:
- Create goals
- Track progress

Expected:
- Visual progress indicators
- Weekly and monthly views

---

## 14. Admin / Team Management Panel

Minimum:
- Manage team members
- Assign roles
- View activity logs

Expected:
- Clear admin-only access
- System overview panels

---

## Database Core Tables (Expected)

- users
- teams
- projects
- tasks
- task_assignments
- messages
- notifications
- files
- file_versions
- documents
- activity_logs
- goals

-Add any table that is needed
---

## API Architecture

### REST APIs
Used for:
- Authentication
- CRUD operations
- Analytics
- File metadata
- Search
- Goals and tasks

### WebSockets
Used for:
- Chat
- Whiteboard updates
- Live task synchronization
- Notifications

---

## Multithreading & Scheduling

Implemented using:
- @Scheduled
- ScheduledExecutorService

Used for:
- Daily summaries
- Deadline alerts
- Background cleanup jobs

---

## Suggested Project Structure

### Backend
controller/
service/
repository/
model/
dto/
config/
scheduler/
websocket/

### Frontend
components/
pages/
services/
hooks/
context/
utils/

---

## Development Guidelines

- Follow clean architecture principles
- Keep controllers thin
- Place business logic in services
- Use DTOs for API communication
- Use WebSockets only for real-time features
- Ensure all pages are visually complete
- Maintain readable and well-documented code
