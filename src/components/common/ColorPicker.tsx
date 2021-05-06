import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Popover from "@material-ui/core/Popover";
import { makeStyles } from "@material-ui/core/styles";

import { COLORS } from "./colors";

interface ColorPickerProps {
  className?: string;
  selectedColor: string;
  setSelectedColor: (color: string) => void;
  disabled?: boolean;
}

interface ColorButtonProps {
  className?: string;
  color: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ColorButton = (props: ColorButtonProps) => {
  const { color, className, onClick } = props;
  return (
    <div
      role='button'
      style={{ backgroundColor: color }}
      className={className}
      onClick={onClick}
    ></div>
  );
};

const ColorPicker = (props: ColorPickerProps) => {
  const { className, selectedColor, setSelectedColor, disabled } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectColor = (color: string) => {
    setSelectedColor(color);
  };

  const open = !disabled && Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className={className}>
      <ColorButton
        color={selectedColor}
        className={classes.colorButton}
        onClick={disabled ? null : handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        className={classes.popover}
        PaperProps={{
          className: classes.popoverPaper,
        }}
      >
        <Grid container spacing={1} className={classes.grid}>
          {COLORS.map((color) => (
            <Grid item key={color} xs={2}>
              <ColorButton
                color={color}
                onClick={() => selectColor(color)}
                className={classes.colorButton}
              />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </div>
  );
};

const useStyles = makeStyles((appTheme) => ({
  colorBox: {
    flexGrow: 1,
  },
  popover: {
    display: "flex",
    flexGrow: 1,
  },
  popoverPaper: {
    overflowY: "hidden",
    padding: 10,
  },
  grid: {
    flexGrow: 1,
  },
  colorButton: {
    height: 20,
    maxWidth: 20,
    cursor: "pointer",
    // opacity: 1,
    // "&::hover": {
    //   opacity: 0.8,
    // },
  },
}));

export default ColorPicker;
