var config = {
    style: 'mapbox://styles/samuelcornell/clj50va1p000d01pw42psa476',
    accessToken: 'pk.eyJ1Ijoic2FtdWVsY29ybmVsbCIsImEiOiJjbGozc2lyNHIwYzllM3JtbGRlOXVsdHk3In0.XaZRC_y8cccqy6aFmfi8XQ',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Mapping selfie-related incidents in Australia',
    subtitle: 'A map visualisation of all selfie-related deaths and injuries reported by the media in Australia',
    byline: 'By Samuel Cornell',
    footer: 'Source: News Reports. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'title-id',
            // title: 'An overview',
            // image: './path/to/image/source.png',
            description: '<span style="font-size:24px">People are dying and getting injured from taking selfies all over the world, and especially in aquatic locations.</span><br><br><span style="font-size:18px"><i>How does Australia compare?</i></span><br><br><i>Mapping Australian Selfiecides</i> | By Samuel Cornell.<br><span style = "color:darkgrey;">(Scroll &#x2913; to explore)</span>',
            location: {
                center: [134.62525, -25.19555],
                zoom: 3.67,
                pitch: 45.00,
                bearing: -2.40
            },
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
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Sydney cliff fatality: woman falls to death at popular selfie spot,',
            image: './images/heli.jpg',
            description: 'A 27 year old female died after a fall from the sea cliffs at Diamond Head Reserve in Vaucluse on August 17th 2019.',
            location: {
                center: [151.28649, -33.85356],
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'Cape_Solander',
            alignment: 'right',
            hidden: false,
            title: '19 y/o male falls to death from cliffs at Cape Solander after taking selfie',
            image: './images/cape.jpg',
            description: 'https://www.abc.net.au/news/2018-07-24/kurnell-cliff-fall-mormon-missionary-gavin-zimmerman/10029406',
            location: {
                center: [151.23158, -34.01690],
                    zoom: 15.97,
                    pitch: 45.00,
                    bearing: -40.00,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Grampians',
            alignment: 'left',
            hidden: false,
            title: '38 y/o female dies after climbing over lookout barrier to take a selfie',
            image: './images/grampians.jpg',
            description: 'https://www.theage.com.au/national/victoria/woman-dies-after-climbing-over-safety-barrier-at-popular-grampians-lookout-20201212-p56my9.html.',
            location: {
                center: [142.50361, -37.12310],
                zoom: 16.72,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'Second_Vaucluse',
            alignment: 'right',
            hidden: false,
            title: 'Second Selfie Death at Vaucluse',
            image: './images/vaucluse2.jpg',
            description: 'In 2020, a second person died at Diamond Bay Reserve in Vauculuse after falling from the cliffs while posing for a selfie. 21 y/o female.',
            location: {
                center: [151.28649, -33.85356],
                zoom: 14.90,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
