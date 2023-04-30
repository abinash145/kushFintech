const EyeCloseIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path>
      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path>
      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path>
      <line x1="2" y1="2" x2="22" y2="22"></line>
    </svg>
  )
}

const EyeOpenIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  )
}

const ArrowRightIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}

const ArrowLeftIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      style={props.style}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  )
}
const EditIcon = (props) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      <path
        d="M17.6168 4.75204C17.8552 4.51361 18.1383 4.32448 18.4498 4.19545C18.7613 4.06641 19.0952 4 19.4324 4C19.7696 4 20.1035 4.06641 20.415 4.19545C20.7265 4.32448 21.0095 4.51361 21.248 4.75204C21.4864 4.99046 21.6755 5.27351 21.8046 5.58503C21.9336 5.89655 22 6.23043 22 6.56761C22 6.90479 21.9336 7.23868 21.8046 7.55019C21.6755 7.86171 21.4864 8.14476 21.248 8.38319L8.99283 20.6383L4 22L5.36168 17.0072L17.6168 4.75204Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 7L19 11" stroke="black" />
    </svg>
  )
}
const DeleteIcon = (props) => {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
      style={props.style}
      onClick={props.onClick}
    >
      <path
        d="M1.60059 4.79395L2.48375 18.1435"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.4834 18.1436C2.4834 18.616 2.87957 18.9999 3.3666 18.9999"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.36719 19H13.6336"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6338 18.9999C14.1209 18.9999 14.5164 18.616 14.5164 18.1436"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.5159 18.1435L15.4004 4.79395H1.60059"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.1541 4.78906H0.845703"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 4V2"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 2C13 1.44848 12.5515 1 12 1"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 1H5"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 1C4.44744 1 4 1.44853 4 2"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 2V4H13"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.60938 6.50293V17.0229"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.20312 6.50293V17.0229"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.79883 6.50293V17.0229"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3916 6.50293V17.0229"
        stroke="#262626"
        strokeMiterlimit="2.6131"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export {
  EyeCloseIcon,
  EyeOpenIcon,
  DeleteIcon,
  EditIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
}
