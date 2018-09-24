import React from 'react';

export default class JobContainer extends React.Component {

    renderJob = (job) => {
        return <div class='row'>
            <div class='col'>{ job.title }</div>
            <div class='col'>{ job.description }</div>
            <div class='col'>{ job.how_to_apply }</div>
        </div>;
    }

    render() {
        const jobs = this.props.jobs;
        if(!jobs || jobs.length === 0) {
            return null;
        }

        let result = [];
        for(let index = 0; index < jobs.length; index++) {
            let job = jobs[index];

            result.push(this.renderJob(job));
        }

        return result;
    }

}
