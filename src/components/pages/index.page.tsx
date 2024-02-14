import { useState } from "react";
import DetailElement from "../elements/detail.element";
import FormElement from "../elements/form.elements";

function IndexPage() {
  const [section, setSection] = useState("upload");

  if (section === "upload") {
    return (
      <div className="w-full flex flex-col items-center">
        <h1 className="mt-20 text-left w-full ml-40 text-2xl">
          Sistema de Carga de Datos
        </h1>
        <FormElement></FormElement>
      </div>
    );
  } else if (section === "detail") {
    return <DetailElement />;
  }
}

export default IndexPage;
