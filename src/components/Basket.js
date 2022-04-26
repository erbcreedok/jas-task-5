import {Button, styled} from "@mui/material";
import {useCallback, useMemo, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {DEC_BASKET, INC_BASKET, OPEN_MODAL} from "../store/actions/shopActions";

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

export function BasketItem({ product, count, onCountChange }) {
    const handleClick = useCallback((inc) => {

        return (e) => {
            e.stopPropagation()
            onCountChange(inc, product)
        }
    }, [onCountChange, product])
    return (
        <div>
            {product.title}
            <button onClick={handleClick(-1)} disabled={count <= 1}>-1</button>
            {count}
            <button onClick={handleClick(+1)}>+1</button>
        </div>
    )
}

export function Basket() {
    const [expanded, setExpanded] = useState(false)
    const basket = useSelector((state) => state.shop.basket)
    const dispatch = useDispatch()

    const handleCountChange = useCallback((inc, product) => {
        if (inc === 1) {
            dispatch({ type: INC_BASKET, payload: product })
        }
        if (inc === -1) {
            dispatch({ type: DEC_BASKET, payload: product })
        }
    }, [dispatch])

    const totalSum = useMemo(() => {
        return basket.reduce((acc, { product, count }) => acc + product.price * count, 0).toFixed(2)
    }, [basket])

    const handleModalOpen = useCallback(() => {
        dispatch({ type: OPEN_MODAL })
    }, [dispatch])

    return (
        <Wrapper onClick={() => setExpanded(true)} expanded={expanded}>
            <div style={{ display: 'flex' }}>
                <BasketIcon>🪣</BasketIcon>
                {expanded && <button onClick={(e) => { e.stopPropagation(); setExpanded(false)}}>Close</button>}
            </div>
            { expanded && basket.map((item) => (
                <BasketItem {...item} key={item.product.id} onCountChange={handleCountChange} />
            ))}
            <div>Total Sum: {totalSum}</div>
            {expanded && (
                <Button onClick={handleModalOpen} style={{ marginTop: 'auto' }} variant="outlined">Оформить заявку</Button>
            )}
        </Wrapper>
    )
}
