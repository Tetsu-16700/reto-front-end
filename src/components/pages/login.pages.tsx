import { FormEvent } from "react";
import { Button } from "../ui/button";

export default function LoginPage() {


  //   estructura y visualizacion de login que podra observar el usuario
  return (
    <div className="w-full flex justify-center">
      <div className="mt-40">
        <h1 className="text-2xl font-bold">Sistema de Carga de Datos</h1>
        <div className="mx-8 mt-10">
          <form
            action=""
            className="flex flex-col gap-4"
            
          >
            <div className="flex flex-col gap-2">
              <label htmlFor="">Email</label>
              <input
                className="px-2 py-1 border  rounded-md border-slate-500 outline-none"
                type="text"
                name=""
                id=""
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Password</label>
              <input
                className="px-2 py-1 border  rounded-md border-slate-500 outline-none"
                type="password"
                name=""
                id=""
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
