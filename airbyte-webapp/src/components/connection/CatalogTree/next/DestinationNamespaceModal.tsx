import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
// import { FormattedMessage } from "react-intl";

import { Input } from "components/ui/Input";
import { ModalBody, ModalFooter } from "components/ui/Modal";
import { Text } from "components/ui/Text";

import LabeledRadioButton from "../../../LabeledRadioButton";
import { Button } from "../../../ui/Button";
import styles from "./DestinationNamespaceModal.module.scss";

const enum RadioButtonValueType {
  Mirror = "mirror",
  Default = "default",
  Custom = "custom",
}

export const DestinationNamespaceModal: React.FC = () => {
  const t = (v: any) => {
    console.log(v);
  };
  return (
    <Formik
      initialValues={{ radioButton: RadioButtonValueType.Mirror }}
      enableReinitialize
      onSubmit={() => console.log("hi")}
    >
      {({ values }) => (
        <Form>
          <ModalBody className={styles.content} maxHeight={400} padded={false}>
            <div className={styles.actions}>
              <Field name="radioButton">
                {({ field }: FieldProps<string>) => (
                  <>
                    <LabeledRadioButton
                      {...field}
                      className={styles.radioButton}
                      id="destinationNamespace.mirror"
                      label="Mirror source structure"
                      value={RadioButtonValueType.Mirror}
                      checked={field.value === RadioButtonValueType.Mirror}
                    />
                    <LabeledRadioButton
                      {...field}
                      className={styles.radioButton}
                      id="destinationNamespace.default"
                      label="Destination default"
                      value={RadioButtonValueType.Default}
                      checked={field.value === RadioButtonValueType.Default}
                    />
                    <LabeledRadioButton
                      {...field}
                      className={styles.radioButton}
                      id="destinationNamespace.custom"
                      label="Custom format"
                      value={RadioButtonValueType.Custom}
                      checked={field.value === RadioButtonValueType.Custom}
                    />
                  </>
                )}
              </Field>
              <div className={styles.input}>
                {t(values)}
                <Input
                  disabled={values.radioButton !== RadioButtonValueType.Custom}
                  placeholder="airbyte_prod_cloudapi"
                />
              </div>
            </div>
            <div className={styles.description}>
              <Text>
                Replicate to the default namespace in the destination, which will differ based on your destination.
              </Text>
              <Text className={styles.secondaryText}>
                The following table summarises how this works. We assume an example of replication configurations
                between a Postgres Source and Snowflake Destination (with settings of schema = "my_schema"):
              </Text>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="secondary">Cancel</Button>
            <Button>Apply</Button>
          </ModalFooter>
        </Form>
      )}
    </Formik>
  );
};
