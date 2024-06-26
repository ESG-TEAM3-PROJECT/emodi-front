import Swal from "sweetalert2";

export const successAlert = (title: string, text: string, confirmButtonText: string) => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText,
  });
};

export const warningAlert = (title: string, text: string, confirmButtonText: string) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    confirmButtonText,
  });
};
