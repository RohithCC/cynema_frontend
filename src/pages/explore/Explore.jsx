import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc", label: "Age Descending" },
    { value: "primary_release_date.asc", label: "Age Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];


const celebraties = {
  page: 1,
  results: [
    {
      "adult": false,
      "backdrop_path": "/qtyucfno7a3j8kfttzm5.jpg",
      "genre_ids": [9],
      "id": 900000,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "Sadhu kokila",
      "overview": "Several generations following Caesar's reign, apes – now the dominant species – live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all he's known about the past and to make choices that will define a future for apes and humans alike.",
      "popularity": 80,
      "poster_path": "/qtyucfno7a3j8kfttzm5.jpg",
      "release_date": "24 March 1966",
      "title": "Sadhu kokila",
      "video": false,
      "vote_average": 6.935,
      "vote_count": 1440
    },
    {
      "adult": false,
      "backdrop_path": "/uu4bvj8knkzhtfps080r.jpg",
      "genre_ids": [1],
      "id": 900001,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "Sudeep",
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
      "popularity": 90,
      "poster_path": "/uu4bvj8knkzhtfps080r.jpg",
      "release_date": "2 September 1973",
      "title": "Sudeep",
      "video": false,
      "vote_average": 7.582,
      "vote_count": 18564
    },
    {
      "adult": false,
      "backdrop_path": "/iy4fuxmsnsh3izz0beqt.jpg",
      "genre_ids": [3],
      "id": 900002,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "Vijay prakash",
      "overview": "The last Gunslinger, Roland Deschain, has been locked in an eternal battle with Walter O'Dim, also known as the Man in Black, determined to prevent him from toppling the Dark Tower, which holds the universe together. With the fate of the worlds at stake, good and evil will collide in the ultimate battle as only Roland can defend the Tower from the Man in Black.",
      "popularity": 75,
      "poster_path": "/iy4fuxmsnsh3izz0beqt.jpg",
      "release_date": "21 February 1976",
      "title": "Vijay prakash",
      "video": false,
      "vote_average": 100000.7,
      "vote_count": 99999999
    },
    {
      "adult": false,
      "backdrop_path": "/nre86tonrixcrckv4ncv.jpg.jpg",
      "genre_ids": [3],
      "id": 900003,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "Sonu neegam",
      "overview": "When the Justice League meets members of the Justice Society of America, they join forces to combat a powerful new threat in the midst of World War II.",
      "popularity": 80,
      "poster_path": "/nre86tonrixcrckv4ncv.jpg",
      "release_date": "30 July 1973",
      "title": "Sonu Neegam",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 153
    },
    {
      "adult": false,
      "backdrop_path": "/fudEG1VUWuOqleXv6NwCExK0VLy.jpg",
      "genre_ids": [3],
      "id": 900004,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "raghu deeksith",
      "overview": "Jonathan Kent and reluctant young sidekick Damian Wayne are burdened with saving the world from impending doom. The two must join forces to rescue their fathers and save the planet by becoming the super heroes they were intended to be.",
      "popularity": 70,
      "poster_path": "/oa12vinwzhfhg69ortbb.jpg",
      "release_date": "11 November 1974",
      "title": "Ragu deekshith",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 162
    },
    {
      "adult": false,
      "backdrop_path": "/oE6bhqqVFyIECtBzqIuvh6JdaB5.jpg",
      "genre_ids": [9],
      "id": 900005,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "Doddana",
      "overview": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called Forky to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy.",
      "popularity": 80,
      "poster_path": "/xuxmsni79p4olmfkcejn.jpg",
      "release_date": "11 November 1949",
      "title": "Doddanna",
      "video": false,
      "vote_average": 7.6,
      "vote_count": 7106
    },
    {
      "adult": false,
      "backdrop_path": "/lcq8dVxeeOqHvvgcte707K0KVx5.jpg",
      "genre_ids": [9],
      "id": 900006,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "chikkana",
      "overview": "Armed with only one word – Tenet – and fighting for the survival of the world, a Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
      "popularity": 78,
      "poster_path": "/ebrdo9ekskwfuc9buf1j.jpg",
      "release_date": "8 October 1986",
      "title": "Chikkanna",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 7198
    },
    {
      "adult": false,
      "backdrop_path": "/u1vpmfedlt3xknegum6t.png",
      "genre_ids": [1],
      "id": 900007,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "Shivraj kumar",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 88,
      "poster_path": "/u1vpmfedlt3xknegum6t.png",
      "release_date": "12 July 1962",
      "title": "Shivraj kumar",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/yash_s6aw8h.jpg",
      "genre_ids": [1],
      "id": 900008,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "yash",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 95,
      "poster_path": "/yash_s6aw8h.jpg",
      "release_date": "8 January 1986",
      "title": "Yash",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/wo9sSrxHK7Eo7APY6BNiPqH0uQs.jpg",
      "genre_ids": [1],
      "id": 900010,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "Diganth",
      "overview": "After proving himself on the field of battle in the French and Indian War, Benjamin Martin wants nothing more to do with such things, preferring the simple life of a farmer. But when his son Gabriel enlists in the army to defend their new nation, America, against the British, Benjamin reluctantly returns to his old life to protect his son.",
      "popularity": 78,
      "poster_path": "/bsohekiuwfvnwf1g791m.jpg",
      "release_date": "28 December 1983",
      "title": "Diganth M",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2440
    },
    {
      "adult": false,
      "backdrop_path": "/suw8eyL3YwE4wfzPQ0lAKyA3LfP.jpg",
      "genre_ids": [4],
      "id": 900013,
      "media_type": "movie",
      "position": "anchor",
      "original_language": "en",
      "original_title": "Akul balaji",
      "overview": "Dominic Toretto and his crew join forces to battle the most skilled assassin and high-performance driver they've ever encountered – his forsaken brother.",
      "popularity": 60,
      "poster_path": "/cxcpnwh5fockax1f9whn.jpg",
      "release_date": "23 February 1979.",
      "title": "Akul balaji",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 4734
    },
    {
      "adult": false,
      "backdrop_path": "/wokh9gbagoxu2vprwyx1.jpg",
      "genre_ids": [3],
      "id": 900014,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "shreya goshal",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 80,
      "poster_path": "/wokh9gbagoxu2vprwyx1.jpg",
      "release_date": "12 March 1984 ",
      "title": "Shreya goshal",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/wokh9gbagoxu2vprwyx1.jpg",
      "genre_ids": [4],
      "id": 900015,
      "media_type": "movie",
      "position": "anchor",
      "original_language": "en",
      "original_title": "Anushree",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 70,
      "poster_path": "/ehtac9cheylg3gwtjzxp.jpg",
      "release_date": "25 January 1988",
      "title": "Anushree ",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/mlt9fvwaitq8o1ratq45.jpg",
      "genre_ids": [4],
      "id": 900016,
      "media_type": "movie",
      "position": "anchor",
      "original_language": "en",
      "original_title": "Srujan Lokesh",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 80,
      "poster_path": "/mlt9fvwaitq8o1ratq45.jpg",
      "release_date": "28 June 1980",
      "title": "Srujan Lokesh ",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/klijsfjfn6lebwyw1d20.jpg",
      "genre_ids": [2],
      "id": 900017,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "milana nagaraj",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81,
      "poster_path": "/klijsfjfn6lebwyw1d20.jpg",
      "release_date": "25 April 1989",
      "title": "milana nagaraj ",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/cqbo8atfrkohiyx7vd4n.jpg",
      "genre_ids": [2],
      "id": 900018,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "sanjana anand",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 55,
      "poster_path": "/cqbo8atfrkohiyx7vd4n.jpg",
      "release_date": "28 March 1995",
      "title": "Sanjana Ananad",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/chpbzonooanclo0nfldo.jpg",
      "genre_ids": [2],
      "id": 900019,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "rachitah ram",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 88,
      "poster_path": "/chpbzonooanclo0nfldo.jpg",
      "release_date": "3 October 1992",
      "title": "Rachita ram",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/efaygyfatcmw91tlfahv.jpg",
      "genre_ids": [1],
      "id": 900020,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "upendra",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 89,
      "poster_path": "/efaygyfatcmw91tlfahv.jpg",
      "release_date": "18 September 1968",
      "title": "upendra",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/q8zqn3hwwgnpzmgkyl3h.jpg",
      "genre_ids": [1],
      "id": 900021,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "ganesh",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 87,
      "poster_path": "/q8zqn3hwwgnpzmgkyl3h.jpg",
      "release_date": "born on 2 July 1980",
      "title": "Ganesh",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/s5mbdtyweqk1ezejsxyl.jpg",
      "genre_ids": [1],
      "id": 900023,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "ramesh arvind",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 90,
      "poster_path": "/s5mbdtyweqk1ezejsxyl.jpg",
      "release_date": "10 September 1964",
      "title": "Ramesh arvind",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/cohje0ntvlh0yeu5sktw.jpg",
      "genre_ids": [9],
      "id": 900029,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "Komal",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 80,
      "poster_path": "/cohje0ntvlh0yeu5sktw.jpg",
      "release_date": "4 July 1973",
      "title": "Komal",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sbiddsc3y5ykrxmzarng.jpg",
      "genre_ids": [9],
      "id": 900030,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "Rangayana raghu",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 83,
      "poster_path": "/sbiddsc3y5ykrxmzarng.jpg",
      "release_date": "17 April 1965",
      "title": "Rangayana raghu",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/anil_kumble_rkwafv.jpg",
      "genre_ids": [7],
      "id": 900031,
      "media_type": "movie",
      "position": "sports",
      "original_language": "en",
      "original_title": "Anil kumble",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 97,
      "poster_path": "/anil_kumble_rkwafv.jpg",
      "release_date": "17 October 1970",
      "title": "Anil Kumble",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rabin_utappa_n9h2py.png",
      "genre_ids": [7],
      "id": 900032,
      "media_type": "movie",
      "position": "sports",
      "original_language": "en",
      "original_title": "Rabin uthappa",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 93,
      "poster_path": "/rabin_utappa_n9h2py.png",
      "release_date": "11 November 1985",
      "title": "Rabin Uthappa",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/shreyanka_patil_bxh4gv.jpg",
      "genre_ids": [7],
      "id": 900033,
      "media_type": "movie",
      "position": "sports",
      "original_language": "en",
      "original_title": "Shreyanka patel",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81,
      "poster_path": "/shreyanka_patil_bxh4gv.jpg",
      "release_date": "31 July 2002",
      "title": "Shreyanka patil",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/varsha_rohit_rndhjr.jpg",
      "genre_ids": [7],
      "id": 900034,
      "media_type": "movie",
      "position": "sports",
      "original_language": "en",
      "original_title": "varsha rohit",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 61,
      "poster_path": "/varsha_rohit_rndhjr.jpg",
      "release_date": "October 10, 1996",
      "title": "varsha rohit",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/veda_krishnamurthy_zetnyf.jpg",
      "genre_ids": [7],
      "id": 900035,
      "media_type": "movie",
      "position": "sports",
      "original_language": "en",
      "original_title": "veda krishna murthy",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81,
      "poster_path": "/veda_krishnamurthy_zetnyf.jpg",
      "release_date": "16 October 1992",
      "title": "veda krishna murthy",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sudhamurthy_ntrfd6.jpg",
      "genre_ids": [5],
      "id": 900036,
      "media_type": "movie",
      "position": "enterprenuer",
      "original_language": "en",
      "original_title": "sudha murthy",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 94,
      "poster_path": "/sudhamurthy_ntrfd6.jpg",
      "release_date": "19 August 1950",
      "title": "Sudha murthy",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sharan_hegde_oql1cn.jpg",
      "genre_ids": [5],
      "id": 900037,
      "media_type": "movie",
      "position": "enterprenuer",
      "original_language": "en",
      "original_title": "sharan hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 71,
      "poster_path": "/sharan_hegde_oql1cn.jpg",
      "release_date": "July 15, 1995",
      "title": "Sharan hegde",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/archana_fcpw4v.jpg",
      "genre_ids": [8],
      "id": 900038,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "archana",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 66,
      "poster_path": "/archana_fcpw4v.jpg",
      "release_date": "",
      "title": "archana",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/Sudhir-Shivaram_vldobm.jpg",
      "genre_ids": [8],
      "id": 900039,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "sudheer",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 75,
      "poster_path": "/Sudhir-Shivaram_vldobm.jpg",
      "release_date": "",
      "title": "Sudheer",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/hemalatha_u2itix.jpg",
      "genre_ids": [8],
      "id": 900040,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "hemlatha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 64,
      "poster_path": "/hemalatha_u2itix.jpg",
      "release_date": "",
      "title": "hemlatha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/jordindian_olhz9a.jpg",
      "genre_ids": [8],
      "id": 900041,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "jordian",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 65,
      "poster_path": "/jordindian_olhz9a.jpg",
      "release_date": "",
      "title": "jordindian",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/kavya_karnatak_yqjppe.jpg",
      "genre_ids": [8],
      "id": 900042,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "kavya",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 63,
      "poster_path": "/kavya_karnatak_yqjppe.jpg",
      "release_date": "",
      "title": "Kavya",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/neha_chathlani_fcaceo.jpg",
      "genre_ids": [8],
      "id": 900043,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "neha chatlani",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 67,
      "poster_path": "/neha_chathlani_fcaceo.jpg",
      "release_date": "",
      "title": "neha chatlani",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ariya_hegde_laq3p5.jpg",
      "genre_ids": [8],
      "id": 900044,
      "media_type": "movie",
      "position": "influencer",
      "original_language": "en",
      "original_title": "aryia hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 56,
      "poster_path": "/ariya_hegde_laq3p5.jpg",
      "release_date": "",
      "title": "ariya hegde",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/nikhil_chinnappa_jkzawa.jpg",
      "genre_ids": [6],
      "id": 900045,
      "media_type": "movie",
      "position": "fitness",
      "original_language": "en",
      "original_title": "nikhil chinappa",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 55,
      "poster_path": "/nikhil_chinnappa_jkzawa.jpg",
      "release_date": "6 June 1973",
      "title": "Nikhil chinappa",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/adithi_prabudeva_ief5ol.jpg",
      "genre_ids": [2],
      "id": 900046,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "adithi prabhudeva",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 82,
      "poster_path": "/adithi_prabudeva_ief5ol.jpg",
      "release_date": "13 January 1994",
      "title": "adhithi prabhudeva",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/advithi_shetty_fegjol.jpg",
      "genre_ids": [2],
      "id": 900047,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "advithi shetty",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 64,
      "poster_path": "/advithi_shetty_fegjol.jpg",
      "release_date": "September 1, 1987",
      "title": "advithi shetty",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/aindritha_ray_vputeg.jpg",
      "genre_ids": [2],
      "id": 900048,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "aindhritha ray",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 78,
      "poster_path": "/aindritha_ray_vputeg.jpg",
      "release_date": "16 April 1985",
      "title": "aindhritha ray",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ajay-rao_mok7mc.jpg", 
      "genre_ids": [1],
      "id": 900049,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "ajay rao",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81,
      "poster_path": "/ajay-rao_mok7mc.jpg",
      "release_date": "24 January 1980",
      "title": "ajay rao",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/amulya_pkz33t.jpg", 
      "genre_ids": [2],
      "id": 900050,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "amulya",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 82,
      "poster_path": "/amulya_pkz33t.jpg",
      "release_date": "14 September 1993",
      "title": "amulya",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/anupama_anandkumar_hjv3az.jpg", 
      "genre_ids": [2],
      "id": 900051,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "anupama hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 74,
      "poster_path": "/anupama_anandkumar_hjv3az.jpg",
      "release_date": "21 March 1991",
      "title": "anupama anand Kumar",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/anuprabhakar_v5f8my.jpg", 
      "genre_ids": [2],
      "id": 900052,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "anu prabhakar",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 85,
      "poster_path": "/anuprabhakar_v5f8my.jpg",
      "release_date": "9 November 1980",
      "title": "anu prabhakar",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rukmini-vasanth_zsrrde.jpg", 
      "genre_ids": [2],
      "id": 900053,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "rukmnin vasath",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 80,
      "poster_path": "/rukmini-vasanth_zsrrde.jpg",
      "release_date": "10 December 1996",
      "title": "rukmini vasanth",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rashmika_mandana_lrw2qx.jpg", 
      "genre_ids": [2],
      "id": 900054,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "rashmika mandanna",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 97,
      "poster_path": "/rashmika_mandana_lrw2qx.jpg",
      "release_date": "1996-04-05",
      "title": "rashmika mandanna",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/pooja_hegde_e8qo3x.jpg", 
      "genre_ids": [2],
      "id": 900055,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "pooja hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 95,
      "poster_path": "/pooja_hegde_e8qo3x.jpg",
      "release_date": "13 October 1990",
      "title": "pooja hegde",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/haripriya_nhpjko.jpg", 
      "genre_ids": [2],
      "id": 900056,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "haripriya",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 91,
      "poster_path": "/haripriya_nhpjko.jpg",
      "release_date": "29 October 1991",
      "title": "Haripriya",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/chaithra-latha_cigrix.jpg", 
      "genre_ids": [2],
      "id": 900057,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "chaithra",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 75,
      "poster_path": "/chaithra-latha_cigrix.jpg",
      "release_date": " 23 July 1995",
      "title": "chaithra latha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sapthami_gowda_nbqgg2.jpg", 
      "genre_ids": [2],
      "id": 900058,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "sapthami gowda",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 83,
      "poster_path": "/sapthami_gowda_nbqgg2.jpg",
      "release_date": "8 June 1996",
      "title": "sapthami gowda",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/namratha_gowda_gawinl.jpg", 
      "genre_ids": [2],
      "id": 900059,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "namratha gowda",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 79,
      "poster_path": "/namratha_gowda_gawinl.jpg",
      "release_date": "15 April 1993",
      "title": "Namratha gowda",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/samyuktha_hegde_vkvrie.jpg", 
      "genre_ids": [2],
      "id": 900060,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "samyuktha hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 77.9,
      "poster_path": "/samyuktha_hegde_vkvrie.jpg",
      "release_date": "17 July 1998",
      "title": "Samyuktha hegde",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/disha_madana_bx5vg3.jpg", 
      "genre_ids": [2],
      "id": 900061,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "disha mandana",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 74.7,
      "poster_path": "/disha_madana_bx5vg3.jpg",
      "release_date": "9 March 1992",
      "title": "Disha mandana",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/meghna_raj_hw6gdw.jpg", 
      "genre_ids": [2],
      "id": 900062,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "megna raj",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81.9,
      "poster_path": "/meghna_raj_hw6gdw.jpg",
      "release_date": "3 May 1990",
      "title": "Meghna Raj",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sudharani_pbxqwv.jpg", 
      "genre_ids": [2],
      "id": 900063,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "sudharani",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 83.5,
      "poster_path": "/sudharani_pbxqwv.jpg",
      "release_date": "14 August 1973",
      "title": "sudharani",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/harshika_poornachha_bpgtgu.jpg", 
      "genre_ids": [2],
      "id": 900064,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "harshika poornaccha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 76.4,
      "poster_path": "/harshika_poornachha_bpgtgu.jpg",
      "release_date": "1 May 1990",
      "title": "harshika pornaccha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/shwtha_changappa_s3djus.jpg", 
      "genre_ids": [2],
      "id": 900065,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "shwetha changappa",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81.7,
      "poster_path": "/shwtha_changappa_s3djus.jpg",
      "release_date": "9 February 1987",
      "title": "Shwetha changappa",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/bhavan_rao_tiwwqf.jpg", 
      "genre_ids": [2],
      "id": 900066,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "bavana rao",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 66.9,
      "poster_path": "/bhavan_rao_tiwwqf.jpg",
      "release_date": "6 June 1989",
      "title": "bavana rao",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ranjani_ragavan_ac9uk8.jpg", 
      "genre_ids": [2],
      "id": 900067,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "ranjani ragavan",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 76.9,
      "poster_path": "/ranjani_ragavan_ac9uk8.jpg",
      "release_date": "29 March 1994",
      "title": "ranjani ragavan",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/shvithi_shetty_zxlrj8.jpg", 
      "genre_ids": [2],
      "id": 900068,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "ashvitha shetty",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 66.7,
      "poster_path": "/shvithi_shetty_zxlrj8.jpg",
      "release_date": "2016-01-13",
      "title": "Ashvitha shetty",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/shwetha_srivatsava_uzo2jx.jpg", 
      "genre_ids": [2],
      "id": 900069,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "shwetha shreewatsava",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 71.3,
      "poster_path": "/shwetha_srivatsava_uzo2jx.jpg",
      "release_date": "4 September 1986",
      "title": "Shwetha srivatsava",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/thara_anuradhar_npcfql.jpg", 
      "genre_ids": [2],
      "id": 900070,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "anuradha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 81.9,
      "poster_path": "/thara_anuradhar_npcfql.jpg",
      "release_date": "4 March 1973",
      "title": "thara",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/shruthi_krishna_x234fx.jpg", 
      "genre_ids": [2],
      "id": 900071,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "shruthi",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 84.7,
      "poster_path": "/shruthi_krishna_x234fx.jpg",
      "release_date": "18 September 1975",
      "title": "shruthi",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ragini_a7cxx5.jpg", 
      "genre_ids": [2],
      "id": 900072,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "ranjani",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 74.6,
      "poster_path": "/ragini_a7cxx5.jpg",
      "release_date": "9 December 1987",
      "title": "ragini",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/thanisha_kuppanada_gvgcka.jpg", 
      "genre_ids": [2],
      "id": 900073,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "thanisha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 71.8,
      "poster_path": "/thanisha_kuppanada_gvgcka.jpg",
      "release_date": "August 10, 1990",
      "title": "thanisha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/niveditah_gowda_zojw4d.jpg", 
      "genre_ids": [2],
      "id": 900074,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "niveditha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 64.6,
      "poster_path": "/niveditah_gowda_zojw4d.jpg",
      "release_date": "12 May 1998",
      "title": "niveditha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/anuratdha_bhat_a18nxu.jpg", 
      "genre_ids": [3],
      "id": 900075,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "anuradha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 77.5,
      "poster_path": "/anuratdha_bhat_a18nxu.jpg",
      "release_date": "july 23",
      "title": "anuradha bhat",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/darling_krishna_aavf1x.jpg", 
      "genre_ids": [1],
      "id": 900076,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "darling krishan",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 83.6,
      "poster_path": "/darling_krishna_aavf1x.jpg",
      "release_date": "12 June 1985",
      "title": "darling Krishna",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rishab_shetty_xclwgj.jpg", 
      "genre_ids": [1],
      "id": 900077,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "rishab shetty",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 94.5,
      "poster_path": "/rishab_shetty_xclwgj.jpg",
      "release_date": "7 July 1983",
      "title": "Rishab shetty",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rakshith_shetty_czimab.jpg", 
      "genre_ids": [1],
      "id": 900078,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "rakshit",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 94.9,
      "poster_path": "/rakshith_shetty_czimab.jpg",
      "release_date": "6 June 1983",
      "title": "Rakshith shetty",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/dhruva_sarja_lyabvi.jpg", 
      "genre_ids": [1],
      "id": 900079,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "dhruva",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 90.3,
      "poster_path": "/dhruva_sarja_lyabvi.jpg",
      "release_date": "6 October 1988",
      "title": "Dhruva sarja",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/vijay_ragvendrta_x8p0g8.jpg", 
      "genre_ids": [1],
      "id": 900080,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "vijay ragvendra",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 89.9,
      "poster_path": "/vijay_ragvendrta_x8p0g8.jpg",
      "release_date": "26 May 1979",
      "title": "Vijay Ragvendra",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sri_murali_tuujru.jpg", 
      "genre_ids": [1],
      "id": 900081,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "sri murali",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 89.8,
      "poster_path": "/sri_murali_tuujru.jpg",
      "release_date": "17 December 1981",
      "title": "Sri murali",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/rajvendra_rajkumar_ekzwef.jpg", 
      "genre_ids": [1],
      "id": 900082,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "ragavendra rajkumar",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 85.8,
      "poster_path": "/rajvendra_rajkumar_ekzwef.jpg",
      "release_date": "August 15, 1965",
      "title": "ragavendra rajkumar",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/indrajith_lankesh_iv1dln.jpg", 
      "genre_ids": [1],
      "id": 900083,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "indrajith shetty",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 77.8,
      "poster_path": "/indrajith_lankesh_iv1dln.jpg",
      "release_date": "22 September 1976",
      "title": "indrajith lankesh",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ravichandran_bsfrx1.jpg", 
      "genre_ids": [1],
      "id": 900084,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "ravichandran",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 90.4,
      "poster_path": "/ravichandran_bsfrx1.jpg",
      "release_date": "30 May 1961",
      "title": "Ravichandran",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/kirik_keerthy_nftkok.jpg", 
      "genre_ids": [4],
      "id": 900085,
      "media_type": "movie",
      "position": "anchor",
      "original_language": "en",
      "original_title": "kirik keerthy",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 78.9,
      "poster_path": "/kirik_keerthy_nftkok.jpg",
      "release_date": "January 1, 1988",
      "title": "kirik keerthy",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/vicky_pedia_dhrhxj.jpg", 
      "genre_ids": [9],
      "id": 900086,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "vicky pedia",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 65.8,
      "poster_path": "/vicky_pedia_dhrhxj.jpg",
      "release_date": "",
      "title": "vicky pedia",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/Rajesh_krishna_ydxcpm.jpg", 
      "genre_ids": [3],
      "id": 900087,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "rajesh krishna",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 89.8,
      "poster_path": "/Rajesh_krishna_ydxcpm.jpg",
      "release_date": "June 3, 1973",
      "title": "Rajesh krishna",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/priyanka_upendra_bllqj2.jpg", 
      "genre_ids": [2],
      "id": 900088,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "priyanka upendra",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 86.3,
      "poster_path": "/priyanka_upendra_bllqj2.jpg",
      "release_date": "November 12, 1977",
      "title": "priyanka upendra",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/arjun_janaya_khcchp.jpg", 
      "genre_ids": [3],
      "id": 900089,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "arjun janya",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 85.3,
      "poster_path": "/arjun_janaya_khcchp.jpg",
      "release_date": "May 13, 1980",
      "title": "arjun janya",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/Sanjith_Hegde__goq5xz.jpg", 
      "genre_ids": [3],
      "id": 900090,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "sanjeeth hegde",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 84.4,
      "poster_path": "/Sanjith_Hegde__goq5xz.jpg",
      "release_date": "3 October 1998",
      "title": "Sanjeeth hegde",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/divya_ramachandra_fg1giv.jpg", 
      "genre_ids": [3],
      "id": 900091,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "divya ramachandra",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 66.87,
      "poster_path": "/divya_ramachandra_fg1giv.jpg",
      "release_date": "",
      "title": "Divya ramachandra",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ananya_bhat_oxqxes.jpg", 
      "genre_ids": [3],
      "id": 900092,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "ananya bhat",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 79.21,
      "poster_path": "/ananya_bhat_oxqxes.jpg",
      "release_date": "1992",
      "title": "ananya bhat",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/vasita_simha_gpx7xs.jpg", 
      "genre_ids": [1],
      "id": 900093,
      "media_type": "movie",
      "position": "actor",
      "original_language": "en",
      "original_title": "vashista simha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 83.23,
      "poster_path": "/vasita_simha_gpx7xs.jpg",
      "release_date": "19 October 1988",
      "title": "Vasista simha",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/vasita_simha_gpx7xs.jpg", 
      "genre_ids": [9],
      "id": 900094,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "danish seit",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 90.12,
      "poster_path": "/Sanjith_Hegde__goq5xz.jpg",
      "release_date": "1 July 1988",
      "title": "Danish seit",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/Sanjith_Hegde__goq5xz.jpg", 
      "genre_ids": [9],
      "id": 900095,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "raj b shetty",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 88.84,
      "poster_path": "/Sanjith_Hegde__goq5xz.jpg",
      "release_date": "5 July 1987",
      "title": "Raj b shetty",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/Sanjith_Hegde__goq5xz.jpg", 
      "genre_ids": [9],
      "id": 900096,
      "media_type": "movie",
      "position": "comedy_actor",
      "original_language": "en",
      "original_title": "varthur santhosh",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 66.84,
      "poster_path": "/Sanjith_Hegde__goq5xz.jpg",
      "release_date": "march 12",
      "title": "varthur santhosh",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/sangeetha_sringeri_dy5kzs.jpg", 
      "genre_ids": [2],
      "id": 900097,
      "media_type": "movie",
      "position": "actress",
      "original_language": "en",
      "original_title": "sangeetha",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 87.84,
      "poster_path": "/sangeetha_sringeri_dy5kzs.jpg",
      "release_date": "13 May 1996",
      "title": "sangeetha sringeri",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    {
      "adult": false,
      "backdrop_path": "/ganesh_karanth_up0bhb.jpg", 
      "genre_ids": [3],
      "id": 900098,
      "media_type": "movie",
      "position": "singer",
      "original_language": "en",
      "original_title": "ganesh karanth",
      "overview": "An American Ambassador is killed during an attack at a U.S. compound in Libya as a security team struggles to make sense out of the chaos.",
      "popularity": 77.84,
      "poster_path": "/ganesh_karanth_up0bhb.jpg",
      "release_date": "",
      "title": "Ganesh Karanth",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2427
    },
    








  ],
  total_pages: 1000,
  total_results: 20000
};

const genresData1 = {
  "genres": [
    {
      "id": 1,
      "name": "actor"
    },
    {
      "id": 2,
      "name": "actress"
    },
    {
      "id": 3,
      "name": "singer"
    },
    {
      "id": 4,
      "name": "anchor"
    },
    {
      "id": 5,
      "name": "enterprenuer"
    },
    {
      "id": 6,
      "name": "fitness"
    },
    {
      "id": 7,
      "name": "sports"
    },
    {
      "id": 8,
      "name": "influencer"
    },
    {
      "id": 9,
      "name": "comedy_actor"
    }



  ]
}



const Explore = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const [genre, setGenre] = useState(null);
  const [sortby, setSortby] = useState(null);
  const { mediaType } = useParams();
  const [filters, setFilters] = useState({});

  // Initialize the data with JSON data instead of fetching from API
  const fetchInitialData = () => {
      setLoading(true);
      setData(celebraties);
      setPageNum((prev) => prev + 1);
      setLoading(false);
  };

  const fetchNextPageData = () => {
      // For simplicity, we'll just duplicate the initial data
      if (celebraties?.results) {
          setData({
              ...celebraties,
              results: [...celebraties.results, ...celebraties.results],
          });
      } else {
          setData(celebraties);
      }
      setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
      setFilters({});
      setData(null);
      setPageNum(1);
      setSortby(null);
      setGenre(null);
      fetchInitialData();
  }, [mediaType]);

  const onChange = (selectedItems, action) => {
      if (action.name === 'sortby') {
          setSortby(selectedItems);
          if (action.action !== 'clear') {
              const sortOption = selectedItems.value;

              let sortKey, sortOrder;
              switch (sortOption) {
                  case 'popularity.desc':
                      sortKey = 'popularity';
                      sortOrder = 'desc';
                      break;
                  case 'popularity.asc':
                      sortKey = 'popularity';
                      sortOrder = 'asc';
                      break;
                  case 'vote_average.desc':
                      sortKey = 'vote_average';
                      sortOrder = 'desc';
                      break;
                  case 'vote_average.asc':
                      sortKey = 'vote_average';
                      sortOrder = 'asc';
                      break;
                  case 'primary_release_date.desc':
                      sortKey = 'release_date';
                      sortOrder = 'desc';
                      break;
                  case 'primary_release_date.asc':
                      sortKey = 'release_date';
                      sortOrder = 'asc';
                      break;
                  case 'original_title.asc':
                      sortKey = 'original_title';
                      sortOrder = 'asc';
                      break;
                  default:
                      return;
              }

              const sortedResults = [...celebraties.results].sort((a, b) => {
                  if (sortKey === 'release_date') {
                      return sortOrder === 'asc'
                          ? new Date(a[sortKey]) - new Date(b[sortKey])
                          : new Date(b[sortKey]) - new Date(a[sortKey]);
                  } else {
                      if (sortOrder === 'asc') {
                          return a[sortKey] > b[sortKey] ? 1 : -1;
                      } else {
                          return a[sortKey] < b[sortKey] ? 1 : -1;
                      }
                  }
              });

              setData({ ...celebraties, results: sortedResults });
          } else {
              const { sort_by, ...rest } = filters;
              setFilters(rest);
              setData(celebraties);
          }
      }

      if (action.name === 'genres') {
        setGenre(selectedItems);
        if (action.action !== 'clear') {
            // Extract genre IDs from selectedItems
            let genreIds = selectedItems.map((g) => g.id);
            
            // Update filters state
            setFilters({ ...filters, with_genres: genreIds });

            // Filter data based on genre IDs
            const filteredResults = celebraties.results.filter(movie =>
                movie.genre_ids.some(id => genreIds.includes(id))
            );

            // Update data state with filtered results
            setData({ ...celebraties, results: filteredResults });
        } else {
            // Clear genre filter
            const { with_genres, ...rest } = filters;
            setFilters(rest);

            // Reset data to original state
            setData(celebraties);
        }
    }

      setPageNum(1);
  };

  return (
      <div className="explorePage">
          <ContentWrapper>
              <div className="pageHeader">
                  <div className="pageTitle">
                      Explore Celebrities
                  </div>
                  <div className="filters">
                      <Select
                          isMulti
                          name="genres"
                          value={genre}
                          closeMenuOnSelect={false}
                          options={genresData1?.genres}
                          getOptionLabel={(option) => option.name}
                          getOptionValue={(option) => option.id}
                          onChange={onChange}
                          placeholder="Select genres"
                          className="react-select-container genresDD"
                          classNamePrefix="react-select"
                      />
                      {/*      <Select
                          name="sortby"
                          value={sortby}
                          options={sortbyData}
                          onChange={onChange}
                          isClearable={true}
                          placeholder="Sort by"
                          className="react-select-container sortbyDD"
                          classNamePrefix="react-select"
                      />*/}
                  

                  </div>
              </div>
              {loading && <Spinner initial={true} />}
              {!loading && (
                  <>
                      {data?.results?.length > 0 ? (
                          <InfiniteScroll
                              className="content"
                              dataLength={data?.results?.length || 0}
                              next={fetchNextPageData}
                              hasMore={pageNum <= data?.total_pages}
                              loader={<Spinner />}
                          >
                              {data?.results.map((item, index) => {
                                  if (item.media_type === "person") return null;
                                  return (
                                      <MovieCard
                                          key={index}
                                          data={item}
                                          mediaType={mediaType}
                                      />
                                  );
                              })}
                          </InfiniteScroll>
                      ) : (
                          <span className="resultNotFound">
                              Sorry, Results not found!
                          </span>
                      )}
                  </>
              )}
          </ContentWrapper>
      </div>
  );
};

export default Explore;
