import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    habits: [],
    quote: {},
    suggestionSelected: null,
    showStatus: null
};

// Fetch quotes from API
export const quoteFetchThunk = createAsyncThunk(
    'quotes',
    async () => {
        const response = await fetch('https://type.fit/api/quotes');
        const data = await response.json();
        return data;
    }
);

const habitSlice = createSlice({
    name: 'habitTracker',
    initialState,
    reducers: {
        addHabit: (state, action) => {
            state.habits = [...state.habits, action.payload];
            state.showStatus = null;
        },
        setSuggestionSelected: (state, action) => {
            state.suggestionSelected = action.payload;
        },
        setShowStatus: (state, action) => {
            state.showStatus = action.payload;
        },
        toggleHabitStatus: (state, action) => {
            const { habitIndex, dayIndex, status } = action.payload;

            if (state.showStatus === null) {
                state.showStatus = state.habits[habitIndex];
            }

            if (status) {
                if (state.showStatus.weekStatus[dayIndex]) {
                    return;
                }
                state.showStatus.completedDays++;
            } else if (status === false) {
                if (state.showStatus.weekStatus[dayIndex] === false) {
                    return;
                } else if (state.showStatus.weekStatus[dayIndex]) {
                    state.showStatus.completedDays--;
                }
            } else {
                if (state.showStatus.weekStatus[dayIndex] === null) {
                    return;
                } else if (state.showStatus.weekStatus[dayIndex]) {
                    state.showStatus.completedDays--;
                }
            }

            state.showStatus.weekStatus[dayIndex] = status;
            const newHabits = state.habits.filter((habit) => habit.id !== state.showStatus.id);
            state.habits = [...newHabits, state.showStatus];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(quoteFetchThunk.fulfilled, (state, action) => {
            const data = [...action.payload];
            const index = Math.trunc(Math.random() * data.length);
            state.quote = { ...data[index] };
        });
    }
});

export const habitReducer = habitSlice.reducer;
export const { addHabit, setSuggestionSelected, setShowStatus, toggleHabitStatus } = habitSlice.actions;
export const habitSelector = (state) => state.habitReducer;
