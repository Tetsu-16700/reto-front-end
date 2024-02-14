import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
// mensaje de alerta
import { useToast } from "@/components/ui/use-toast";

export default function LoginPage() {
  // funcion para utlizar mensaje de alerta
  const { toast } = useToast();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleSumit(e: FormEvent) {
    e.preventDefault();
    // valida que el input tenga valor
    if (data.email.length && data.password.length) {
      const response = fetchLogin();
      if (!response) {
        toast({
          variant: "destructive",
          description: "👀Uh oh! Something went wrong.",
        });
      } else {
        toast({
          description: "✅Your message has been successfully sent!",
        });
      }
    }
  }

  //   funcion que captura evento
  function fetchLogin() {
    if (data.email === "abc@gmail.com" && data.password === "abc") {
      return true;
    } else {
      return false;
    }
  }

  //   estructura y visualizacion de login que podra observar el usuario
  return (
    <div className="w-full flex justify-center">
      <div className="mt-40">
        <h1 className="text-2xl font-bold">Sistema de Carga de Datos</h1>
        <div className="mx-8 mt-10">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSumit}
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                className="px-2 py-1 border  rounded-md border-slate-500 outline-none"
                type="text"
                onChange={(e) => setData({ ...data, email: e.target.value })}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                className="px-2 py-1 border  rounded-md border-slate-500 outline-none"
                type="password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <Button>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
