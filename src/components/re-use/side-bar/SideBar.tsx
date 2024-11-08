import { useEffect, useState } from "react";
import FullMenu from "./FullMenu";
import HalfMenu from "./HalfMenu";
import MobileNav from "./MobileNav";
const SideBar = () => {
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [iSidebarOpen, setISidebarOpen] = useState<boolean>(false);
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    handleResize(); // Initialize screen width

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  const handleOpenSidebar = () => {
    setISidebarOpen((prev) => !prev);
  };
  console.log(iSidebarOpen);
  return (
    <div className="flex w-[200px] z-[1001] opacity-100">
      {/* Full Menu  */}
      {iSidebarOpen === true && (
        <FullMenu handleSideBarMountUnmount={handleOpenSidebar} />
      )}

      {/* Half Menu  */}
      {isMenuOpen === true && (
        <HalfMenu
          handleSidebarMount={handleOpenSidebar}
          sideBarStatus={iSidebarOpen}
        />
      )}

      {/* Nav bar  */}
      <MobileNav
        opnCloseHandler={handleOpenSidebar}
        isSidebarVisable={iSidebarOpen}
      />
    </div>
  );
};

export default SideBar;
