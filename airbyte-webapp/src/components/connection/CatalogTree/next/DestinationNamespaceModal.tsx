import { Field, FieldProps, Form, Formik } from "formik";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";

import { Button } from "components/ui/Button";
import { Input } from "components/ui/Input";
import { ModalBody, ModalFooter } from "components/ui/Modal";
import { Text } from "components/ui/Text";

import { NamespaceDefinitionType } from "../../../../core/request/AirbyteClient";
import LabeledRadioButton from "../../../LabeledRadioButton";
import styles from "./DestinationNamespaceModal.module.scss";

interface DestinationNamespaceInitialValueType {
  namespaceDefinition: NamespaceDefinitionType;
  namespaceFormat: string;
}

interface DestinationNamespaceModalProps {
  initialValues: any;
  closeModal: () => void;
  onChange: (values: DestinationNamespaceInitialValueType) => void;
}

export const DestinationNamespaceModal: React.FC<DestinationNamespaceModalProps> = ({
  initialValues,
  closeModal,
  onChange,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Formik
      initialValues={
        {
          namespaceDefinition: initialValues.namespaceDefinition,
          namespaceFormat: initialValues.namespaceFormat,
        } as DestinationNamespaceInitialValueType
      }
      enableReinitialize
      onSubmit={(values: DestinationNamespaceInitialValueType) => {
        closeModal();
        onChange(values);
      }}
    >
      {({ values }) => (
        <Form>
          <ModalBody className={styles.content} maxHeight={400} padded={false}>
            <div className={styles.actions}>
              <Field name="namespaceDefinition">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.source"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.option.source" />
                      </Text>
                    }
                    value={NamespaceDefinitionType.source}
                    checked={field.value === NamespaceDefinitionType.source}
                  />
                )}
              </Field>
              <Field name="namespaceDefinition">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.destination"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.option.destination" />
                      </Text>
                    }
                    value={NamespaceDefinitionType.destination}
                    checked={field.value === NamespaceDefinitionType.destination}
                  />
                )}
              </Field>
              <Field name="namespaceDefinition">
                {({ field }: FieldProps<string>) => (
                  <LabeledRadioButton
                    {...field}
                    className={styles.radioButton}
                    id="destinationNamespace.customFormat"
                    label={
                      <Text as="span">
                        <FormattedMessage id="connectionForm.modal.destinationNamespace.option.customFormat" />
                      </Text>
                    }
                    value={NamespaceDefinitionType.customformat}
                    checked={field.value === NamespaceDefinitionType.customformat}
                  />
                )}
              </Field>
              <div className={styles.input}>
                <Field name="namespaceFormat">
                  {({ field }: FieldProps<string>) => (
                    <Input
                      {...field}
                      disabled={values.namespaceDefinition !== NamespaceDefinitionType.customformat}
                      placeholder={formatMessage({
                        id: "connectionForm.modal.destinationNamespace.input.placeholder",
                      })}
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className={styles.description}>
              <Text>
                {values.namespaceDefinition === NamespaceDefinitionType.source && (
                  <FormattedMessage id="connectionForm.modal.destinationNamespace.option.source.description" />
                )}
                {(values.namespaceDefinition === NamespaceDefinitionType.destination ||
                  values.namespaceDefinition === NamespaceDefinitionType.customformat) && (
                  <FormattedMessage id="connectionForm.modal.destinationNamespace.option.destination.description" />
                )}
              </Text>
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
