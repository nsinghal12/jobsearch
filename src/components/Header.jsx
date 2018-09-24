import React from 'react';

export default class Header extends React.Component {

    render() {
        return <header class='mb-auto'>
        <nav class="container navbar navbar-expand-md navbar-light">
          <a href="#" class='unicorn'>🦄</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a href='/' class='nav-link'>Job Search</a>
            </li>
          </ul>
        </nav>
      </header>;
    }

}
