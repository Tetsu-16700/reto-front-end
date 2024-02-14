import { Button } from "../ui/button";

function FormElement() {
  return (
    <div className="mx-10 border shadow-md rounded-lg flex flex-col gap-8 items-center p-10 mt-10">
      <label htmlFor="">Selecciona un archivo</label>
      <input type="file" name="" id="" />
      <Button>Upload file</Button>
    </div>
  );
}

export default FormElement;
