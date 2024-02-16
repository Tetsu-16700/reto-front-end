import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "@/models/login.models";

function LoginPage() {
  const { toast } = useToast();

  const navigate = useNavigate();

  // TODO remove THIS SECTION

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
    if (values.email === "abc@gmail.com" && values.password === "abc") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="w-full flex justify-center ">
      <div className="mt-40">
        <h1 className="text-2xl font-bold">Sistema de carga de datos</h1>
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
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label htmlFor="">Email</label>
                  <input
                    autoComplete="off"
                    className="px-2 py-1 border rounded-md border-slate-500 outline-none"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span>{errors.email && touched.email && errors.email}</span>
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
                  <span>
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>

                <Button type="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
            {/* <form
              action=""
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label htmlFor="">Email</label>
                <input
                  className="px-2 py-1 border rounded-md border-slate-500 outline-none"
                  type="text"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="">Password</label>
                <input
                  className="px-2 py-1 border rounded-md  border-slate-500 outline-none"
                  type="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Button>Login</Button>
              </div>
            </form> */}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;