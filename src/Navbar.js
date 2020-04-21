import React from 'react';

const Navbar = ({ cartCount, onPageChange }) => (
    <nav>
        <ul>
            <li className="store">
                <a href="/"
                    onClick={evt => {
                        evt.preventDefault();
                        onPageChange('store');
                    }}>Store</a>
            </li>
            <li className="cart-count">
                <a href="/cart" onClick={evt => {
                    evt.preventDefault();
                    onPageChange('cart');
                }}><span role="img" aria-label="items in cart">
                        🛒
        </span>{cartCount === 0 ? 'Empty' : cartCount}</a>
            </li>
        </ul>
    </nav>
);

export default Navbar;