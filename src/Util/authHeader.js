const TOKEN_NAME = "client_superior_run";

export const getAuthHeader = () => {
  return {
    Authorization: `Bearer ${localStorage.getItem(TOKEN_NAME)}`,
  };
};

export const setAuthHeader = (token) => {
  localStorage.setItem(TOKEN_NAME, token);
};

export const getToken = () => localStorage.getItem(TOKEN_NAME);
