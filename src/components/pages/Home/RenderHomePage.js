import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../common';

import { Button as Mybutton } from 'antd';
// import 'antd/dist/antd.less';
import '../../../styles/app.less';

function RenderHomePage(props) {
  const { userInfo, authService } = props;
  return (
    <div>
      <h1>Hi {userInfo.name} Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of a common example of how we'd like for you to
          approach components.
        </p>
        <p>
          <Link to="/profile-list">Profiles Example</Link>
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
        <p>
          <Link to="/datavis">Data Visualizations Example</Link>
        </p>
        <p>
          <Button
            handleClick={() => authService.logout()}
            buttonText="Logout"
          />
        </p>
      </div>
      <Mybutton className="my-btn">
        test button Ant overwrite custome theme
      </Mybutton>
      <Mybutton className="">test button Ant just custome theme </Mybutton>
    </div>
  );
}
export default RenderHomePage;
