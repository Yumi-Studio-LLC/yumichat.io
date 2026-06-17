interface CornIconProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function CornIcon({ className, width = 32, height = 32 }: CornIconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="16" cy="18" rx="8" ry="11" fill="#E8A020" />
      <ellipse cx="13" cy="14" rx="2.5" ry="3" fill="#F5D58A" />
      <ellipse cx="19" cy="14" rx="2.5" ry="3" fill="#F5D58A" />
      <ellipse cx="13" cy="20" rx="2.5" ry="3" fill="#F5D58A" />
      <ellipse cx="19" cy="20" rx="2.5" ry="3" fill="#F5D58A" />
      <ellipse cx="16" cy="25" rx="2.5" ry="3" fill="#F5D58A" />
      <path
        d="M16 7 C14 4 10 3 9 5"
        stroke="#2A4A35"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 7 C18 4 22 3 23 5"
        stroke="#3D6B4F"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M16 7 C16 3 16 1 16 1"
        stroke="#2A4A35"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
