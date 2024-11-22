/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PROJECT_URL: string;
  readonly VITE_APP_RESUME_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
