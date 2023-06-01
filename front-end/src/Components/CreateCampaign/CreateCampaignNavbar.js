import Nav from 'react-bootstrap/Nav';

export const CreateCampaignNavbar = () => {
    return (
        <div>
            <Nav
                justify variant="tabs"
                defaultActiveKey="/create-campagin-introduction"
                fixed="top"
            >
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-1">
                        Step 1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-2">
                        Step 2
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-3">
                        Step 3
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-4">
                        Step 4
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/create-campaign-step-5">
                        Step 5
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    )
}