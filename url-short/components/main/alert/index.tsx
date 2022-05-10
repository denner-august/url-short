import Swal from "sweetalert2";

export function AlertDialog() {
  return Swal.fire("Digite uma url primeiro", "", "error");
}
