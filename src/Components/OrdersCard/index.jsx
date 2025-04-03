import PropTypes from 'prop-types';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;
    return (
        <div className='flex justify-between items-center mb-3 border border-black'>
            <p>
                <span>01.02.2025</span>
                <span>{totalProducts}</span>
                <span>{totalPrice}</span>
            </p>
        </div>
    )
}
OrdersCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    totalProducts: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export { OrdersCard }