import React, { FC } from "react";
import { member, Member } from "lib/neosscript/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface EmptyGUIDInput {
  id?: string;
  persistentId?: string;
  updateOrderId?: string;
  updateOrder?: number;
  Enabled?: member<boolean>;
  _activeVisual?: member<any>;
}

const EmptyGUID: FC<EmptyGUIDInput> = (props: EmptyGUIDInput) => {
  const {
    id,
    persistentId,
    updateOrderId,
    updateOrder,
    Enabled,
    _activeVisual,
  } = props;

  return (
    <component
      name="FrooxEngine.LogiX.Utility.EmptyGUID"
      id={id}
      persistentId={persistentId}
      updateOrderId={updateOrderId}
      updateOrder={updateOrder}
    >
      <Member
        type={`FrooxEngine.Sync\`1[System.Boolean]`}
        name="Enabled"
        content={Enabled} /* default: False */
      />
      <Member
        type={`FrooxEngine.CleanupRef\`1[FrooxEngine.Slot]`}
        name="_activeVisual"
        content={_activeVisual} /* default: ID0 */
      />
    </component>
  );
};

export default EmptyGUID;
