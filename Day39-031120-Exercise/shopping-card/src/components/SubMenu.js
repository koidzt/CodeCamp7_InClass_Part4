import { Row, Col } from 'antd';

function SubMenu() {
  return (
    <Row
      justify="center"
      style={{
        padding: "0px 5px",
        margin: "0",
        borderBottom: "1px solid hsl(0, 0%, 90%)"
      }}>
      <Col
        span={16}
        style={{
          padding: "0",
          margin: "0",
        }}>
        <ul
          style={{
            display: "flex",
            listStyleType: "none",
            padding: "3px 0",
            margin: "0",
            fontWeight:"550",
            color:"grey",
          }}
        >
          {subMenus.map((menu, index) => {
            const isFirstElement = index === 0;
            return (
              <li style={{ marginLeft: isFirstElement ? 0 : "2.5em" }}>
                {menu.name}
              </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  )
}

const subMenus = [
  { name: "Clothing & Accessories" },
  { name: "Jewelry" },
  { name: "Craft Supplies & Tools" },
  { name: "Weddings" },
  { name: "Entertainment" },
  { name: "Home & Living" },
  { name: "Kids & Baby" },
  { name: "Vintage" }
];

export default SubMenu
