var config = {
    style: 'mapbox://styles/samuelcornell/clm76o0a500kg01r861lz1czm',
    accessToken: 'pk.eyJ1Ijoic2FtdWVsY29ybmVsbCIsImEiOiJjbGozc2lyNHIwYzllM3JtbGRlOXVsdHk3In0.XaZRC_y8cccqy6aFmfi8XQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    inset: true,
    theme: 'dark',
    alignment: 'left',
    use3dTerrain: true,
    auto: false,
    title: 'Visual ‘scrollytelling’: Mapping selfie-related incidents in Australia to identify the geographical problem for emergency services',
    subtitle: 'A map visualisation of selfie-related incidents reported by the media in Australia',
    byline: 'By Samuel Cornell',
    footer: 'Source: News Reports. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'title',
            alignment: 'left',
            title: 'An overview',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">People are dying and getting injured from taking selfies all over the world, and especially in aquatic locations.</span><br><br><span style="font-size:18px"><i>How does Australia compare?</i></span><br><br><i>Mapping Australian Selfie incidents</i> | By Samuel Cornell.<br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: [63.39769, 2.91579],
                zoom: 1.34,
                pitch: 6.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'selfies',
                    opacity: 0
                },
                {
                    layer: 'selfies',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'selfies',
                    opacity: 0
                },
                {
                    layer: 'selfies',
                    opacity: 0
                }
            ]
        },
        {
            id: 'Albany',
            alignment: 'left',
            hidden: false,
            title: 'In 2018, a student fell to his death from a cliff while taking photos at a popular tourist attraction in Australia.The 20 year-old was reportedly posing for selfies with friends when he slipped off the 40-metre precipice at The Gap, near the historic port town of Albany.',
            // image: './images/heli.jpg',
            description: '<a href="https://www.independent.co.uk/news/world/australasia/student-selfie-fall-death-cliff-gap-albany-australia-a8359546.html">The Independent</a>',
             location: {
                center: [117.89275, -35.11867],  	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00,
    },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'Figure8Pools',
            alignment: 'right',
            hidden: false,
            title: 'Numerous injurues have occurred at Figure 8 Pools over a number of years. In this case a 22 year old International student was washed off the rocks and subsequently drowned.',
            // image: './images/heli.jpg',
            description: '<a href="https://www.abc.net.au/news/2019-02-28/call-to-close-access-to-social-media-favourite-figure-8-pools/10853854">ABC News</a>',
             location: {
                center: [151.03861, -34.19481],  	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00,
    },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'Vaucluse1',
            alignment: 'left',
            hidden: false,
            title: 'in 2019, a 27 year old female died after a fall from the sea cliffs at Diamond Head Reserve in Vaucluse.',
            // image: './images/heli.jpg',
            description: '<a href="https://www.smh.com.au/national/nsw/woman-dies-at-selfie-spot-in-sydney-s-east-20190817-p52i3p.html">Sydney Morning Herald</a>',
             location: {
                center: [151.282771, -33.862684],
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00,
    },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'selfies',
                    opacity: 0.33
                },
                {
                    layer: 'selfies',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'Cape_Solander',
            alignment: 'right',
            hidden: false,
            title: 'In 2018, a 19 year old male fell to his death from cliffs at Cape Solander after taking selfie',
            // image: './images/cape.jpg',
            description: '<a href="https://www.abc.net.au/news/2018-07-24/kurnell-cliff-fall-mormon-missionary-gavin-zimmerman/10029406">ABC NEWS</a>',
            location: {
                center: [151.23158, -34.01690],
                zoom: 15.97,
                pitch: 45.00,
                bearing: -40.00,
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }
        ],
        onChapterExit: [
            {
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Grampians',
            alignment: 'left',
            hidden: false,
            title: 'In 2020, A 38 year old female died after climbing over lookout barrier in The Grampians to take a selfie',
            ///image: './images/grampians.jpg',
            description: '<a href="https://www.theage.com.au/national/victoria/woman-dies-after-climbing-over-safety-barrier-at-popular-grampians-lookout-20201212-p56my9.html">The Age</a>',
            location: {
                center: [142.410725, -37.239176],
                zoom: 16.72,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Second_Vaucluse',
            alignment: 'right',
            hidden: false,
            title: 'In 2020, a second female died Diamond Bay in Vaucluse after falling from the cliffs.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://www.telegraph.co.uk/news/2020/01/13/british-woman-dies-australia-falling-cliff-near-sydney/">The Telegraph.</a>', 
            location: {
                center: [151.282771, -33.862684],
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Paradise_Caves_Fall',
            alignment: 'left',
            hidden: false,
            title: 'Paradise Caves Fall. An American tourist falls while taking photos and sustains injuries.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://7news.com.au/news/qld/woman-falls-5m-from-cliff-of-paradise-caves-at-sunshine-beach-near-noosa-c-11521583">American tourist falls while taking picture from cliff at Paradise Caves at Sunshine Beach</a>',
            location: {
                center: [153.11678, -26.39232], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Vaucluse_fall_injury',
            alignment: 'right',
            hidden: false,
            title: 'Vaucluse fall - a notorious spot. A 15 year old female falls and sustains injuries but survives.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://www.9news.com.au/national/teenage-girl-falls-from-deadly-selfie-spot-diamond-bay-reserve-sydney-vaucluse/5874baa1-fc17-4539-b694-12cb557bb3bb">9 News.</a>',
            location: {
                center: [151.282771, -33.862684], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Gibfalls1',
            alignment: 'left',
            hidden: false,
            title: 'A 19 year old male fell from Gibralrar Falls in the ACT and died. Attributed to Instagram photos.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://7news.com.au/news/act/19-year-old-man-found-dead-at-gibraltar-falls-identified-c-9772754">7 News.</a>',
            location: {
                center: [148.9345944, -35.4868338], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Brisbane',
            alignment: 'right',
            hidden: false,
            title: 'A 33 year old female was found dead at the base of the popular Kangaroo Point cliffs in Brisbane may have fallen after losing her balance while taking a selfie.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://7news.com.au/news/qld/brazilian-woman-who-fell-from-brisbanes-kangaroo-point-cliffs-may-have-been-taking-selfie-c-3343974">7 News.</a>',
            location: {
                center: [153.03444, -27.47793], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        },
        {
            id: 'Gibfalls2',
            alignment: 'left',
            hidden: false,
            title: 'A 22 year old male was found unconscious in the water and was unable to be revived',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://7news.com.au/news/act/man-who-died-falling-from-gibraltar-falls-identified-as-22-year-old-patrick-prevett-c-9809482">7 News.</a>',
            location: {
                center: [148.9345944, -35.4868338], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'selfies',
                opacity: 0.33
            },
            {
                layer: 'selfies',
                opacity: 0.33
            }]
        }
    ]
};
