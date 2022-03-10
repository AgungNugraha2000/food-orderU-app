import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../cart/CartIcon'
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css'

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext)
    const [btnIsHighlighted, setBtnIsHighligted] = useState(false)

    const { items } = cartCtx

    const numberOfCartItem = items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return
        }
        setBtnIsHighligted(true)

        const timer = setTimeout(() => {
            setBtnIsHighligted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>your cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    );
}

export default HeaderCartButton;