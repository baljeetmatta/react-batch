import { Outlet } from "react-router-dom";

const MasterLayout = () => {

    return (
        <div>Parent
            <div>
                <Outlet />
            </div>

        </div>
    )
}
export default MasterLayout;
