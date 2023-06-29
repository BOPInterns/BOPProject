import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { Configuration, OpenAIApi } from "openai";




export const MarketPlaceSearchBar = ({onSearch, campList, solList, servList, setCampList, setSolList, setServList}) => {
  const [ query, setQuery ] = useState('');
  const [ result, setResult ] = useState('');
  const [ apiKey, setApiKey ] = useState('');


  useEffect(() => {
    fetch("http://localhost:9000/get-openai-api-key", {
      method: "GET"
    }).then(res => res.json())
    .then((data) => {setApiKey(data)});
  }, []);

  const configuration = new Configuration({
    apiKey: apiKey,
  });
  const openai = new OpenAIApi(configuration);
    
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

      onSearch(query);
      const terms = [query];
      let wordsArray = completion.data.choices[0].text.split(",");
      wordsArray.forEach((word) => {
        terms.push(word.trim());
      });
      console.log(terms);

      //applying search to campaigns
      const queriedCamps = campList.filter(camp => 
        terms.some(term => 
          Object.values(camp).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );

      //applying search to solutions
      const queriedSols = solList.filter(sol => 
        terms.some(term => 
          Object.values(sol).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );
      
      //applying search to services
      const queriedServs = servList.filter(serv => 
        terms.some(term => 
          Object.values(serv).some(value => 
            value.toString().toLowerCase().includes(term.toLowerCase())
          )
        )
      );

      setCampList(queriedCamps);
      setSolList(queriedSols);
      setServList(queriedServs);
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