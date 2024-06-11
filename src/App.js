import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DestinationCard from './components/DestinationCard';
import DestinationDetail from './components/DestinationDetail';
import './App.css';

// Define your destinationList array
const destinationList = [
  {
    id: 1,
    name: 'Taj Mahal',
    description: 'A mausoleum located in Agra, India.',
    imageUrl: 'https://media.cntraveler.com/photos/5abe5ac43cb82c6df95e8e2c/16:9/w_2560%2Cc_limit/GettyImages-666672096.jpg',
    location: 'Agra, Uttar Pradesh',
    fullDescription: 'The interior of the building is dimly lit through pierced marble lattices and contains a virtuoso display of carved marble. Externally the building gains an ethereal quality from its marble facings, which respond with extraordinary subtlety to changing light and weather. The battle of Panipat laid the foundation of the Mughal dynasty in Agra. The loss of the Afghan Ruler, Sikandar Lodhi became the turning point that piloted the nation’s forays into the world of architectural majesty. Globally renowned as the city of the Taj Mahal, this royal Mughal city has many other monuments too that emphasise the high point of Mughal architecture. The founder of the Mughal dynasty, Babur, laid out the first formal Persian garden on the banks of the river Yamuna. Akbar raised the towering ramparts of the great Red Fort and within its walls Jahangir built rose-red palaces, courts and gardens. However, the crowning glory of the city is obviously The Taj, a monument of an imagination turned into a "symbol of eternal love". The Taj represents India to the world embellished by Shah Jahan with marble mosques, palaces and pavilions of gem-inlaid white marble. In 1631 AD, Shah Jahan, the Emperor during the Mughal Empire\'s period of greatest prosperity, was grief stricken when his third wife, Mumtaz Mahal died during the birth of their fourteenth child, Gauhar Ara Begum. The court chronicles of Shah Jahan\'s grief illustrate the love story traditionally held as an inspiration for the Taj Mahal. The Taj Mahal incorporates and expands on design traditions of Persian architecture and earlier Mughal architecture. Specific inspiration came from successful Timurid and Mughal buildings including the Gur-e Amir (the tomb of Timur, progenitor of the Mughal dynasty, in Samarkand), Humayun\'s Tomb and Shah Jahan\'s own Jama Masjid in Delhi. While earlier Mughal buildings were primarily constructed of red sandstone, Shah Jahan promoted the use of white marble inlaid with semi-precious stones and buildings under his patronage reached new levels of refinement. The Itmad-Ud-Daulah\'s Tomb (sometimes called the Baby Taj), that Nur Jahan built for her father, Mirza Ghiyas Beg was the first Mughal structure to be built entirely of marble. This particular monument marks the transition from the red sandstone structures to those in white marble and is believed to be the precursor of the magnificent Taj Mahal. However, the architects evolved this masterpiece from the closest model completed some 60 years before, at Humayun’s Tomb in Delhi, by his wife, Hamida Begum. According to Koch, who spent a decade digging to the very beginnings of the famous monument and measuring every inch of the vast complex, this was exactly what the building-obsessed emperor had wanted to create: a monument that would be unrivalled in beauty and grandeur for all generations to come. "It will," in the words of his court historian Muhammad Amin Qazwini, "be a masterpiece for ages to come, increasing the amazement of all humanity". "As a historian I was a little sceptical about the love angle," confesses Koch. But his biography, Padshahnama, written by a series of carefully chosen historians, goes into extraordinary detail about the emperor\'s broken heart, including how his beard turned white overnight and how he shared with his begum not just passion but a meeting of minds as well. Shah Jahan set about constructing his "masterpiece for ages to come", Koch says, with utmost deliberation. Just the selection of the site, for instance, took him nearly six months. The prevailing fashion in the royal capital Agra was for river front havelis to be turned into garden tombs. But the Taj wasn\'t going to be just one of the scores of garden tombs. "Shah Jahan knew nothing makes an impression stronger than sheer size, so he decided to build a complex that was almost a kilometre long," Koch says. "It\'s the biggest mausoleum if not in the world, at least in Asia". Twenty thousand people were deployed to work on it. The material was brought in from all over India and central Asia and it took a fleet of 1000 elephants to transport it to the site. According to a court historian Abdul Hamid Lahori, a network of wells was laid down along the river line and was filled with stones and other solid materials in order to lay a strong foundation of this grand mausoleum. The chief architect of Taj was a Persian named Ustad Isha Khan (a well known architect of his time) who was assisted by other architects to make Taj Mahal a profound fusion of Persian, Turkish, Indian and Islamic architecture. To make it the most gorgeous architectural piece, as many as 28 precious and semi-precious stones were used in the ornamentation with their best combination. But the thing, dominantly used in ornamentation was the famous snow white marble that was found in Makrana (Rajasthan). Other semi-precious stones were brought from distant regions of India, Ceylon and Afghanistan; Jasper from Punjab, jade and crystal from China, turquoise from Tibet, lapis lazuli and sapphire from Arabia and diamonds from Panna. Red sandstones of different tints that constitute the base were requisitioned from neighboring quarries of Sikri, Dholpur etc. Overall, so exquisite is the workmanship that it is said "having been designed by the giants and finished by jewelers". Emperor Shah Jahan himself described the Taj in these words: "Should guilty seek asylum here, Like one pardoned, he becomes free from sin. Should a sinner make his way to this mansion, All his past sins are to be washed away. The sight of this mansion creates sorrowing sighs, And the sun and the moon shed tears from their eyes. In this world this edifice has been made, To display thereby the creator\'s glory!" By the late 19th century, parts of the buildings had fallen badly into disrepair. During the time of the Indian rebellion of 1857, the Taj Mahal was defaced by British soldiers and government officials, who chiseled out precious stones and lapis lazuli from its walls. At the end of the 19th century, British viceroy Lord Curzon ordered a massive restoration project, which was completed in 1908. He also commissioned the large lamp in the interior chamber, modeled after one in a Cairo mosque. During this time the garden was remodeled with British-style lawns that are still in place today.'
  },
  {
    id: 2,
    name: 'Red Fort',
    description: 'A historic fort in the city of Delhi, India.',
    imageUrl: 'https://i.ytimg.com/vi/Retw2dTngrU/maxresdefault.jpg',
    location: 'Delhi',
    fullDescription: 'The Red Fort, which is also known as the Lal Qila, was constructed by one of the most famous Mughal emperors, Shah Jahan. Built on the banks of river Yamuna, the fortress-palace was designed by architect Ustad Ahmad Lahauri. It took 8 years and 10 months to build the magnificent fort. The fort served as the royal residence of the Mughal emperors from 1648 to 1857. It took over the honor of royal residence from the famous Agra Fort when Shah Jahan decided to shift his capital from Agra to Delhi. The Red Fort derives its name from the red-sandstone walls, which make the fort almost impregnable. The fort, which is located at Old Delhi, is one of the massive and prominent structures of India and is a fine example of Mughal architecture. It is often considered as the pinnacle of Mughal creativity. In modern times, the fort is of importance to the people of India as the Indian Prime Minister delivers his Independence Day speech from the fort, every year on August 15. In 2007, it was declared as UNESCO World Heritage Site.'
  },
  {
    id: 3,
    name: 'Golkonda Fort',
    description: 'A historic fort in the city of Hyderabad, India.',
    imageUrl: 'https://2.bp.blogspot.com/-pnNfCKHyoU4/WN-JW62GBlI/AAAAAAAAUGk/IAlnMD6K_V0pwyuqNi0d1lE07UVYmPeQQCLcB/s1600/Golkonda.original.3569.jpg',
    location: 'Hyderabad',
    fullDescription: 'The origins of the Golconda fort can be traced back to the 11th century. It was originally a small mud fort built by Pratāparudra of the Kakatiya Empire. The name Golconda is thought to originate from Telugu for "Cowherd\'s hill". It is also thought that Kakatiya ruler Ganapatideva 1199–1262 built a stone hilltop outpost — later known as Golconda fort — to defend their western region. The fort was later developed into a fortified citadel in 1518 by Sultan Quli of the Qutb Shahi Empire, and the city was declared the capital of the Golconda Sultanate. The Bahmani kings took possession of the fort after it was made over to them by means of a sanad by the Rajah of Warangal. Under the Bahmani Sultanate, Golconda slowly rose to prominence. Sultan Quli Qutb-ul-Mulk (r. 1487–1543), sent by the Bahmanids as a governor at Golconda, established the city as the seat of his governance around 1501. Bahmani rule gradually weakened during this period, and Sultan Quli (Quli Qutub Shah period) formally became independent in 1518, establishing the Qutb Shahi dynasty based in Golconda. Over a period of 62 years, the mud fort was expanded by the first three Qutb Shahi sultans into the present structure: a massive fortification of granite extending around 5 km (3.1 mi) in circumference. It remained the capital of the Qutb Shahi dynasty until 1590 when the capital was shifted to Hyderabad. The Qutb Shahis expanded the fort, whose 7 km (4.3 mi) outer wall enclosed the city. During the early seventeenth century a strong cotton-weaving industry existed in Golconda. Large quantities of cotton were produced for domestic and exports consumption. High quality plain or patterned cloth made of muslin and calico was produced. Plain cloth was available as white or brown colour, in bleached or dyed variety. Exports of this cloth was to Persia and European countries. Patterned cloth was made of prints which were made indigenously with indigo for blue, chay-root for red coloured prints and vegetable yellow. Patterned cloth exports were mainly to Java, Sumatra and other eastern countries. The fort finally fell into ruin in 1687 after an eight-month-long siege led to its fall at the hands of the Mughal emperor Aurangzeb, who ended the Qutb Shahi reign and took the last Golconda king, Abul Hassan Tana Shah, captive.'
  },
  {
    id: 4,
    name: 'Horsley Hills',
    description: 'A hill station in Andhra Pradesh, India.',
    imageUrl: 'https://image3.mouthshut.com/images/Restaurant/Photo/-78516_7434.jpg',
    location: 'Andhra Pradesh',
    fullDescription: 'Horsley Hills or Horsleykonda or Yenugulla Mallamma Konda is a series of hills in Andhra Pradesh in Madanapalle Taluka of Chittoor district and is about 9 miles from Madanapalle town. The local name of the hill was Yenugu Mallama Konda after a legend of a saintly old woman named Mallamma who lived at the top of the hill and was fed by elephants (yenugulu). W.D. Horsley, a British collector, built his home around 1870 after whom it is named. In contrast to the dry and hot surrounding, this area is well vegetated with cooler climate. This made it attractive as a hill station and a tourist spot.'
  },
  {
    id: 5,
    name: 'Munnar',
    description: 'A hill station in Kerala, India.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Munnar_hillstation_kerala.jpg',
    location: 'Munnar, Kerala',
    fullDescription: 'The region has been inhabited by hunter-gatherer tribals like the Malayarayan and Muthuvan for thousands of years. In the early days, only Tamils and few Malayalis lived there. They were brought as workers in the tea plantations. Tradition states that Colonel Arthur Wellesley, later the Duke of Wellington, was the first British person to pass through Munnar during Tipu Sultan\'s campaign in Travancore, but this is unsubstantiated. The first survey of the terrain was undertaken by Benjamin Swayne Ward in 1816–1817, who followed Periyar into the Western Ghats and established a camp at the confluence of three rivers, from which the name of Munnar is derived. It was to be nearly 50 years later that Sir Charles Trevelyan, Governor of Madras, instructed Col. Douglas Hamilton to explore the hill country in the western part of the Madras Presidency, requesting special advice on the feasibility of establishing sanatoria for the British in the South and of developing revenue-earning projects without endangering the environment, as had happened in Ceylon where coffee had destroyed not only the rain forest but also paddy cultivation in the north-central rice bowl of ancient Ceylon. Hamilton climbed throughout the Ghats in Munnar region. 15 years later, John Daniel Munro noted that much of Munnar\'s land was suitable for coffee plantations. Munro, Henry Turn and his half-brother AW Turner obtained ownership of the Cardamom Hills from the Raja of Travancore and began clearing forest around Devikulam in 1879. Soon many other Europeans began establishing tea plantations in the area throughout the 1880s. Early plantations had few facilities and were mainly huts of straw.'
  },
  {
    id: 6,
    name: 'Kerala',
    imageUrl: 'https://wallpapercave.com/wp/wp3500260.jpg',
    location: 'Kerala',
    fullDescription: 'Kerala, a state situated on the tropical Malabar Coast of southwestern India, is one of the most popular tourist destinations in the country. Named as one of the ten paradises of the world by National Geographic Traveler, Kerala is famous especially for its ecotourism initiatives and beautiful backwaters. Its unique culture and traditions, coupled with its varied demography, have made Kerala one of the most popular tourist destinations in the world. Several international agencies ranging from UNESCO to National Geographic have recognised the state\'s tourism potential. Kerala was named by TIME magazine in 2022 among the 50 extraordinary destinations to explore in its list of the World\'s Greatest Places. In 2023, Kerala was listed at the 13th spot in The New York Times\' annual list of places to visit and was the only tourist destination listed from India.'
  },
  {
    id: 7,
    name: 'Mysore Palace',
    description: 'Mysore Palace also known as Amba Vilas Palace located at the heart of Mysore city.',
    imageUrl: 'https://www.touristsecrets.com/wp-content/uploads/2019/08/mysore-palace-illuminated.jpg',
    location: 'Mysore, Karnataka',
    fullDescription: 'Mysore Palace also known as Amba Vilas Palace located at the heart of Mysore city is the most prominent tourist destination of Mysore that attracts millions of visitors round the year. This historical palace housed within the Old Fort facing the Chamunda Hills stands as the official residence of the Wadiyar dynasty who ruled the Kingdom of Mysore from 1399 to 1950. Displaying Indo-Saracenic style of architecture, this sprawling building is a replacement of the old wooden building destroyed by fire in late 19th century. Commissioned by the Krishnarajendra Wadiyar IV, this palatial building comprises of two durbar halls, a number of colossal courtyards, buildings and strikingly beautiful gardens that speak volumes of the splendour of the Wadiyars.'
  },
  {
    id:8,
    name: "Charminar",
    description:'Hyderabad, city, Telangana state, south-central India.',
    imageUrl:'https://wallpaperaccess.com/full/4495724.jpg',
    location:'Hyderbad, Telangana',
    fullDescription: 'Charminar was constructed by the fifth emperor of the Quth Shahi dynasty, Muhammad Quli Qutb Shah. He built this monument after shifting the capital to Hyderabad from Golconda. The Archeological Survey of India (ASI) is a department that preserves the ancient monuments in the country. Charminar has a mosque that represents the Indo-Islamic style of architecture. In addition, festivals like Ramadan or Ramzan are celebrated here, arzi people around the world visit this place all over the year. Let us learn some exciting facts about Charminar by reading an essay on Charminar in English. Interesting Facts about Charminar Now, let us understand some exciting facts about Charminar by reading BYJU\'S short essay on Charminar. The Charminar monument is 160 feet high. It stands near the banks of the Musi River and is closely situated to Laad Bazaar and Mecca Masjid. Quli Qutub Shahi prayed for the end of the plaque, and he vowed to build a mosque if it were to be eradicated; Charminar was built to commemorate the eradication of the plaque.One exciting thing about this monument is that it is built in square form and has four clocks in all four minars. Another interesting thing about the monument is that Sarojini Naidu, the famous Indian political activist and poet, was born and grew up in Hyderabad. In addition, there are statues of her on each side of the structure. One statue reads \'The Nightingale of India\' while another reads \'Sarojini Naidu\'. Charminar is not listed as one of the world\'s seven wonders, but it is an essential and memorable part of India\'s rich history. Every year, it brings new memories to tourists thanks to its architectural glory and connection with significant events from the past.'
  }    
];

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={<DestinationCard destinationList={destinationList} />}
          />
          <Route
            path="/destination/:id"
            element={<DestinationDetail destinationList={destinationList} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
