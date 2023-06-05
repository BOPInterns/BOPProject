import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Column from 'react-bootstrap/Col';
import BOPLogo from './BOPHub.MainLogo.png'
import Navbar from 'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { NavigationBar } from './NavigationBar';

export const LandingPage = () => {
    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="email@domain.com" id="email" name = "email"/>
                <br></br>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="********" id="password" name = "password"/>
                <br></br>
            </form> */}
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Column>This is the homepage</Column>
                </Row>
            </Container>
            </div>
    )
}