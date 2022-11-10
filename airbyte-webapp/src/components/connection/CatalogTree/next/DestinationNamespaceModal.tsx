import React from "react";
import { FormattedMessage } from "react-intl";

import LabeledRadioButton from "../../../LabeledRadioButton";
import styles from "./DestinationNamespaceModal.module.scss";

export const DestinationNamespaceModal: React.FC = () => {
  return (
    <div className={styles.content}>
      <div className={styles.leftCell}>
        <LabeledRadioButton label={<FormattedMessage id="form.rawData" />} value="test" checked />
        <LabeledRadioButton label={<FormattedMessage id="form.rawData" />} value="test" checked />
        <LabeledRadioButton label={<FormattedMessage id="form.rawData" />} value="test" checked />
      </div>
      <div className={styles.rightCell}>RIGHT</div>
    </div>
  );
};
