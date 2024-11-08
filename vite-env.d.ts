/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ADMIN_LOGIN_URL: string; // Example of your environment variable
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
