import headshot from "./assets/my_photo.jpg";

function TopInfo() {
    return (
        <div className="top-info">
            <img src={headshot} alt="headshot" className="headshot" />
            <div className="name-title">
                <h3>Shikhar Gupta</h3>
                <h5>Student</h5>
                <h6>@shikhar.gupta7</h6>
            </div>
            <div className="top-buttons">
                <svg
                    width="119"
                    height="38"
                    viewBox="0 0 119 38"
                    fill="none"
                    className="email"
                >
                    <g>
                        <rect
                            x="2"
                            y="1"
                            width="115"
                            height="34"
                            rx="6"
                            fill="white"
                        />
                        <path
                            d="M30.1024 14.7072L36.5 17.9056L42.8976 14.7072C42.8739 14.2996 42.6953 13.9164 42.3983 13.6362C42.1012 13.356 41.7083 13.1999 41.3 13.2H31.7C31.2917 13.1999 30.8988 13.356 30.6017 13.6362C30.3047 13.9164 30.1261 14.2996 30.1024 14.7072Z"
                            fill="#1E1F26"
                        />
                        <path
                            d="M42.9 16.4944L36.5 19.6944L30.1 16.4944V21.2C30.1 21.6244 30.2686 22.0313 30.5686 22.3314C30.8687 22.6314 31.2757 22.8 31.7 22.8H41.3C41.7244 22.8 42.1313 22.6314 42.4314 22.3314C42.7314 22.0313 42.9 21.6244 42.9 21.2V16.4944Z"
                            fill="#1E1F26"
                        />
                        <path
                            d="M53.6186 23H60.0618V21.6776H55.1548V18.5604H59.669V17.2429H55.1548V14.1406H60.0021V12.8182H53.6186V23ZM61.9348 23H63.4213V18.2919C63.4213 17.2628 64.1422 16.5469 64.9874 16.5469C65.8127 16.5469 66.3844 17.0938 66.3844 17.924V23H67.8659V18.1328C67.8659 17.2131 68.4277 16.5469 69.3972 16.5469C70.1827 16.5469 70.829 16.9844 70.829 18.0185V23H72.3155V17.8793C72.3155 16.1342 71.3411 15.2642 69.959 15.2642C68.8603 15.2642 68.035 15.7912 67.6671 16.6065H67.5875C67.2544 15.7713 66.5534 15.2642 65.5343 15.2642C64.525 15.2642 63.7743 15.7663 63.4561 16.6065H63.3617V15.3636H61.9348V23ZM76.5302 23.169C77.793 23.169 78.5039 22.5277 78.7873 21.956H78.8469V23H80.2987V17.929C80.2987 15.7067 78.5487 15.2642 77.3356 15.2642C75.9535 15.2642 74.6808 15.821 74.1836 17.2131L75.5806 17.5312C75.7994 16.9893 76.3562 16.4673 77.3555 16.4673C78.315 16.4673 78.8072 16.9695 78.8072 17.8345V17.8693C78.8072 18.4112 78.2504 18.4013 76.8782 18.5604C75.4315 18.7294 73.9499 19.1072 73.9499 20.8423C73.9499 22.3438 75.0785 23.169 76.5302 23.169ZM76.8533 21.9759C76.0131 21.9759 75.4066 21.598 75.4066 20.8622C75.4066 20.0668 76.1126 19.7834 76.9727 19.669C77.4549 19.6044 78.5984 19.4751 78.8121 19.2614V20.2457C78.8121 21.1506 78.0913 21.9759 76.8533 21.9759ZM82.2786 23H83.7651V15.3636H82.2786V23ZM83.0293 14.1854C83.5414 14.1854 83.9689 13.7876 83.9689 13.3004C83.9689 12.8132 83.5414 12.4105 83.0293 12.4105C82.5123 12.4105 82.0897 12.8132 82.0897 13.3004C82.0897 13.7876 82.5123 14.1854 83.0293 14.1854ZM87.2514 12.8182H85.7649V23H87.2514V12.8182Z"
                            fill="#374151"
                        />
                    </g>
                </svg>
                <svg
                    width="119"
                    height="38"
                    viewBox="0 0 119 38"
                    fill="none"
                    className="linkedin"
                >
                    <g>
                        <rect
                            x="2"
                            y="1"
                            width="115"
                            height="34"
                            rx="6"
                            fill="#5093E2"
                        />
                        <path
                            d="M31.7143 11.3333H20.2827C19.7589 11.3333 19.3333 11.7649 19.3333 12.2947V23.7054C19.3333 24.2351 19.7589 24.6667 20.2827 24.6667H31.7143C32.2381 24.6667 32.6667 24.2351 32.6667 23.7054V12.2947C32.6667 11.7649 32.2381 11.3333 31.7143 11.3333ZM23.3631 22.7619H21.3869V16.3988H23.3661V22.7619H23.3631ZM22.375 15.5298C21.7411 15.5298 21.2292 15.0149 21.2292 14.3839C21.2292 13.753 21.7411 13.2381 22.375 13.2381C23.006 13.2381 23.5208 13.753 23.5208 14.3839C23.5208 15.0179 23.0089 15.5298 22.375 15.5298ZM30.7708 22.7619H28.7947V19.6667C28.7947 18.9286 28.7798 17.9792 27.7679 17.9792C26.7381 17.9792 26.5804 18.7827 26.5804 19.6131V22.7619H24.6042V16.3988H26.5V17.2679H26.5268C26.7917 16.7679 27.4375 16.2411 28.3988 16.2411C30.3988 16.2411 30.7708 17.5595 30.7708 19.2738V22.7619Z"
                            fill="white"
                        />
                        <path
                            d="M43.1186 23H49.2685V21.6776H44.6548V12.8182H43.1186V23ZM50.9016 23H52.3881V15.3636H50.9016V23ZM51.6523 14.1854C52.1644 14.1854 52.592 13.7876 52.592 13.3004C52.592 12.8132 52.1644 12.4105 51.6523 12.4105C51.1353 12.4105 50.7127 12.8132 50.7127 13.3004C50.7127 13.7876 51.1353 14.1854 51.6523 14.1854ZM55.8745 18.4659C55.8745 17.2479 56.6202 16.5518 57.6543 16.5518C58.6635 16.5518 59.275 17.2131 59.275 18.3217V23H60.7615V18.1428C60.7615 16.2536 59.7225 15.2642 58.1614 15.2642C57.013 15.2642 56.2623 15.7962 55.9093 16.6065H55.8148V15.3636H54.388V23H55.8745V18.4659ZM62.7551 23H64.2417V20.2905L64.9824 19.5497L67.5776 23H69.4022L66.101 18.6399L69.1934 15.3636H67.4135L64.3709 18.5952H64.2417V12.8182H62.7551V23ZM73.5249 23.1541C75.1903 23.1541 76.3686 22.3338 76.7067 21.0909L75.2997 20.8374C75.0312 21.5582 74.3849 21.9261 73.5398 21.9261C72.267 21.9261 71.4119 21.1009 71.3722 19.6293H76.8011V19.1023C76.8011 16.343 75.1506 15.2642 73.4205 15.2642C71.2926 15.2642 69.8906 16.8849 69.8906 19.2315C69.8906 21.603 71.2727 23.1541 73.5249 23.1541ZM71.3771 18.5156C71.4368 17.4318 72.2223 16.4922 73.4304 16.4922C74.5838 16.4922 75.3395 17.3473 75.3445 18.5156H71.3771ZM81.3091 23.1491C82.7012 23.1491 83.248 22.299 83.5165 21.8118H83.6408V23H85.0925V12.8182H83.606V16.6016H83.5165C83.248 16.1293 82.7409 15.2642 81.3191 15.2642C79.4746 15.2642 78.1174 16.7209 78.1174 19.1967C78.1174 21.6676 79.4547 23.1491 81.3091 23.1491ZM81.6373 21.8814C80.3098 21.8814 79.6188 20.7131 79.6188 19.1818C79.6188 17.6655 80.2949 16.527 81.6373 16.527C82.9348 16.527 83.6309 17.5859 83.6309 19.1818C83.6309 20.7876 82.9199 21.8814 81.6373 21.8814ZM88.8697 12.8182H87.3335V23H88.8697V12.8182ZM92.4741 18.4659C92.4741 17.2479 93.2198 16.5518 94.2539 16.5518C95.2631 16.5518 95.8746 17.2131 95.8746 18.3217V23H97.3612V18.1428C97.3612 16.2536 96.3221 15.2642 94.761 15.2642C93.6126 15.2642 92.8619 15.7962 92.5089 16.6065H92.4144V15.3636H90.9876V23H92.4741V18.4659Z"
                            fill="white"
                        />
                    </g>
                </svg>
            </div>
        </div>
    );
}
export default TopInfo;
