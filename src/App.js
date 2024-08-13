import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import NewsItem from './components/NewsItem';
import TopHeader from './components/TopHeader';

function App() {

  let news = [
    {
      news_id:'n1',
      news_heading: 'Pasang Namgyal Sherpa completes all 14 peaks above 8,000 meters',
      news_image: 'n1_image.png',
      news_date: '2024-07-23',
      news_text: "Senior climbing guide from Imagine Nepal Treks, Pasang Namgyal Sherpa, has successfully summited Broad Peak on Saturday morning. According to Mingma G, Managing Director at Imagine Nepal Trek, this exceptional achievement confirms Pasang's conquest of all 14 of the world's highest peaks. Broad Peak, the 12th highest mountain globally, stands at an impressive 8,051 meters above sea level."
    },

    {
      news_id:'n2',
      news_heading: 'Olympic organizers apologize for introducing South Korean athletes as North Korea',
      news_image: 'n2_image.png',
      news_date: '2024-07-24',
      news_text: "Olympic Games organizers said they deeply apologize for introducing South Korea's athletes as North Korea during the opening ceremony in Paris.As the South Korean athletes waved their nation's flag on a boat floating down the Seine River on Friday evening, they were announced in both French and English as the Democratic People's Republic of Korea. South Korea is the Republic of Korea."
    },

    {
      news_id:'n3',
      news_heading: 'Road accidents in Kathmandu Valley down by 16pc',
      news_image: 'n3_image.png',
      news_date: '2024-07-25',
      news_text: "At a time when the road accidents and fatalities occurred in different parts of the country have alarmed the people and policymakers alike of late, the Kathmandu Valley witnessed decline in the road incidents in the recent years. According to the Kathmandu Valley Traffic Police Office, the number of accidents has decreased by 16.8 per cent and the number of human fatalities has come down by 6 per cent compared to the previous fiscal year."
    },

    {
      news_id:'n4',
      news_heading: 'Jal movement for animal welfare and environmental conservation',
      news_image: 'n4_image.png',
      news_date: '2024-07-27',
      news_text: "The Jal movement , launched in 2019 by Pema Chhewang Sherpa and Samir Hamal, has emerged as a beacon of compassion and environmental consciousness. This groundbreaking initiative addresses the plight of stray animals, particularly dogs and urban birds, by installing water pots throughout the city. This simple yet effective solution provides a lifeline for these vulnerable creatures, ensuring access to clean drinking water."
    },

  ]

  return (
    <div className='Web-page'> 
    <TopHeader/>
    <Header/>

<div className='NewsContainer'> 
    <NewsItem
        heading={news[0].news_heading} 
        image={news[0].news_image}
        date={news[0].news_date}
        text={news[0].news_text}> </NewsItem>

<NewsItem
        heading={news[1].news_heading} 
        image={news[1].news_image}
        date={news[1].news_date}
        text={news[1].news_text}> </NewsItem>

<NewsItem
        heading={news[2].news_heading} 
        image={news[2].news_image}
        date={news[2].news_date}
        text={news[2].news_text}> </NewsItem>

<NewsItem
        heading={news[3].news_heading} 
        image={news[3].news_image}
        date={news[3].news_date}
        text={news[3].news_text}> </NewsItem>

</div>

<Footer/>

   </div>
   
  );
}

export default App;
