"use client";

import Form from "@/components/auth/Form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors([]);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const responseAPI = await res.json();

    if (!res.ok) {
      setErrors(["Error al crear el usuario"]);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setIsSuccess(true);
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  return (
    <>
      {isSuccess && (
        <div className="bg-green-500 p-2 text-black text-lg font-bold rounded-md mt-12 text-center">
          Registrado con éxito, confirma tu cuenta en el correo que
          proporcionaste para empezar a usar la plataforma
        </div>
      )}
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
