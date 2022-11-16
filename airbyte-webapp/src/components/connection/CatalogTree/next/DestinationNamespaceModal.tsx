import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { ModalBody, ModalFooter } from "components/ui/Modal";
import { Text } from "components/ui/Text";

import LabeledRadioButton from "../../../LabeledRadioButton";
import styles from "./DestinationNamespaceModal.module.scss";

const enum RadioButtonValueType {
  Mirror = "mirror",
  Default = "default",
  Custom = "custom",
}

interface DestinationNamespaceModalProps {
  closeModal: () => void;
}

export const DestinationNamespaceModal: React.FC<DestinationNamespaceModalProps> = ({ closeModal }) => {
  return (
    <Formik
      initialValues={{ destinationNamespace: RadioButtonValueType.Mirror, customFormat: "${SOURCE_NAMESPACE}" }}
      enableReinitialize
      onSubmit={() => console.log("hi")}
    >
      {({ values }) => (
        <Form>
          <ModalBody className={styles.content} maxHeight={400} padded={false}>
            <div className={styles.actions}>
              <Field name="destinationNamespace">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.mirror"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.radioButton.mirror" />
                      </Text>
                    }
                    value={RadioButtonValueType.Mirror}
                    checked={field.value === RadioButtonValueType.Mirror}
                  />
                )}
              </Field>
              <Field name="destinationNamespace">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.default"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.radioButton.default" />
                      </Text>
                    }
                    value={RadioButtonValueType.Default}
                    checked={field.value === RadioButtonValueType.Default}
                  />
                )}
              </Field>
              <Field name="destinationNamespace">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.custom"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.radioButton.custom" />
                      </Text>
                    }
                    value={RadioButtonValueType.Custom}
                    checked={field.value === RadioButtonValueType.Custom}
                  />
                )}
              </Field>
              <div className={styles.input}>
                <Field name="customFormat">
                  {({ field }: FieldProps<string>) => (
                    <Input
                      {...field}
                      disabled={values.destinationNamespace !== RadioButtonValueType.Custom}
                      placeholder="airbyte_prod_cloudapi"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.description}>
              {values.destinationNamespace === RadioButtonValueType.Mirror && (
                <Text>
                  <FormattedMessage id="connectionForm.modal.destinationNamespace.mirror.description" />
                </Text>
              )}
              {(values.destinationNamespace === RadioButtonValueType.Default ||
                values.destinationNamespace === RadioButtonValueType.Custom) && (
                <Text>
                  <FormattedMessage id="connectionForm.modal.destinationNamespace.default.description" />
                </Text>
              )}
              <Text className={styles.secondaryText}>
                <FormattedMessage id="connectionForm.modal.destinationNamespace.description" />
              </Text>
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
