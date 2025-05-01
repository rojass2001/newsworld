"use client"; // Ensures this code runs only on the client-side in Next.js

import { store } from "@/redux/Store"; // Import the Redux store
import { Provider } from "react-redux"; // Import the Provider from react-redux to connect Redux with React

// Providers component that wraps the app with the Redux store using the Provider component
export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        // The Provider component makes the Redux store available to the rest of the app
        <Provider store={store}>
            {children}  {/* Render the child components that will have access to the Redux store */}
        </Provider>
    );
}
