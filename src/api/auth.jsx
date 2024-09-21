const url = import.meta.env.VITE_API_URL;

if (!url) {
  console.error(
    "API URL is undefined. Please check your environment variables. url :",
    url,
  );
}

export const login = async (formData) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      localStorage.setItem("token", data.token);
      return data.payload;
    }

    throw new Error(data.message);
  } catch (error) {
    console.error(error);
    return null;
  }
};
