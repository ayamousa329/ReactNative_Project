# FitApp

FitApp is a simple fitness mobile application built using React Native and Expo.

The application was developed as a mobile app and includes different screens for managing and displaying workout data.

## Features

- Fitness mobile application
- Home screen
- Add Workout screen
- Workouts screen
- Bottom Tab Navigation
- Add new workouts using a form
- Three TextInput fields
- ScrollView
- map()
- FlatList
- SectionList
- useState
- useEffect
- Axios API requests
- Reusable Components
- Props
- Default Props values
- Children prop
- Context API
- Zustand state management
- AsyncStorage
- Zustand Persist middleware
- Persistent workout data after restarting the application

## State Management

The workout data is managed using Zustand.

A separate Zustand store is used to manage the existing workout state.

The store includes:

- Add Workout
- Remove Workout
- Clear Workouts

## Data Persistence

AsyncStorage is integrated with Zustand using the `persist` middleware.

This allows workout data to remain saved after closing and reopening the mobile application.

## Technologies

- React Native
- Expo
- TypeScript
- JavaScript
- Expo Router
- Zustand
- AsyncStorage
- Axios
- StyleSheet
- Context API

## App Structure

### Home
Fitness landing page with features and scrollable content.

### Add Workout
A form used to add new workouts.

### Workouts
Displays workout data using FlatList and SectionList.

## API

Axios is configured in a separate `api.js` file with:

- baseURL
- timeout

Axios is used for API requests when adding workout data.

## Zustand Store

The Zustand store is located in:

`src/store/workoutStore.js`

It manages the workout data globally across the application.

## How to Run

```bash
npm install
npx expo start
