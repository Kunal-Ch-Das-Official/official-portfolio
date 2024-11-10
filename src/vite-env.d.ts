/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ADMIN_LOGIN_URL: string;
  readonly VITE_APP_ADMIN_REGISTRATION_URL: string;
  readonly VITE_APP_ADMIN_FORGOT_PASSWORD_LINK_SEND_URL: string;
  readonly VITE_APP_RESET_FORGOTTEN_PASSWORD: string;
  readonly VITE_APP_GET_CURRENT_ADMIN_USER_URL: string;
  readonly VITE_APP_PROJECT_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
