import React from 'react';

export default class Main extends React.Component {

    state = {
        city : null,
        keywords : null,
        keywordsError : false,
        locationError : false,
        jobs : []
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
            });
    }

    searchJobs = () => {
        let keywords = this.state.keywords;
        let location = this.state.city;

        if(!keywords || keywords.trim() === '') {
            // mark keywords error
            return;
        }

        if(!location || location.trim() === '') {
            // mark location error
            return;
        }

        // encode
        keywords = encodeURIComponent(keywords.trim());
        location = encodeURIComponent(localStorage.trim());

        // make the call
        const url = 'https://jobs.github.com/positions.json?description=' + keywords + '&location=' + location;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState({ jobs : json });
            });
    }

    render() {
        return <main>
            <div class='row'>
                <div class='col' />
                <div class='col'>
                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="position" class="sr-only">Position</label>
                        <input type="text" class="form-control" id="position" placeholder="Job Keywords" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="location" class="sr-only">Location</label>
                        <input type="text" class="form-control" id="location" placeholder="Location" value={ this.state.city } />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2" onClick={ this.searchJobs }>Search</button>
                    </form>
                </div>
                <div class='col' />
            </div>
        </main>;
    }

}
