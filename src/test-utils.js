import React, { ReactElement } from "react";
import { render } from "@testing-library/react";

// const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
//   return (
//   );
// };

const customRender = (ui, options) => render(ui, { ...options });

export * from "@testing-library/react";
export { customRender as render };
