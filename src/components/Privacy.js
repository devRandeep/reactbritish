import React, { useEffect, useState } from 'react';

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
    return (
        <>
        <section className='terms_and_condition'>
        <div className="term_condition_text_box" dangerouslySetInnerHTML={{__html: items.content}}>         
        </div>
      </section>
      </>

    );
}
