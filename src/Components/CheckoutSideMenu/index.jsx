import { useContext} from 'react'
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ShoppingCartContext } from "../../Context";
import "./styles.css";

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${ context.isCheckoutSideMenuOpen ? 'flex' : 'hidden' } checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <div><XMarkIcon className="size-6 text-black cursor-pointer" onClick={() => context.closeCheckoutSideMenu()}/></div>
            </div>
        </aside>
    );
};

export { CheckoutSideMenu };
