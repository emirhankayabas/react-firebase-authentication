const MailIcon = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 11H63V54H1V11Z" fill="#95ABC1"></path>
      <path
        d="M1 54L23.1 33.2C24.3 32.1 25.8 31.5 27.5 31.5H36.6C38.2 31.5 39.8 32.1 41 33.2L63 54H1Z"
        fill="#B4C6D8"
      ></path>
      <path
        d="M63 11L36.5 36.8C34 39.2 29.9 39.2 27.4 36.8L1 11H63Z"
        fill="#D1DDE9"
      ></path>
    </svg>
  );
};

export { MailIcon };
