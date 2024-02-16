import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

function FormElement({ setSection }: { setSection: any }) {
  const [file, setFile] = useState("");

  const { toast } = useToast();

  function handleSubmit() {
    toast({
      title: "Validating...",
      description: "We are validating the file 🗃️",
      duration: 2000,
    });
    setTimeout(() => {
      setSection("detail");
    }, 2000);
  }

  return (
    <div className="mx-10 border shadow-md rounded-lg flex flex-col  gap-8 items-center p-40 mt-10">
      <label className="font-serif" htmlFor="" >Selecciona un archivo</label>
      <input
        accept=".xlsx, .csv"
        type="file"
        onChange={(e: any) => setFile(e.target.files[0])}
      />
      <Button className="bg-blue-500 font-serif" onClick={handleSubmit}>Upload file</Button>
    </div>
  );
}

export default FormElement;