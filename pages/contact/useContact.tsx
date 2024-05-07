import { useState } from "react";

import reqStatus from "@/src/constants/reqStatus";

function useContact() {
  const [formState, setFormState] = useState<any>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (params: { field: string; value: string }) => {
    const { field, value } = params;

    const formStateCopy = { ...formState };

    formStateCopy[field] = value;

    setFormState(formStateCopy);
  };

  const [status, setStatus] = useState(reqStatus.IDLE);

  const handleSubmit = (event: any) => {
    event.preventDefault();

    setStatus(reqStatus.IS_LOADING);

    setTimeout(() => {
      console.log("handleSubmit: ", formState);
      setStatus(reqStatus.HAS_SUCCESS);
    }, 500);
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    status,
  };
}

export default useContact;
