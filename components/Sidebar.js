import { Avatar, IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { SearchOutlined } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <Container>
            <Header>
                <UserAvatar />

                <IconsContainer>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>

                        <MoreVertIcon />
                    </IconButton>
                </IconsContainer>
            </Header>
            <Search>
                <SearchOutlined />
                {/* <SearchInput /> */}
            </Search>
        </Container>
    )
}

export default Sidebar;

const Container = styled.div`

`;
const Search = styled.div`

`;
const Header = styled.div`
    display: flex;
    position:sticky;
    top:0;
    background-color: white;
    z-index:1;
    justify-content:space-between;
    align-items:center;
    padding:15px;
    height:80px;
    border-bottom:1px solid whitesmoke;
`;

const UserAvatar = styled( Avatar )`
cursor:pointer;
:hover{
    opacity:0.8;
}
`;

const IconsContainer = styled.div``;