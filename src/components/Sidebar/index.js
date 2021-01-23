import React from "react";
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    {/* react scroll links! */}
                    {/* <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink> */}
                    <SidebarLink to="about" onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to="creators" onClick={toggle}>
                        Creators
                    </SidebarLink>
                    {/* <SidebarLink to="signup" onClick={toggle}>
                        Sign Up
                    </SidebarLink> */}
                </SidebarMenu>
                {/* <SideBtnWrap> */}
                {/* react router link! */}
                {/* <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;
