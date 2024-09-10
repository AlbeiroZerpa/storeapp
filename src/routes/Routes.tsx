import { Route, Routes } from "react-router-dom";
import { Index } from "../pages/Index.tsx";
import { Shop } from "../pages/Shop.tsx";
import { Soporte } from "../pages/Soporte.tsx";
import { ProfileConfig } from "../pages/userProfile/ProfileConfig.tsx";

export const RoutesProyect = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="shop" element={<Shop />} />
      <Route path="soporte" element={<Soporte />} />
      <Route path="profileConfig" element={<ProfileConfig />} />
    </Routes>
  );
};
