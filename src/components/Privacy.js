import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Privacy() {
    const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch("https://greatbritishtalent.com/wp-json/wp/v2/pages/3")
      .then((res) => res.json())
      .then((json) => {
        setItems(json.acf);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <div className='please_wait'> <div class="loader"> </div><span>Data Loading....</span></div>;
    return (
        <>
         <Helmet>
			<title>Privacy-Policy - Great British UK Talent</title>
      <meta charSet="utf-8" />			
			<meta name="description" content="About page" />
			<link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
        <section className='terms_and_condition'>
        <div className="term_condition_text_box" dangerouslySetInnerHTML={{__html: items.content}}>         
        </div>
      </section>
      </>

    );
}
