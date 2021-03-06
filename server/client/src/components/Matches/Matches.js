import React from "react";
import API from '../../utils/API'
import { ListItem } from "../List/index";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

class Matches extends React.Component {
    state = {
        matches: [],
    };

    componentDidMount() {
        API.getCurrentMatches(this.props.matchName)
            .then(res =>
                this.setState({ matches: res.data })
        )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {this.state.matches.length ? (
                    <Container>
                        {this.state.matches.map(match => (
                            <ListItem key={match.slug}>
                                <Link to={"/tournament/" + match.tournament.slug + "/" + match.slug}>
                                    <strong className="Matches">
                                        {match.name.replace(/-/g, ' ')}
                                    </strong>
                                </Link>
                            </ListItem>
                        ))}
                    </Container>
                ) : (
                        <h3>Searching For All Matches</h3>
                    )}
            </div>
        );
    }
}

export default Matches;