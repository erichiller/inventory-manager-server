import * as React from 'react';
import { withItemHardwareFastenerBolt, ItemHardwareFastenerBoltProps } from '../types/graphql';



interface ItemEditProps {}
interface ItemEditState {}

export default withItemHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemHardwareFastenerBoltProps<ItemEditProps>, ItemEditState> {
    }
);