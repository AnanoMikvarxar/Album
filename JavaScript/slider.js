// Data
let SliderData = [
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/238531646_4267243263312737_3354920925138702093_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PqCFO0HF8tYAX8Bo8TE&_nc_ht=scontent.ftbs6-2.fna&oh=8664b5ce2a9b2d9838915eac289b2bd5&oe=614FCA65"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/240497667_398238901653019_191313978295284135_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=3czN_Y8UbUsAX-hlLm8&_nc_ht=scontent.ftbs6-2.fna&oh=e926514075868ec3c092d36aed9f04f4&oe=614F4DF0"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/236928148_368277911673034_6521642763333723072_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=HCLWS4F4Q4EAX9WCaNR&tn=-yzuKrfPuRryWAQ7&_nc_ht=scontent.ftbs6-2.fna&oh=f96e1752b96e64e44948a82e53c3db8e&oe=61504CE3"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/240600818_971986536978377_8886781940329985505_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=9lokYvT6h6YAX_c7ZUa&_nc_ht=scontent.ftbs6-2.fna&oh=5dce74c4e7a304eb81346dad26798988&oe=614E60E9"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/238863495_674715463931050_5373069393068860939_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=LtvF8Y_FVO0AX8t3SKW&_nc_ht=scontent.ftbs6-2.fna&oh=6bc2424ce6e0616a3e757d1c06f4a175&oe=61507490"
    } ,
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/235783698_175050148046665_2171628773768776886_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=7r39VEFE9VkAX83LviD&_nc_ht=scontent.ftbs6-1.fna&oh=1c0f061605b69d63fcb9d0966e9841b6&oe=61502EE5"
    } ,
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/237235005_844796116241051_3702938861212449274_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=dZ-TlCB_yLAAX_aqct2&_nc_ht=scontent.ftbs6-1.fna&oh=621e0bbbb5451b0009682c39c395c695&oe=614DC51A"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/236450292_1291488807937423_2184494515393336246_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=w3z6RHWPje0AX_iOGvU&_nc_ht=scontent.ftbs6-2.fna&oh=52c343357d87f0ceb8407432a1fd54fa&oe=614CB712"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/240551612_339390961254791_5565766261087991039_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=LbhkHt_7HT0AX8t06Em&_nc_ht=scontent.ftbs6-2.fna&oh=c88b3409d97512f16e1af233ac49fe2a&oe=614E1111"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/235304557_207257548110655_807974700096262188_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=k2GG7OgA1PsAX808SXr&tn=-yzuKrfPuRryWAQ7&_nc_ht=scontent.ftbs6-2.fna&oh=a9eb03a0b3fbeb3b0205b257cadf48bc&oe=614F719B"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/240156730_375753054065401_2774050088973375458_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=12E0hXRNGxQAX_y3AzE&_nc_ht=scontent.ftbs6-2.fna&oh=046cc2587817c59fd50953a5297aa7bc&oe=614E5B69"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/236501313_220794226729604_5885800555506086322_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=vuq3IKh-K70AX92ribU&_nc_ht=scontent.ftbs6-2.fna&oh=5fa66f7af583649f37781f77a178a596&oe=614FF834 "
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/236330289_970100333768595_2567616538218765067_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KrC7vkYQ9DMAX8DfMU5&_nc_ht=scontent.ftbs6-2.fna&oh=47fce87e79cfbbb419694c613a6b839c&oe=614D37C7"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/231991000_575444533629355_8326048829133340157_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=iJkgBppMNjwAX-i9jKU&_nc_ht=scontent.ftbs6-2.fna&oh=f023d1cc0169d0e08bff87d8dae81351&oe=614CBF5B"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/228843617_569472510717126_7608760859174519003_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Yg3McYzpfJsAX9oLEpk&_nc_ht=scontent.ftbs6-2.fna&oh=a0141d3d00700a9a71250bae9b4ad016&oe=614F44DA"
    } ,
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/227617578_1193241427815754_9163811300287776401_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Q7Mw6uTU7hgAX9vl3yZ&_nc_ht=scontent.ftbs6-1.fna&oh=5ed70d36bf05625124262881fcc517e8&oe=615069F7"
    } ,
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/218416835_211385020929722_2818202650254599979_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DGWiS-X3EgcAX8LkEYP&_nc_ht=scontent.ftbs6-1.fna&oh=76bc03f87b697bc6929faad3bcccc4ef&oe=614FED17"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/218111183_434396544281581_1433397111461353511_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Yu0PLNAvm60AX9LkqqU&_nc_ht=scontent.ftbs6-2.fna&oh=dbf759ae5ca28facc2be542a45aa94d4&oe=614D42F9"
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/222545801_222043543155103_2062702711681852062_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UuhnzB7yBrAAX9rAunF&_nc_ht=scontent.ftbs6-2.fna&oh=b0efde9de0b634765786cc7f317c3487&oe=614E196E "
    } ,
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/230141384_3075735776003862_517804701901250287_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=PyvS-IeQZa0AX9XirUD&_nc_oc=AQkLdkVShLqnA7y2Z7excw6w2Wx5MhP0V_sutcF-TQ-EMO38dTTzQo-W1dkoNSsiDZQ&_nc_ht=scontent.ftbs6-2.fna&oh=d9f0cc97b4cebbe805cb6b96b1bcdbe6&oe=6150504F"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/205695104_201026771902921_1569276082814530626_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=u-kPwSq6cXAAX_6TvOW&_nc_ht=scontent.ftbs6-2.fna&oh=0bcd626d4b597f3132cf804720172498&oe=614D4530"
    },
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/198973197_1227593651008372_1908796146987398691_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=0qe4DxN3INIAX_LzdHi&_nc_ht=scontent.ftbs6-1.fna&oh=38fc9584a6fceb494b864e3645d88ab2&oe=614EF392"
    },
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/186472371_461036371654355_7266649781627949565_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=z2pHXhkyOSoAX_vWswv&_nc_ht=scontent.ftbs6-1.fna&oh=e2f12ea0c8ce7e71fcc1621583c0b917&oe=61504A38"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/186558479_1916356601874676_4143185020409050006_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=UElzVZei3ngAX9GbiDG&_nc_ht=scontent.ftbs6-2.fna&oh=df572eaa59fa88beef646e22e0e5ea52&oe=614E904F "
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/160574153_825419028317068_1265959540146321753_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=h3tdAMzhvxQAX_IdyKb&_nc_ht=scontent.ftbs6-2.fna&oh=f996d25602cc229ecf59fc0590bda731&oe=614D8284"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/159883778_454687685775441_3589882106052188608_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kstQ04o4t7kAX8tDiI-&_nc_ht=scontent.ftbs6-2.fna&oh=e1fa115ecc5a296d73d6cce155d5e3e3&oe=615005B8 "
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/101667756_3221366444574244_1147768853816672256_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=GFHS7sjJnh4AX_u8gRQ&_nc_ht=scontent.ftbs6-1.fna&oh=1c08db23234ca2037135060cdc3dd371&oe=614F2842"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/158936800_237492071409245_8197972318620912165_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kslHVu9SJzUAX_Qfl8a&_nc_ht=scontent.ftbs6-2.fna&oh=ceb2565a09c9139dd1873be81c22ea26&oe=614CD3E0"
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/159013563_4267614849933544_8885096380758249568_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=GRsB42egf44AX90wOHL&_nc_ht=scontent.ftbs6-1.fna&oh=bf653ed3bd2454b07589bd9fd615c7bb&oe=615080DE"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/159248017_2810511389214834_6636383460496963873_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bIdoUkWoL94AX9vmyuO&tn=-yzuKrfPuRryWAQ7&_nc_ht=scontent.ftbs6-2.fna&oh=ef904b7c33c73358d1f4a0aa420e012f&oe=614DD17F"
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/159318527_2839883532921619_854629147858693013_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=QBVG2K6RevYAX-M9Kgt&_nc_ht=scontent.ftbs6-1.fna&oh=ee7460458f139f346ef34577a1510f2e&oe=61503AFC"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/159217928_5219732994766036_4746102992489265261_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8fLXVFKdVGUAX9WTUjx&_nc_ht=scontent.ftbs6-2.fna&oh=e336d25c58ac1fcfd5505952ee5159bf&oe=614DB87F "
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/158886835_444424216798270_5637085543332309567_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=B67rYBHgRGgAX8tjQXK&_nc_ht=scontent.ftbs6-1.fna&oh=3db47715f5ff4fb1babd1381bb607b3c&oe=614D3DBD"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/158383618_831750744072085_8946648317641957671_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=VbUrfs1z17QAX-0txmI&_nc_ht=scontent.ftbs6-2.fna&oh=dfcfd9fe650dc7b352c3146baad29b81&oe=614F5030"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/158033797_187424792832293_345854600618855035_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=cWfkE7TeYWQAX9haDpy&_nc_ht=scontent.ftbs6-2.fna&oh=042d8983e226ab5d1d1f8caf6e7f80c3&oe=614E1F1F"
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/158730209_336169307824895_853217922462583533_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kbFYW3GmGbgAX9Jfzku&tn=-yzuKrfPuRryWAQ7&_nc_ht=scontent.ftbs6-1.fna&oh=c40ae765a0da32c3283b5952056b9d23&oe=614FAE77"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/s1080x2048/157935528_475569793823172_4271027274756798743_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=bWW1ph-6164AX8NWU2R&_nc_ht=scontent.ftbs6-2.fna&oh=98cfffa462b3f80147c786fda8cd237d&oe=614CD4E5"
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/158263227_121131733286698_7741564460856056409_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=kgCWU7OXY88AX9_cefd&_nc_ht=scontent.ftbs6-1.fna&oh=31fda2df58aad29e0f7a3881a3beae30&oe=614E56EE"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/158059584_3813172935427774_5550640798846434953_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=O_Ji0goH3r8AX82o2kJ&_nc_ht=scontent.ftbs6-2.fna&oh=db03a375e9793724839f242af9664612&oe=614F6B7E"
    },
    {
        src: " https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/157846991_925222891384621_1307709700677445063_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=KmB3aWRH2xQAX9gaJT-&_nc_ht=scontent.ftbs6-1.fna&oh=efd107759221bacd8e5095569b7f16c5&oe=614F9C7D"
    },
    {
        src: " https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/157779712_1114027135687502_2566465943690010715_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=TpsJiCisux4AX_RRD4h&_nc_ht=scontent.ftbs6-2.fna&oh=d44f33f1f30df85c32d8d6d23573d091&oe=614F4E72"
    },
    {
        src: "https://scontent.ftbs6-2.fna.fbcdn.net/v/t1.15752-9/157405244_941543666583376_4796989040968234371_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=5P47EYOj2iAAX8Xx9Jx&_nc_ht=scontent.ftbs6-2.fna&oh=38b4a04a03c5ee623b70ca6b457be426&oe=614E6BA0 "
    },
    {
        src: "https://scontent.ftbs6-1.fna.fbcdn.net/v/t1.15752-9/s1080x2048/157150390_3887390737948255_1295925688494798983_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=wVrimJPuJPMAX_LH3He&tn=-yzuKrfPuRryWAQ7&_nc_ht=scontent.ftbs6-1.fna&oh=1142fba95d1cc5997dac9189d1fe8e0b&oe=614CAA0F"
    }
    
]
let Click = document.querySelector('.button');
let Container = document.querySelector('.slider-img');
let SliderIndex = 0;

function CreateIMG(url){
    let imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.style.width = "100%";
    imgElement.alt = 'Image'
    imgElement.style.borderRadius = '15px'
    return imgElement
}
function AppendChild(index){
    let Server = SliderData[index];
    Container.innerHTML = " "
    Container.appendChild(CreateIMG(Server.src))
}
Click.addEventListener('click', function(){
    if(SliderIndex == SliderData.length -1){
        SliderIndex = 0;
    }
    if( SliderIndex < SliderData.length -1){
        SliderIndex++;
        AppendChild(SliderIndex)
    }
})
AppendChild(SliderIndex)