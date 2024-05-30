import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col, Card, ListGroup } from 'react-bootstrap';
import '../App.css';

function Mainpage() {
  const [products, setProducts] = useState([]);
 

  const fetchdata = async () => {
    const response = await axios.get('https://dummyjson.com/products');
    setProducts(response.data.products);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>
        We See Risk, You See Opportunity
      </h1>
      <Row style={{ display: 'flex' }}>
        <Col md={6} className="image-section">
          {selectedProduct && (
            <img src={selectedProduct.thumbnail} alt={selectedProduct.title} />
          )}
        </Col>
        <Col md={6}>
          <div className="list-section">
            {products.map((item, id) => (
              <Card key={id} style={{ width: '18rem' }} onClick={() => handleProductClick(item)}>
                <ListGroup variant="flush">
                  <ListGroup.Item>{item.title}</ListGroup.Item>
                  <ListGroup.Item>{item.description}</ListGroup.Item>
                </ListGroup>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Mainpage;
