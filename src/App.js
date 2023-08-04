import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Bars/Navbar";
import Home from "./pages/navcomponents/Home";
import UserProfile from "./pages/UserProfile";
import Contact from "./pages/navcomponents/Contactpage";
import About from "./pages/navcomponents/About";
import LogIn from "./pages/navcomponents/LogIn";
import SignUp from "./pages/navcomponents/SignUp";

import Jobs from "./pages/Jobs/JobPage";
import MyJobs from "./pages/Jobs/MyJobs";
import MyApplications from "./pages/Jobs/MyApplications";
import UserForm from "./components/Users/UserForm";
import Admin from "./pages/Admin/Admin";
import PageNotFound from "./pages/PageNotFound";
import FileUploader from "./components/Tasks/FileUploader";
import JobList from "./components/Jobs/JobList";
import SingleJob from "./components/Jobs/SingleJob";
import AddJob from "./components/Jobs/AddJob";
import Profile from "./components/Employer/Profile";
import ViewTask from "./components/Tasks/ViewTask";
import Taskpage from "./pages/Tasks/Taskpage";
import { useSelector } from "react-redux";
import ProfilePage from "./pages/ProfilePage";
import AddTask from "./components/Tasks/AddTask";
import TaskList from "./components/Tasks/TaskList";
import Dashboard from "./pages/Admin/Dashboard";
import Certificate from "./pages/Certificate";
import CompanyTaskPage from "./pages/Tasks/CompanyTask";

function App() {
  const { userInfo } = useSelector((state) => state.signIn);
  console.log(userInfo);
  const userType = userInfo?.userType;

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              exact
              path="/user/profile"
              element={userType === "company" ? <Profile /> : <UserProfile />}
            />

            <Route path="/user/editprofile" element={<ProfilePage />} />
            <Route path="/user/login" element={<LogIn />} />
            <Route path="/user/register" element={<SignUp />} />
            <Route path="/user/myapplications" element={<MyApplications />} />
            <Route path="/employer/myjobs" element={<MyJobs />} />

            <Route path="/contactus" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="upload" element={<FileUploader />} />
            <Route path="/jobpage" element={<JobList />} />
            <Route path="/search/location/:location" element={<JobList />} />
            <Route path="/search/:keyword" element={<JobList />} />
            <Route path="/job/:id" element={<SingleJob />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route exact path="/jobs" element={<Jobs />} />
            <Route exact path="/users/create" element={<UserForm />} />
            <Route path="/addjob" element={<AddJob />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/task" element={<TaskList />} />
            <Route path="/:job_id/taskpage" element={<Taskpage />} />
            {/* <Route path="/task/create" element={<AddTask />} /> */}
            <Route path="/task/:id" element={<ViewTask />} />

            <Route path="/certificate" element={<Certificate />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
