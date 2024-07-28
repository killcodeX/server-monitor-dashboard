import { Route, Routes } from "react-router-dom";
import Dashboard from "modules/dashboard";
import Schedules from "modules/schedules";
import NewSchedule from "modules/newSchedule";
import Reports from "modules/reports";
import Settings from "modules/settings";
import Login from "modules/auth/login";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "core/layout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/schedules"
          element={
            <ProtectedRoute>
              <Schedules />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-schedule"
          element={
            <ProtectedRoute>
              <NewSchedule />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
