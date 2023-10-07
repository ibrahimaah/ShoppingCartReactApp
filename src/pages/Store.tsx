import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from '../components/StoreItem'
// import useBreadcrumbs from "use-react-router-breadcrumbs";

export default function Store() {
  return (
    <>
      <h2 className="display-5">Store</h2>
      <Row xs={1} md={2} lg={3} className='gap-3 justify-content-center'>
      {
        storeItems.map(storeItem => (
          <Col key={storeItem.id}> <StoreItem {...storeItem}/></Col>
        ))
      }
        
      </Row>
    </>
  )
}
