/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_PROJECT_URL: string;
  readonly VITE_APP_RESUME_URL: string;
  readonly VITE_APP_CONTACT_FORM_URL: string;
  readonly VITE_APP_FEEDBACKS_URL: string;
  readonly VITE_APP_BLOG_ARTICLE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
