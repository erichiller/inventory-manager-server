import React from 'react';
import { Form, Divider, Button } from 'antd';
import { ItemFormProps } from '../Item';

import { Intersection } from '~lib/UtilityFunctions';
import { ItemBundle } from './Index';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { ItemSelect } from '~components/Item/ItemSelect';


interface ItemBundleFormProps extends Intersection<ItemFormProps, ItemBundle> { 
    //
}


export const ItemBundleForm: React.FC<ItemBundleFormProps> = ( props ) => {
    /**
     * console regex search: 
     * /(onFinish|ItemSelect|onChange)/
     */

    // useEffect( () => {
    //     screwSizeInputRef.current.focus();
    // }, [ screwSizeInputRef ] );

    // useEffect( () => {
    //     let initProps: Partial<ItemBundle> = {};
    //     if ( !props.thread_direction ) {
    //         initProps.thread_direction = EnumItemHandednessEnum.right;
    //     }
    //     form.setFieldsValue( initProps );
    // } );

    

    return (
        <React.Fragment>
            <div className="col">
                <Divider key="items" orientation="left">Items</Divider>

                {/* <Form.Item
                    label="Bundled Items"
                    name="items"
                    getValueFromEvent={( args ) => {
                        console.log( 'form getValueFromEvent (items)', args );
                        return args;
                    }}
                >
                    <ItemSelect placeholder="Search for Item" />
                </Form.Item> */}

                
                <Divider key="Items" orientation="left">Items</Divider>
                <Form.List name="order_items">
                    {( fields, { add, remove } ) => {
                        return (
                            <React.Fragment>

                                {fields.map( ( field ) => (
                                    // TODO: need to add **Quantity**
                                    <Form.Item
                                        {...field}
                                        // getValueFromEvent={( args: { shipment?: ShipmentSelectValue; } ) => {
                                        //     console.log( 'OrderFormModal getValueFromEvent (OrderFormModal.items)', { field, index, args } );
                                        //     let shipment = args.shipment;
                                        //     if ( shipment ) {
                                        //         if ( !( 'id' in shipment ) ) {
                                        //             if ( 'carrier_vendor_id' in shipment ) {
                                        //                 console.log( "OrderFormModal, new shipment detected", shipment );
                                        //                 let shipmentFiltered = filterObject( shipment, null, [ 'id' ] );
                                        //                 // shipmentFiltered.carrier_vendor_id
                                        //                 setShipments( [ shipmentFiltered ] );
                                        //             }
                                        //         }
                                        //     }
                                        //     return args;
                                        // }}
                                        className="full-width-form-item"
                                    // normalize={ ( value: any, prevValue: any, allValues: Store) => {
                                    //     return { data: value };
                                    // }}
                                    >
                                        <ItemSelect
                                            suffixIcon={
                                                <MinusCircleOutlined
                                                    className="dynamic-delete-button"
                                                    onClick={() => {
                                                        remove( field.name );
                                                    }}
                                                />
                                            }
                                        />
                                    </Form.Item>
                                ) )}
                                <Form.Item
                                    label={null}
                                    colon={false}
                                    className="full-width-form-item"
                                >
                                    <Button
                                        key="add_item"
                                        type="dashed"
                                        onClick={() => {
                                            add();
                                        }}
                                        onKeyDown={() => {
                                            add();
                                        }}
                                        style={{ width: "100%", textAlign: 'center' }}
                                    >
                                        <PlusOutlined /> Add Item
                                    </Button>
                                </Form.Item>
                            </React.Fragment>
                        );
                    }}
                </Form.List>
            </div>

        </React.Fragment>
    );
};



