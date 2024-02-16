import { useState } from "react";
import { Button } from "../ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "../ui/use-toast";

function DetailElement({ setSection }: { setSection: any }) {
  const { toast } = useToast();
  const [showInfo, setShowInfo] = useState(true);

  function showToast() {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Campos no validos",
      duration: 1000,
    });
  }

  return (
    <div className="mx-10 border shadow-md rounded-lg flex flex-col gap-8 items-center w-[80%] mt-10 p-4">
      <header className="w-full flex justify-between gap-8">
        <div className="flex flex-col  items-center w-[90%] ">
          {showInfo ? (
            <Alert className="w-fit text-sm border-green-500 text-green-500  ">
              <AlertDescription>
                You can add components and dependencies to your app using the
                cli.{" "}
                <span onClick={(e) => setShowInfo(false)} role="button">
                  ❎
                </span>
              </AlertDescription>
            </Alert>
          ) : (
            ""
          )}
        </div>
        <div>
          <Button onClick={(e) => setSection("upload")}> New File</Button>
        </div>
      </header>

      <div>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Exercitationem quos voluptates
        </h4>
        <div className="mt-4">
          <table className="w-full" cellPadding={8}>
            <thead>
              <tr>
                <td>Row</td>
                <td>Name</td>
                <td>Email</td>
                <td>Age</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td valign="top">2</td>
                <td valign="top">
                  <input
                    className="w-full px-2 py-1 rounded-md border outline-none"
                    type="text"
                  />
                </td>
                <td valign="top">
                  <div className="flex flex-col">
                    <input
                      className="px-2 py-1 rounded-md border border-red-500 outline-none"
                      type="text"
                    />
                    <span className="text-red-500 text-sm">
                      El formato email no es valido
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <input
                    className="px-2 w-20 py-1 rounded-md border outline-none"
                    type="text"
                  />
                </td>
                <td valign="top">
                  <Button onClick={showToast}>Retry</Button>
                </td>
              </tr>
              <tr>
                <td valign="top">4</td>
                <td valign="top">
                  <input
                    className="w-full px-2 py-1 rounded-md border outline-none"
                    type="text"
                  />
                </td>
                <td valign="top">
                  <div className="flex flex-col">
                    <input
                      className="px-2 py-1 rounded-md border border-red-500 outline-none"
                      type="text"
                    />
                    <span className="text-red-500 text-sm">
                      El formato email no es valido
                    </span>
                  </div>
                </td>
                <td valign="top">
                  <input
                    className="px-2 w-20 py-1 rounded-md border outline-none"
                    type="text"
                  />
                </td>
                <td valign="top">
                  <Button onClick={showToast}>Retry</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailElement;
