import React from "react";
import Menu from "./Menu";

const Menus = ({ id, menus }) => (
    <div style={{ display: "flex" }}>
        { menus.map ( menu =>
            <Menu
            key={menu.id}
            {...menu}
            />
            )}
    </div>

);

export default Menus;