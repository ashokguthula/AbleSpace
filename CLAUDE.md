# AbleSpace — Development Guide

## 1. Project Overview

AbleSpace is a full-stack Task Management System built as part of a Full Stack Developer (Fresher) technical assessment.

The primary goal is to reproduce the provided Figma design with high visual fidelity while demonstrating:

- Frontend engineering skills
- Backend engineering skills
- TypeScript usage
- Component reusability
- Responsive design
- Theme support
- API design
- Validation
- Clean project architecture
- Maintainable code
- Product thinking

The project also includes a Part 2 product-understanding exercise involving the AbleSpace Take Data screen from the Caseload tab.

---

# 2. Required Technology Stack

## Frontend

- Next.js
- App Router
- React
- TypeScript
- Tailwind CSS

## Backend

- NestJS
- TypeScript

## Database

A database may be selected based on project requirements.

Current planned database:

- TBD

Possible choices from the assessment:

- MongoDB
- PostgreSQL
- SQLite
- Other appropriate database

Do not introduce a database technology without considering the existing architecture first.

---

# 3. Commands for Claude

- **Frontend Dev Server:** `cd frontend && npm run dev`
- **Backend Dev Server:** `cd backend && npm run start:dev`
- **Linting:** `npm run lint` (run this before finalizing any major feature)

# 4. Strict AI Coding Rules

## General

- Since this is a technical assessment, prioritize readable, maintainable, and well-commented code over overly clever one-liners.
- Do not introduce new npm packages unless strictly necessary. If you do, explain why.
- Strictly adhere to TypeScript. Avoid using `any` types; define interfaces or types for all payloads, props, and responses.

## Frontend (Next.js & Tailwind)

- **App Router:** Use React Server Components by default. Only add the `"use client"` directive when hooks (`useState`, `useEffect`) or browser APIs are required.
- **Fidelity:** This is a Figma reproduction. Pay extreme attention to detail with Tailwind CSS spacing, colors, and typography. Do not write custom CSS unless Tailwind cannot handle it.
- **Components:** Keep UI components highly modular and reusable (e.g., create a base `Button` component rather than repeating Tailwind classes everywhere).

## Backend (NestJS)

- Follow NestJS standard architecture: keep Controllers thin (only handling HTTP routing and validation) and put business logic inside Services.
- Use NestJS built-in decorators and validation pipes (e.g., `class-validator`) for all incoming API requests.

## Temporary Database Rule

- Until the database is chosen, build the NestJS services using in-memory arrays to mock the data so frontend development isn't blocked.

# 6. Current Project Structure

The project is organized as a full-stack application.

Expected structure:

```text
AbleSpace/
│
├── frontend/
│   ├── app/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── tsconfig.json
│   └── ...
│
├── backend/
│   └── ...
│
├── README.md
└── .gitignore
```
