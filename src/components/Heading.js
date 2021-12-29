import React from 'react'
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar className="ms-auto" color="dark" dark>
            <NavbarBrand href="/">My Album</NavbarBrand>
            <Nav className="ms-auto">
                <NavItem>
                    <Link className="btn btn-primary" to="/add">Add Album</Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}
export default Heading;