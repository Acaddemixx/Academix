import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

function Navigation() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <header className="fixed top-0 left-0  right-0 max-w-full z-10 bg-transparent no-white-border rounded-none">
      <div className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-transparent">
        <div className="flex items-center justify-between text-blue-gray-900 bg-transparent">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <NavLink to="Home">Academix</NavLink>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>
                  <NavLink to="Login">Log In</NavLink>
                </span>
              </Button>
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block"
              >
                <span>
                  <NavLink to="Signup">Signup</NavLink>
                </span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <NavLink to="Login">
                <span>Log In</span>
              </NavLink>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>
                <NavLink to="Signup">Signup</NavLink>
              </span>
            </Button>
          </div>
        </MobileNav>
      </div>
    </header>
  );
}
export default Navigation;
