import './index.css'
import React, { Component, Children } from 'react';//Children
import classNames from 'classnames';




export function GridWrapper(props) {
    let { children, legend, ...otherprops } = props
    return (
        <div className="gridwrapper">
            <fieldset {...otherprops}>
                {legend && <legend>{legend}</legend>}
                {children}
            </fieldset>
        </div>
    )
}



export function Row(props) {
    let { children, className, custom, span, ...otherprops } = props
    return (
        <div {...otherprops} className={classNames(!custom && 'rowwrapper', className)} style={!custom ? { gridTemplateColumns: span } : ""}>
            {children}
        </div>
    )
}

export function Fieldset(props) {
    let { children, legend, ...otherprops } = props
    return (
        <div {...otherprops} className="children">
            {children}
        </div>
    )
}



