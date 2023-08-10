import Navigation from "@components/Navigation";
import ChatList from "@pages/AuthPages/ChatList";
import Chatting from "@pages/AuthPages/Chatting";
import MemberList from "@pages/AuthPages/MemberList";
import MyInfo from "@pages/AuthPages/MyInfo";
import NotFound from "@pages/NotFound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { HeaderWrap, MainWrap, WorkspaceWrap } from "./styles";

const Workspace = () => {

    return (
        <WorkspaceWrap>
            <HeaderWrap>
                <Navigation />
            </HeaderWrap>
            <MainWrap>
                <Routes>
                    <Route path="/chatting" element={<Chatting />}></Route>
                    <Route path="/chatList" element={<ChatList />}></Route>
                    <Route path="/memberList" element={<MemberList />}></Route>
                    <Route path="/myinfo" element={<MyInfo />}></Route>
                    <Route path="/*" element={<NotFound />}></Route>
                </Routes>
            </MainWrap>
        </WorkspaceWrap>
    )
}

export default React.memo(Workspace);