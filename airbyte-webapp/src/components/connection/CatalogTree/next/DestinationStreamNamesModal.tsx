import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";

import LabeledRadioButton from "../../../LabeledRadioButton";
import { Button } from "../../../ui/Button";
import { Input } from "../../../ui/Input";
import { ModalBody, ModalFooter } from "../../../ui/Modal";
import { Text } from "../../../ui/Text";
import styles from "./DestinationStreamNamesModal.module.scss";

const enum RadioButtonValueType {
  Mirror = "mirror",
  Prefix = "prefix",
}

interface DestinationStreamNamesModalProps {
  closeModal: () => void;
}

export const DestinationStreamNamesModal: React.FC<DestinationStreamNamesModalProps> = ({ closeModal }) => {
  return (
    <Formik
      initialValues={{ tableName: RadioButtonValueType.Mirror, prefix: "" }}
      enableReinitialize
      onSubmit={() => console.log("hi")}
    >
      {({ values }) => (
        <Form>
          <ModalBody className={styles.content} maxHeight={400} padded={false}>
            <Text className={styles.description}>
              <FormattedMessage id="connectionForm.modal.destinationStreamNames.description" />
            </Text>
            <Field name="tableName">
              {({ field }: FieldProps<string>) => (
                <LabeledRadioButton
                  {...field}
                  className={styles.radioButton}
                  id="destinationStreamNames.mirror"
                  label={
                    <Text as="span">
                      <FormattedMessage id="connectionForm.modal.destinationStreamNames.radioButton.mirror" />
                    </Text>
                  }
                  value={RadioButtonValueType.Mirror}
                  checked={field.value === RadioButtonValueType.Mirror}
                />
              )}
            </Field>
            <Field name="tableName">
              {({ field }: FieldProps<string>) => (
                <LabeledRadioButton
                  {...field}
                  className={styles.radioButton}
                  id="destinationStreamNames.prefix"
                  label={
                    <Text as="span">
                      <FormattedMessage id="connectionForm.modal.destinationStreamNames.radioButton.prefix" />
                    </Text>
                  }
                  value={RadioButtonValueType.Prefix}
                  checked={field.value === RadioButtonValueType.Prefix}
                />
              )}
            </Field>
            <div className={styles.input}>
              <Field name="prefix">
                {({ field }: FieldProps<string>) => (
                  <Input {...field} disabled={values.tableName !== RadioButtonValueType.Prefix} placeholder="prefix" />
                )}
              </Field>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="secondary" onClick={closeModal}>
              <FormattedMessage id="connectionForm.modal.destinationNamespace.action.cancel" />
            </Button>
            <Button type="submit">
              <FormattedMessage id="connectionForm.modal.destinationNamespace.action.apply" />
            </Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};
