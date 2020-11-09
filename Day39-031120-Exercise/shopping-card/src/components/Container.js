import { Row, Col, Button, Input } from 'antd';

const { TextArea } = Input;

function Container() {
  return (
    <Row justify="center" style={{ backgroundColor: "hsl(110, 5%, 90%)" }}>
      <Col span={16}>
        <Row>
          <Col span={12}>
            <div style={{
              padding: "0.75em 0em",
              fontSize: "2em"
            }}>1 item in your cart</div>
          </Col>
          <Col span={12} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <Button type="primary">Keep shopping</Button>
          </Col>
        </Row>
        <Row style={{ padding: "20px 0px", backgroundColor: "white" }}>
          <Col span={16} style={{ padding: "20px", borderRight: "1px solid hsl(0, 0%, 90%)", }}>
            <Row>
              <Col span={12} style={{ fontWeight: "500" }}>by Joessa</Col>
              <Col span={12} style={{ color: "hsl(0, 0%, 60%)", fontWeight:"500", textAlign: "end" }}>Contact shop</Col>
            </Row>
            <Row>
              <Col span={6}>
                <img src='https://i.pinimg.com/originals/3f/3d/d9/3f3dd9219f7bb1c9617cf4f154b70383.jpg' width="150" height="150"/>
              </Col>
              <Col span={10}>detail</Col>
              <Col span={4}>box</Col>
              <Col span={4}>price</Col>
            </Row>
            <Row>
              <Col span={12}>
                <TextArea rows={2} placeholder="Add an optional note to seller" loading />
              </Col>
              <Col span={12} style={{ color: "hsl(0, 0%, 60%)", fontWeight: "500", textAlign: "end" }}>
                <div>
                  Ready to ship in 1-3 bussiness days
                </div>
                <div>
                  from United Kingdom
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={8} style={{ padding: "20px" }}>
            How you'll pay

              </Col>
        </Row>
        <Row>
          <Col span={24}>
            <div style={{
              padding: "1.5em 0em",
              fontSize: "1.25em",
              fontWeight: "bold",
              fontFamily: "inherit"
            }}>You might also like...</div>
          </Col>
        </Row>
        <Row>
          Item
        </Row>
      </Col>
    </Row>
  )
}

export default Container
