import { Row, Col, Input, Button } from 'antd';
import Icon, { HomeOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;
const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);
const HeartIcon = props => <Icon component={HeartSvg} {...props} />;

function Header() {
  return (
    <Row
      justify="center"
      style={{ borderBottom: "1px solid hsl(0, 0%, 90%)" }}>
      <Col
        span={8}
        style={{
          // background: "crimson",
          display: "flex",
          flex: "align-item",
          alignItems: "center",
          fontSize: "1em"
        }}>
        <p style={{
          fontSize: "3em",
          color: "orange",
          fontFamily: "-moz-initial",
          margin: "0",
          paddingRight: "0.3em"
        }}>
          Etsy
          </p>
        <Search
          placeholder="Search for items or shops"
          allowClear
          enterButton="Search"
          size="default"
          style={{ width: "75%", height: "50%" }}
          onSearch={() => { }}
        />
      </Col>
      <Col
        span={8}
        style={{
          // background: "khaki",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          fontSize: "1em"
        }}>
        <ul style={{
          listStyleType: "none",
          margin: "0px",
          display: "flex"
        }}>
          {mainMenus.map((menu, index) => {
            const isLastElement = mainMenus.length - 1 === index;
            return (<li
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: isLastElement ? 0 : "1em",
                marginRight: isLastElement ? 0 : "1em",
                borderRight: isLastElement
                  ? ""
                  : "1px solid hsl(0, 0%, 80%)",
              }}
            >
              {menu.icon}
              <span>{menu.name}</span>
            </li>
            );
          })}
        </ul>
      </Col>
    </Row>
  )
}

const mainMenus = [
  { icon: <Button type="link" style={{ fontFamily: "unset", fontWeight: "600", textAlign: "center" }}>Sell on Etsy</Button> },
  { name: "Home", icon: <HomeOutlined style={{ fontSize: '24px', color: 'hsl(0, 0%, 30%)' }} /> },
  { name: "Favorites", icon: <HeartIcon style={{ fontSize: '24px', color: 'hsl(0, 0%, 30%)' }} /> },
  { name: "You", icon: <UserOutlined style={{ fontSize: '24px', color: 'hsl(0, 0%, 30%)' }} /> },
  { name: "Cart", icon: <ShoppingCartOutlined style={{ fontSize: '24px', color: 'hsl(0, 0%, 30%)' }} /> },
];

export default Header
