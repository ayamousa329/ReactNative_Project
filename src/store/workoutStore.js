import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useWorkoutStore = create(
  persist(
    (set) => ({
      workouts: [
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
      ],

      addWorkout: (workout) =>
        set((state) => ({
          workouts: [...state.workouts, workout],
        })),

      removeWorkout: (id) =>
        set((state) => ({
          workouts: state.workouts.filter((workout) => workout.id !== id),
        })),

      clearWorkouts: () =>
        set({
          workouts: [],
        }),
    }),
    {
      name: "workout-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
