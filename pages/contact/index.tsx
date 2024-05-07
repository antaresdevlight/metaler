import { useState } from "react";
import Image from "next/image";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Textarea,
} from "@chakra-ui/react";

import sitedata from "@/src/constants/sitedata";
import reqStatus from "@/src/constants/reqStatus";

import metaler_contact from "@/src/assets/metaler_contact.jpg";

const styles = {
  section: {
    w: "100%",
    h: "auto",
    bg: "white",
    alignItems: "center",
  },
  contact: {
    w: "100%",
    maxW: "1200px",
    h: { base: "max-content", md: "max-content", lg: "740px", xl: "740px" },
    alignItems: "center",
    mb: { md: "60px", lg: "60px" },
  },
  title: {
    alignItems: "center",
    top: { base: "auto", md: "auto", lg: "15.63vw", xl: "222px" },
    left: { base: "auto", md: "auto", lg: "26.37vw", xl: "436px" },
    gap: { base: "3vw", md: "2.61vw", lg: "20px", xl: "23px" },
    color: "dark",
    fontSize: { base: "10vw", md: "7.82vw", lg: "60px", xl: "60px" },
    fontWeight: "400",
    lineHeight: "normal",
    my: { base: "40px", md: "40px", lg: "50px" },
    //border: "1px",
  },
  divider: {
    w: { base: "100px", md: "305px", lg: "305px", xl: "305px" },
    h: "1px",
    bg: "dark",
  },
  message: {
    fontSize: { base: "14px", md: "16px", lg: "18px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "35px", md: "45px", lg: "60px" },
  },
  formImageContainer: {
    w: "100%",
    px: { md: "20px", lg: "30px" },
    //mb: { md: "60px", lg: "60px" },
    alignItems: "center",
    //border: "1px",
  },
  form: {
    w: { base: "88%", md: "50%" },
    p: { base: "10px", md: "15px", lg: "30px" },
    mb: { base: "25px", md: "0px" },
    //border: "1px",
  },
  formControl: {
    w: "100%",
    fontSize: { base: "12px", md: "14px", lg: "16px" },
    fontWeight: "400",
    lineHeight: "normal",
    mb: { base: "25px", md: "20px", lg: "30px" },
    //border: "1px",
  },
  textArea: {
    minH: { base: "80px", md: "100px" },
    maxH: "120px",
    border: "1px",
    borderColor: "dark",
  },
  input: {
    border: "1px",
    borderColor: "dark",
  },
  button: {
    w: { base: "150px", md: "200px" },
    bg: "metaler",
  },
  formImage: {
    w: { base: "88%", md: "50%" },
    h: "auto",
    mb: { base: "45px", md: "0px" },
  },
};

function Contact() {
  const sectionData = sitedata.contact;

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

  return (
    <Flex {...styles.section} direction="column">
      <Flex {...styles.contact} direction="column">
        {/* TITLE */}
        <Flex {...styles.title}>
          <Text>{sectionData.title}</Text>

          <Divider {...styles.divider} orientation="horizontal" />
        </Flex>

        {/* MESSAGE */}
        <Text {...styles.message}>
          Escribenos, resolveremos todas tus dudas.
        </Text>

        <Flex
          {...styles.formImageContainer}
          direction={{ base: "column", md: "row" }}
        >
          {/* FORM */}
          <Flex {...styles.form}>
            <form
              style={{ width: "100%" }}
              onSubmit={(event: any) => handleSubmit(event)}
            >
              <FormControl {...styles.formControl}>
                <FormLabel>Nombre</FormLabel>
                <Input
                  type="name"
                  {...styles.input}
                  maxLength={100}
                  value={formState.name}
                  onChange={(event: any) =>
                    handleChange({ field: "name", value: event.target.value })
                  }
                />
              </FormControl>

              <FormControl {...styles.formControl}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  {...styles.input}
                  maxLength={100}
                  value={formState.email}
                  onChange={(event: any) =>
                    handleChange({ field: "email", value: event.target.value })
                  }
                />
              </FormControl>

              <FormControl {...styles.formControl}>
                <FormLabel>Mensaje</FormLabel>
                <Textarea
                  {...styles.textArea}
                  maxLength={200}
                  value={formState.message}
                  onChange={(event: any) =>
                    handleChange({
                      field: "message",
                      value: event.target.value,
                    })
                  }
                />
              </FormControl>

              <Button
                {...styles.button}
                type="submit"
                isLoading={status === reqStatus.IS_LOADING}
              >
                Enviar
              </Button>
            </form>
          </Flex>

          {/* IMAGE */}
          <Flex {...styles.formImage}>
            <Image src={metaler_contact} width={600} height={600} alt="us" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Contact;
