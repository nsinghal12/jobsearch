import React from 'react';
import Group from './Group';

export default class JobContainer extends React.Component {

    renderJob = (job) => {
        return <div class='row job-result'>
            <div class='col'>
                <a href={ job.url } target='_blank'>{ job.title + ' at ' + job.company}</a>
                <br />
                { job.location + ', ' + job.type }
            </div>
        </div>;
    }

    getJobs = (jobs) => {
        let result = [];
        for(let index = 0; index < jobs.length; index++) {
            let job = jobs[index];

            result.push(this.renderJob(job));
        }

        return result;
    }

    render() {
        const jobs = this.props.jobs;
        if(jobs === null) {
            return null;
        }

        if(jobs.length === 0) {
            return <div class='alert alert-info'>
                No job postings found matching your criteria.
            </div>;
        }

        return <Group>
            <h4 class='search-heading'>Search Results</h4>
            <div class='job-result-container'>{ this.getJobs(jobs) }</div>
        </Group>;
    }

}
