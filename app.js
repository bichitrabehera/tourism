 
const heritageSites = [
    {
        name: "Taj Mahal",
        image: "images/tajmahal.jpg",
        description: "The Taj Mahal in Agra is an ivory-white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal."
    },
    {
        name: "Agra Fort",
        image: "images/agrafort.jpg",
        description: "A 16th-century Mughal monument, known for its stunning red sandstone architecture."
    },
    {
        name: "Ajanta Caves",
        image: "images/ajantacaves.jpg",
        description: "Ancient Buddhist rock-cut caves dating back to the 2nd century BCE, adorned with exquisite paintings and sculptures."
    },
    {
        name: "Qutub Minar",
        image: "images/qutubminar.jpg",
        description: "Qutub Minar is a minaret that forms part of the Qutub complex in Delhi, known for its impressive height and architectural style."
    },
    {
        name: "Sun Temple, Konark",
        image: "images/suntample.jpg",
        description: "A 13th-century temple dedicated to the Sun God, known for its unique chariot-shaped design."
    },
    {
        name: "Ellora Caves, Maharashtra ",
        image: "images/ellora.jpg",
        description: "A complex of rock-cut temples and monasteries built between the 6th and 10th centuries, representing Buddhism, Hinduism, and Jainism."
    },
    {
        name: "Mahabalipuram",
        image: "images/mahabalipuram.jpg",
        description: "Ancient rock-cut temples and sculptures from the Pallava Dynasty, dating back to the 7th and 8th centuries."
    },
    {
        name: "Kaziranga National Park - Assam",
        image: "images/kaziranga.jpg",
        description: "Home to the world's largest population of one-horned rhinoceroses and various other wildlife species."
    },
    {
        name: "Manas Wildlife Sanctuary - Assam",
        image: "images/manas.jpg",
        description: "A biosphere reserve and a Project Tiger reserve, known for its rare and endangered endemic wildlife."
    },
    {
        name: "Keoladeo National Park - Rajasthan",
        image: "images/keoladeo.jpg",
        description: " A famous bird sanctuary hosting thousands of birds, especially during the winter season."
    },
    {
        name: "Churches and Convents of Goa",
        image: "images/goa.jpg",
        description: "ncludes the famous Basilica of Bom Jesus, where the remains of St. Francis Xavier are preserved."
    },
    {
        name: "Khajuraho Group of Monuments",
        image: "images/khajuraho.jpg",
        description: "Madhya Pradesh: Known for their intricately carved erotic sculptures, these temples represent the pinnacle of medieval Indian architecture."
    },
    {
        name: "Group of Monuments at Hampi",
        image: "images/hampi.jpg",
        description: "The remains of the ancient city of Vijayanagara, filled with impressive ruins of temples, palaces, and gateways."
    },
    {
        name: "Group of Monuments at Pattadakal",
        image: "images/pattadakal.jpg",
        description: "A series of Hindu and Jain temples from the 7th and 8th centuries, showcasing a fusion of architectural styles."
    },
    {
        name: "Elephanta Caves",
        image: "images/elephanta.jpg",
        description: "Rock-cut caves dedicated to the Hindu god Shiva, dating back to the 5th to 8th centuries."
    },
    {
        name: "Great Living Chola Temples",
        image: "images/chola.jpg",
        description: "Includes the Brihadeshwara Temple, Gangaikonda Cholapuram, and Airavatesvara Temple, showcasing the grandeur of Chola architecture."
    },
    {
        name: "Red Fort Complex",
        image: "images/redfort.jpg",
        description: "Located in Delhi, the Red Fort Complex is an outstanding example of Mughal architecture, showcasing a fusion of Persian, Timurid, and Indian styles."
    },
    {
        name: "Fatehpur Sikri",
        image: "images/fatehpursikri.jpg",
        description: "A city in Uttar Pradesh founded by Mughal Emperor Akbar, known for its stunning red sandstone architecture and a blend of Indian, Persian, and Islamic styles."
    },
    {
        name: "Jantar Mantar - Jaipur",
        image: "images/jantarmantar.jpg",
        description: "A collection of 19 architectural astronomical instruments, built by the Rajput king Sawai Jai Singh II in 1734, showcasing the scientific advances of the time."
    },
    {
        name: "Rani ki Vav (The Queen's Stepwell) - Gujarat",
        image: "images/ranikivav.jpg",
        description: "An intricately constructed stepwell in Patan, Gujarat, known for its stunning carvings and sculptures from the 11th century."
    },
    {
        name: "Valley of Flowers National Park - Uttarakhand",
        image: "images/valleyofflowers.jpg",
        description: "A stunningly beautiful national park known for its meadows of endemic alpine flowers and diverse fauna, located in the Western Himalayas."
    },
    {
        name: "Nanda Devi and Valley of Flowers National Parks",
        image: "images/nandadevi.jpg",
        description: "Two adjoining national parks in the Himalayan region, renowned for their unique biodiversity and scenic beauty."
    },
    {
        name: "Great Himalayan National Park",
        image: "images/greathimalayannationalpark.jpg",
        description: "Located in the Himachal Pradesh region, it is known for its diverse alpine flora and fauna, including several endangered species."
    },
    {
        name: "Sundarbans National Park",
        image: "images/sundarbans.jpg",
        description: "The largest mangrove forest in the world, located in the delta of the Ganges, Brahmaputra, and Meghna rivers, and home to the Royal Bengal Tiger."
    },
    {
        name: "Western Ghats",
        image: "images/westernghats.jpg",
        description: "A mountain range running parallel to the western coast of India, known for its rich biodiversity and many endemic species."
    },
    {
        name: "Hill Forts of Rajasthan",
        image: "images/hillfortsrajasthan.jpg",
        description: "A collection of six majestic forts located in the rugged terrain of Rajasthan, showcasing the power and architectural prowess of Rajput kings."
    },
    {
        name: "Mountain Railways of India",
        image: "images/mountainrailways.jpg",
        description: "Includes three railway lines: the Darjeeling Himalayan Railway, the Nilgiri Mountain Railway, and the Kalka-Shimla Railway, highlighting India's engineering marvels in mountainous regions."
    },
    {
        name: "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        image: "images/csmt.jpg",
        description: "An iconic railway station in Mumbai, known for its Victorian Gothic Revival architecture blended with Indian architectural styles."
    },
    {
        name: "The Architectural Work of Le Corbusier",
        image: "images/lecorbusier.jpg",
        description: "Located in Chandigarh, these works reflect the influence of the modern architectural movement on the city’s urban design and development."
    },
    {
        name: "Khangchendzonga National Park",
        image: "images/khangchendzonga.jpg",
        description: "A national park in Sikkim, encompassing the majestic Mount Khangchendzonga, revered for its natural beauty and cultural significance."
    },
    {
        name: "Champaner-Pavagadh Archaeological Park",
        image: "images/champaner.jpg",
        description: "An archaeological treasure in Gujarat that comprises a landscape dotted with forts, palaces, temples, mosques, and stepwells from the 16th century."
    },
    {
        name: "Buddhist Monuments at Sanchi",
        image: "images/sanchi.jpg",
        description: "A group of Buddhist monuments dating from the 3rd century BCE to the 12th century CE, showcasing the Buddhist art and architecture of ancient India."
    },
    {
        name: "Rock Shelters of Bhimbetka",
        image: "images/bhimbetka.jpg",
        description: "Located in Madhya Pradesh, these rock shelters contain prehistoric cave paintings, offering a glimpse into the lives of early human communities."
    },
    {
        name: "Rajasthan's Jaisalmer Fort",
        image: "images/jaisalmerfort.jpg",
        description: "A massive sandcastle rising from the sandy plains of the Thar Desert, featuring intricate carvings and a living community within its walls."
    },
    {
        name: "The Victorian and Art Deco Ensemble of Mumbai",
        image: "images/victorianartdecomumbai.jpg",
        description: "A collection of Victorian Gothic and Art Deco buildings that line Mumbai's iconic Marine Drive, reflecting the city's architectural heritage."
    },
    {
        name: "Nalanda Mahavihara (Nalanda University) - Bihar",
        image: "images/nalandamahavihara.jpg",
        description: "The ancient Nalanda University was a renowned Buddhist center of learning, attracting scholars from all over the world in ancient times."
    },
    {
        name: "Kakatiya Rudreshwara (Ramappa) Temple - Telangana",
        image: "images/ramappatemple.jpg",
        description: "A 13th-century temple known for its exquisite Kakatiya architecture and unique floating bricks used in its construction."
    },
    {
        name: "Dholavira: A Harappan City - Gujarat",
        image: "images/dholavira.jpg",
        description: "One of the most prominent archaeological sites of the Harappan Civilization, known for its advanced water management system and urban planning."
    },
    {
        name: "The Walled City of Jaipur, Rajasthan",
        image: "images/jaipurwalledcity.jpg",
        description: "Founded in 1727, the historic city of Jaipur is known for its grid-like planning and iconic pink-colored buildings, blending Rajput, Mughal, and European architectural influences."
    },
    {
        name: "Bhimbetka Rock Shelters",
        image: "images/bhimbetkarockshelters.jpg",
        description: "A UNESCO site depicting prehistoric human life through its cave paintings and rock art, dating back to the Stone Age."
    }
];

const festivals = [
    {
        name: "Diwali",
        image: "images/diwali.jpg",
        description: "Known as the Festival of Lights, Diwali is celebrated by lighting lamps, bursting fireworks, and sharing sweets, symbolizing the victory of light over darkness."
    },
    {
        name: "Holi",
        image: "images/holi.jpg",
        description: "The Festival of Colors marks the arrival of spring, with people playing with vibrant powders, water, music, and dancing."
    },
    {
        name: "Eid-ul-Fitr",
        image: "images/eidulfitr.jpg",
        description: "Celebrated by Muslims worldwide, marking the end of Ramadan, this festival involves feasting, prayers, and charity."
    },
    {
        name: "Navratri",
        image: "images/navratri.jpg",
        description: "A nine-night festival dedicated to Goddess Durga, featuring traditional dance forms like Garba and Dandiya, celebrated mainly in Gujarat and West Bengal."
    },
    {
        name: "Dussehra",
        image: "images/dussehra.jpg",
        description: "Marks the victory of Lord Rama over the demon king Ravana, symbolizing the triumph of good over evil, celebrated with processions and effigy burning."
    },
    {
        name: "Ganesh Chaturthi",
        image: "images/ganeshchaturthi.jpg",
        description: "A Hindu festival celebrating Lord Ganesha's birth with grand processions, worship, and immersion of Ganesha idols in water."
    },
    {
        name: "Christmas",
        image: "images/christmas.jpg",
        description: "Celebrates the birth of Jesus Christ with decorated trees, carols, and feasts, bringing joy and a spirit of giving."
    },
    {
        name: "Makar Sankranti",
        image: "images/makarsankranti.jpg",
        description: "A harvest festival marking the sun's transition into Capricorn, celebrated with kite flying, bonfires, and sweet delicacies."
    },
    {
        name: "Pongal",
        image: "images/pongal.jpg",
        description: "A four-day harvest festival in Tamil Nadu, expressing gratitude to nature with traditional food, music, and dance."
    },
    {
        name: "Baisakhi",
        image: "images/baisakhi.jpg",
        description: "Marks the Punjabi New Year and the harvest season, celebrated with traditional dance (Bhangra) and community feasts."
    },
    {
        name: "Raksha Bandhan",
        image: "images/rakshabandhan.jpg",
        description: "Celebrates the bond between brothers and sisters, where sisters tie a protective thread (rakhi) on their brother's wrist."
    },
    {
        name: "Janmashtami",
        image: "images/janmashtami.jpg",
        description: "Commemorates the birth of Lord Krishna with midnight prayers, dance-drama enactments, and the breaking of the Dahi Handi (curd pot)."
    },
    {
        name: "Onam",
        image: "images/onam.jpg",
        description: "Kerala's harvest festival featuring grand feasts, intricate floral designs (Pookalam), traditional music, and boat races."
    },
    {
        name: "Lohri",
        image: "images/lohri.jpg",
        description: "Celebrated mainly in Punjab, Lohri marks the end of winter, with bonfires, folk songs, and traditional dancing."
    },
    {
        name: "Mahashivaratri",
        image: "images/mahashivaratri.jpg",
        description: "A Hindu festival in honor of Lord Shiva, marked by fasting, night vigils, and special prayers at Shiva temples."
    },
    {
        name: "Bihu",
        image: "images/bihu.jpg",
        description: "Assam's harvest festival, celebrated with traditional music, dance, and feasts, marking the Assamese New Year."
    },
    {
        name: "Karva Chauth",
        image: "images/karvachauth.jpg",
        description: "A festival where married Hindu women fast from sunrise to moonrise for the well-being and longevity of their husbands."
    },
    {
        name: "Durga Puja",
        image: "images/durgapuja.jpg",
        description: "A grand festival in West Bengal honoring Goddess Durga, featuring elaborate pandals, cultural performances, and feasting."
    },
    {
        name: "Gudi Padwa",
        image: "images/gudipadwa.jpg",
        description: "The Marathi New Year, celebrated with the hoisting of a Gudi flag, feasting, and traditional processions."
    },
    {
        name: "Chhath Puja",
        image: "images/chhathpuja.jpg",
        description: "A Hindu festival dedicated to the Sun God, involving rituals performed on riverbanks at sunrise and sunset."
    },
    {
        name: "Vasant Panchami",
        image: "images/vasantpanchami.jpg",
        description: "Marks the arrival of spring and is dedicated to Goddess Saraswati, the deity of knowledge, music, and art."
    },
    {
        name: "Teej",
        image: "images/teej.jpg",
        description: "Celebrated by women, particularly in Rajasthan, with fasting, traditional songs, dances, and swings, to honor the union of Lord Shiva and Parvati."
    },
    {
        name: "Ram Navami",
        image: "images/ramnavami.jpg",
        description: "Celebrates the birth of Lord Rama with prayers, processions, and the recitation of the Ramayana."
    },
    {
        name: "Guru Nanak Jayanti",
        image: "images/gurunanakjayanti.jpg",
        description: "Marks the birth of Guru Nanak, the founder of Sikhism, observed with prayers, processions, and community meals (langar)."
    },
    {
        name: "Eid-ul-Adha",
        image: "images/eiduladha.jpg",
        description: "Also known as the Festival of Sacrifice, it honors the willingness of Ibrahim to sacrifice his son as an act of obedience to God."
    },
    {
        name: "Ugadi",
        image: "images/ugadi.jpg",
        description: "The New Year festival for Andhra Pradesh, Karnataka, and Telangana, celebrated with traditional foods, decorations, and prayers."
    },
    {
        name: "Vishu",
        image: "images/vishu.jpg",
        description: "Kerala's traditional New Year, marked by the 'Vishu Kani' sighting, bursting of fireworks, and preparation of special dishes."
    },
    {
        name: "Buddha Purnima",
        image: "images/buddhapurnima.jpg",
        description: "Celebrates the birth, enlightenment, and death of Lord Buddha, observed with prayers, meditation, and Buddhist teachings."
    },
    {
        name: "Kumbh Mela",
        image: "images/kumbhmela.jpg",
        description: "The largest Hindu pilgrimage, held every 12 years at four river-bank pilgrimage sites, marked by mass ritual bathing."
    },
    {
        name: "Maha Navami",
        image: "images/mahanavami.jpg",
        description: "The ninth day of Navratri, celebrated with worship of Goddess Durga, cultural events, and processions, especially in West Bengal."
    }
];

const artStyles = [
    {
        name: "Madhubani",
        image: "images/madhubani.jpg",
        description: "A traditional art form from Bihar, known for its intricate patterns and vibrant colors."
    },
    {
        name: "Warli",
        image: "images/warli.jpg",
        description: "An ancient tribal art from Maharashtra, featuring simplistic and symbolic human figures."
    },
    {
        name: "Pattachitra",
        image: "images/pattachitra.jpg",
        description: "A classical folk painting from Odisha, characterized by rich colors and elaborate designs."
    },
    {
        name: "Kalamkari",
        image: "images/kalamkari.jpg",
        description: "An art style from Andhra Pradesh using natural dyes to create mythological scenes on fabric."
    },
    {
        name: "Phad",
        image: "images/phad.jpg",
        description: "A narrative scroll painting from Rajasthan, illustrating epic tales of deities and warriors."
    },
    {
        name: "Gond",
        image: "images/gond.jpg",
        description: "A tribal art form from Madhya Pradesh, featuring detailed line work to depict flora, fauna, and folk legends."
    },
    {
        name: "Tanjore",
        image: "images/tanjore.jpg",
        description: "A classical South Indian painting style, known for its surface richness and compact composition."
    },
    {
        name: "Miniature",
        image: "images/miniature.jpg",
        description: "A delicate painting style from Rajasthan, known for its intricate details and use of bold colors."
    },
    {
        name: "Pichwai",
        image: "images/pichwai.jpg",
        description: "Traditional paintings from Rajasthan depicting scenes from Lord Krishna's life."
    },
    {
        name: "Bhil",
        image: "images/bhil.jpg",
        description: "A tribal art style from Madhya Pradesh, characterized by dots and vibrant colors."
    },
    {
        name: "Cheriyal Scrolls",
        image: "images/cheriyal.jpg",
        description: "Traditional scroll paintings from Telangana, telling stories of epics and folklore."
    },
    {
        name: "Saura",
        image: "images/saura.jpg",
        description: "A tribal art form from Odisha, depicting daily life activities and the natural world using geometric patterns."
    },
    {
        name: "Kalighat",
        image: "images/kalighat.jpg",
        description: "An art form originating from West Bengal, known for its bold outlines and realistic depictions of deities."
    },
    {
        name: "Rajput",
        image: "images/rajput.jpg",
        description: "Miniature paintings from Rajasthan, illustrating court scenes, legends, and nature."
    },
    {
        name: "Bengal Patachitra",
        image: "images/bengalpata.jpg",
        description: "A traditional scroll painting from West Bengal, often depicting mythological and social themes."
    },
    {
        name: "Bastar",
        image: "images/bastar.jpg",
        description: "An art form from Chhattisgarh, featuring sculptures and metalworks depicting tribal life."
    },
    {
        name: "Manjusha",
        image: "images/manjusha.jpg",
        description: "A traditional folk art from Bihar, using vibrant colors to depict mythological tales."
    },
    {
        name: "Rajasthani Miniature",
        image: "images/rajasthaniminiature.jpg",
        description: "Miniature paintings depicting royal lifestyles, hunting scenes, and folklore."
    },
    {
        name: "Alpana",
        image: "images/alpana.jpg",
        description: "A form of decorative art from Bengal, typically made on the floor using rice paste."
    },
    {
        name: "Chittara",
        image: "images/chittara.jpg",
        description: "A folk art from Karnataka, involving intricate designs using natural colors on walls and floors."
    },
    {
        name: "Mysore Painting",
        image: "images/mysore.jpg",
        description: "A traditional South Indian painting style, known for its elegance and use of natural dyes."
    },
    {
        name: "Nakashi",
        image: "images/nakashi.jpg",
        description: "A scroll painting from Telangana, illustrating scenes from epics like Mahabharata and Ramayana."
    },
    {
        name: "Gujarat Rogan Art",
        image: "images/rogan.jpg",
        description: "A form of cloth painting using thick, brightly colored pastes, typically depicting nature and folklore."
    },
    {
        name: "Kavad",
        image: "images/kavad.jpg",
        description: "A storytelling tradition from Rajasthan using painted wooden boxes to narrate religious tales."
    },
    {
        name: "Lippan Kaam",
        image: "images/lippankaam.jpg",
        description: "A mud-mirror art from Gujarat, featuring geometric patterns and motifs on walls."
    },
    {
        name: "Kerala Mural",
        image: "images/keralamural.jpg",
        description: "Traditional temple art depicting Hindu mythology with bold colors and intricate details."
    },
    {
        name: "Pabuji Ki Phad",
        image: "images/pabuji.jpg",
        description: "Narrative scroll painting depicting the life of the folk deity Pabuji from Rajasthan."
    },
    {
        name: "Thangka",
        image: "images/thangka.jpg",
        description: "A Tibetan Buddhist painting on cotton or silk, often depicting deities and mandalas."
    },
    {
        name: "Kutch Embroidery",
        image: "images/kutchembroidery.jpg",
        description: "A textile art from Gujarat, featuring vibrant colors, intricate patterns, and mirror work."
    },
    {
        name: "Chamba Rumal",
        image: "images/chambarumal.jpg",
        description: "A handkerchief art from Himachal Pradesh, showcasing fine embroidery depicting folklore."
    }
];

const cuisines = [
    {
        name: "Biryani",
        image: "images/biryani.jpg",
        description: "A flavorful rice dish made with aromatic spices, saffron, and a choice of meat, vegetables, or eggs."
    },
    {
        name: "Dosa",
        image: "images/dosa.jpg",
        description: "A crispy, thin pancake made from fermented rice and lentil batter, served with chutney and sambar."
    },
    {
        name: "Butter Chicken",
        image: "images/butter_chicken.jpg",
        description: "A rich and creamy tomato-based curry cooked with tender pieces of chicken."
    },
    {
        name: "Rogan Josh",
        image: "images/rogan-josh.jpg",
        description: "A slow-cooked lamb curry from Kashmir, prepared with aromatic spices and yogurt."
    },
    {
        name: "Samosa",
        image: "images/samosa.jpg",
        description: "A popular snack with a crispy crust, filled with spiced potatoes, peas, and sometimes meat."
    },
    {
        name: "Paneer Tikka",
        image: "images/paneer_tikka.jpg",
        description: "Marinated cubes of paneer cheese grilled with vegetables and spices, often served as a starter."
    },
    {
        name: "Vada Pav",
        image: "images/vada_pav.jpg",
        description: "A popular street food from Mumbai, consisting of a spicy potato fritter sandwiched in a bun."
    },
    {
        name: "Chole Bhature",
        image: "images/chole_bhature.jpg",
        description: "A classic Punjabi dish comprising spicy chickpea curry served with deep-fried bread."
    },
    {
        name: "Hyderabadi Haleem",
        image: "images/haleem.jpg",
        description: "A rich stew made from meat, lentils, and wheat, slow-cooked to a creamy consistency."
    },
    {
        name: "Pani Puri",
        image: "images/pani_puri.jpg",
        description: "A popular street food featuring crispy hollow puris filled with tangy, spicy water and fillings."
    },
    {
        name: "Idli",
        image: "images/idli.jpg",
        description: "Soft, steamed rice cakes typically served with sambar and coconut chutney."
    },
    {
        name: "Pav Bhaji",
        image: "images/pav_bhaji.jpg",
        description: "A spicy mashed vegetable curry served with buttered bread rolls."
    },
    {
        name: "Rajma Chawal",
        image: "images/rajma_chawal.jpg",
        description: "A comforting dish of kidney bean curry served over steamed rice."
    },
    {
        name: "Macher Jhol",
        image: "images/macher_jhol.jpg",
        description: "A traditional Bengali fish curry cooked with mustard oil, turmeric, and green chilies."
    },
    {
        name: "Dhokla",
        image: "images/dhokla.jpg",
        description: "A savory steamed cake made from fermented rice and chickpea batter, originating from Gujarat."
    },
    {
        name: "Goan Fish Curry",
        image: "images/goan_fish_curry.jpg",
        description: "A spicy and tangy curry made with fresh fish, coconut milk, and Goan spices."
    },
    {
        name: "Litti Chokha",
        image: "images/litti_chokha.jpg",
        description: "A traditional Bihari dish consisting of stuffed wheat balls served with mashed spiced vegetables."
    },
    {
        name: "Thali",
        image: "images/thali.jpg",
        description: "A platter with a variety of dishes, offering a wholesome taste of regional cuisine."
    },
    {
        name: "Pesarattu",
        image: "images/pesarattu.jpg",
        description: "A crepe made from green gram (moong dal) batter, typically served with chutney in Andhra Pradesh."
    },
    {
        name: "Sarson ka Saag and Makki di Roti",
        image: "images/sarson_saag.jpg",
        description: "A Punjabi delicacy made with mustard greens and served with cornflour flatbread."
    },
    {
        name: "Appam with Stew",
        image: "images/appam_stew.jpg",
        description: "A soft, fluffy rice pancake served with coconut milk-based vegetable or meat stew."
    },
    {
        name: "Bebinca",
        image: "images/bebinca.jpg",
        description: "A traditional Goan layered dessert made with coconut milk, eggs, and sugar."
    },
    {
        name: "Poha",
        image: "images/poha.jpg",
        description: "A light breakfast dish made from flattened rice, peanuts, and spices."
    },
    {
        name: "Kadhi Pakora",
        image: "images/kadhi_pakora.jpg",
        description: "A tangy yogurt-based curry with gram flour dumplings, served with rice or roti."
    },
    {
        name: "Malai Kofta",
        image: "images/malai_kofta.jpg",
        description: "Fried paneer and potato balls in a creamy tomato-based gravy."
    },
    {
        name: "Puttu and Kadala Curry",
        image: "images/puttu_kadala.jpg",
        description: "A breakfast staple from Kerala, featuring steamed rice cakes with a spicy chickpea curry."
    },
    {
        name: "Mysore Pak",
        image: "images/mysore_pak.jpg",
        description: "A rich, melt-in-your-mouth sweet made from ghee, sugar, and gram flour."
    },
    {
        name: "Aloo Paratha",
        image: "images/aloo_paratha.jpg",
        description: "A popular North Indian breakfast of stuffed flatbread with spicy mashed potatoes."
    },
    {
        name: "Pongal",
        image: "images/pongal.jpg",
        description: "A traditional South Indian rice dish prepared during the harvest festival, made with lentils and spices."
    },
    {
        name: "Kheer",
        image: "images/kheer.jpg",
        description: "A creamy rice pudding flavored with cardamom, saffron, and garnished with nuts."
    }
];

function generateSiteCards() {
    const container = document.getElementById('heritage-sites');

    heritageSites.forEach(site => {
        const siteCard = document.createElement('div');
        siteCard.classList.add('site-card');

        siteCard.innerHTML = `
            <div class="site-image-container">
                <img src="${site.image}" alt="${site.name}" class="site-image">
            </div>
            <div class="site-content">
                <h2 class="site-title">${site.name}</h2>
                <p class="site-description">${site.description}</p>
            </div>
        `;

        container.appendChild(siteCard);
    });
}


generateSiteCards();


window.onload = generateFestivalCards;

function generateFestivalCards() {
    const container = document.getElementById('festivals-container');

    festivals.forEach(festival => {
        const festivalCard = document.createElement('div');
        festivalCard.classList.add('festival-card');


        festivalCard.innerHTML = `
            <div class="festival-image-container">
                <img src="${festival.image}" alt="${festival.name}" class="festival-image">
            </div>
            <div class="festival-content">
                <h2 class="festival-title">${festival.name}</h2>
                <p class="festival-description">${festival.description}</p>
            </div>
        `;

        container.appendChild(festivalCard);
    });
}

function generateArtStyleCards() {
    const container = document.getElementById('art-styles-container');

    artStyles.forEach(art => {
        const artCard = document.createElement('div');
        artCard.classList.add('art-card');

        artCard.innerHTML = `
            <div class="art-image-container">
                <img src="${art.image}" alt="${art.name}" class="art-image">
            </div>
            <div class="art-content">
                <h2 class="art-title">${art.name}</h2>
                <p class="art-description">${art.description}</p>
            </div>
        `;

        container.appendChild(artCard);
    });
}


generateArtStyleCards();


function generateCuisineCards() {
    const container = document.getElementById('cuisine-container');

    cuisines.forEach(cuisine => {
        const cuisineCard = document.createElement('div');
        cuisineCard.classList.add('cuisine-card');

        cuisineCard.innerHTML = `
            <div class="cuisine-image-container">
                <img src="${cuisine.image}" alt="${cuisine.name}" class="cuisine-image">
            </div>
            <div class="cuisine-content">
                <h2 class="cuisine-title">${cuisine.name}</h2>
                <p class="cuisine-description">${cuisine.description}</p>
            </div>
        `;

        container.appendChild(cuisineCard);
    });
}
generateCuisineCards();
