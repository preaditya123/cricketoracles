
import { toast as sonnerToast } from "sonner";

// This utility function wraps sonner's toast functionality
// It can be expanded with additional options as needed
export const toast = {
  success: (message: string, title?: string) => {
    return sonnerToast.success(title || "Success", {
      description: message,
    });
  },
  error: (message: string, title?: string) => {
    return sonnerToast.error(title || "Error", {
      description: message,
    });
  },
  info: (message: string, title?: string) => {
    return sonnerToast.info(title || "Information", {
      description: message,
    });
  },
  warning: (message: string, title?: string) => {
    return sonnerToast.warning(title || "Warning", {
      description: message,
    });
  }
};
