import React, {useContext} from "react";
import { Context } from "../../store/appContext";
import '../../../styles/modal.css'

const Menu = () => {

    const {store, actions} = useContext(Context)

    const categories = store.categories.map((item, index) => {
        return <li key={index}>{item.name}</li>
    })

    return (
        <section id="menuSection" className="menu_section">
            <div>
                <ul className="menu_listContainer">
                    {categories}
                </ul>
            </div>
        </section>
    )
};

export default Menu;