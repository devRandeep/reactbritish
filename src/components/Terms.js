import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Terms() {

  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://greatbritishtalent.com/wp-json/wp/v2/pages/6774")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.acf);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <div className='please_wait'> <div class="loader"> </div><span>Data Loading....</span></div>;
  return (
    <div>
      <>
        <Helmet>
          <title>Terms &#038; Conditions  | Great British UK Talent</title>
          <meta name="description" content="Our website address is: https://www.greatbritishtalent.com" />
          <meta name="robots" content="follow, noindex" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Terms &#038; Conditions - Great British UK Talent" />
          <meta property="og:description" content="Our website address is: https://www.greatbritishtalent.com" />
          <meta property="og:url" content="https://www.greatbritishtalent.com/tc/" />
          <meta property="og:site_name" content="Great British UK Talent" />
          <meta property="article:publisher" content="https://www.facebook.com/greatbritishuk/?eid=ARBEBsDSmin8d9tCfXL7l49QmCMPTaStI8xFjGkTf1IRofrFdSnhtp5C7UB_yEP5_Ipg2iEWZCTWUI5_" />
          <meta property="og:updated_time" content="2024-04-25T05:22:07+00:00" />
          <meta property="article:published_time" content="2020-07-03T22:36:51+00:00" />
          <meta property="article:modified_time" content="2024-04-25T05:22:07+00:00" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Terms &#038; Conditions - Great British UK Talent" />
          <meta name="twitter:description" content="Our website address is: https://www.greatbritishtalent.com" />
          <meta name="twitter:site" content="@greatbritishuk" />
          <meta name="twitter:creator" content="@greatbritishuk" />
          <meta name="twitter:label1" content="Time to read" />
          <meta name="twitter:data1" content="3 minutes" />
        </Helmet>
        <section className='terms_and_condition'>
          <div className="term_condition_text_box" dangerouslySetInnerHTML={{ __html: items.content }}>
          </div>
        </section>

      </>
    </div>
  );
}
