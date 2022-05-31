function MenuOpen({ width = "22", height = "20", className = "" , onClick}) {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 22 20"
      onClick={onClick}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.4997 0.56665H0.499701C0.381844 0.56665 0.285416 0.663079 0.285416 0.780936V2.49522C0.285416 2.61308 0.381844 2.70951 0.499701 2.70951H21.4997C21.6176 2.70951 21.714 2.61308 21.714 2.49522V0.780936C21.714 0.663079 21.6176 0.56665 21.4997 0.56665ZM21.4997 17.2809H0.499701C0.381844 17.2809 0.285416 17.3774 0.285416 17.4952V19.2095C0.285416 19.3274 0.381844 19.4238 0.499701 19.4238H21.4997C21.6176 19.4238 21.714 19.3274 21.714 19.2095V17.4952C21.714 17.3774 21.6176 17.2809 21.4997 17.2809ZM21.4997 8.92379H0.499701C0.381844 8.92379 0.285416 9.02022 0.285416 9.13808V10.8524C0.285416 10.9702 0.381844 11.0667 0.499701 11.0667H21.4997C21.6176 11.0667 21.714 10.9702 21.714 10.8524V9.13808C21.714 9.02022 21.6176 8.92379 21.4997 8.92379Z"
        fill="#191919"
      />
    </svg>
  );
}

export default MenuOpen;