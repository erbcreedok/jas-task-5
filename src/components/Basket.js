import {styled} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";

const Wrapper = styled('div')`
  position: fixed;
  z-index: 1000;
  right: 20px;
  top: 80px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: .2s;
  ${({ expanded }) => (expanded && `
    width: 400px;
    height: 600px;
    background: white;
    border: 1px solid red;
    border-radius: 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px;
  `)}
`
const BasketIcon = styled('span')`
  font-size: 40px;
`


export function BasketItem({ product }) {
    return (
        <div>
            {product.title}
        </div>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const basket = useSelector((state) => state.shop.basket)

    return (
        <Wrapper onClick={() => setExpanded(!expanded)} expanded={expanded}>
            <BasketIcon>🪣</BasketIcon>
            { expanded && basket.map((product) => (
                <BasketItem product={product} key={product.id} />
            ))}
        </Wrapper>
    )
}
