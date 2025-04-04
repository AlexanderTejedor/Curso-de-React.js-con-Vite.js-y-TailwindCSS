import PropTypes from 'prop-types';
import { ChevronRightIcon } from "@heroicons/react/24/solid"

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;
    return (
        <div className='flex justify-between items-center mb-3 border border-black rounded-lg p-4 w-80'>
            <div className='flex justify-between w-full'>
                <p className='flex flex-col'>
                    <span className='font-light'>04.04.25</span>
                    <span className='font-light'>{totalProducts} articles</span>
                </p>
                <p className='flex gap-2 items-center'>
                    <span className='font-medium text-2xl'>${totalPrice}</span>
                    <ChevronRightIcon className='h-6 w-6 text-black cursor-pointer'/>
                </p>
            </div>
        </div>
    )
}
OrdersCard.propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    totalProducts: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export { OrdersCard }