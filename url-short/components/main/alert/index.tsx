import Swal, { SweetAlertIcon } from "sweetalert2";

interface AlertProps {
  titulo: string;
  texto: string;
  tipo: SweetAlertIcon;
}

export function AlertDialog(propriedades: AlertProps) {
  return Swal.fire(
    `${propriedades.titulo}`,
    `${propriedades.texto}`,
    `${propriedades.tipo}`
  );
}
