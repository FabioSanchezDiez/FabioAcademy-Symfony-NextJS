"use client";

import Form from "@/components/auth/Form";
import { Toast } from "@/src/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.status === 401) {
      setErrors(["Credenciales incorrectas o el usuario no esta confirmado"]);
      setIsLoading(false);
      return;
    }

    Toast.fire({
      icon: "success",
      title: "Sesión iniciada",
    });

    setTimeout(() => {
      router.push("/dashboard/learning");
    }, 2000);
  };

  return (
    <>
      <Form
        email={email}
        password={password}
        isLoading={isLoading}
        isRegister={false}
        errors={errors}
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      ></Form>
    </>
  );
}
