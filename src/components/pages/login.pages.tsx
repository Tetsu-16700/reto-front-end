import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/models/login.models";
import { AuthHook } from "../hooks/auth.hook";

function LoginPage() {
  const { toast } = useToast();

  const navigate = useNavigate();

  const { validateSessionLogin } = AuthHook();

  useEffect(() => {
    validateSessionLogin();
  }, []);

  const [data, setData] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });

  function handleSubmit(values: any) {
    const response = fetchLogin(values);
    if (!response) {
      toast({
        variant: "destructive",
        title: "Error!",
        description: "Error en la autenticación",
      });
    } else {
      toast({
        title: "Ok",
        description: "Credenciales validas, redirigendo...",
      });

      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }

  function fetchLogin(values: any) {
    if (values.email === "abc@mail.com" && values.password === "abc") {
      window.localStorage.setItem("auth", "authenticated");
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-full flex justify-center ">
      <div className="mt-40">
        <h1 className=" text-2xl font-serif">Sistema de Carga de Datos</h1>
        <div className="mx-8 mt-10">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-serif">
                <div className="flex flex-col gap-2">
                  <label htmlFor="" >Email</label>
                  <input
                    autoComplete="off"
                    className="px-2 py-1 border rounded-md border-slate-500 outline-none"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="text-sm text-red-500">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="">Password</label>
                  <input
                    autoComplete="off"
                    className="px-2 py-1 border rounded-md border-slate-500 outline-none"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className="text-sm text-red-500">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>

                <Button type="submit" className="bg-blue-500">
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
