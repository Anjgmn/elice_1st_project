const baseUrl = 'http://kdt-ai6-team05.elicecoding.com/api/users';

const requestUrls = {
  REGISTER: `${baseUrl}/register`,
  LOGIN_REQUEST: `${baseUrl}/login`,
  AUTH_ADMIN: `${baseUrl}/auth/admin`,
  AUTH_USER: `${baseUrl}/auth/user`,
  READ_PROFILE: `${baseUrl}/profile`,
  UPDATE_USER: `${baseUrl}`,
  DELETE_USER: `${baseUrl}`,
};

export default requestUrls;
