import Swal from "sweetalert2";

export const swal = (values) => {
  Swal.fire({
    title: "Datos!",
    text: JSON.stringify(values, null, 2),
    confirmButtonText: "Aceptar",
    width: "400px",
    timer: 20000,
    timerProgressBar: true,
  });
};
