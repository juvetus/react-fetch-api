import React, { useState, useEffect, useContext } from "react";
import { Form, Card, Icon, Image } from "semantic-ui-react";
import { DarkModeContext } from "./Square";
import Lightswitch from "./Lightswitch";

function Content(props) {
  const { darkMode } = useContext(DarkModeContext);
  const [id, setId] = useState([]);
  // const [favorites, setFavorites] = useState([]);
  const [logo, setLogo] = useState("");
  const [duns_number, setDunsNumber] = useState("");
  const [business_name, setBusiness] = useState("");
  const [suffix, setSuffix] = useState("");
  const [industry, setIndustry] = useState("");
  const [catch_phrase, setCatchPhrase] = useState("");
  const [buzzword, setBussWord] = useState("");
  const [bs_company_statement, setBsCompany] = useState("");
  const [employee_identification_number, setEmployeeIdentication] =
    useState("");
  const [error, setError] = useState("");
  const [type, setType] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [full_address, setFullAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const setData = ({
    logo,
    phone_number,
    business_name,
    suffix,
    industry,
    catch_phrase,
    buzzword,
    bs_company_statement,
    employee_identification_number,
    duns_number,
    full_address,
    latitude,
    longitude,
    id,
  }) => {
    setLogo(logo);
    setBusiness(business_name);
    setSuffix(suffix);
    setIndustry(industry);
    setCatchPhrase(catch_phrase);
    setBussWord(buzzword);
    setEmployeeIdentication(employee_identification_number);
    setBsCompany(bs_company_statement);
    setDunsNumber(duns_number);
    setPhoneNumber(phone_number);
    setType(type);
    setFullAddress(full_address);
    setLatitude(latitude);
    setLongitude(longitude);
    setId(id);
  };

  useEffect(() => {
    fetch("https://random-data-api.com/api/company/random_company")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
        }

        console.log(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = () => {
    fetch("https://random-data-api.com/api/company/random_company")
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          setError(data.message);
        } else {
          setData(data);
        }
        console.log("last Data", data);
      });

    localStorage.setItem("ID", id);
  };

  const remove = () => {
    localStorage.removeItem("ID");
  };

  const handleFavorite = () => {};

  const contentProvider = () => {
    if (darkMode) {
      return (
        <div>
          <div className="navbar">Random company App</div>
          <div className="random">
            <Form.Button onClick={handleSubmit} content="random"></Form.Button>

            <Form.Button onClick={remove}>Remove localStorage</Form.Button>
            <Form.Button onClick={handleFavorite}>
              Favorite localStorage
            </Form.Button>
            {/* <Form.Button onClick={darkMode}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </Form.Button> */}
            <div
              className={
                darkMode
                  ? `Container Container-dark`
                  : `Container Container-light`
              }
            >
              {" "}
              <Lightswitch />
            </div>
          </div>

          {error ? (
            <h1>{error}</h1>
          ) : (
            <div className="app-card">
              <Card
                value={business_name}
                onChange={(e) => setBusiness(e.target.value)}
              >
                <Image src={logo} className="ui fluid image" />

                <Card.Content>
                  <Card.Header>{business_name}</Card.Header>
                  <Card.Meta>
                    <span className="date">{suffix}</span>
                  </Card.Meta>
                  <Card.Meta>
                    <span className="date">{catch_phrase}</span>
                  </Card.Meta>
                  <Card.Description>{industry}</Card.Description>
                  <Card.Description>{bs_company_statement}</Card.Description>
                  <Card.Header>{type}</Card.Header>
                </Card.Content>

                <Card.Content extra>
                  <a href="/">
                    <Icon name="address card outline" />
                    {full_address}
                  </a>
                </Card.Content>

                <Card.Content extra>
                  <a href="/">
                    <Icon name="bookmark" />
                    {buzzword}
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a href="/">
                    <Icon name="id badge" />
                    {employee_identification_number}
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a href="/">
                    <Icon name="phone square" />
                    {phone_number}
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a href="/">
                    <Icon name="registered" />
                    {duns_number}
                  </a>
                </Card.Content>

                <Card.Content extra>
                  <a href="/">
                    <Icon name="address card" />
                    {latitude}
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a href="/">
                    <Icon name="location arrow" />
                    Long : {longitude}
                  </a>
                </Card.Content>
                <Card.Content extra>
                  <a href="/">
                    <Icon name="location arrow" />
                    Lat :{latitude}
                  </a>
                </Card.Content>
              </Card>
            </div>
          )}

          <div className="locaStore">
            {" "}
            localStorage Element : {localStorage.getItem("ID")}
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="navbar">Random company App</div>
        <div className="random">
          <Form.Button onClick={handleSubmit} content="random"></Form.Button>

          <Form.Button onClick={remove}>Remove localStorage</Form.Button>
          <Form.Button onClick={handleFavorite}>
            Favorite localStorage
          </Form.Button>
          {/* <Form.Button onClick={darkMode}>
          Switch to {theme === "light" ? "Dark" : "Light"} Theme
        </Form.Button> */}
          <div
            className={
              darkMode
                ? `Container Container-dark`
                : `Container Container-light`
            }
          >
            {" "}
            <Lightswitch />
          </div>
        </div>

        {error ? (
          <h1>{error}</h1>
        ) : (
          <div className="app-card">
            <Card
              value={business_name}
              onChange={(e) => setBusiness(e.target.value)}
            >
              <Image src={logo} className="ui fluid image" />
              <Card.Content>
                <Card.Header>{business_name}</Card.Header>
                <Card.Meta>
                  <span className="date">{suffix}</span>
                </Card.Meta>
                <Card.Meta>
                  <span className="date">{catch_phrase}</span>
                </Card.Meta>
                <Card.Description>{industry}</Card.Description>
                <Card.Description>{bs_company_statement}</Card.Description>
                <Card.Header>{type}</Card.Header>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="address card outline" />
                  {full_address}
                </a>
              </Card.Content>

              <Card.Content extra>
                <a href="/">
                  <Icon name="bookmark" />
                  {buzzword}
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="id badge" />
                  {employee_identification_number}
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="phone square" />
                  {phone_number}
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="registered" />
                  {duns_number}
                </a>
              </Card.Content>

              <Card.Content extra>
                <a href="/">
                  <Icon name="address card" />
                  {latitude}
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="location arrow" />
                  Long : {longitude}
                </a>
              </Card.Content>
              <Card.Content extra>
                <a href="/">
                  <Icon name="location arrow" />
                  Lat : {latitude}
                </a>
              </Card.Content>
            </Card>
          </div>
        )}

        <div className="locaStore">
          {" "}
          localStorage Element : {localStorage.getItem("ID")}
        </div>
      </div>
    );
  };

  return (
    <div className={darkMode ? `Content Content-dark` : `Content`}>
      {contentProvider()}
    </div>
  );
}

export default Content;
