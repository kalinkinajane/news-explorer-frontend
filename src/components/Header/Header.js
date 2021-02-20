import React from "react";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({
  fill,
  className,
  onClickLink,
  isClickLink,
  onClickSave,
  isClickSave,
  onOpenLogin,
  isOpen,
  registered,
  onSignOut
}) {
  const [isClickHeader, setclickHeader] = React.useState(false);
  function openCloseMenu() {
    setclickHeader(!isClickHeader);
  }
  return (
    <header
      className={`header ${isClickHeader ? "header-active" : ""} ${
        isOpen ? "header-none" : ""
      }`}
    >
      <div className="header__conteiner">
        <div className="header__content">
          <svg
            className={`header__logo ${isOpen ? "header__logo-none" : ""}`}
            width="200"
            height="24"
            viewBox="0 0 137 21"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0.546875 16V14.291L2.06055 13.998V3.79297L0.546875 3.5V1.78125H4.95117L11.1426 11.6445L11.2012 11.6348V3.79297L9.38477 3.5V1.78125H15.2734V3.5L13.75 3.79297V16H10.9961L4.66797 6.23438L4.60938 6.24414V13.998L6.43555 14.291V16H0.546875ZM21.3379 16.2051C20.3223 16.2051 19.4368 15.9837 18.6816 15.541C17.9329 15.0918 17.3503 14.4766 16.9336 13.6953C16.5234 12.9141 16.3184 12.0221 16.3184 11.0195V10.6289C16.3184 9.58073 16.5137 8.65299 16.9043 7.8457C17.2949 7.0319 17.8451 6.39388 18.5547 5.93164C19.2708 5.46289 20.1139 5.23177 21.084 5.23828C22.5098 5.23828 23.6003 5.6582 24.3555 6.49805C25.1107 7.33138 25.4883 8.50326 25.4883 10.0137V11.5664H19.2773L19.2578 11.625C19.3099 12.3216 19.541 12.8945 19.9512 13.3438C20.3613 13.793 20.944 14.0176 21.6992 14.0176C22.2201 14.0176 22.7051 13.9525 23.1543 13.8223C23.61 13.6855 24.0527 13.487 24.4824 13.2266L25.2539 14.9844C24.8177 15.3359 24.2676 15.6289 23.6035 15.8633C22.946 16.0911 22.1908 16.2051 21.3379 16.2051ZM19.2969 9.68164H22.8223V9.42773C22.8223 8.78971 22.6888 8.28516 22.4219 7.91406C22.1615 7.53646 21.7318 7.34766 21.1328 7.34766C20.5599 7.34766 20.1237 7.56576 19.8242 8.00195C19.5247 8.43164 19.3392 8.97526 19.2676 9.63281L19.2969 9.68164ZM30.2637 16L27.8027 7.38672L26.5137 7.15234V5.43359H31.6211V7.14258L30.5078 7.35742L31.4844 11.4688L31.6797 12.2793H31.7383L32.002 11.4688L34.1699 5.43359H36.084L38.1836 11.5469L38.457 12.4062H38.5156L38.7695 11.5469L39.9219 7.36719L38.6914 7.14258V5.43359H43.6914V7.15234L42.4609 7.38672L39.7754 16H37.373L35.4395 10.7656L35.0977 9.60352H35.0391L34.6973 10.7754L32.793 16H30.2637ZM49.1309 16.2051C48.3431 16.2051 47.6074 16.1302 46.9238 15.9805C46.2467 15.8307 45.5957 15.6159 44.9707 15.3359L44.9414 12.3477H46.9238L47.3047 13.8711C47.526 13.9818 47.7669 14.0697 48.0273 14.1348C48.2943 14.1999 48.597 14.2324 48.9355 14.2324C49.5736 14.2324 50.0228 14.1283 50.2832 13.9199C50.5436 13.7116 50.6738 13.4512 50.6738 13.1387C50.6738 12.8457 50.5339 12.5885 50.2539 12.3672C49.974 12.1393 49.4238 11.9408 48.6035 11.7715C47.347 11.5111 46.4225 11.1074 45.8301 10.5605C45.2441 10.0137 44.9512 9.3138 44.9512 8.46094C44.9512 7.88151 45.0977 7.34766 45.3906 6.85938C45.6901 6.37109 46.1426 5.98372 46.748 5.69727C47.36 5.4043 48.1413 5.25781 49.0918 5.25781C49.8861 5.25781 50.612 5.33594 51.2695 5.49219C51.9336 5.64193 52.4902 5.84049 52.9395 6.08789L52.9688 8.97852H50.9961L50.6934 7.5918C50.3158 7.33138 49.8405 7.20117 49.2676 7.20117C48.7728 7.20117 48.3887 7.30534 48.1152 7.51367C47.8483 7.71549 47.7148 7.97266 47.7148 8.28516C47.7148 8.55859 47.832 8.80599 48.0664 9.02734C48.3073 9.24219 48.8314 9.44076 49.6387 9.62305C50.9473 9.92253 51.901 10.3229 52.5 10.8242C53.099 11.319 53.3984 12.0156 53.3984 12.9141C53.3984 13.8971 53.0404 14.6914 52.3242 15.2969C51.6146 15.9023 50.5501 16.2051 49.1309 16.2051ZM54.6289 16V14.291L56.1426 13.998V3.79297L54.6289 3.5V1.78125H65.6641V5.61914H63.4766L63.3496 3.97852H58.9941V7.55273H63.8086V9.75H58.9941V13.8125H63.584L63.7109 12.1133H65.8789V16H54.6289ZM67.1484 16V14.291L68.5059 14.1152L71.5332 10.707L68.6719 7.31836L67.3926 7.15234V5.43359H72.627V7.07422L71.8066 7.20117L73.3398 9.21289L74.873 7.20117L73.9648 7.07422V5.43359H79.0137V7.15234L77.832 7.31836L75.127 10.5898L78.1445 14.1152L79.4434 14.291V16H74.0234V14.3691L74.9414 14.2422L73.3105 12.2207L71.7188 14.252L72.6172 14.3691V16H67.1484ZM80.293 20.0625V18.3438L81.6699 18.0508V7.44531L80.1465 7.15234V5.43359H84.2871L84.4238 6.66406C84.7363 6.20833 85.1139 5.85677 85.5566 5.60938C85.9993 5.36198 86.5267 5.23828 87.1387 5.23828C87.9915 5.23828 88.7207 5.47266 89.3262 5.94141C89.9316 6.40365 90.3939 7.05143 90.7129 7.88477C91.0384 8.7181 91.2012 9.69141 91.2012 10.8047V11.0098C91.2012 12.0514 91.0384 12.9629 90.7129 13.7441C90.3874 14.5189 89.9186 15.1243 89.3066 15.5605C88.7012 15.9902 87.972 16.2051 87.1191 16.2051C86.0059 16.2051 85.1367 15.8014 84.5117 14.9941V18.0508L85.8887 18.3438V20.0625H80.293ZM86.2695 14.0176C86.9987 14.0176 87.526 13.7474 87.8516 13.207C88.1836 12.6667 88.3496 11.9342 88.3496 11.0098V10.8047C88.3496 9.80859 88.1803 9.0013 87.8418 8.38281C87.5033 7.76432 86.9727 7.45508 86.25 7.45508C85.4557 7.45508 84.8763 7.79362 84.5117 8.4707V13.0996C84.8698 13.7116 85.4557 14.0176 86.2695 14.0176ZM92.1191 16V14.291L93.4961 13.998V2.77734L91.9727 2.48438V0.765625H96.3477V13.998L97.7246 14.291V16H92.1191ZM103.506 16.2051C102.458 16.2051 101.559 15.9772 100.811 15.5215C100.068 15.0658 99.4987 14.4342 99.1016 13.627C98.7044 12.8132 98.5059 11.8789 98.5059 10.8242V10.6191C98.5059 9.57096 98.7044 8.64323 99.1016 7.83594C99.4987 7.02214 100.068 6.38737 100.811 5.93164C101.559 5.4694 102.451 5.23828 103.486 5.23828C104.528 5.23828 105.42 5.46615 106.162 5.92188C106.911 6.3776 107.484 7.01237 107.881 7.82617C108.278 8.63346 108.477 9.56445 108.477 10.6191V10.8242C108.477 11.8789 108.278 12.8132 107.881 13.627C107.484 14.4342 106.914 15.0658 106.172 15.5215C105.43 15.9772 104.541 16.2051 103.506 16.2051ZM103.506 14.0176C104.242 14.0176 104.779 13.7246 105.117 13.1387C105.462 12.5527 105.635 11.7812 105.635 10.8242V10.6191C105.635 9.68164 105.462 8.91667 105.117 8.32422C104.772 7.73177 104.229 7.43555 103.486 7.43555C102.744 7.43555 102.204 7.73177 101.865 8.32422C101.527 8.91667 101.357 9.68164 101.357 10.6191V10.8242C101.357 11.7878 101.527 12.5625 101.865 13.1484C102.204 13.7279 102.751 14.0176 103.506 14.0176ZM109.971 16V14.291L111.338 13.998V7.44531L109.824 7.15234V5.43359H113.994L114.102 6.74219L114.121 6.97656C114.642 5.81771 115.423 5.23828 116.465 5.23828C116.634 5.23828 116.816 5.2513 117.012 5.27734C117.214 5.30339 117.396 5.34245 117.559 5.39453L117.256 8.02148L115.84 7.94336C115.436 7.92383 115.107 7.99219 114.854 8.14844C114.606 8.30469 114.385 8.5293 114.189 8.82227V13.998L115.557 14.291V16H109.971ZM123.271 16.2051C122.256 16.2051 121.37 15.9837 120.615 15.541C119.867 15.0918 119.284 14.4766 118.867 13.6953C118.457 12.9141 118.252 12.0221 118.252 11.0195V10.6289C118.252 9.58073 118.447 8.65299 118.838 7.8457C119.229 7.0319 119.779 6.39388 120.488 5.93164C121.204 5.46289 122.048 5.23177 123.018 5.23828C124.443 5.23828 125.534 5.6582 126.289 6.49805C127.044 7.33138 127.422 8.50326 127.422 10.0137V11.5664H121.211L121.191 11.625C121.243 12.3216 121.475 12.8945 121.885 13.3438C122.295 13.793 122.878 14.0176 123.633 14.0176C124.154 14.0176 124.639 13.9525 125.088 13.8223C125.544 13.6855 125.986 13.487 126.416 13.2266L127.188 14.9844C126.751 15.3359 126.201 15.6289 125.537 15.8633C124.88 16.0911 124.124 16.2051 123.271 16.2051ZM121.23 9.68164H124.756V9.42773C124.756 8.78971 124.622 8.28516 124.355 7.91406C124.095 7.53646 123.665 7.34766 123.066 7.34766C122.493 7.34766 122.057 7.56576 121.758 8.00195C121.458 8.43164 121.273 8.97526 121.201 9.63281L121.23 9.68164ZM128.955 16V14.291L130.322 13.998V7.44531L128.809 7.15234V5.43359H132.979L133.086 6.74219L133.105 6.97656C133.626 5.81771 134.408 5.23828 135.449 5.23828C135.618 5.23828 135.801 5.2513 135.996 5.27734C136.198 5.30339 136.38 5.34245 136.543 5.39453L136.24 8.02148L134.824 7.94336C134.421 7.92383 134.092 7.99219 133.838 8.14844C133.59 8.30469 133.369 8.5293 133.174 8.82227V13.998L134.541 14.291V16H128.955Z" />
          </svg>
          <div
            className={`header__burger header__burger_${className} ${
              isClickHeader
                ? `header__burger-active header__burger-active-${className}`
                : ""
            } ${isOpen ? "header__burger-none" : ""}`}
            onClick={openCloseMenu}
          ></div>

          <Navigation
            className={className}
            isClickHeader={isClickHeader}
            fill={fill}
            onClickLink={onClickLink}
            isClickLink={isClickLink}
            onClickSave={onClickSave}
            isClickSave={isClickSave}
            onOpenLogin={onOpenLogin}
            onCloseMenu={openCloseMenu}
            registered={registered}
            onSignOut={onSignOut}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
