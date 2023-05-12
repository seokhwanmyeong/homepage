import { Route, Routes } from "react-router-dom";
//  Page
import FrameMain from "@page/FrameMain";
import Home from "@page/Home";
import Service from "@page/Service";
import Terms from "@page/Terms";
import Policy from "@page/Policy";

const RouterOutlet = () => {
  return (
    <Routes>
      <Route path="/" element={<FrameMain />}>
        <Route index={true} key={`home`} element={<Home />} />
        <Route key={`service`} path={"service"} element={<Service />} />
        <Route key={`terms`} path={"terms"} element={<Terms />} />
        <Route key={`policy`} path={"policy"} element={<Policy />} />
      </Route>
    </Routes>
  );
};

export default RouterOutlet;
