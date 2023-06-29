import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from "openai";


export const MarketPlaceSearchBar = ({onSearch}) => {
  const [ query, setQuery ] = useState('');
  const [ result, setResult ] = useState('');
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);

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
    
    function generatePrompt(query) {
      const capitalizedSearchQuery =
        query[0].toUpperCase() + query.slice(1).toLowerCase();
      return `Suggest five additional related search keywords.
    
    Query: Toilet
    Additional: Sanitation, Plumbing, Water Conservation,
    Query: Jobs
    Additional: Poverty, Work Needed, Unemployment
    Query: Chinese immigration
    Additional: Immigration Reform, Chinese Exclusion Act, Immigration Policies, Naturalization, Chinese
    Query: Education reform
    Additional: School Funding, Teacher Training, Curriculum Development, Student Achievement, School Choice
    Query: Global Overpopulation
    Additional: Population Growth, Population Control, Sustainability, Food Security, Resource Management
    Query: Finances
    Additional: Budgeting, Investing, Debt Management, Credit Score, Financial Planning
    Query: ${capitalizedSearchQuery}
    Additional:
    `;
    }

    const handleSearch = async (e) => {
      e.preventDefault();
      //here is ideally where we would come up with all the search terms 
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(query),
        temperature: 0.4,
        max_tokens: 3000,
      });
      //for now we'll use these instead
      onSearch(query)
      const terms = [query];
      let wordsArray = completion.data.choices[0].text.split(",");
      wordsArray.forEach((word) => {
        terms.push(word.trim());
      });
      console.log(terms);
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