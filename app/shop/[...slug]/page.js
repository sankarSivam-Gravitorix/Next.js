import React from "react";

const MultipleDynamicRoutes = ({params}) => {
  return (
    <div>
      <h2>Test Shop:{params.slug[0]} / {params.slug[1]}  </h2>
    </div>
  );
};

export default MultipleDynamicRoutes;
