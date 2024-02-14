import { Button } from "../ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

function DetailElement() {
  return (
    <div className="mx-10 border shadow-md rounded-lg flex flex-col gap-8 items-center w-[80%] mt-10 p-4">
      <header className="w-full flex justify-between gap-8">
        <div className="  flex flex-col  items-center w-[90%] ">
          <Alert className="w-fit text-sm border-green-500 text-green-500 ">
            <AlertDescription>Records uploades successfully</AlertDescription>
          </Alert>
        </div>
        <div>
          <Button>New File</Button>
        </div>
      </header>

      <div>
        <h4>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sint
          porro nulla provident iste quidem veniam, earum natus?
        </h4>
        <div className="mt-4">
          <table className="w-full" cellPadding={8}>
            <tr>
              <td>Row</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
              <td></td>
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
                <Button>Retry</Button>
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
                <Button>Retry</Button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailElement;
