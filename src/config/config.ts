// This file loads environment variables from different sources depending on the environment

// For production deployment on GitHub Pages, we'll use these values
const productionConfig = {
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
  },
};

// Export the appropriate config
export const config = productionConfig;
