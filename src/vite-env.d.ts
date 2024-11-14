/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_ADMIN_LOGIN_URL: string;
  readonly VITE_APP_ADMIN_REGISTRATION_URL: string;
  readonly VITE_APP_ADMIN_FORGOT_PASSWORD_LINK_SEND_URL: string;
  readonly VITE_APP_RESET_FORGOTTEN_PASSWORD: string;
  readonly VITE_APP_GET_CURRENT_ADMIN_USER_URL: string;
  readonly VITE_APP_GET_ALL_REGISERED_ACCOUNT: string;
  readonly VITE_APP_PROJECT_URL: string;
  readonly VITE_APP_BLOG_ARTICLE_URL: string;
  readonly VITE_APP_PASSWORD_CHANGE_URL: string;
  readonly VITE_APP_ALL_FEEDBACKS_URL: string;
  readonly VITE_APP_ALL_CONTACT_ENQUIRY_URL: string;
  readonly VITE_APP_ALL_CONTACT_ENQUIRY_RESPONSE_SEND_URL: string;
  readonly VITE_APP_RESUME_MANAGEMENT_URL: string;
  readonly VITE_APP_DEACTIVATE_USER_ACCOUNT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
