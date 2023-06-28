import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

export const MarketPlaceSearchBar = ({onSearch}) => {
  const [ query, setQuery ] = useState('');

    // if (localStorage.getItem("searchText") === null)
    //   localStorage.setItem("searchText", "");

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
    //     body: JSON.stringify({ name: localStorage.getItem("nameFilter") }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       if (data.data) setSearchData(data.data);
    //       else setSearchData([]);
    //     });
    // }, []);
    
    // const handleSearch = (e) => {
    //   e.preventDefault();
    //   onSearch(searchQuery);
    //   setSearchQuery('');
    // }

    const handleSearch = async (e) => {
      e.preventDefault();
      //here is ideally where we would come up with all the search terms 
      //for now we'll use these instead
      onSearch(query)
      const terms = ["mushroom", "fungus", "pizza", "vegetation", "plant", "spore"];
      try {
        fetch('http://localhost:9000/search', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ terms }),
        }).then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      } catch (error) {
        console.error('Error searching:', error);
      }
    };

    return (
        <div>
            <Row className="mt-3">
              <Col sm={2}></Col>
              <Col lg={8}>
                <InputGroup>
                  <Button className="search-btn">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </Button>
                  <Form
                    onSubmit={handleSearch}
                    style={{
                      width: '800px'
                    }}
                  >
                  <Form.Control 
                    style={{
                      borderTopLeftRadius: '0px',
                      borderBottomLeftRadius: '0px',
                    }}
                    type="text" 
                    placeholder="Search Bar"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                  />
                  </Form>
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