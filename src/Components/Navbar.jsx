import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as ListingsIcon } from "../Assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../Assets/svg/exploreIcon.svg"
import { ReactComponent as ProfileIcon } from "../Assets/svg/personOutlineIcon.svg"

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const setFillColor = (route) => {
    return location.pathname === route
  }

  return (
    <footer className='navbar'>
      <nav className='navbarNav'>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate("/")}>
            <ExploreIcon
              fill={setFillColor("/") ? "#2c2c2c" : "#8f8f8f"}
              width='36px'
              height='36px'
            />
            <p
              className={
                setFillColor("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Explore
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate("/Listings")}>
            <ListingsIcon
              fill={setFillColor("/Listings") ? "#2c2c2c" : "#8f8f8f"}
              width='36px'
              height='36px'
            />
            <p
              className={
                setFillColor("/Listings")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Listings
            </p>
          </li>
          <li className='navbarListItem' onClick={() => navigate("/Profile")}>
            <ProfileIcon
              fill={setFillColor("/Profile") ? "#2c2c2c" : "#8f8f8f"}
              width='36px'
              height='36px'
            />
            <p
              className={
                setFillColor("/Profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
export default Navbar
