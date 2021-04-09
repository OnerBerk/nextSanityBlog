import {Container} from "react-bootstrap";
import NavbarComponent from "./Navbar";

const Layout = ({children, className}) => {
    return (
        <Container>
            <NavbarComponent/>
            <div className={`page-wrapper ${className}`}>
                {children}
            </div>
            <footer className="page-footer">
                <div>
                    <a href="#">courses</a>{' | '}
                    <a href="#">github</a>{' | '}
                    <a href="#">facebook</a>
                </div>
            </footer>
        </Container>
    )
}

export default Layout