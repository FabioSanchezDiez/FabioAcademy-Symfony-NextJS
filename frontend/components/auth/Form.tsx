import Loader from "../ui/elements/Loader";
import Link from "next/link";

type FormProps = {
  name?: string;
  email: string;
  password: string;
  isLoading: boolean;
  isRegister: boolean;
  errors: string[];
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setName?: (name: string) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export default function Form({
  name,
  email,
  password,
  isLoading,
  isRegister,
  errors,
  setEmail,
  setPassword,
  setName,
  handleSubmit,
}: FormProps) {
  return (
    <>
      {isLoading && <Loader></Loader>}

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 dark:text-slate-100">
            {isRegister
              ? "Registrate en la plataforma"
              : "Iniciar sesión con tu cuenta"}
          </h2>
          {errors.length > 0 && (
            <div className="bg-red-400 p-2 text-sm rounded-md mt-4">
              {errors[0]}
            </div>
          )}
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {isRegister && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200"
                >
                  Nombre de usuario
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-slate-800 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkenLightBlue sm:text-sm sm:leading-6"
                    value={name}
                    onChange={(e) => setName!(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200"
              >
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-slate-800 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkenLightBlue sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 dark:text-slate-200"
                >
                  Contraseña
                </label>
                <div className="text-sm">
                  {!isRegister && (
                    <a
                      href="#"
                      className="font-semibold text-darkenLightBlue hover:text-lightBlue"
                    >
                      ¿Olvidate tu contraseña?
                    </a>
                  )}
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block p-2 w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-slate-800 dark:text-white shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-slate-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkenLightBlue sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-darkenLightBlue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-lightBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkenLightBlue"
              >
                {isRegister ? "Registrarse" : "Iniciar Sesión"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 dark:text-slate-300">
            {isRegister ? "¿Ya tienes una cuenta?" : "¿Eres nuevo?"}{" "}
            <Link
              href={`${isRegister ? "/accounts/login" : "/accounts/register"}`}
              className="font-semibold leading-6 text-darkenLightBlue hover:text-lightBlue"
            >
              {isRegister ? "Iniciar sesión" : "Registrarse"}
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
