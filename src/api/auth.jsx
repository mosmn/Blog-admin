const url = 'http://localhost:3000';

export const login = async (formData) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
    });
  
    const data = await response.json();

    localStorage.setItem('token', data.token);
    
    return data;
  } catch (error) {
    console.error(error);
  }
}
    
