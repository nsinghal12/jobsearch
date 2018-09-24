import React from 'react';

export default class SearchForm extends React.Component {

    state = {
        keywords : null,
        keywordsError : false,
        locationError : false,
        location : null
    }

    onKeywordChange = (e) => {
        this.setState( { keywords : e.target.value });
    }

    onLocationChange = (e) => {
        this.setState( { location : e.target.value });
    }

    searchJobs = () => {
        let keywords = this.state.keywords;
        let location = this.getCity();

        if(!keywords || keywords.trim() === '') {
            // mark keywords error
            console.log('keywords empty');
            return;
        }

        if(!location || location.trim() === '') {
            // mark location error
            console.log('location empty');
            return;
        }

        // encode
        keywords = encodeURIComponent(keywords.trim());
        location = encodeURIComponent(location.trim());

        // make the call
        const api = 'https://jobs.github.com/positions.json?description=' + keywords + '&location=' + location;
        const url = 'https://jsonp.afeld.me/?url=' + encodeURIComponent(api);
        fetch(url)
            .then(response => {
                console.log('response received as: ', response);
                return response.json();
            })
            .then(json => {
                console.log('jobs received as: ', json);
                this.props.onJobs(json);
            });
    }

    getCity = () => {
        if(this.state.location === null) {
            return this.props.city;
        }

        return this.state.location;
    }
    
    render() {
        return <div class='row'>
            <div class='col' />
            <div class='col'>
            <form class="form-inline">
                <div class="form-group mb-2">
                    <label for="position" class="sr-only">Position</label>
                    <input type="text" class="form-control" id="position" placeholder="Job Keywords" value={ this.state.keywords } onChange={ this.onKeywordChange } />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="location" class="sr-only">Location</label>
                    <input type="text" class="form-control" id="location" placeholder="Location" value={ this.getCity() } onChange={ this.onLocationChange } />
                </div>
                <a class="btn btn-primary mb-2" onClick={ this.searchJobs }>Search</a>
                </form>
            </div>
            <div class='col' />
        </div>;
    }

}
