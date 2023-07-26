import React from "react";
import { useState } from "react";
import SideNav from "@trendmicro/react-sidenav";
import { Link } from "react-router-dom";

import "../../componentsCss/Bars/Sidebar.css";

const Sidebar = () => {
  const [user, setUser] = useState(null);

  const handleSignInBtn = async (event) => {
    event.preventDefault();
    if (user === null) {
      setUser("Deepu");
    } else {
      setUser(null);
    }
  };

  return (
    <SideNav
      onSelect={(selected) => {
        // Add your code here
      }}
    >
      <div class="primary-nav">
        {/* <button href="#" class="hamburger open-panel nav-toggle">
          <span class="screen-reader-text">Menu</span>
        </button> */}

        <nav role="navigation" class="menu">
          <div class="overflow-container">
            <ul class="">
              <li>
                <a href="#">Dashboard</a>
                <span class="icon">
                  <i class="fa fa-dashboard"></i>
                </span>
              </li>

              <li class="menu-hasdropdown">
                <a href="#">Settings</a>
                <span class="icon">
                  <i class="fa fa-gear"></i>
                </span>

                <label title="toggle menu" for="settings">
                  <span class="downarrow">
                    <i class="fa fa-caret-down"></i>
                  </span>
                </label>
                <input
                  type="checkbox"
                  class="sub-menu-checkbox"
                  id="settings"
                />

                <ul class="sub-menu-dropdown">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Security</a>
                  </li>
                  <li>
                    <a href="">Account</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="">Users</a>

                <span class="icon">
                  <i class=" fa fa-user "></i>
                </span>
              </li>

              <li>
                <a href="#">Jobs</a>
                <span class="icon">
                  <i class="fa fa-tasks"></i>
                </span>
              </li>
            </ul>

            <div
              id="sidebar-main"
              class="sidebar sidebar-default sidebar-separate sidebar-fixed"
            >
              <div class="sidebar-content">
                <div class="avatar">
                  <div class="avatar__img">
                    <img src="https://picsum.photos/70" alt="avatar" />
                  </div>
                  <div class="avatar__name">John Smith</div>
                </div>
                <div class="sidebar-category sidebar-default">
                  <div class="category-title">
                    <span>Fruits</span>
                  </div>
                  <div class="category-content">
                    <ul id="fruits-nav" class="nav flex-column">
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          Apple
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          Banana
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="#" class="nav-link active">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          Pear
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          href="#other-fruits"
                          class="nav-link"
                          data-toggle="collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="other-fruits"
                        >
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          Others
                        </a>
                        <ul id="other-fruits" class="flex-column collapse">
                          <li class="nav-item">
                            <a href="#" class="nav-link">
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              Orange
                            </a>
                          </li>
                          <li class="nav-item ">
                            <a href="#" class="nav-link">
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                              Kiwi
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="sidebar-category sidebar-default">
                  <div class="category-title">
                    <span>Contenu éditable</span>
                  </div>
                  <div class="category-content">
                    <ul id="sidebar-editable-nav" class="nav flex-column">
                      <li class="nav-item">
                        <a href="/admin/customers" class="nav-link">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          customers
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/admin/resettest" class="nav-link">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          reset test
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/admin/usersprofiles" class="nav-link">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          users profiles
                        </a>
                      </li>
                      <li class="nav-item">
                        <a href="/admin/users" class="nav-link active">
                          <i class="fa fa-pencil" aria-hidden="true"></i>
                          users
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul class="logout">
            <li>
              <a href="#">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </SideNav>
  );
};

export default Sidebar;
