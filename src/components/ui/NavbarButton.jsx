import { Link } from "react-scroll";

export default function NavbarButton({ element, text }) {
    return (
        <Link
            to={element}
            smooth={true}
            duration={500}
            spy={true}
            spyThrottle={10}
            offset={0}
            activeClass="btn-nav-checked"
            className="btn-nav"
            onSetActive={(to) => console.log("Active section " + to)}
        >
            {text}
        </Link>
    );
}
