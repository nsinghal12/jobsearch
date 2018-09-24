import React from 'react';
import SearchForm from './SearchForm';
import JobContainer from './JobContainer';
import IfClause from './IfClause';

export default class Main extends React.Component {

    state = {
        city : null,
        jobs : []
    }

    onJobs = (jobs) => {
        this.setState( { jobs : jobs });
    }

    componentDidMount() {
        // let's load the city name from where user is calling
        fetch('https://ipapi.co/json')
            .then(response => {
                return response.json();
            })
            .then(json => {
                if(json && json.city) {
                    this.setState( { city : json.city });
                }
            })
    }

    render() {
        return <main>
            <SearchForm city={ this.state.city } onJobs={ this.onJobs }/>
            <IfClause condition={ this.state.jobs && this.state.jobs.length > 0 }>
                <JobContainer jobs={ this.state.jobs } />
            </IfClause>
        </main>;
    }

}
