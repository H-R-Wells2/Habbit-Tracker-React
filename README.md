
# Habit Tracker React App

## Description

This is a habit tracker application built with React and Redux, created as a skill test by Coding Ninjas. The app allows users to define and track their daily habits, view habit statuses, and modify them for the past week.

## Features

- **Add Habits:** Users can add multiple habits to track, such as reading a book, going to the gym, etc.
- **Track Habits:** Track each habit every day with three possible statuses:
  - **Done:** Mark the habit as completed for the day.
  - **Not Done:** Mark the habit as not completed for the day.
  - **None:** No action was taken on the habit for the day.
- **Habit Overview:** View all current habits with an option to add new habits.
- **Weekly View:** Display a 7-day view for each habit, including:
  - Today's date, allowing users to mark the status as Done, Not Done, or None.
  - Statuses for the previous 6 days, with the ability to modify statuses for any of these days.

## Tech Stack

- **React:** Front-end library for building the user interface.
- **Redux:** State management for handling habit data.
- **React Router:** For managing navigation and routing within the app.

## Installation

To get started with the Habit Tracker app:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/H-R-Wells2/Habbit-Tracker-React.git
   cd habit-tracker-react-app
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

## Usage

1. **Add Habits:**
   - Navigate to the habit overview view.
   - Click on the "Add" button to add a new habit.

2. **Track Habits:**
   - Go to the weekly view for each habit.
   - Use the controls to mark today's status and modify statuses for the previous 6 days.

3. **Modify Habit Status:**
   - Click on a day to change the status to Done, Not Done, or None.

---
