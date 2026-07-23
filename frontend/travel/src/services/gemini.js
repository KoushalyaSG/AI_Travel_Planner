const API_URL = "http://127.0.0.1";

export async function generateTrip(data) {
  const response = await fetch(`${API_URL}/generate`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate trip");
  }

  return await response.json();
}