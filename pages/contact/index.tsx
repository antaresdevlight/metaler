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

import sendEmail from "@/src/utils/sendEmail";

import sitedata from "@/src/constants/sitedata";
import reqStatus from "@/src/constants/reqStatus";

import metaler_contact from "@/src/assets/metaler_contact.jpg";

import styles from "./styles";

const INITIAL_STATE = {
  name: "",
  email: "",
  message: "",
};

const confirmationMessages: { [key: string]: string } = {
  success: "Gracias por tu mensaje, pronto nos pondremos en contacto contigo.",
  error: "No se pudo enviar tu mensaje, vuelve a intentarlo.",
};

function Contact() {
  const sectionData = sitedata.contact;

  const [formState, setFormState] = useState<any>(INITIAL_STATE);

  const [confirmationMessage, setConfirmationMessage] = useState({
    show: false,
    message: "",
  });

  const handleChange = (params: { field: string; value: string }) => {
    setConfirmationMessage({
      show: false,
      message: "",
    });

    const { field, value } = params;

    const formStateCopy = { ...formState };

    formStateCopy[field] = value;

    setFormState(formStateCopy);
  };

  const [status, setStatus] = useState(reqStatus.IDLE);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    setStatus(reqStatus.IS_LOADING);

    const { message, sent } = await sendEmail({ formState });

    setStatus(sent ? reqStatus.HAS_SUCCESS : reqStatus.HAS_ERROR);

    setFormState(INITIAL_STATE);

    setConfirmationMessage({
      show: true,
      message: sent ? confirmationMessages.success : confirmationMessages.error,
    });
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

              {confirmationMessage.show && (
                <Text {...styles.confirmationMessage}>
                  {confirmationMessage.message}
                </Text>
              )}

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
