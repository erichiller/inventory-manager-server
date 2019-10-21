import * as React from 'react';
import { withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps } from '../types/graphql';



interface ItemEditProps {}
interface ItemEditState {}

export default withItemsHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemEditProps>, ItemEditState> {
    }
)