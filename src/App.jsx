// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Header from "./components/Header/Header";
import ModalLogout from "./components/ModalLogout/ModalLogout";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);
const DashboardPage = lazy(() =>
  import("./pages/DashboardPage/DashboardPage")
);

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  const { isModalLogoutOpen } = useSelector((state) => state.global);
  return (
    <>
      {isModalLogoutOpen && <ModalLogout />}
      <Suspense>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/register" element={<LoginPage />} />
            }
          />

          {/* <Route path="/register" element={<RegistrationPage />} /> */}
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/login"
                component={<RegistrationPage />}
              />
            }
          />
          <Route path="/:activeBtn" element={<DashboardPage />} />

        </Routes>
      </Suspense>
    </>

  );
}

export default App;
