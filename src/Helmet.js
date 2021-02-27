import React from "react";
import {Helmet} from "react-helmet";

 export default class Application extends React.Component {
    render () {
      return (
          <div className="application">
              <Helmet>
  <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
</Helmet>
          </div>
      );
    }
  };
