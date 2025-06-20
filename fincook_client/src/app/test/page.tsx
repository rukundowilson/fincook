"use client";

import { useEffect, useState } from "react";

export default function TestServerLifecycle() {
    const [serverStatus, setServerStatus] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const TestServerClientConnection = async () => {
        try {
            const response = await fetch("http://localhost:8080/");
            if (!response.ok) throw new Error("Network response was not ok");
            const data = await response.json();
            console.log("Server response:", data);
            setServerStatus(data.message || JSON.stringify(data));
        } catch (err) {
            setError("Failed to connect to the server.");
            console.error("Error connecting to server:", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        TestServerClientConnection();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full space-y-4">
                <h1 className="text-2xl font-bold text-gray-800">
                    🧪 Test Server Lifecycle
                </h1>
                <p className="text-gray-600">
                    This page is used to test server lifecycle and connectivity.
                </p>

                <div className="mt-4">
                    {loading ? (
                        <p className="text-blue-500 animate-pulse">Connecting to server...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <div className="bg-green-100 text-green-800 p-3 rounded-lg shadow">
                            ✅ Server Response: <strong>{serverStatus}</strong>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
