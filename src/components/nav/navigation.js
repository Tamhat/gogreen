"use client";

import { useState, useEffect } from "react";
// @next
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

// logo
import navLogo from "/gogreenbooty.svg";

// @mui
import {
  Box,
  AppBar,
  Drawer,
  Toolbar,
  Button,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  IconButton,
  ListItemText,
  useMediaQuery,
  Grid,
} from "@mui/material";

import gogreenLogo from "/gogreen-footer-logo.png";
import facebook from "/socials/facebook.png";
import tiktok from "/socials/tiktok.png";
import instagram from "/socials/instagram.png";
import youtube from "/socials/youtube.png";
import StyledButton from "../button/StyledButton";

import { useTheme } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { StyledNavLink } from "./StyledNavLink";
import theme from "@/theme/theme";
import { Done } from "@mui/icons-material";
import "@/components/nav/nav.css";

const drawerWidth = 300;
const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
  },
  {
    label: "Facts",
    path: "/facts",
  },
  {
    label: "How it works",
    path: "/how-it-works",
  },
  {
    label: "Commercial Orders",
    path: "/commercial-orders",
  },
  {
    label: "Contact Us",
    path: "/contact-us",
  },
  {
    label: "FAQS",
    path: "/faqs",
  },
];

export default function Navigation() {
  const [active, setActive] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  const activePath = usePathname();

  const theme = useTheme();

  const downMd = useMediaQuery(theme.breakpoints.down("md"));
  const upSm = useMediaQuery(theme.breakpoints.up("sm"));
  const downSm = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (!downMd) setMobileOpen(false);
  }, [downMd]);

  useEffect(() => {
    setMobileOpen(false);
  }, [activePath]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;

      // Define a scroll position where you want to hide the navbar (e.g., 100px)
      if (scrollY > 100) {
        setHideNav(true);
      } else {
        setHideNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleActiveLink = (path) => {
    if (activePath === path) setActive(path);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box display="flex" flexDirection="column" align-items="start" mt={25}>
      {navItems.map((item, index) => (
        <Link
          href={item.path}
          style={{ margin: "15px 60px" }}
          key={index}
          sx={{
            "&::after": {
              backgroundColor: "text.primary",
            },
          }}
        >
          <StyledNavLink
            fontWeight="bolder"
            active={item.path === activePath ? "true" : ""}
            sx={{
              color: "text.primary",
              fontSize: "1rem",
              mr: {
                sm: 2,
                md: 1,
                lg: 5,
              },
              "&::after": {
                backgroundColor: "text.primary",
              },
            }}
            onClick={() => handleActiveLink(item.path)}
          >
            {item.label}
          </StyledNavLink>
        </Link>
      ))}
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} ml={20}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          {/* Your Company Logo */}
          {/* Social Links */}
          <Box
            sx={{
              marginRight: "8px",
              display: "flex",
              justifyContent: "space-between",
              width: 180,
              mb: 3,
            }}
          >
            <a
              href="https://www.facebook.com/people/Go-Green-Booty/100094389833645/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebook}
                alt="Facebook Logo"
                height={30}
                width={30}
              />
            </a>

            <a
              href="https://www.tiktok.com/@gogreenbooty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={tiktok} alt="Tiktok Logo" height={30} width={30} />
            </a>

            <a
              href="https://www.instagram.com/gogreenb00ty/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={instagram}
                alt="Instagram Logo"
                height={30}
                width={30}
              />
            </a>
            <a
              href="https://www.youtube.com/@GoGreenBooty"
              target="_blank"
              rel="noopener noreferrer"
              mt={-5}
            >
              <Image src={youtube} alt="youtube Logo" height={35} width={35} />
            </a>
          </Box>

          {!downMd && (
            <>
              {/* Privacy Policy Links or other links */}
              <Box
                variant="body2"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link href="/privacy-policy" color="inherit" mr={2}>
                  Privacy Policy
                </Link>
                <Link href="/terms-conditions-warranty" color="inherit" mr={2}>
                  Terms, Conditions & Warranty
                </Link>
              </Box>
            </>
          )}
        </Box>
      </Grid>
    </Box>
  );
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const downLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      {!downLg ? (
        <>
          <AppBar
            component="nav"
            color="inherit"
            sx={{
              // position: "fixed",
              zIndex: theme.zIndex.drawer + 1000, // Behind the navbar
              boxShadow: "none",
              pb: 3,
            }}
          >
            {/*  */}
            <Toolbar
              sx={{
                my: 5,
                display: hideNav ? "none" : "flex",
              }}
              className="top-nav"
            >
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                // onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>

              {/* <Typography
					variant="h4"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					Gogreenbooty
				</Typography> */}
              <Box
                sx={{
                  flexGrow: 1,

                  display: { xs: "none", sm: "block" },
                }}
                // href="http://localhost:3000/"
              >
                {/* <Link href="/"> */}
                <Image
                  src="/gogreenbooty.svg"
                  alt="Gogreenbooty-logo"
                  width={376}
                  height={200}
                />
                {/* </Link> */}
              </Box>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  sx={{
                    mr: 2,
                    fontWeight: "bold",
                    padding: "8.75px, 30.62px, 8.75px, 30.62px",
                  }}
                  variant="outlined"
                  size="medium"
                  href="https://store.gogreenbooty.com/account/register"
                >
                  Sign up
                </Button>
                <Button
                  sx={{
                    mr: 1,
                    fontWeight: "bold",
                    padding: "8.75px, 30.62px, 8.75px, 30.62px",
                  }}
                  variant="contained"
                  size="medium"
                  href="https://store.gogreenbooty.com/account/login"
                >
                  Login
                </Button>
                <IconButton href="https://store.gogreenbooty.com/cart">
                  <Image
                    src="/logo/cart.svg"
                    alt="cart"
                    width={30}
                    height={30}
                  />
                </IconButton>
              </Box>
            </Toolbar>

            <Toolbar
              sx={{ px: 5, display: { xs: "none", sm: "block" } }}
              className="bottom-nav"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                {navItems.map((item, index) => (
                  <Link href={item.path} key={index}>
                    <StyledNavLink
                      fontWeight="medium"
                      active={item.path === activePath ? "true" : ""}
                      sx={{
                        mr: {
                          sm: 2,
                          md: 1,
                          lg: 5,
                        },
                      }}
                      onClick={() => handleActiveLink(item.path)}
                    >
                      {item.label}
                    </StyledNavLink>
                  </Link>
                ))}
              </Box>
            </Toolbar>

            {/* Mobile Nav */}
            <Toolbar
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box sx={{ display: { xs: "block", sm: "block" } }}>
                  <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      mr: 2,
                      display: { sm: "block" },
                      zIndex: 100,
                      backgroundColor: theme.palette.primary.light,
                      borderRadius: 2,
                      color: "inherit",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.primary.light,
                      },
                    }}
                  >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Box>

                <Box
                  sx={{ display: { xs: "block", sm: "block" }, flexGrow: 0.5 }}
                  // href="http://localhost:3000/"
                >
                  {/* <Link href="/"> */}
                  <Image
                    src="/gogreenbooty.svg"
                    alt="Gogreenbooty-logo"
                    width={150}
                    height={150}
                  />
                  {/* </Link> */}
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                background: "linear-gradient(to right,  #89CFF3, #00A9FF)",
              },
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <>
          <AppBar
            component="nav"
            color="inherit"
            sx={{
              // position: "fixed",
              zIndex: theme.zIndex.drawer + 1000, // Behind the navbar
              height: { xs: "109px!important", sm: "200px!important" },
              boxShadow: "none",
              pb: 3,
            }}
          >
            {!upSm ? (
              <Toolbar
                sx={{
                  my: 5,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  // onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>

                {/* <Typography
					variant="h4"
					component="div"
					sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
				>
					Gogreenbooty
				</Typography> */}
                <Box
                  sx={{
                    flexGrow: 1,

                    display: { xs: "none", sm: "block" },
                  }}
                  // href="http://localhost:3000/"
                >
                  {/* <Link href="/"> */}
                  <Image
                    src="/gogreenbooty.svg"
                    alt="Gogreenbooty-logo"
                    width={376}
                    height={200}
                  />
                  {/* </Link> */}
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    sx={{
                      mr: 2,
                      fontWeight: "bold",
                      padding: "8.75px, 30.62px, 8.75px, 30.62px",
                    }}
                    variant="outlined"
                    size="medium"
                    href="https://store.gogreenbooty.com/account/register"
                  >
                    Sign up
                  </Button>
                  <Button
                    sx={{
                      mr: 1,
                      fontWeight: "bold",
                      padding: "8.75px, 30.62px, 8.75px, 30.62px",
                    }}
                    variant="contained"
                    size="medium"
                    href="https://store.gogreenbooty.com/account/login"
                  >
                    Login
                  </Button>
                  <IconButton href="https://store.gogreenbooty.com/cart">
                    <Image
                      src="/logo/cart.svg"
                      alt="cart"
                      width={30}
                      height={30}
                    />
                  </IconButton>
                </Box>
              </Toolbar>
            ) : (
              <Toolbar
                sx={{
                  my: 5,
                }}
              >
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  // onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
                <Box
                  sx={{
                    flexGrow: 1,

                    display: { xs: "none", sm: "block" },
                  }}
                  // href="http://localhost:3000/"
                >
                  {/* <Link href="/"> */}
                  <Image
                    src="/gogreenbooty.svg"
                    alt="Gogreenbooty-logo"
                    width={400}
                    height={300}
                  />
                  {/* </Link> */}
                </Box>
                <Box sx={{ display: { xs: "none", sm: "block" } }}>
                  <Button
                    sx={{
                      mr: 2,
                      fontWeight: "bold",
                      padding: "8.75px, 30.62px, 8.75px, 30.62px",
                    }}
                    variant="outlined"
                    size="medium"
                    href="https://store.gogreenbooty.com/account/register"
                  >
                    Sign up
                  </Button>
                  <Button
                    sx={{
                      mr: 1,
                      fontWeight: "bold",
                      padding: "8.75px, 30.62px, 8.75px, 30.62px",
                    }}
                    variant="contained"
                    size="medium"
                    href="https://store.gogreenbooty.com/account/login"
                  >
                    Login
                  </Button>
                  <IconButton href="https://store.gogreenbooty.com/cart">
                    <Image
                      src="/logo/cart.svg"
                      alt="cart"
                      width={30}
                      height={30}
                    />
                  </IconButton>
                </Box>
              </Toolbar>
            )}

            <Toolbar sx={{ px: 5, display: { xs: "none", sm: "block" } }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  width: "100%",
                }}
              >
                {navItems.map((item, index) => (
                  <Link href={item.path} key={index}>
                    <StyledNavLink
                      fontWeight="medium"
                      active={item.path === activePath ? "true" : ""}
                      sx={{
                        mr: {
                          sm: 2,
                          md: 1,
                          lg: 5,
                        },
                      }}
                      onClick={() => handleActiveLink(item.path)}
                    >
                      {item.label}
                    </StyledNavLink>
                  </Link>
                ))}
              </Box>
            </Toolbar>

            {/* Mobile Nav */}
            <Toolbar
              sx={{
                display: {
                  xs: "block",
                  sm: "none",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  width: "100%",
                  position: "relative",
                  top: { xs: "-7rem" },
                  px: 5,
                }}
              >
                <Box sx={{ display: { xs: "block", sm: "block" } }}>
                  <IconButton
                    color="primary"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{
                      mr: 2,
                      display: { sm: "block" },
                      zIndex: 100,
                      backgroundColor: theme.palette.primary.light,
                      borderRadius: 2,
                      color: "inherit",
                      "&:hover": {
                        backgroundColor: "transparent",
                        color: theme.palette.primary.light,
                      },
                    }}
                  >
                    {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                </Box>

                <Box
                  sx={{
                    display: { xs: "block", sm: "block" },
                    flexGrow: 0.5,
                    mt: -9,
                  }}
                  // href="http://localhost:3000/"
                >
                  {/* <Link href="/"> */}
                  <Image
                    src="/gogreenbooty.svg"
                    alt="Gogreenbooty-logo"
                    width={250}
                    height={200}
                  />
                  {/* </Link> */}
                </Box>
                <Box>
                  <Link href="https://store.gogreenbooty.com/collections/all">
                    <IconButton href="https://store.gogreenbooty.com/cart">
                      <Image
                        src="/logo/cart.svg"
                        alt="cart"
                        width={30}
                        height={30}
                      />
                    </IconButton>
                  </Link>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>

          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "100%",
                background: "linear-gradient(to right,  #89CFF3, #00A9FF)",
                alignItems: "start",
              },
            }}
          >
            {drawer}
          </Drawer>
        </>
      )}
    </>
  );
}
{
  /* Mobile Nav */
}
/* <nav>
	<Drawer
	  container={container}
	  variant="temporary"
	  open={mobileOpen}
	  onClose={handleDrawerToggle}
	  ModalProps={{
		keepMounted: true, // Better open performance on mobile.
	  }}
	  sx={{
		display: { xs: 'block', sm: 'none' },
		'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
	  }}
	>
	  {drawer}
	</Drawer>
  </nav> */
