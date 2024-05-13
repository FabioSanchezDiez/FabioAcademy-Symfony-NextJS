"use client";
import Button from "@/components/ui/Button";
import Loader from "@/components/ui/Loader";
import { confirmUser } from "@/src/lib/data";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page({ params }: { params: { token: string } }) {
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleConfirmUser = async () => {
    setIsLoading(true);
    const result = await confirmUser(params.token);

    if (result.error) {
      setErrors(["Token no válido o usuario ya confirmado"]);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Cuenta confirmada",
      text: "Redirigiendo al login para empezar a usar la plataforma",
    });

    setTimeout(() => {
      router.push("/accounts/login");
    }, 3000);
  };

  return (
    <>
      {isLoading && <Loader></Loader>}
      <div className="flex justify-center flex-col items-center gap-4 mt-20 p-4">
        {errors.length > 0 && (
          <div className="bg-red-400 p-2 text-sm rounded-md my-4">
            {errors[0]}
          </div>
        )}
        <h2 className="text-2xl font-bold text-center">
          ¡Estás a un click de confirmar tu cuenta!
        </h2>
        <div className="max-w-3xl">
          <Button
            textContent="Confirmar cuenta"
            bgColor="bg-darkenLightBlue"
            textColor="text-white"
            onClick={handleConfirmUser}
          ></Button>
        </div>
      </div>
    </>
  );
}
