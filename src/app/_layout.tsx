import { Tabs } from "expo-router";
import { createContext, useState } from "react";

export const WorkoutContext = createContext<any>(null);

export default function Layout() {
  const [workouts, setWorkouts] = useState([
    {
      id: "1",
      name: "Running",
      duration: "30 minutes",
      level: "Beginner",
    },
    {
      id: "2",
      name: "Push Ups",
      duration: "15 minutes",
      level: "Easy",
    },
    {
      id: "3",
      name: "Squats",
      duration: "20 minutes",
      level: "Beginner",
    },
    {
      id: "4",
      name: "Cycling",
      duration: "40 minutes",
      level: "Medium",
    },
    {
      id: "5",
      name: "Plank",
      duration: "10 minutes",
      level: "Easy",
    },
  ]);

  return (
    <WorkoutContext.Provider value={{ workouts, setWorkouts }}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="add"
          options={{
            title: "Add Workout",
          }}
        />

        <Tabs.Screen
          name="items"
          options={{
            title: "Workouts",
          }}
        />

        <Tabs.Screen
          name="explore"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </WorkoutContext.Provider>
  );
}
