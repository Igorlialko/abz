import React, {forwardRef} from "react";

interface IProps {
  className: string,
}

/*eslint-disable*/
const LogoText = forwardRef<SVGSVGElement, IProps>(({className}, ref) => {
  return (
    <svg
      className={className}
      ref={ref}
      width="64" height="11"
      viewBox="0 0 64 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.80702 10.588C3.41356 10.588 3.21684 10.4796 3.21684 10.2628V1.33509H0.383959C0.285594 1.33509 0.211822 1.3006 0.16264 1.23162C0.113458 1.16264 0.0888672 1.04932 0.0888672 0.891659V0.655163C0.0888672 0.497499 0.113458 0.384177 0.16264 0.3152C0.211822 0.246222 0.285594 0.211733 0.383959 0.211733H7.30386C7.41205 0.211733 7.48583 0.246222 7.52518 0.3152C7.57435 0.384177 7.59895 0.497499 7.59895 0.655163V0.891659C7.59895 1.04932 7.57435 1.16264 7.52518 1.23162C7.48583 1.3006 7.41205 1.33509 7.30386 1.33509H4.51524V10.2628C4.51524 10.4796 4.31852 10.588 3.92506 10.588H3.80702ZM9.78009 10.5584C9.6227 10.5584 9.50959 10.5239 9.44073 10.455C9.37187 10.386 9.33745 10.2727 9.33745 10.115V0.655163C9.33745 0.497499 9.37187 0.384177 9.44073 0.3152C9.50959 0.246222 9.6227 0.211733 9.78009 0.211733H14.9295C15.0376 0.211733 15.1114 0.246222 15.1508 0.3152C15.1999 0.384177 15.2246 0.497499 15.2246 0.655163V0.891659C15.2246 1.04932 15.1999 1.16264 15.1508 1.23162C15.1114 1.3006 15.0376 1.33509 14.9295 1.33509H10.6359V4.70515H14.4868C14.595 4.70515 14.6688 4.73964 14.7081 4.80862C14.7573 4.8776 14.7819 4.99091 14.7819 5.14858V5.38508C14.7819 5.54275 14.7573 5.65606 14.7081 5.72504C14.6688 5.79402 14.595 5.82851 14.4868 5.82851H10.6359V9.43507H14.9442C15.0524 9.43507 15.1261 9.46955 15.1655 9.53854C15.2147 9.60752 15.2393 9.72083 15.2393 9.8785V10.115C15.2393 10.2727 15.2147 10.386 15.1655 10.455C15.1261 10.5239 15.0524 10.5584 14.9442 10.5584H9.78009ZM19.5462 10.6471C18.956 10.6471 18.4101 10.5781 17.9084 10.4402C17.4068 10.3022 17.028 10.1347 16.7723 9.93762C16.5854 9.79967 16.492 9.67649 16.492 9.5681C16.492 9.44985 16.5559 9.28726 16.6838 9.08033C16.8214 8.87339 16.9296 8.76993 17.0084 8.76993C17.0476 8.76993 17.1509 8.81919 17.3182 8.91774C17.6231 9.08525 17.9477 9.22814 18.292 9.34638C18.6461 9.46463 19.0641 9.52376 19.5462 9.52376C20.1166 9.52376 20.579 9.36609 20.9331 9.05076C21.297 8.72558 21.479 8.30186 21.479 7.7796C21.479 7.415 21.3806 7.11445 21.1839 6.87796C20.9871 6.6316 20.7462 6.43945 20.461 6.3015C20.1855 6.15369 19.7822 5.97632 19.2511 5.76938C18.6805 5.54275 18.228 5.33581 17.8937 5.14858C17.5592 4.96135 17.274 4.68545 17.0379 4.32085C16.8018 3.9464 16.6838 3.45863 16.6838 2.85753C16.6838 2.32541 16.8166 1.85242 17.0822 1.43856C17.3575 1.02469 17.7411 0.704432 18.233 0.477791C18.7347 0.241295 19.3101 0.123047 19.9593 0.123047C20.2936 0.123047 20.6675 0.172317 21.0807 0.270857C21.4938 0.359543 21.8134 0.482718 22.0397 0.640382C22.2364 0.75863 22.3348 0.886731 22.3348 1.02469C22.3348 1.13308 22.2708 1.29075 22.143 1.49768C22.0249 1.70461 21.9314 1.80808 21.8626 1.80808C21.8134 1.80808 21.7396 1.78344 21.6413 1.73418C21.5528 1.68491 21.4938 1.65041 21.4643 1.63071C20.9724 1.3745 20.461 1.2464 19.9298 1.2464C19.3592 1.2464 18.897 1.39421 18.5429 1.68983C18.1985 1.98545 18.0265 2.3944 18.0265 2.91665C18.0265 3.25169 18.11 3.52267 18.2773 3.72961C18.4543 3.93654 18.651 4.09421 18.8675 4.2026C19.0937 4.30114 19.4821 4.4588 20.0331 4.67559C20.6233 4.90223 21.1051 5.12394 21.479 5.34074C21.8528 5.54767 22.1675 5.85315 22.4233 6.25716C22.6889 6.65132 22.8217 7.1588 22.8217 7.7796C22.8217 8.66646 22.5266 9.36609 21.9364 9.8785C21.3462 10.3909 20.5495 10.6471 19.5462 10.6471ZM27.3366 10.588C26.9431 10.588 26.7464 10.4796 26.7464 10.2628V1.33509H23.9135C23.8151 1.33509 23.7413 1.3006 23.6922 1.23162C23.6429 1.16264 23.6184 1.04932 23.6184 0.891659V0.655163C23.6184 0.497499 23.6429 0.384177 23.6922 0.3152C23.7413 0.246222 23.8151 0.211733 23.9135 0.211733H30.8334C30.9416 0.211733 31.0154 0.246222 31.0548 0.3152C31.1039 0.384177 31.1285 0.497499 31.1285 0.655163V0.891659C31.1285 1.04932 31.1039 1.16264 31.0548 1.23162C31.0154 1.3006 30.9416 1.33509 30.8334 1.33509H28.0448V10.2628C28.0448 10.4796 27.848 10.588 27.4546 10.588H27.3366ZM35.4342 10.588C35.0408 10.588 34.844 10.4796 34.844 10.2628V1.33509H32.0111C31.9129 1.33509 31.8391 1.3006 31.7898 1.23162C31.7407 1.16264 31.716 1.04932 31.716 0.891659V0.655163C31.716 0.497499 31.7407 0.384177 31.7898 0.3152C31.8391 0.246222 31.9129 0.211733 32.0111 0.211733H38.931C39.0393 0.211733 39.1131 0.246222 39.1524 0.3152C39.2016 0.384177 39.2261 0.497499 39.2261 0.655163V0.891659C39.2261 1.04932 39.2016 1.16264 39.1524 1.23162C39.1131 1.3006 39.0393 1.33509 38.931 1.33509H36.1424V10.2628C36.1424 10.4796 35.9457 10.588 35.5522 10.588H35.4342ZM39.7394 10.588C39.3166 10.588 39.105 10.5042 39.105 10.3367C39.105 10.2874 39.1198 10.2185 39.1493 10.1298L42.6461 0.418667C42.7051 0.261003 42.9019 0.182171 43.2363 0.182171H43.6642C44.0183 0.182171 44.2151 0.261003 44.2543 0.418667L47.7512 10.1446C47.7807 10.2135 47.7954 10.2776 47.7954 10.3367C47.7954 10.5042 47.584 10.588 47.161 10.588H47.043C46.6987 10.588 46.5021 10.5092 46.4528 10.3515L45.5823 7.92741H41.2444L40.4034 10.3515C40.3543 10.5092 40.1576 10.588 39.8132 10.588H39.7394ZM45.1839 6.80405L43.6347 2.39932C43.5855 2.24165 43.5265 1.95589 43.4576 1.54202H43.4281C43.3494 1.93619 43.2757 2.22195 43.2068 2.39932L41.6575 6.80405H45.1839ZM51.5769 10.6471C50.9867 10.6471 50.4408 10.5781 49.9391 10.4402C49.4375 10.3022 49.0587 10.1347 48.803 9.93762C48.6161 9.79967 48.5227 9.67649 48.5227 9.5681C48.5227 9.44985 48.5866 9.28726 48.7145 9.08033C48.8522 8.87339 48.9603 8.76993 49.0391 8.76993C49.0784 8.76993 49.1816 8.81919 49.349 8.91774C49.6538 9.08525 49.9784 9.22814 50.3228 9.34638C50.6769 9.46463 51.0949 9.52376 51.5769 9.52376C52.1473 9.52376 52.6097 9.36609 52.9638 9.05076C53.3277 8.72558 53.5097 8.30186 53.5097 7.7796C53.5097 7.415 53.4113 7.11445 53.2147 6.87796C53.0178 6.6316 52.7769 6.43945 52.4917 6.3015C52.2162 6.15369 51.813 5.97632 51.2818 5.76938C50.7112 5.54275 50.2587 5.33581 49.9242 5.14858C49.5899 4.96135 49.3047 4.68545 49.0686 4.32085C48.8325 3.9464 48.7145 3.45863 48.7145 2.85753C48.7145 2.32541 48.8473 1.85242 49.1129 1.43856C49.3882 1.02469 49.7718 0.704432 50.2637 0.477791C50.7654 0.241295 51.3408 0.123047 51.99 0.123047C52.3244 0.123047 52.6982 0.172317 53.1114 0.270857C53.5245 0.359543 53.8441 0.482718 54.0704 0.640382C54.2671 0.75863 54.3655 0.886731 54.3655 1.02469C54.3655 1.13308 54.3015 1.29075 54.1737 1.49768C54.0557 1.70461 53.9621 1.80808 53.8934 1.80808C53.8441 1.80808 53.7703 1.78344 53.672 1.73418C53.5835 1.68491 53.5245 1.65041 53.495 1.63071C53.0031 1.3745 52.4917 1.2464 51.9605 1.2464C51.39 1.2464 50.9277 1.39421 50.5736 1.68983C50.2292 1.98545 50.0572 2.3944 50.0572 2.91665C50.0572 3.25169 50.1407 3.52267 50.308 3.72961C50.4851 3.93654 50.6817 4.09421 50.8982 4.2026C51.1244 4.30114 51.5129 4.4588 52.0638 4.67559C52.654 4.90223 53.1359 5.12394 53.5097 5.34074C53.8835 5.54767 54.1982 5.85315 54.454 6.25716C54.7196 6.65132 54.8524 7.1588 54.8524 7.7796C54.8524 8.66646 54.5573 9.36609 53.9671 9.8785C53.377 10.3909 52.5802 10.6471 51.5769 10.6471ZM57.3754 10.588C56.9819 10.588 56.7853 10.4796 56.7853 10.2628V0.507353C56.7853 0.290565 56.9819 0.182171 57.3754 0.182171H57.4935C57.8868 0.182171 58.0837 0.290565 58.0837 0.507353V5.03033H58.1427L61.7723 0.389105C61.8805 0.251148 62.146 0.182171 62.5691 0.182171H62.7166C62.8838 0.182171 63.0117 0.201879 63.1002 0.241295C63.1888 0.270857 63.233 0.3152 63.233 0.374324C63.233 0.46301 63.1837 0.56155 63.0855 0.669944L59.3968 5.28161L63.8675 10.1446C63.956 10.2431 64.0003 10.3219 64.0003 10.3811C64.0003 10.4599 63.951 10.5141 63.8527 10.5436C63.7543 10.5732 63.5871 10.588 63.3511 10.588H63.174C62.9575 10.588 62.7854 10.5781 62.6576 10.5584C62.5396 10.5387 62.4411 10.4845 62.3625 10.3958L58.1427 5.63636H58.0837V10.2628C58.0837 10.4796 57.8868 10.588 57.4935 10.588H57.3754Z"
        fill="black" fillOpacity="0.87"/>
    </svg>

  );
})

export default LogoText;