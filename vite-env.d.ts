/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ADMIN_LOGIN_URL: string;
  readonly VITE_APP_ADMIN_REGISTRATION_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
