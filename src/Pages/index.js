import IndexLayout from "../Layouts/IndexLayout";
import MainLayout from "../Layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import PageDetail from '../Pages/PageDetail/PageDetail'
import AbdominalesPage from "./AbdominalesPage/AbdominalesPage";
import BicepsPage from "./BicepsPage/BicepsPage";
import TricepsPage from "./TricepsPage/TricepsPage";
import GluteosPage from "./GluteosPage/GluteosPage";
import PechoPage from "./PechoPage/PechoPage";
import CardioPage from "./CardioPage/CardioPage";
import PesoCorporalPage from "./PesoCorporalPage/PesoCorporalPage";
import HombroPage from "./HombroPage/HombroPage";
import YogaPage from "./YogaPage/YogaPage";
import CuadricepsPage from "./CuadricepsPage/CuadricepsPage";
import PageEjercicios from "./PageEjercicios/PageEjercicios";
import PageLogin from "./PageLogin/PageLogin";
import PageFavoritos from "./PageFavoritos/PageFavoritos";
import PageRutinas from "./PageRutinas/PageRutinas";
import EspaldaPage from "./EspaldaPage/EspaldaPage";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <IndexLayout />,

    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/ejercicios/:id",
                element: <PageDetail />,
            },
            {
                path: "/abdominales",
                element: <AbdominalesPage />,
            },
            {
                path: "/biceps",
                element: <BicepsPage />,
            },
            {
                path: "/triceps",
                element: <TricepsPage />,
            },
            {
                path: "/gluteos",
                element: <GluteosPage />,
            },
            {
                path: "/pecho",
                element: <PechoPage />,
            },
            {
                path: "/cardio",
                element: <CardioPage />,
            },
            {
                path: "/peso-corporal",
                element: <PesoCorporalPage />,
            },
            {
                path: "/hombros",
                element: <HombroPage />,
            },
            {
                path: "/yoga",
                element: <YogaPage />,
            },

            {
                path: "/cuadriceps",
                element: <CuadricepsPage />,
            },
            {
                path: "/ejercicios",
                element: <PageEjercicios />,
            },
            {
                path: "/register",
                element: <PageLogin />,
            },
            {
                path: "/favoritos",
                element: <PageFavoritos />,
            },
            {
                path: "/rutinas",
                element: <PageRutinas />,
            },
            {
                path: "/espalda",
                element: <EspaldaPage />,
            },
        ],
    },
]);
