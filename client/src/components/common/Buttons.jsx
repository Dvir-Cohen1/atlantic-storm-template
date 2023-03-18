import React from "react";

export const PrimaryButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary p-3 rounded-lg text-card-background hover:bg-primary/80 transition-all font-semibold uppercase`}
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-light-text p-3 rounded-lg text-card-background hover:bg-light-text/80 transition-all font-semibold uppercase`}
    >
      {children}
    </button>
  );
};

export const DefaultButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-card-background p-3 rounded-lg text-light-text hover:bg-card-background/80 background font-semibold uppercase`}
    >
      {children}
    </button>
  );
};
export const WarningButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-green p-3 rounded-lg text-card-background hover:bg-green/80 transition-all font-semibold uppercase`}
    >
      {children}
    </button>
  );
};
export const DangerButton = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-red p-3 rounded-lg text-card-background hover:bg-red/80 transition-all font-semibold uppercase`}
    >
      {children}
    </button>
  );
};
