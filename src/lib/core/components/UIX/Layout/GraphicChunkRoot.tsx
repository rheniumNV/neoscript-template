import React, { FC } from "react";
import { member, Member } from "lib/core/Member";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      component: any;
    }
  }
}
export interface GraphicChunkRootInput {
  id?: string;
  persistentId?: string;
  UpdateOrder?: member<number>;
  Enabled?: member<boolean>;
}

const GraphicChunkRoot: FC<GraphicChunkRootInput> = (
  props: GraphicChunkRootInput
) => {
  const { id, persistentId, UpdateOrder, Enabled } = props;

  return (
    <component
      name="FrooxEngine.UIX.GraphicChunkRoot"
      id={id}
      persistentId={persistentId}
    >
      <Member
        type="FrooxEngine.Sync`1[System.Int32]"
        name="UpdateOrder"
        content={UpdateOrder} /* default: 0 */
      />
      <Member
        type="FrooxEngine.Sync`1[System.Boolean]"
        name="Enabled"
        content={Enabled} /* default: False */
      />
    </component>
  );
};

export default GraphicChunkRoot;
