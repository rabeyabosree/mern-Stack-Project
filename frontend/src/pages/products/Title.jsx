import React from 'react'

function Title({ title1, title2, titleStyles, paraStyles }) {
    return (
        <div className={`${titleStyles} pb-1`}>
            <h3 className={`${title2} h3`}>
                {title1}
                <span className='text-secondary !font-light'> {title2}</span>
            </h3>
            <p className={`${paraStyles} hidden`}>
                Discover the best deals on top-quality products, Crafted <br /> to elevate your every day experience
            </p>
        </div>
    )
}

export default Title