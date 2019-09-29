
import gql from 'graphql-tag';
export const QUERY_ITEMS_HARDWARE_FASTENER_BOLT = gql`
# query GetItemsHardwareFastener ( $ProjectStub: String )  {
#   item(where: {class: { _eq: $ProjectStub }}) {
query items_hardware_fastener_bolt {
  items: items_hardware_fastener_bolt {
    id
    name
    description
    unit
  }
}
`
