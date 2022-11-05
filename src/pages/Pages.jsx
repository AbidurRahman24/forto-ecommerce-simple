import React from 'react';
import Footer from '../common/footer/Footer';
import Annocument from '../components/annocument/Annocument';
import Discount from '../components/discount/Discount';
import FlashDeals from '../components/flashDeals/FlashDeals';
import Home from '../components/mainpages/Home';
import NewArrivals from '../components/newarrivals/NewArrivals';
import Shop from '../components/shop/Shop';
import TopCate from '../components/top/TopCate';
import Wrapper from '../components/wrapper/Wrapper';

const Pages = ({productItems, addToCart, CartItem, shopItems}) => {
    // console.log(shopItems)
    return (
        <div>
            <Home CartItem={CartItem} />
            <FlashDeals  productItems={productItems} addToCart={addToCart}/>
            <TopCate />
            <NewArrivals />
            <Discount />
            <Shop addToCart={addToCart} shopItems={shopItems}/>
            <Annocument />
            <Wrapper />
            <Footer />
        </div>
    );
};

export default Pages;