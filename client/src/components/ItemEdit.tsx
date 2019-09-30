import * as React from 'react';
import { withItemsHardwareFastenerBolt, ItemsHardwareFastenerBoltProps } from '../queries/types';



interface ItemEditProps {}
interface ItemEditState {}

export default withItemsHardwareFastenerBolt()(
    class ItemTable extends React.Component<ItemsHardwareFastenerBoltProps<ItemEditProps>, ItemEditState> {
    }
)