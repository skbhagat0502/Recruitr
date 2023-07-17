import React, { useState } from "react";
import { IconButton, Snackbar } from "@mui/material";
import { PiCopySimple } from "react-icons/pi";

const copiedText = `
  Hey! It's been a game-changer for me in finding job opportunities and
  connecting with employers. Join now to level up our careers together! Get it
  from: https://recruitr.com/invite linkexample - Sender name
`;

const CopyToClipboard = () => {
  const [open, setOpen] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(copiedText);
      setOpen(true);
    } catch (error) {
      console.error("Failed to copy text to clipboard:", error);
    }
  };

  return (
    <>
      <IconButton onClick={handleClick} color="primary">
        <PiCopySimple className="rotate-90" />
      </IconButton>
      <Snackbar
        message="Copied to clipboard"
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        open={open}
      />
    </>
  );
};

export default CopyToClipboard;
export { copiedText };
