import CButton from "../../atoms/CButton/CButton";

export interface SeeMoreButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const SeeMoreButton = ({ onClick }: SeeMoreButtonProps) => {
  return (
    <CButton
      className="!text-red-500"
      variant="text"
      size="large"
      aria-label="See more"
      onClick={onClick}
    >
      See more
    </CButton>
  );
};

export default SeeMoreButton;
