import React from 'react';
import icon from '../../assets/products/design-tool.png';

const Products = () => {
    return (
        <div>
            <div>
                <p>Best Seller</p>
            </div>
            <div>
                <img src={icon} alt="" />
            </div>
            <div>
                <h1>AI Writing Pro</h1>
                <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p>$29 <span>/ month</span></p>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <button>Buy Now</button>
        </div>
    );
};

export default Products;