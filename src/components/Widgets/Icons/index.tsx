import { iconPaths } from './IconPaths';

export interface iconProps {
  icon: keyof typeof iconPaths;
  color?: string;
  gradient?: boolean;
  size?: string;
}

const Icon = ({
  icon,
  color,
  gradient,
  size
}: iconProps) => {
  const iconPath = iconPaths[icon];


  const gradientId = 'icon-gradient-' + Math.round(Math.random() * 10e12).toString(36);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size} height={size}
      viewBox="0 0 256 256"
      aria-hidden="true"
      stroke={gradient ? `url(#${gradientId})` : color}

    >
      <g>
        {iconPath}
      </g>
      {
        gradient && (
          <linearGradient
            id={gradientId}
            x1="23"
            x2="235"
            y1="43"
            y2="202"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="var(--gradient-stop-1)" />
            <stop offset=".5" stop-color="var(--gradient-stop-2)" />
            <stop offset="1" stop-color="var(--gradient-stop-3)" />
          </linearGradient>
        )
      }
    </svg>
  )
}

export default Icon