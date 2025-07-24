import { styled } from "@mui/material";
import { theme } from "../theme";
import type { ReactNode } from "react";
interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  children,
  onClick,
}: StyledButtonProps) => {
  return (
    <>
      <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
    </>
  );
};

const ButtonStyled = styled("button")(() => ({
  backgroundColor: "transparent",
  borderRadius: "3px",
  border: `1px solid ${theme.palette.primary.contrastText}`,
  padding: "5px 15px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  "&:hover": {
    backgroundColor: theme.palette.secondary.dark,
  },
  display: "inline-flex",
  justifyContent: "center",
  gap: "10px",
}));
