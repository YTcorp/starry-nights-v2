import { logout } from "./logout";

export function response401(error) {
  if (error.response.status === 401) {
    logout();
  }
}
