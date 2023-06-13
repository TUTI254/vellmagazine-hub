import AuthService from "./auth.service";

export default function authHeader() {
  const accessToken = AuthService.isLoggedIn();

  if (accessToken && accessToken.access) {
    return {
      "access-control-allow-origin": "*",
      "content-type": "multipart/form-data",
      Authorization: "Bearer " + accessToken.access,
    };
  } else {
    return {};
  }
}
