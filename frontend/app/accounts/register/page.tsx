"use client";

import Form from "@/components/auth/Form";
import { registerUser } from "@/src/lib/data";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Page() {
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors([]);

    const res = await registerUser(name, email, password);

    if (res.error) {
      setErrors(["Este correo ya esta registrado"]);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);

    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Registrado con éxito",
      text: "Confirma tu cuenta en el correo que proporcionaste para empezar a usar la plataforma",
    });

    setTimeout(() => {
      router.push("/accounts/login");
    }, 5000);
  };

  return (
    <>
      <Form
        name={name}
        email={email}
        password={password}
        isLoading={isLoading}
        isRegister={true}
        errors={errors}
        setName={setName}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      ></Form>
    </>
  );
}
