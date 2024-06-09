"use client";

import { useState } from "react";
import Loader from "./Loader";
import { deleteCourse } from "@/src/lib/data";
import { Toast } from "@/src/lib/utils";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

//From https://uiverse.io/profile/seyed-mohsen-mousavi
export default function DeleteActionButton({
  courseId,
  token,
}: {
  courseId: number;
  token: string;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "No serás capaz de recuperar el curso eliminado",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsLoading(true);

        const response = await deleteCourse(courseId, token);

        if (response.error) {
          setIsLoading(false);
          Toast.fire({
            icon: "error",
            title: "Fallo al eliminar el curso",
          });
          return;
        }

        setIsLoading(false);

        Toast.fire({
          icon: "success",
          title: "Curso eliminado correctamente",
        });

        router.refresh();
      }
    });
  };
  return (
    <>
      {isLoading && <Loader></Loader>}
      <button
        onClick={handleDelete}
        className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110"
      >
        <svg
          stroke="currentColor"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 mr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></path>
        </svg>
        Eliminar
      </button>
    </>
  );
}
