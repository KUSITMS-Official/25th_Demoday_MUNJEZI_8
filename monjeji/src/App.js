import React from "react";
import Header from "./HeaderPage";
import Main from "./pages/main";
import MyPage from "./pages/MyPage";
import ReviewLayout from "./pages/reviewLayout";
import ReviewPlus from "./pages/reviewPlus";
import BookSignUp from "./pages/bookSignUp";
import SignIn from "./pages/signInModal";
import SignUp from "./pages/signUpModal";
import Search from "./pages/search";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MyPagePoint from "./pages/MyPagePoint";

function App() {
    return (
        <div>
            <Header/>
            <div>
                <Routes>
                    <Route path="/signIn" element={<SignIn/>}/>
                    <Route path="/signUpModal" element={<SignUp/>}/>
                    <Route path="/myPage" element={<MyPage/>}/>
                    <Route path="/myPagePoint" element={<MyPagePoint/>}/>
                    <Route path="/reviewPlus" element={<ReviewPlus/>}/>
                    <Route path="/bookSignUp" element={<BookSignUp/>}/>

                    {/* <Route path="/review" element={<ReviewLayout />} /> */}
                    <Route path="/review/korea" element={<ReviewLayout />} />
                    <Route path="/review/math" element={<ReviewLayout />} />
                    <Route path="/review/eng" element={<ReviewLayout />} />
                    <Route path="/review/society" element={<ReviewLayout />} />
                    <Route path="/review/science" element={<ReviewLayout />} />
                    <Route path="/review/history" element={<ReviewLayout />} />

                    <Route path="/search" element={<Search />} />
                    <Route path="/*" element={<Main />} exact={true} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
