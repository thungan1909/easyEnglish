const ChallengeInfoItem = ({
  icon: Icon,
  value,
  label,
  color,
  iconSize = 12, // Default size
}: {
  icon: React.ElementType;
  value: string | number;
  label?: string;
  color?: string;
  iconSize?: number;
}) => (
  <div className="flex gap-1 items-center">
    <Icon size={iconSize} />
    <span color={color}>{value}</span>
    {label && <span>{label}</span>}
  </div>
);

export default ChallengeInfoItem;
