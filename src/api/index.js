const URL = `http://localhost:8000/api/`;

export const fetchUser = async (credentials) => {
  try {
    const response = await fetch(`${URL}login/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const data = await response.json();
    if (response.status >= 400) {
      throw { data };
    }
    return data;
  } catch (error) {
    throw error.data;
  }
};
