import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenres } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Terms from "./pages/Terms/Terms";
import About from "./pages/About/About";
import Faq from "./pages/Faq/Faq";
import PrivacyPolicy from "./pages/privacy/PrivacyPolicy";
import Cart from "./pages/details/Cart";
import Workingon from "./pages/404/Workingon";
import ContactUs from "./pages/ContactUs/Contactus";
import Admin from "./pages/admin/Admin";
import Blog from "./pages/Blog/Blog";
import Testimonials from "./pages/Testimonial/Testimonials";
import Sign from "./pages/Sign/Sign";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Dashboard from "./pages/dashboard/Dashboard"; 
import Videosection from "./pages/Videosection/Videosection";



function App() {
    const dispatch = useDispatch();
    const { url } = useSelector((state) => state.home);
    console.log(url);

    useEffect(() => {
        fetchApiConfig();
        genresCall();
    }, []);

    const fetchApiConfig = () => {
        fetchDataFromApi("/configuration").then((res) => {
            console.log(res);

            const url = {
                backdrop: res.images.secure_base_url + "original",
                poster: res.images.secure_base_url + "original",
                profile: res.images.secure_base_url + "original",
            };

            dispatch(getApiConfiguration(url));
        });
    };

    const genresCall = async () => {
        let promises = [];
        let endPoints = ["tv", "movie"];
        let allGenres = {};

        endPoints.forEach((url) => {
            promises.push(fetchDataFromApi(`/genre/${url}/list`));
        });

        const data = await Promise.all(promises);
        console.log(data);
        data.map(({ genres }) => {
            return genres.map((item) => (allGenres[item.id] = item));
        });

        dispatch(getGenres(allGenres));
    };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:position/:id" element={<Details />} />
                <Route path="/cart/checkout/:id" element={<Cart />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="/terms-condition" element={<Terms />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/faq" element={<Faq />}/>
                {/*<Route path="/privacy" element={<PrivacyPolicy />}/>*/}
                <Route path="*" element={<PageNotFound />} />
                <Route path="/login" element={<Workingon />} />
                <Route path="/contactus" element={<ContactUs />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/blog" element={<Blog title="Blog" />} />
                <Route path="/video" element={<Videosection />} />
                <Route path="/blog/:id" element={<BlogDetails />} />
                <Route path="/testimonial" element={<Testimonials />}   />
                {/* <Route path="/sign" element={<Sign />} />  */}

                     {/* Route to Dashboard filtered by actor */}
                     <Route path="/dashboard/actor" element={<Dashboard category="actor" />} />               
                     {/* Route to Dashboard filtered by actress */}
                     <Route path="/dashboard/actress" element={<Dashboard category="actress" />} />
                     <Route path="/dashboard/actress" element={<Dashboard category="actress" />} />
                     <Route path="/dashboard/sports" element={<Dashboard category="sports" />} />
                     <Route path="/dashboard/singer" element={<Dashboard category="singer" />} />
                     <Route path="/dashboard/anchor" element={<Dashboard category="anchor" />} />
                     <Route path="/dashboard/entrepreneur" element={<Dashboard category="entrepreneur" />} />
                     <Route path="/dashboard/fitness" element={<Dashboard category="fitness" />} />
                     <Route path="/dashboard/singer" element={<Dashboard category="singer" />} />
                     <Route path="/dashboard/influencer" element={<Dashboard category="influencer" />} />
                     <Route path="/dashboard/comedy_actor" element={<Dashboard category="comedy_actor" />} />                     
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
