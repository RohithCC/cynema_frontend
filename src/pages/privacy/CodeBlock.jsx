import React from 'react';
import './codeblock.scss'; // Import the CSS file for styles

const CodeBlock = () => {
  return (
    <div className='code-block flex-1 overflow-x-auto'>
      <pre>
        <code>
          {`<div className="position-absolute width-full color-bg-default" style={{ bottom: "-4rem" }}>`}
        </code>
      </pre>
      <pre>
        <code>
          {`  <div className="container-xl p-responsive">`}
        </code>
      </pre>
      <pre>
        <code>
          {`    <div className="d-flex flex-justify-center flex-lg-justify-end color-bg-default">`}
        </code>
      </pre>
      <pre>
        <code>
          {`      <div className="col-8 col-sm-7 col-md-6 col-lg-5 position-relative z-2 right-lg-n12 events-none">`}
        </code>
      </pre>
      <pre>
        <code>
          {`        <picture>`}
        </code>
      </pre>
      <pre>
        <code>
          {`          <source srcSet="astro-mona.webp" type="image/webp" />`}
        </code>
      </pre>
      <pre>
        <code>
          {`          <img src="astro-mona.svg" width="960" height="967" className="home-astro-mona width-full position-absolute bottom-0 height-auto" alt="Mona looking at GitHub activity across the globe" />`}
        </code>
      </pre>
      <pre>
        <code>
          {`        </picture>`}
        </code>
      </pre>
      <pre>
        <code>
          {`      </div>`}
        </code>
      </pre>
      <pre>
        <code>
          {`    </div>`}
        </code>
      </pre>
      <pre>
        <code>
          {`  </div>`}
        </code>
      </pre>
      <pre>
        <code>
          {`</div>`}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
