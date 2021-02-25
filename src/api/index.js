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

export const registerUser = async (user) => {
  try {
    const response = await fetch(`${URL}register/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        username: user.username,
        password: user.password,
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

export const createMovie = async (movie) => {
  try {
    const response = await fetch(`${URL}create-movie/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: movie.title,
        description: movie.description,
        cover_image: movie.cover_image,
        genre: movie.genre,
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
