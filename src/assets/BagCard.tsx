import * as React from "react"

function BagCard(props: any) {
  return (
    <svg
      width={17}
      height={19}
      viewBox="0 0 17 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        opacity={0.737212}
        clipRule="evenodd"
        d="M3.931 1.53L1.628 4.637v10.876c0 .858.688 1.554 1.536 1.554H13.91c.848 0 1.535-.696 1.535-1.554V4.637L13.142 1.53h-9.21z"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity={0.737212}
        d="M1.628 5.414h13.817M11.99 8.435c0 1.43-1.352 2.59-3.022 2.59-1.669 0-3.022-1.16-3.022-2.59"
        stroke="#fff"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default BagCard
