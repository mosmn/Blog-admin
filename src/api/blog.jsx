const url = "https://blog.api.mosmn.me";

if (!url) {
  console.error(
    "API URL is undefined. Please check your environment variables. url :",
    url,
  );
}

export const getPosts = async () => {
  try {
    const response = await fetch(`${url}/blog/posts`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getPost = async (id) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async (formData) => {
  try {
    const response = await fetch(`${url}/blog/posts`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    }

    throw new Error(data.message);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const updatePost = async (id, formData) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deletePost = async (id) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const likePost = async (id) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}/like`, {
      method: "PATCH",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const unlikePost = async (id) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}/unlike`, {
      method: "PATCH",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getComments = async (id) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}/comments`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const createComment = async (id, content) => {
  try {
    const response = await fetch(`${url}/blog/posts/${id}/comments`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ content }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteComment = async (id, commentId) => {
  try {
    const response = await fetch(
      `${url}/blog/posts/${id}/comments/${commentId}`,
      {
        method: "DELETE",
        mode: "cors",
      },
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const likeComment = async (id) => {
  try {
    const response = await fetch(`${url}/blog/comments/${id}/like`, {
      method: "PATCH",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const unlikeComment = async (id) => {
  try {
    const response = await fetch(`${url}/blog/comments/${id}/unlike`, {
      method: "PATCH",
      mode: "cors",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
