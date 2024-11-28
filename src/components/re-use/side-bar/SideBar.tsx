import { useState, useCallback, useEffect, useRef } from "react";
import FullMenu from "./FullMenu";
import HalfMenu from "./HalfMenu";
import MobileNav from "./MobileNav";
import axios from "../../../../axios/axios";
import envConfig from "../../../../config/envConfig";
import { useAuth } from "../../../context/useAuth";
import { IoLogOut } from "react-icons/io5";
import ConfirmModel from "../../../utils/non-functional/modals/ConfirmModal";
interface ICurrentUser {
  adminUserEmail: string | null;
  adminUserName: string | null;
}
const SideBar = () => {
  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const [isSuperAdmin, setIsSuperAdmin] = useState<boolean>(false);
  const [screenWidth, setScreenWidth] = useState<number>();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [iSidebarOpen, setISidebarOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [isLogoutEventOccure, setIsLogoutEventOccure] =
    useState<boolean>(false);
  const { logout } = useAuth();
  const [currentUser, setCurrentUser] = useState<ICurrentUser>({
    adminUserEmail: null,
    adminUserName: null,
  });

  // Fetch Current User
  useEffect(() => {
    const getCurrentAccountHolder = async () => {
      setLoading(true);
      const authToken = localStorage.getItem("auth-token");
      const visitorToken = sessionStorage.getItem("visitor-token");
      const token = authToken || visitorToken;
      try {
        const response = await axios.get(envConfig.getCurrentUserUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response) {
          setCurrentUser({
            adminUserEmail: response.data.userDetails.adminUserEmail,
            adminUserName: response.data.userDetails.adminUserName,
          });
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        if (error.status === 401) {
          const authToken = localStorage.getItem("auth-token") || null;
          const superAdminToken = localStorage.getItem("super-admin") || null;
          if (authToken) {
            localStorage.removeItem("auth-token");
            if (superAdminToken) {
              localStorage.removeItem("super-admin");
            }
            logout();
            window.location.href = "/";
          } else {
            throw new Error(
              `Something went wrong due to: ${error.message}, please try again later`
            );
          }
        }
      } finally {
        setLoading(false);
      }
    };
    getCurrentAccountHolder();
    const superAdmin = localStorage.getItem("super-admin") || null;
    if (superAdmin) {
      setIsSuperAdmin(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Identify the screen width
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

  // Side bar mount and unmount handler
  const handleOpenSidebar = () => {
    setISidebarOpen((prev) => !prev);
  };

  // Main function for handle click outside side bar
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        if (window.innerWidth) {
          if (iSidebarOpen === true) {
            setISidebarOpen(false);
          }
        } else {
          setISidebarOpen(true);
        }
      }
    },
    [iSidebarOpen]
  );

  // Is side bar is open then listen the event otherwise remove listener
  useEffect(() => {
    if (iSidebarOpen === true) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [iSidebarOpen, handleClickOutside]);

  // Handle logout
  const handleLogout = () => {
    setIsLogoutEventOccure(true);
  };
  // Confirm logout handler
  const confirmLogout = () => {
    const authToken = localStorage.getItem("auth-token");
    const visitorToken = sessionStorage.getItem("visitor-token");
    const superAdminToken = localStorage.getItem("super-admin");
    if (authToken) {
      localStorage.removeItem("auth-token");
      if (superAdminToken) {
        localStorage.removeItem("super-admin");
      }
    }
    if (visitorToken) {
      sessionStorage.removeItem("visitor-token");
      if (superAdminToken) {
        localStorage.removeItem("super-admin");
      }
    }
    logout();
  };
  return (
    <>
      <div className="flex w-[200px] z-[10001] opacity-100" ref={sidebarRef}>
        {/* Full Menu  */}

        {iSidebarOpen === true && (
          <FullMenu
            isSuperAdmin={isSuperAdmin}
            handleSideBarUnmount={handleOpenSidebar}
            userName={currentUser.adminUserName}
            email={currentUser.adminUserEmail}
            responseState={loading}
            handleLogoutEvent={handleLogout}
          />
        )}

        {/* Half Menu  */}
        {isMenuOpen === true && (
          <HalfMenu
            isSuperAdmin={isSuperAdmin}
            handleSidebarMount={handleOpenSidebar}
            sideBarStatus={iSidebarOpen}
            profileLogo={currentUser.adminUserName}
            handleLogoutEvent={handleLogout}
          />
        )}

        {/* Nav bar  */}
        <MobileNav
          opnCloseHandler={handleOpenSidebar}
          isSidebarVisable={iSidebarOpen}
        />
      </div>
      <ConfirmModel
        showOrHide={isLogoutEventOccure}
        confirmHandler={confirmLogout}
        cancelHandler={() => setIsLogoutEventOccure(false)}
        statusIcon={
          <IoLogOut className="text-5xl text-primary-button-background" />
        }
        alertHead={"Are you sure you want to logout this time?"}
        confirmHandlerColor={"bg-primary-button-background"}
        cancelHandlerColor={"bg-white text-gray-500"}
      />
    </>
  );
};

export default SideBar;
