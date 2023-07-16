import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Navbar from "./components/Bars/Navbar";
import Home from "./pages/navcomponents/Home";
import UserProfile from "./pages/UserProfile";
import Contact from "./pages/navcomponents/Contactpage";
import About from "./pages/navcomponents/About";
import LogIn from "./pages/navcomponents/LogIn";
import SignUp from "./pages/navcomponents/SignUp";

import Jobs from "./pages/Admin/Jobs";
import MyJobs from "./pages/Jobs/MyJobs";
import UserForm from "./components/Users/UserForm";
import Admin from "./pages/Admin/Admin";
import PageNotFound from "./pages/PageNotFound";
import FileUploader from "./pages/Tasks/FileUploader";
import { useContext } from "react";
import JobList from "./components/Jobs/JobList";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./Component/theme";
import SingleJob from "./components/Jobs/SingleJob";
import UserList from "./components/Users/UserList";
import AddJob from "./components/Jobs/AddJob";
import Profile from "./components/Employer/Profile";
import CreateTask from "./pages/Tasks/CreateTask";
import ViewTask from "./pages/Tasks/ViewTask";
import Tasks from "./pages/Tasks/Tasks";
import Taskpage from "./pages/Tasks/Taskpage";
import { useSelector } from "react-redux";

function App() {
  const { userInfo } = useSelector((state) => state.signIn);
  console.log(userInfo);
  const userType = userInfo?.userType;

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />

          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/user/profile" element={<UserProfile />} /> */}
              <Route
                exact
                path="/user/profile"
                element={userType === "company" ? <Profile /> : <UserProfile />}
              />
              <Route path="/user/login" element={<LogIn />} />
              <Route path="/user/register" element={<SignUp />} />
              <Route path="/user/myapplications" element={<MyJobs />} />
              <Route path="/contactus" element={<Contact />} />
              <Route path="/aboutus" element={<About />} />
              <Route path="upload" element={<FileUploader />} />
              {/* <Route path="/eprofile" element={<Profile />} /> */}
              <Route path="/jobpage" element={<JobList />} />
              <Route path="/search/location/:location" element={<JobList />} />
              <Route path="/search/:keyword" element={<JobList />} />

              <Route path="/job/:id" element={<SingleJob />} />

              <Route exact path="/jobs" element={<Jobs />} />
              <Route exact path="/users/create" element={<UserForm />} />
              {/* <Route exact path="/jobs/:jobId" element={<Job />} /> */}
              <Route path="/addjob" element={<AddJob />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/task" element={<Tasks />} />
              <Route path="/taskpage" element={<Taskpage />} />
              {/* <Route path="/task/create" element={<CreateTask />} /> */}
              <Route path="/task/:id" element={<ViewTask />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
