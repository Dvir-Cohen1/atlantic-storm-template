import React from "react";

export const PrimaryButton = ({ children }) => {
  return (
    <button className="bg-primary p-3 rounded-lg text-card-background hover:bg-primary/80 transition-all font-semibold uppercase">
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children }) => {
  return (
    <button className="bg-light-text p-3 rounded-lg text-card-background hover:bg-light-text/80 transition-all font-semibold uppercase">
      {children}
    </button>
  );
};

export const DefaultButton = ({ children }) => {
  return (
    <button className="bg-card-background p-3 rounded-lg text-light-text hover:bg-card-background/80 background font-semibold uppercase">
      {children}
    </button>
  );
};
export const WarningButton = ({ children }) => {
  return (
    <button className="bg-green p-3 rounded-lg text-card-background hover:bg-green/80 transition-all font-semibold uppercase">
      {children}
    </button>
  );
};
export const DangerButton = ({ children }) => {
  return (
    <button className="bg-red p-3 rounded-lg text-card-background hover:bg-red/80 transition-all font-semibold uppercase">
      {children}
    </button>
  );
};
