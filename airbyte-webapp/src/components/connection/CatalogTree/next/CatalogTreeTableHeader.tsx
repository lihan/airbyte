import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  console.log(closeModal);

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
              size: "xl",
              title: "Destination namespace",
              content: () => <DestinationNamespaceModal />,
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
              size: "xl",
              title: "Destination stream names",
              content: () => <DestinationStreamNamesModal />,
            })
          }
        >
          <FontAwesomeIcon icon={faGear} />
        </Button>
      </TextCell>
    </Header>
  );
};
