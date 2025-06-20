"use client";

import { useEffect } from "react";

export default function TestServerLifecycle() {
    const TestServerClientConnection = async () => {
        try {
            const response = await fetch('http://localhost:8080/');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Server response:', data);
        } catch (error) {
            console.error('Error connecting to server:', error);
        }
    };

    useEffect(() => {
        TestServerClientConnection();
    }, []);

    return (
        <div>
            <h1>Test Server Lifecycle</h1>
            <p>This page is used to test server lifecycle methods.</p>
            <p>Check the console for lifecycle logs.</p>
        </div>
    );
}