type Status = {
  show: boolean;
  type?: "error" | "info" | "success" | "warning";
  message?: string;
  hasIcon?: boolean;
  isDismissible?: boolean;
};

export default Status;
