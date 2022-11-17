import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormikContext } from "formik";
import React from "react";
import { FormattedMessage } from "react-intl";

import { Cell, Header } from "components/SimpleTableComponents";
import { Button } from "components/ui/Button";
import { CheckBox } from "components/ui/CheckBox";
import { Text } from "components/ui/Text";
import { InfoTooltip, TooltipLearnMoreLink } from "components/ui/Tooltip";

import { useBulkEditService } from "hooks/services/BulkEdit/BulkEditService";
import { useConnectionFormService } from "hooks/services/ConnectionForm/ConnectionFormService";
import { useModalService } from "hooks/services/Modal";
import { links } from "utils/links";

import { NamespaceDefinitionType } from "../../../../core/request/AirbyteClient";
import { FormikConnectionFormValues } from "../../../../views/Connection/ConnectionForm/formConfig";
import styles from "./CatalogTreeTableHeader.module.scss";
import { DestinationNamespaceModal } from "./DestinationNamespaceModal";
import { DestinationStreamNamesModal } from "./DestinationStreamNamesModal";

const TextCell: React.FC<React.PropsWithChildren<{ flex?: number }>> = ({ flex, children }) => {
  return (
    <Cell flex={flex}>
      <Text size="sm" className={styles.cellText}>
        {children}
      </Text>
    </Cell>
  );
};

export const CatalogTreeTableHeader: React.FC = () => {
  const { mode } = useConnectionFormService();
  const { openModal, closeModal } = useModalService();
  const { onCheckAll, selectedBatchNodeIds, allChecked } = useBulkEditService();
  const formikProps = useFormikContext<FormikConnectionFormValues>();

  // const destinationNamespaceChange = ({ namespaceDefinition, namespaceFormat }) => {
  const destinationNamespaceChange = (value: any) => {
    console.log(formikProps);
    formikProps.setFieldValue("namespaceDefinition", value.namespaceDefinition);

    if (value.namespaceDefinition === NamespaceDefinitionType.customformat) {
      formikProps.setFieldValue("namespaceFormat", value.namespaceFormat);
    }
  };

  return (
    <Header className={styles.headerContainer}>
      <div className={styles.checkboxCell}>
        {mode !== "readonly" && (
          <CheckBox
            onChange={onCheckAll}
            indeterminate={selectedBatchNodeIds.length > 0 && !allChecked}
            checked={allChecked}
          />
        )}
      </div>
      <TextCell flex={0.5}>
        <FormattedMessage id="sources.sync" />
      </TextCell>
      {/* <TextCell>
        <FormattedMessage id="form.fields" />
      </TextCell> */}
      <TextCell flex={1}>
        <FormattedMessage id="form.namespace" />
      </TextCell>
      <TextCell flex={1}>
        <FormattedMessage id="form.streamName" />
      </TextCell>
      <TextCell flex={2}>
        <FormattedMessage id="form.syncMode" />
        <InfoTooltip>
          <FormattedMessage id="connectionForm.syncType.info" />
          <TooltipLearnMoreLink url={links.syncModeLink} />
        </InfoTooltip>
      </TextCell>
      <TextCell flex={1}>
        <FormattedMessage id="form.cursorField" />
        <InfoTooltip>
          <FormattedMessage id="connectionForm.cursor.info" />
        </InfoTooltip>
      </TextCell>
      <TextCell flex={1}>
        <FormattedMessage id="form.primaryKey" />
      </TextCell>
      <div className={styles.arrowPlaceholder} />
      <TextCell flex={1}>
        <FormattedMessage id="form.namespace" />
        <Button
          variant="clear"
          onClick={() =>
            openModal({
              size: "lg",
              title: <FormattedMessage id="connectionForm.modal.destinationNamespace.title" />,
              content: () => (
                <DestinationNamespaceModal
                  initialValues={{
                    namespaceDefinition: formikProps.values.namespaceDefinition,
                    namespaceFormat: formikProps.values.namespaceFormat,
                  }}
                  closeModal={closeModal}
                  onChange={destinationNamespaceChange}
                />
              ),
            })
          }
        >
          <FontAwesomeIcon icon={faGear} />
        </Button>
      </TextCell>
      <TextCell flex={1}>
        <FormattedMessage id="form.streamName" />
        <Button
          variant="clear"
          onClick={() =>
            openModal({
              size: "sm",
              title: <FormattedMessage id="connectionForm.modal.destinationStreamNames.title" />,
              content: () => <DestinationStreamNamesModal closeModal={closeModal} />,
            })
          }
        >
          <FontAwesomeIcon icon={faGear} />
        </Button>
      </TextCell>
    </Header>
  );
};
