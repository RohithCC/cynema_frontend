import React from "react";
import { useParams } from "react-router-dom";
import "./style.scss";

import DetailsBanner1 from "./detailsBanner/DetailsBanner1";
import Cast from "./cast/Cast";
import VideosSection from "./videosSection/VideosSection";
import Similar from "./carousels/Similar";
import Recommendation from "./carousels/Recommendation";

import credits1 from './credits.json'; // Import credits JSON data
import test from '../details/detailsBanner/data.json'; // Import data for details banner

const Cart = () => {
    const { mediaType, id, position } = useParams();

    // Local data for videos (trailers)
    const trailers = [
        {
            "id": 900001,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Trailer #2 RED BAND (2016) - Paramount Pictures",
            "key": "Cx-S04vHzpI",
            "published_at": "2015-11-04T01:00:32.000Z"
        },
        {
            "id": 900007,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "Lz8tF8g38pI",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {
            "id": 900008,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "Vh2a5g_O5fY",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {
            "id": 900010,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "4ax7RXNtXrI",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {
            "id": 900020,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "cpJVeeJvMEY",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {
            "id": 900021,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "vP68AmvlamQ",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {
            "id": 900023,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "Jwxb2siHKwk",
            "published_at": "2015-07-28T23:29:22.000Z"
        },
        {    "id": 900049,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "wBWu1T51b3A",
            "published_at": "2015-07-28T23:29:22.000Z"},
            {
     "id": 900076,
            "iso_639_1": "en",
            "iso_3166_1": "US",
            "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
            "key": "mgcHLBdT7wg",
            "published_at": "2015-07-28T23:29:22.000Z"
            },
      {
                "id": 900077,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "Frp0zC4643U",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900078,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "f7GmtYBR6Tk",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {               
                "id": 900079,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "UTydRtQNX9o",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {               
                "id": 900080,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "5ts_c9kNJmU",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {   
                "id": 900081,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "lkM-lW09u6I",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {   
                "id": 900082,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "cwsLEbSpixs",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {   
                "id": 900083,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "SlaSOe7iCWI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {   
                "id": 900084,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "0CjVH5Qw-GU",
                "published_at": "2015-07-28T23:29:22.000Z"
            }, 
            {
                "id": 900093,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "buKOl_cqgIM",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900017,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "KcYEXfzmUkI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900019,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "BB7eMCO417U",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900046,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "cyKEgJS4PAc",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900047,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "GYxu4UY7ivE",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900048,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "DxdG8QuS1KI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900050,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "0UlDIqezWv4",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900051,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "pOuhcDzNd8g",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900052,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "7ohR7XMHJ8Q",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900054,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "NueQzdKHrGE",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900055,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "kiYk70-j9h8",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900056,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "3BMzNg5QNjo",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900057,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "cK43-eR3QSA",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900058,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "bTH4_pIkm1Y",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900059,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "QqtEIhZRpPc",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900060,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "ZBXKQicJJgQ",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900061,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "eMSM94CSb8M",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900062,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "_jCYiEvm1xY",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900064,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "O0hfr3kR-z0",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900065,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "uMEYAr2zZJs",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900066,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "Nzkj0Y85wwU",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900067,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "f9fbSJMoIgs",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900068,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "IkM0uy3a4vI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900069,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "L_Nk44KXSx8",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900070,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "Y3kJYfOhELM",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900071,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "XpzSl50jdC4",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900072,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "0pO0YzSDfHc",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900073,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "anDMb8ImNyg",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900074,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "1QrDJvXk5Bw",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900088,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "L1ykWF-NjAY",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900097,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "kesZNiXdGYE",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900031,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "KMf9ErwIuRc",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900032,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "kBfx8ZYgxs0",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900033,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "T4GrssVdjX0",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900034,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "SI96GL7bzpQ",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900035,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "QMJMxfbcN0g",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900036,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "ag0j7kgIdk8",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900037,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "9kaHv0V-o1U",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900000,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "srSuAFyseNs",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900005,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "FvT295WA_zI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900006,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "sQfTNOU58oI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900029,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "QF0UzEX01ys",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900030,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "bXKg8dWDcHA",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900086,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "zG3zKh_XDaI",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900002,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "cLPq6VD4Vfk",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900003,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "rwV412_Bfm8",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
                "id": 900004,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "99138T2WeOQ",
                "published_at": "2015-07-28T23:29:22.000Z"
            },
            {
              "id": 900014,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "Y5u63jWdllA",
                "published_at": "2015-07-28T23:29:22.000Z"  
            },
            {
                "id": 900075,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "Lls5F79_13A",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900087,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "adG9WwBZT0M",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900089,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "OGTRuhKUf3k",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900090,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "oFRsNioxKNw",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900091,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "XeIPwqccgnE",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900092,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "T7xe5M_NksU",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900098,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "Yx70Ab6-ovE",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900013,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "MAZNjuseakg",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900015,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "LF0WNAjKGj8",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900016,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "d7D17cHl8vk",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900085,
                  "iso_639_1": "en",
                  "iso_3166_1": "US",
                  "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                  "key": "GhK1igNOiY4",
                  "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900099,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "EmyJ56-THx4",
                "published_at": "2015-07-28T23:29:22.000Z"  
              },
              {
                "id": 900100,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "wevcfVJjvBE",
                "published_at": "2015-07-28T23:29:22.000Z"  
              },    
              {
                "id": 900094,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "KxBTALTQDyk",
                "published_at": "2015-07-28T23:29:22.000Z"  
              },        
              {
                "id": 900096,
                "iso_639_1": "en",
                "iso_3166_1": "US",
                "name": "13 Hours: The Secret Soldiers of Benghazi - Official Trailer",
                "key": "OY0X4fNZFQo",
                "published_at": "2015-07-28T23:29:22.000Z"  
              }
             
              
              
            
            
            
            
            
            
            
            
            
         
        
    ];
    console.log(credits1);


    
    var filteredCast = credits1?.cast
    ?.filter(castMember => {
    console.log(castMember.id); // For debugging: log each cast member's id
    return castMember.position === position && castMember.id !== id;
    })
    .slice(0, 4);

    const excludedId = id; // Define the id you want to exclude
    
    const specifiedCastMember = credits1?.cast?.find(castMember => castMember.id === id);
    const specifiedPopularity = specifiedCastMember ? specifiedCastMember.popularity : 0;
    
     filteredCast = credits1?.cast
      ?.filter(castMember => {
        // Exclude the cast member with the specified id
        if (castMember.id === excludedId) {
          return false;
        }
        // Filter by position and popularity
        if (castMember.position === position) {
          return castMember.popularity > specifiedPopularity;
        }
        return false;
      })
      .slice(0, 4);
    
    return (
        <div>
            {console.log(trailers)}
            <DetailsBanner1 video={trailers} crew={test} />


            {/*  <Cast data={filteredCast} loading={false} />   */}

       
        
         
           
        </div>
    );
};

export default Cart;
