import React from 'react';
import classes from './Input.module.css'

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <labe htmlFor={props.input.id}>{props.label}</labe>
            <input ref={ref} id={props.input.id} {...props.input} />
        </div>
    );
})

export default Input;