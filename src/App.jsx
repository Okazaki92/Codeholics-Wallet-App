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
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import Header from "./components/Header/Header";

const RegistrationPage = lazy(() =>
  import("./pages/RegistrationPage/RegistrationPage")
);

const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/registration"
                element={<LoginPage />}
              />
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

          {/*     <Route
          path="/DashboardPage"
          element={
            <PrivateRoute redirectTo="/login" component={<DashboardPage />} />
          }
        />
        */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
