import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from "openai";
import Alert from 'react-bootstrap/Alert';

export const MarketPlaceSearchBar = ({onSearch, campaigns, solutions, services, setCampaigns, setSolutions, setServices}) => {
  const [ query, setQuery ] = useState('');
  const [ result, setResult ] = useState('');
  const [ apiKey, setApiKey ] = useState('');
  const [ show, setShow ] = useState(false);


  useEffect(() => {
    fetch("http://localhost:9000/get-openai-api-key", {
      method: "GET"
    }).then(res => res.json())
    .then((data) => {setApiKey(data.data); console.log(data.data)});
  }, []);

 
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
      if (!query.length)
        return;
      //here is ideally where we would come up with all the search terms 
      const configuration = new Configuration({
        apiKey: apiKey,
      });
      const openai = new OpenAIApi(configuration);
      const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: generatePrompt(query),
        temperature: 0.4,
        max_tokens: 3000,
      });
      onSearch(query);
      const terms = [query];
      let wordsArray = completion.data.choices[0].text.split(",");
      wordsArray.forEach((word) => {
        terms.push(word.trim());
      });
      console.log(terms);
      setResult(terms.join(", "));
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

      //applying search to campaigns
      const queriedCamps = campaigns.filter(camp => 
        terms.some(term => 
          Object.values(camp).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );

      //applying search to solutions
      const queriedSols = solutions.filter(sol => 
        terms.some(term => 
          Object.values(sol).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );
      
      //applying search to services
      const queriedServs = services.filter(serv => 
        terms.some(term => 
          Object.values(serv).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );

      setCampaigns(queriedCamps);
      setSolutions(queriedSols);
      setServices(queriedServs);
      setShow(true);
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
                      width: '750px'
                    }}
                  >
                  <Form.Control 
                    style={{
                      borderTopLeftRadius: '0px',
                      borderBottomLeftRadius: '0px',
                      borderBottomRightRadius: '0px',
                      borderTopRightRadius: '0px',
                    }}
                    type="text" 
                    placeholder="Search Bar"
                    value={query}
                    onChange={(e)=> setQuery(e.target.value)}
                  />
                  </Form>
                  <Button
                    className="search-btn"
                    //on click here
                  >
                    <i class="fa-regular fa-circle-xmark fa-md"></i>
                  </Button>
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
            <Row
              style={{
                justifyContent: 'center',
                paddingTop: '10px',
              }}
            >
            <Alert
              style={{
                backgroundColor: 'lightgray',
                borderColor: 'gray',
                width: '50%',
                color: 'black'
              }}
              dismissible
              show={show}
              onClose={() => setShow(false)}
            >
              Searching for: {result}
            </Alert>
            </Row>
        </div>
    )
}