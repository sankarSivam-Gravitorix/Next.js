import React from "react";

const DynamicRoutes = ({params}) => {
  return (
    <div>
      <h2>Test Blog:{params.slug}</h2>
    </div>
  );
};

export default DynamicRoutes;
