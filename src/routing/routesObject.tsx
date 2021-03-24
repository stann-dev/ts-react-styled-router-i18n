import React from "react";
import HomePage from "../pages/homepage";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import ProfilePage from "../pages/profile";

export type RouteObjectType = {
    path: string;
    component: React.ReactNode;
};
type RoutesArrayType = RouteObjectType[];

export const routes: RoutesArrayType = [
    {
        path: '/login',
        component: <LoginPage />
    },
    {
        path: '/register',
        component: <RegisterPage />
    },
    {
        path: '/p/:profileId',
        component: <ProfilePage />
    },
    {
        path: '/',
        component: <HomePage />
    }
]
