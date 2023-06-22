import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const MarketPlaceSearchBar = () => {
    if (localStorage.getItem("searchText") === null)
      localStorage.setItem("searchText", "");

    // const [searchText, setSearchText] = useState(localStorage.getItem("searchText"));
    // const [searchData, setSearchData] = useState([]);

    // useEffect(() => {
    //   fetch("http://localhost:9000/get-search-data", {
    //     method: "POST",
    //     crossDomain: true,
    //     headers: {
    //       "Content-Type": "application/json",
    //       Accept: "application/json",
    //       "Access-Control-Allow-Origin": "*",
    //     },
    //     body: JSON.stringify({ name: localStorage.getItem("searchText") }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.data) setSearchData(data.data);
    //       else setSearchData([]);
    //     });
    // }, []);

    return (
        <div>
            <Row className="mt-3">
              <Col sm={2}></Col>
              <Col lg={8}>
                <InputGroup>
                  <Button className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form.Control 
                    type="text" 
                    placeholder="Search Bar"
                    // value={searchText}
                    // onChange={(e)=>setSearchText(e.target.value)}
                  />
                </InputGroup>
              </Col>
              <Col sm={2}>
                <Button
                  className="filters-btn"
                  text-align="center"
                  href="/market-place/filters"
                >
                  Filters <i class="fa-solid fa-filter"></i>
                </Button>
              </Col>
            </Row>
        </div>
    )
}