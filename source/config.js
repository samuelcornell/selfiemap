var config = {
    style: 'mapbox://styles/samuelcornell/cm0d6ws5500sq01pwen6rcbov',
    accessToken: 'pk.eyJ1Ijoic2FtdWVsY29ybmVsbCIsImEiOiJjbGozc2lyNHIwYzllM3JtbGRlOXVsdHk3In0.XaZRC_y8cccqy6aFmfi8XQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    projection: 'globe',
    inset: true,
    theme: 'light',
    alignment: 'left',
    use3dTerrain: true,
    auto: false,
    title: 'The grave cost of social media misadventure in nature',
    subtitle: '',
    byline: 'By Samuel Cornell',
    footer: 'Source: News Reports. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template. <a href="https://www.jmir.org/2023/1/e47202/PDF">Selfie-Related Incidents: Narrative Review and Media Content Analysis</a>' ,
    chapters: [
        {
            id: 'title',
            alignment: 'left',
            title: 'An overview',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">People are dying and getting injured from social media misadventure all over the world and especially in aquatic locations.</span><br><br><span style="font-size:18px"><i>How does Australia compare?</i></span><br><br><i>Mapping Australian Social Media Misadventure</i> | By Samuel Cornell.<br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: [63.39769, 2.91579],
                zoom: 1.0,
                pitch: 0,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'world',
            alignment: 'right',
            title: 'Social media and selfie-related incidents are an issue worldwide',
            image: './images/bycountry.png',
            description: 'India has more selfie related incidents than any other country. The red dots show the large number of incidents that have taken place on the subcontinent, and, tragically, many involve drownings.',
            location: {
                center: [75.59855, 25.96531],
                zoom: 2.5,
                pitch: 45,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'world',
            alignment: 'right',
            title: 'Drowning and falling from heights, such as cliff edges or waterfalls, are the largest cause of death or injury in the natural environment',
            image: './images/incidentsworld.png',
            description: 'Interestingly, there has been almost double the number of falls compared to drowning.',
            location: {
                center: [75.59855, 25.96531],
                zoom: 2.5,
                pitch: 45,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'world_2',
            alignment: 'right',
            title: '',
            image: './images/worldcasesbyyear.png',
            description: 'Selfie and social media-related incidents show no signs of abating. Nevertheless, 2016 was an awful year for these types of incidents, particularly in India.',
            location: {
                center: [75.59855, 25.96531],
                zoom: 2.5,
                pitch: 45,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'Australia',
            alignment: 'left',
            title: 'However, Australia is no stranger to these novel way to die.',
            // image: './path/to/image/source.png',
            description: 'Let us take a look at Australia. Each dot ● represents an incident attributable to social media or selfie-related misadventure. There are 13 cases since 2018 but many more have gone unreported. The east coast of Australia has been the epicentre of these incidents. And there is a few notorious hotspots including the Figure Eight Pools, Diamond Bay Reserve and spots in South East Queensland.',
            location: {
                center: [132.00797, -25.41030],
                zoom: 3.56,
                pitch: 45.00,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'Australia_2',
            alignment: 'left',
            title: '',
            image: './images/australiatypeincident.png',
            description: 'Of note, in Australia, all of the selfie or social media relared incidents that have occurred in the natural environment have involved a fall, mostly around aquatic areas such as ocean cliffs or waterfalls.',
            location: {
                center: [132.00797, -25.41030],
                zoom: 3.56,
                pitch: 45.00,
                bearing: 0.
            },
            mapAnimation: 'flyTo',
            speed: 1.2,
            curve: 1.42,
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0
                },
                {
                    layer: 'heatmap',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'Albany',
            alignment: 'left',
            hidden: false,
            title: 'In 2018, a student fell to his death from a cliff while taking photos at a popular tourist attraction in Australia. The 20 year-old was reportedly posing for selfies with friends when he slipped off the 40-metre precipice at The Gap, near the port town of Albany.',
            image: './images/thegap.png',
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'Figure8Pools',
            alignment: 'right',
            hidden: false,
            title: 'Numerous injuries have occurred at the Figure Eight Pools in the Royal National Park of New South Wales over a number of years. In this case a 22 year-old international student was washed off the rocks and subsequently drowned.',
            image: './images/figure8.png',
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'socialmedia',
            alignment: 'centre',
            hidden: false,
            title: 'Driven by social media to get the best shot, people climb barriers, ignore warning signs of dangers, and even go to dangerous places for photos where people have already died or been seriously injured.',
            image: '',
            description: `
                <!-- TikTok Embed via iframe -->
                <div style="margin-top: 20px; text-align: center;">
                    <iframe src="https://www.tiktok.com/embed/7269981614652820744" width="325" height="574" frameborder="0" allowfullscreen></iframe>
                </div>
            `,
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'socialmedia',
            alignment: 'centre',
            hidden: false,
            title: 'Driven by social media to get the best shot, people climb barriers, ignore warning signs of dangers, and even go to dangerous places for photos where people have already died or been seriously injured.',
            image: '',
            description: `
                <!-- Instagram Embed via iframe -->
                <div style="margin-top: 20px; text-align: center;">
                    <iframe src="https://www.instagram.com/p/Cp7E6KjPZIf/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
                </div>
            `,
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },                                            
        {
            id: 'Vaucluse1',
            alignment: 'left',
            hidden: false,
            title: 'In 2019, a 27 year-old female died after a fall from the sea cliffs at Diamond Head Reserve in Vaucluse, Sydney.',
            image: './images/diamondbay.png',
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'influencers',
            alignment: 'centre',
            hidden: false,
            title: 'Influencers are known to promote dangerous but beautiful spots on social media, where there is then an influx of other visitors looking for the perfect photo. One influencer who I interviewed told me,',
            image: '',
            description: `
                <blockquote style="
                    font-size: 1.5em; 
                    font-style: italic; 
                    color: #333; 
                    border-left: 6px solid #ff2424; 
                    background-color: #f9f9f9; 
                    padding: 15px 20px; 
                    margin: 20px 0;
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
                    ">
                    "I think if you're – obviously, if you're a company that's organising a tour and you know that there's risk, I think you need to disclose that, disclose who is recommended on this, who is not. But I don't think it's a content creator's responsibility to do that. They're just there to entertain."
                </blockquote>
                
            `,
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },
        {
            id: 'influencers',
            alignment: 'centre',
            hidden: false,
            title: 'These travel and adventure influencers see themselves as "entertainers" not "educators" Thereby relinquishing themselves from responsibility over what can happen when people copy their content.',
            image: '',
            description: '',
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
        },             
        {
            id: 'Cape_Solander',
            alignment: 'right',
            hidden: false,
            title: 'In 2018, a 19 year-old male fell to his death from cliffs at Cape Solander near Sydney after taking selfie',
            image: './images/cape.png',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }
        ],
        onChapterExit: [
            {
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Grampians',
            alignment: 'left',
            hidden: false,
            title: 'In 2020, A 38 year-old female died after climbing over lookout barrier in The Grampians in Victoria to take a selfie',
            image: './images/grampians.png',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Landmanagers',
            alignment: 'centre',
            hidden: false,
            title: 'Land managers are struggling to keep up with the latest social media trends, and they find that warning signs and even barriers often do not stop visitors from going to dangerous places for their photos for social media',
            image: '',
            description: '',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },      
        {
            id: 'gowheretheywant',
            alignment: 'centre',
            hidden: false,
            title: 'But an issue that land managers face is that influencers "go where they want", as my interviews attest to.',
            image: '',
            description: `
                <blockquote style="
                    font-size: 1.5em; 
                    font-style: italic; 
                    color: #333; 
                    border-left: 6px solid #ff2424; 
                    background-color: #f9f9f9; 
                    padding: 15px 20px; 
                    margin: 20px 0;
                    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
                    ">
                    "It depends what the reason is that you're not meant to be in a place. If it's extremely dangerous, I would go and assess that risk myself, or if it's illegal or whatever it may be. It all comes down to each situation individually, and I can assess that based on my own morals. But I have as well entered into places that there's ‘keep out’ signs and things like that, too, for a photo"
                </blockquote>
                
            `,
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
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: .33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ]
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
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Paradise_Caves_Fall',
            alignment: 'left',
            hidden: false,
            title: 'An American tourist fell while taking photos and sustained injuries at Paradise Caves near Brisbane.',
            image: './images/sunshinebeach.png',
            description: '<a href="https://7news.com.au/news/qld/woman-falls-5m-from-cliff-of-paradise-caves-at-sunshine-beach-near-noosa-c-11521583">7 NEWS</a>',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Vaucluse_fall_injury',
            alignment: 'right',
            hidden: false,
            title: 'Another Vaucluse incident. A 15 year-old female falls and sustains injuries but survives.',
           /// image: './images/vaucluse2.jpg',
            description: '<a href="https://www.9news.com.au/national/teenage-girl-falls-from-deadly-selfie-spot-diamond-bay-reserve-sydney-vaucluse/5874baa1-fc17-4539-b694-12cb557bb3bb">9 News.</a>',
            location: {
                center: [151.282771, -33.862684], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Gibfalls1',
            alignment: 'left',
            hidden: false,
            title: 'A 19 year-old male fell from Gibralrar Falls in the Australian Capital Territory and died. The incident was attributed to Instagram photos.',
            image: './images/gibfalls.png',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmapa',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Brisbane',
            alignment: 'right',
            hidden: false,
            title: 'A 33 year-old female was found dead at the base of the popular Kangaroo Point cliffs in Brisbane and may have fallen after losing her balance while taking a selfie.',
            image: './images/kangaroopoint.png',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Gibfalls2',
            alignment: 'left',
            hidden: false,
            title: 'A 22 year-old male was found unconscious in the water and was unable to be revived. This incident came only one week after a previous incident at the same location.',
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
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Josephine',
            alignment: 'center',
            hidden: false,
            title: 'A three-person rescue of three young males trapped in the water at Josephine Falls',
            image: './images/josephine.png',
            description: '<a href="https://au.news.yahoo.com/aussies-fume-over-dangerous-mistake-at-deadly-waterfall-theres-always-one-064337596.html">Yahoo News.</a>',
            location: {
                center: [145.8569, -17.43713], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
        {
            id: 'Josephinevision',
            alignment: 'center',
            hidden: false,
            title: 'Vision',
            description: `
                <video id="josephinevision-video" width="100%">
                    <source src="./video/josephinevision.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p><a </a></p>
            `,
            location: {
                center: [145.8569, -17.43713], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: 'playJosephineVisionVideo',
            onChapterEnter: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                }
            ],
            onChapterExit: [
                {
                    layer: 'heatmap',
                    opacity: 0.33
                },
                {
                    callback: 'pauseJosephineVisionVideo'
                }
            ]
        },               
        {
            id: 'Cedar_Creek',
            alignment: 'right',
            hidden: false,
            title: 'A male aged 22 was airlifted to hospital after falling 10m from waterfall at Cedar Creek on the Gold Coast, even though the national park was closed due to severe storms. Cedar Creek Falls is a notorious location with much of its visitation driven by social media.',
            image: './images/cedarcreek.png',
            description: '<a href="https://7news.com.au/news/man-22-airlifted-to-hospital-after-falling-10m-from-waterfall-at-cedar-creek-on-the-gold-coast-c-13147411">7 News.</a>',
            location: {
                center: [152.77931, -27.32346], 	
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: .33
            }],
            onChapterExit: [{
                layer: 'heatmap',
                opacity: 0.33
            },
            {
                layer: 'heatmap',
                opacity: 0.33
            }]
        },
    ]
};
