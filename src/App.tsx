import React, {FC, lazy, Suspense, ReactNode} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";

import ErrorPage from "./pages/ErrorPage";
import Default from "./layouts/Default";

export default function App() {
  const HomePage = lazy(() => import("./pages/HomePage"));
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default/>}>
          <Route index element={
            <SuspensedView>
              <HomePage/>
            </SuspensedView>
          }/>
        </Route>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

const SuspensedView: FC<{ children: ReactNode }> = ({children}) => {
  TopBarProgress.config({
    barColors: {
      "0": "rgba(244, 224, 65, 1)",
    },
    barThickness: 2,
    shadowBlur: 10,
  });
  return <Suspense fallback={<TopBarProgress/>}>{children}</Suspense>;
};

