import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/landing.jsx";
import AddContact from "./views/AddContact.jsx";
import Contact from "./context/Contact.jsx";

const App = () => {
    return (
        <Contact>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/AddContact" element={<AddContact />} />
                </Routes>
            </BrowserRouter>
        </Contact>
    );
};

export default App;