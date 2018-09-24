import React from 'react';

export default class Main extends React.Component {

    render() {
        return <main>
            <div class='row'>
                <div class='col' />
                <div class='col'>
                <form class="form-inline">
                    <div class="form-group mb-2">
                        <label for="position" class="sr-only">Position</label>
                        <input type="text" class="form-control" id="position" value="email" />
                    </div>
                    <div class="form-group mx-sm-3 mb-2">
                        <label for="location" class="sr-only">Location</label>
                        <input type="text" class="form-control" id="location" placeholder="Location" />
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Search</button>
                    </form>
                </div>
                <div class='col' />
            </div>
        </main>;
    }

}
